# mongoDB( NoSQL 중 가장 많이 다룸 )
- Join: 관계가 있는 테이블끼리 데이터 합치는 기능(몽고디비 aggregate로 흉내가능, 몽구스 사용)
- 빅데이터, 메시징(서로의 메시지, Log 쌓는 것), 세션 관리 등(비정형 데이터)에는 몽고디비가 좋음

# SQL, NoSQL 차이
[SQL]
- 컬럼 형식 지정, 관계 지정
+ 규칙에 맞게 데이터 입력
+ 테이블 간 JOIN(include 있었음)
+ 안전성(체크하는게 많음), 일관성(엑셀 표 형식 맞춤)
+ 용어(테이블, 로우, 컬럼)
[NoSQL]
- 자바스크립트의 JSON에서 몇가지 자료형을 가지고 있는 형태
+ 자유롭게 데이터 입력
+ 컬렉션 간 JOIN(여기엔 include 없음)
+ 확장성, 가용성
+ 용어(컬렉션, 다큐먼트, 필드)
