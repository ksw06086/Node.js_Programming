# 사용자 설정 방법
- use admin
- db.createUser({ user: '이름', pwd: '비밀번호', roles: ['root'] })

# 실행 방법
1. mongoDB 서버 실행
-  C:\Program Files\MongoDB\Server\6.0\bin -> 오른쪽 마우스 클릭 -> 터미널에서 열기(쉘 열기) -> ./mongod --ipv6 --auth 입력
2. mongoDB 쿼리 작성 터미널 실행
- cmd -> cd C:\Users\Happy\Downloads\mongosh-1.10.1-win32-x64\mongosh-1.10.1-win32-x64\bin -> mongosh admin -u root -p 1234 실행

# DB 생성
- use 데이터베이스명
- show dbs - 지금 0으로 나옴(데이터가 들어가야 db가 생성되는 것임)


