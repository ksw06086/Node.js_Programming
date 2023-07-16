const http = require('http');
const fs = require('fs');
const path = require('path');

const users = {}; // 데이터 저장용(map 형태가 됨)

http.createServer(async (req, res) => {
    try {
        // GET Mapping
        if(req.method == 'GET'){
            if(req.url === '/') { // GetMapping('/');
                const data = await fs.readFile(path.join(__dirname, 'restFront.html'));
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile(path.join(__dirname, 'about.html'));
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/users') {
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                return JSON.stringify(users);
            }
            // 위에 있는 path가 아닐 경우
            try {
                const data = await fs.readFile(path.join(__dirname, req.url)); // 이걸로 해당 패스로 이동함으로 다시금 restServe.js의 try가 실행됨
                return res.end(data);
            } catch (error) {
                // 주소에 해당하는 라우트를 못찾았다는 404 Not Found error 발생
            }
        } else if(req.method === 'POST') { // PostMapping
            if(req.url === '/user') {
                let body = '';
                // 등록하려는 이름을 stream 형식으로 가져옴(.on을 사용함)
                req.on('data', (data) => { 
                    body += data;
                });
                // 요청 body를 다 받은 후 실행
                return req.on('end', () => {
                    console.log('POST 본문(body): ', body);
                    const { name } = JSON.parse(body); // JSON 형태로 바꿔서 키 이름을 변수 이름으로 넣기
                    const id = Date.now(); // users map의 키를 현재시간으로 함
                    users[id] = name;
                    // 201번 : 생성됨에 의미
                    res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('등록 성공');
                });
            }
        } else if(req.method === 'PUT') { // PutMapping
            if(req.url === '/user/') {
                // 쿼터스트링에 있는 key값 가져오기
                const key = req.url.split('/')[2]; 
                // POST로 가져온 data Stream으로 가져와서 넣기
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body) :', body);
                    users[key] = JSON.parse(body).name; // JSON 형태로 바꾸고 key가 name인 값 가져오기
                    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
                    return res.end(JSON.stringify(users)); // JSON을 문자열로 바꾸어 전송
                });
            } 
        } else if(req.method === 'DELETE') { // DeleteMapping
            if(req.url === '/user/') {
                const key = url.split('/')[2];
                delete users[key]; // 해당 map의 key에 해당하는 것 삭제
                res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
        }
        // 요청된 method가 없다면 404 에러 출력
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    } catch (error) {
        // 요청 받는 도중 에러가 났다면 메소드 내에서 에러가 발생했기에 500 에러 보내줌
        console.error(error);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8082, () => {
        // 서버 열렸을 때 나오는 메서드
        console.log('8082번 포트에서 서버 대기 중입니다.');
    });
    