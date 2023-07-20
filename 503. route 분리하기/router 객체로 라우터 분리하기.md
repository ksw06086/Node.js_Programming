# express.Router
1. [파일][플러그인]
- const indexRouter = require('./routes');
- const userRouter = require('./routes/user');
2. [파일][생성]
- /routes/ - index.js(/), user.js(/user)
- 관련된 라우터끼리 묶음
3. [라우터][사용] 
- app.use('/', indexRouter);
- app.use('/user', userRouter);

# 라우트 매개변수
1. 라우트 매개변수
- /user/:id => req.params.id
2. 쿼리
- /user/123?limit=5&skip=10 => req.query // { limit: 5, skip: 10 }

# 주소는 같지만 메서드가 다른 코드가 있을 때
- ex> router.get('/abc', (req, res) => {})
- => router.router('/abc').get(...).post(...);

# req
- req.app : app 객체에 접근(req.app.get('port')와 같은 식으로 사용)
- req.body : body-parser 미들웨어가 만드는 요청의 본문 해석 객체
- req.cookies : cookie-parser 미들웨어가 만드는 요청의 쿠키 해석 객체
- req.ip : 요청의 ip 주소
- req.params : 라우트 매개변수에 대한 정보가 담긴 객체
- req.query : 쿼리스트링에 대한 정보가 담긴 객체
- req.signedCookies : 서명된 쿠키들은 req.cookies 대신 여기에 담겨있음
- req.get(헤더 이름) : 헤더의 값을 가져오고 싶을 때 사용하는 메서드

# res
- res.app : req.app 처럼 app 객체에 접근
- res.cookie(키, 값, 옵션) : 쿠키 설정 메서드
- res.clearCookie(키, 값, 옵션) : 쿠키 제거 메서드
- res.set(헤더, 값) / res.setHeader(헤더, 값) : 응답의 헤더를 설정
- res.status(코드) : 응답 시의 HTTP 상태 코드를 지정
* * 딱 한번만 써야하는 메서드 * 
- res.end() : 데이터 없이 응답 보냄
- res.json(JSON) : JSON 형식의 응답 보냄
- res.redirect(주소) : 리다이렉트할 주소와 함께 응답 보냄(다른 페이지 보냄)
- res.render(뷰, 데이터) : 다음 절에서 다룰 템플릿 엔진을 렌더링해서 응답할 때 사용
- res.send(데이터) : 데이터와 함께 응답 보냄.
- res.sendFile(경로) : 경로에 위치한 파일을 응답

