# CMD MySQL 실행
- mysql -uroot -p -> 패스워드입력

# 데이터베이스 생성
- CREATE SCHEMA 'nodejs' DEFAULT CHARACTER SET utf8;

# ID 자동 증가
- AUTO_INCREMENT

# 날짜 컬럼 설정
- created_at datetime not null default now()

# MySQL 자료형
- INT(크기)(실수는 FLOAT, DOUBLE), VARCHAR, TEXT(긴 문자열), DATETIME(날짜형), TINYINT(-128~127값, 0/1로 많이 사용함)

# MySQL 제약조건
- NOT NULL : 널값 없음 
- AUTO_INCREMENT: 값 1부터 자동 증가
- UNSIGNED : 0과 양수만 허용
- ZEROFILL : 숫자 자리수 고정일 경우 빈자리에 0을 넣음
- DEFAULT now() : 날짜 컬럼의 기본값을 현재 시간으로

# MySQL 컬럼 옵션
- INDEX 인덱스명 (인덱스컬럼명) : 검색 성능이 빨라짐
+ UNIQUE INDEX 인덱스명 (인덱스컬럼명) : 유니크로 할 경우 index 꼭 붙여주기
- CONSTRAINT 제약조건명 : 제약조건에 이름 주기
+ 에러날 때 가독성이 좋아짐
- FOREIGN KEY(컬럼명) REFERENCES 테이블명(컬럼명) : 외래키 설정
- ON DELETE CASCADE : 같이 지울 것이다.
- ON UPDATE CASCADE : 같이 업데이트 할 것이다.
+ CASCADE : 같이 변경, SET NULL : NULL로 바꿈, NO ACTION : 변경 없음 그대로

- COMMENT = '설명' : 테이블 설명
- DEFAULT CHARSET(character set)=utf8mb4(mb4 : 이모티콘까지 가능, 워크벤치에서 utf8mb4_general_ci 선택이 무난)
- ENGINE = InnoDB : 엔진 설정
+ InnoDB : 트랜잭션 처리 필요, 대용량의 데이터 다루는 부분일 경우 효율적
+ (장점 : CRUD 속도가 MyISAM보다 빠름)
+ (단점 : 풀텍스트 인덱스를 사용 못해서 MyISAM보다 select 속도가 느림)
+ MyISAM : 트랜잭션 처리 필요 X, Read only 기능이 많은 서비스 경우 효율적
+ (장점 : 풀텍스트 인덱스를 사용해 select count(*) 명령시 빠르고, Select 명령시에도 빠르다.)
+ (단점 : CRUD 속도가 row 수가 커질수록 느림)

# DB 관계 잡을 때 원칙(팁)
- 정규화의 원칙을 살펴보면 됨

# 대댓글 zerocho 방식
- 댓글에 넣고 대댓글일 경우 부모 댓글 아이디 넣어둠
- 프론트에서 부모 아이디 보고 조립함


