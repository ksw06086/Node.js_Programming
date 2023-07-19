const express = require('express'); // 안에 보면 http 서버를 쓰고 있음
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

// process.env.PORT : 해당 프로세스의 포트번호 불러옴
// 포트 변경하고 싶을 때 -> SET PORT=포트번호
// (위험 - 앞으로 계속 process.env.PORT는 해당 포트번호가 됨, 다른 프로그램 실행 시 문제 발생 가능성 큼)
app.set('port', process.env.PORT || 3000); // 서버에 포트라는 속성의 값을 3000으로 넣음

app.use(morgan('dev')); // morgan
app.use('/', express.static(__dirname + 'public')); // static
app.use(cookieParser('zerochopassword')); // cookie-parser
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'zerochopassword',
    cookie: {
        httpOnly: true,
    },
    name: 'connect.sid',
}));
// body-parser : restServer.js의 body 변수 부분이 편해짐
// 이걸 쓰면 알아서 데이터가 parse가 됨, 그래서 바로 req.body.name을 사용가능
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// 미들웨어 사용
app.use((req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요.");
    next();
}, (req, res, next) => {
    try {
        throw new Error("에러야~~~");
    } catch (error) {
        next(error);
    }
})

app.get('/', (req, res) => {
    req.session
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

// 에러처리 미들웨어로 하는 것
// 에러처리 미들웨어시 매개변수가 4개여야하는 조건이 충족되어야함
app.use((err, req, res, next) => {
    console.error(err);
    res.send("에러났지롱, 근데 안알려주지롱");
})

// 여기서 가져와서 사용함(3000 포트를 의미)
app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});