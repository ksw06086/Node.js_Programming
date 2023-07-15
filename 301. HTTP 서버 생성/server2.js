// http 서버 생성(실행, 만들기)
const http = require('http');
const fs = require('fs').promises;

// 서버는 비동기임
const server = http.createServer(async (req, res) => {
    try {
        // 사파리의 경우 해당 태그가 문자열인지 html 태그인지 모르는 경우가 많음 그래서 추가해주어야함
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        const data = await fs.readFile('./server2.html');
        res.end(data);
    } catch (error) {
        console.error(error);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(error.message);
    }
})
    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', (err) => {
    console.error(err);
})