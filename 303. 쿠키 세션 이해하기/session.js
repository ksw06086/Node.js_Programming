const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const qs = require('querystring');

const parseCookies = (cookies = '') => 
    cookies
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session = {}; // 데이터 저장용

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        // 5분동안 세션 사용
        expires.setTime(expires.getTime() + 5);
        // uniqueInt : 우리가 사용할 key, 중복값이 없어야함(겹치면 내가 로그인했는데 다른 사람걸로 로그인될 수 있음)
        const uniqueInt = Date.now();
        session[uniqueInt] = {
            name,
            expires,
        };
        // 
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    // 세션쿠키가 존재하고, 만료 기간이 지나지 않았다면
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요.`);
    } else {
        try{
            const data = await fs.readFile(path.join(__dirname, 'cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }
})
    .listen(8084, () => {
        console.log('8084번 포트 서버가 대기중입니다.');
    });