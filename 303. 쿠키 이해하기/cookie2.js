const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');
const path = require('path');

// cookie를 객체로 바꾸어줌 => { mycookie: 'test' }
const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    // 주소가 login으로 시작하는 경우
    if (req.url.startsWith("/login")) {
        // 쿼리스트링에서 name 추출
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        // 쿠키 유효 시간을 현재시간 + 5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        // 302 : redirect임 곧 /로 다시 보내줌
        // name이 한글이라서 encodeURIComponent로 해서 넣어줘야 함 안하면 이상한거 쿠키에 들어갔다고 에러뜸
        // Expires : 만료 시간, 이거 안 넣으면 세션쿠키가 되어서 브라우저를 끄기 전까지 계속 저장되어있음
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    // name이라는 쿠키가 있는 경우
    } else if(cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`${cookies.name}님 안녕하세요`);
    } else { // 쿠키가 아예 없는 경우
        try {
            const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(error.message);
        }
    }
})
    .listen(8084, () => {
        console.log('8084번 포트 서버가 대기중입니다.');
    });