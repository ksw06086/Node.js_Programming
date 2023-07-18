const express = require('express'); // 안에 보면 http 서버를 쓰고 있음
const path = require('path');

const app = express();

// process.env.PORT : 해당 프로세스의 포트번호 불러옴
// 포트 변경하고 싶을 때 -> SET PORT=포트번호
// (위험 - 앞으로 계속 process.env.PORT는 해당 포트번호가 됨, 다른 프로그램 실행 시 문제 발생 가능성 큼)
app.set('port', process.env.PORT || 3000); // 서버에 포트라는 속성의 값을 3000으로 넣음

// 미들웨어 사용
// 에러처리 미들웨어시 매개변수가 4개여야하는 조건이 충족되어야함
app.use((req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요.");
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/about', (req, res) => {
    res.send('hello about');
});

// :변수 - 라우트 매개변수(= 와일드 카드), req.params.변수명 으로 사용
app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

// 여기서 가져와서 사용함(3000 포트를 의미)
app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});