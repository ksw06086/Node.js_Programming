# npm 기타 명령어
- npm CLI documentation에 다 나와있음

# 많이 쓰는 명령어
1. npm outdated : 어떤 패키지에 기능 변화가 생겼는지 알 수 있음
+ 현재 사용하는 패키지가 1.19.0인데 현재 2.0.1 버전이 나왔다.
+ Current(현재 버전), Wanted(내가 올려줄 수 있는 버전), Latest(최신 버전)
2. npm uninstall 패키지명 : 패키지 삭제(npm rm 패키지명으로도 가능)
3. npm search 검색어 : 검색어로 원하는 패키지 찾을 수 있음
4. npm info 패키지명 : 정확한 패키지를 검색하면 해당 패키지의 최신 버전, 지금까지 버전 몇번 올라갔는지, 설명, keyword(검색시), 설치 파일, 포함된 dependencies 이름들, 관리자, latest/next 버전
5. npm adduser : npm에 로그인하기 위한 명령어(회원가입을 미리 해두어야 함)
- npm 배포를 하기 위해서는 회원가입해서 로그인 해야 함
6. npm whoami : 로그인한 자가 누구인지 이름 출력
7. npm logout : 로그아웃
8. npm version 버전 : package.json의 버전을 올림
- npm version patch : 내 package.json의 version의 patch 부분을 올리는 것
- 이렇게 명령어를 쓰면 git commit이 되고 git에 태그까지 붙여줌
9. npm deprecate [패키지명][버전] [메시지] : 패키지를 설치할 때 경고 메시지를 띄우게 함(오류가 있는 패키지에 적용)
- 내가 만든 패키지 버전에 버그가 발견되었다면 그걸 사용하려고 할 때 에러 메시지를 띄워서 안내를 할 수 있음
10. npm publish : 자신이 만든 패키지 배포
11. npm unpublish --force : 자신이 만든 패키지 배포 중단(배포 72시간 내에만 가능)
12. npm ls [패키지명] : 내 프로젝트가 어떤 패키지를 사용하고 있는지 확인하고 싶을 때
- npm ll [패키지명] - ls보다 더 자세한 정보 확인이 가능함
- package.json 안에있는 패키지보다 node_modules에 있는 패키지 중 포함되어 있는지 확인하기 위해 더 많이 사용됨
