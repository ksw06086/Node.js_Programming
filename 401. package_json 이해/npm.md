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

# node modules
- 다운받은 package들 모음집
- node modules 폴더가 양이 상당하기 때문에 배포할 때에는 삭제 후 배포 -> 배포된 서버에서 npm i로 dependencies한 것들 다운받게 하는 방향으로 많이 함
- 배포하는 서버 중 폐쇄망이 있는데 그런 곳은 npm i 명령어를 사용 못하므로 삭제 안하고 함께 배포함

# npm i -g rimraf(rimraf) -> npm i -D rimraf(npx rimraf)
- -g : 전역설치(dependencies에 기록이 안됨, 명령어로 써줄 수 있는 친구들)
- rimraf : 이 명령어는 해당 폴더/파일 지우는 명령어
- 전역설치의 단점 : dependence에 기록이 안되니 프로젝트를 관리하는 사람이 다른 사람으로 넘어갔을 때 package.json만 보고 rimraf가 없으니 사용되고 있는지 모름 
* 그래서 요즘은 -D로 개발용으로 설치해서 보여주게 한 후, npx를 명령어 앞에 적어주면 가능
