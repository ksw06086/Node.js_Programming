# express 예전사람, 요즘사람 구분법
- body-parser를 쓴다 안쓴다

# morgan
- app.use(morgan('dev')); : 개발 시 켜놓음
+ console에 한 줄이 추가됨
+ 요청방식, 응답번호, 걸린 시간 보여줌
- app.use(morgan('combined')); : 배포 시 켜놓음
+ ip, 시간, 요청, 바이트, 브라우저까지 알 수 있음

# cookie-parser(app.use(cookieParser());)
* 이전에 쿠키 문자열을 객체로 만들기 위해서 함수를 만들었었음
* 쿠키 넣을 때도 Set-Cookie로 넣었었음
- 사용 시 req.cookies이면 자동으로 객체화 되어있음
- set : res.cookie / remove : res.clearCookie
- signedCookies
+ cookieParser('암호')를 넣으면 쿠키를 암호화할 수 있음
- req.cookies; // { mycookie: 'test' }
  req.signedCookies;
  // 'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
  res.cookie('name', encodeURIComponent(name), { // Set
      expires: new Date(),
      httpOnly: true,
      path: '/',
  })
  res.clearCookie('name', encodeURIComponent(name), { // Remove
      httpOnly: true,
      path: '/',
  })


# body-parser
* 3년 전까지는 패키지를 설치 해주어야하는데 현재는 express에 들어있음
- setting 
+ app.use(express.json()); - json 보낼 때
+ app.use(express.urlencoded({ extended : true })); - form 보낼 때
+ + 이미지 파일을 보낼 때는 적용이 안되어서 multer?를 사용함
+ + true : qs, false : querystring / qs가 querystring보다 더 강력함
- restServer.js의 body 변수 부분이 편해짐
- 이걸 쓰면 알아서 데이터가 parse가 됨, 그래서 바로 req.body.name을 사용가능
- // POST로 가져온 data Stream으로 가져와서 넣기가 필요 없어짐
  let body = '';
  req.on('data', (data) => {
      body += data;
  });
  return req.on('end', () => {
      console.log('PUT 본문(Body) :', body);
      users[key] = JSON.parse(body).name;
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
      return res.end(JSON.stringify(users));
  });

