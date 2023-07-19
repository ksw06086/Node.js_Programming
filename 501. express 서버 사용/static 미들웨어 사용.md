# static
- 정적파일을 url을 통해서 찾아서 보여주고자 할 때 사용함(index.html, index.png 등 사진이나 페이지를 그냥 보여주려고 할 때)
- REST 서버시 readFile했던 것 정적 파일 보내주는 부분이 static으로 빠졌다고 보면 됨
- 파일을 찾으면 next 안함, 못찾으면 next 해서 다음을 실행함
- 보통 static은 morgan바로 아래에서 함
- ex> app.use('요청 경로', express.static('실제 경로'));
+ app.use('/', express.static(__dirname, 'public'));
+ localhost:3000/zerocho.html          프로젝트폴더/public/zerocho.html
+ localhost:3000/hello.html            프로젝트폴더/public/hello.html
+ ㄴ 보안에 좋음(서버가 어떤 구조로 되어있는지 외부에서 알 수 없음)