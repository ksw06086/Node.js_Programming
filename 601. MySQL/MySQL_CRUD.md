# Insert
- insert into nodejs.users (name, age, married, comment)
  Values ('zero', 24, 0, '자기소개1');
+ id 없는 이유 => auto_increment이기 때문에
+ created_at => default가 있기 때문에

# Limit : 여러명 중에 몇개 보여줄 것인가?
- limit 1 : 맨 위 1명만 보여줌

# Offset : 앞의 로우들 스킵 가능
- offset 2 : 세번째 것부터 찾음 
