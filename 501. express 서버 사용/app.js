const express = require('express'); // 안에 보면 http 서버를 쓰고 있음

const app = express();

// process.env.PORT : 해당 프로세스의 포트번호 불러옴
// 포트 변경하고 싶을 때 -> SET PORT=포트번호
// (위험 - 앞으로 계속 process.env.PORT는 해당 포트번호가 됨, 다른 프로그램 실행 시 문제 발생 가능성 큼)
app.set('port', process.env.PORT || 3000); // 서버에 포트라는 속성의 값을 3000으로 넣음

app.get('/', (req, res) => {
    res.send('hello express');
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/about', (req, res) => {
    res.send('hello about');
});

// 여기서 가져와서 사용함(3000 포트를 의미)
app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});