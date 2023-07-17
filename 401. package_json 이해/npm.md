# npm(Node Package Manager)
- 다른 사람이 만들어둔 코드를 npm이라는 것을 설치하여 적용할 수 있음
- 남이 만들어둔 서버, 서버 구조를 미리 갖춰놓은 걸 다운받으면 편하게 코딩할 수 있음 
- 남들이 서버를 만들어놨는데 우리가 처음부터 만들 필요는 없음 -> 쇼핑하듯이 원하는 서버 찾으면 됨
- npm에 현재 100만개가 넘는 라이브러리가 준비되어있음(모든 언어 통틀어 가장 많음)

# package.json
- npm에서 다운 받은 애들을 기록하는 곳
- node 프로젝트 할 때에는 npm 거의 많이 사용함
- 시작 전 만들고 시작해야하는 파일

# npm init(package.json 생성)
- 설정해주는 부분
- packaage name : 이름 설정
- version : 자동으로 나의 버전이 들어있음
- description : 패키지 설명
- entry point : 버전 처음 진입 파일(보통 index.js로 많이 함)
- test command, git repository, keywords 넘어감
- author : 나의 아이디나 이름
- license : (ISC) MIT를 오픈소스로 많이 함
- scripts : 우리가 터미널에 치는 명령어를 간단하게 명령을 지어준 것
+ npm run 명령어 : 해당 명령어 실행(start는 run 없어도 그냥 실행됨)
+ node index : index.js 실행

# npm i 명령어(설치 명령어)
1. express(남이 미리 만들어둔 서버) 설치 : npm i express
2. dependencies로 package.json에 포함됨 -> 6장에서 더 설명
3. npm i -D 패키지명 : dependencies가 아닌 devDependencies에 추가됨
   (devDependencies는 개발할 때만 쓰이는 패키지를 저장해둠)


