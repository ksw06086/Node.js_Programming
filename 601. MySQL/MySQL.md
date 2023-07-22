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

