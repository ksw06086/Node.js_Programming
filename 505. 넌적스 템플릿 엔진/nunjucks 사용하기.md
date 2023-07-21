# Numjucks 사용하기
- app.set('view engine', 'html');
+ html 확장자를 가진 파일들 읽기(확장자를 .njk라고 할 수 있음)
- nunjucks.configure('views', {
    express: app,
    watch: true,
  });
+ views 폴더가 넌적스 파일의 위치가 됨

# Nunjucks에 변수 넣어주기
- router.get('/', function(req, res, next) {
    // views 폴더의 index.pug를 찾아서 변수 넣어주기
    1. res.render('index', { title: 'Express' });
    2. res.locals.title = 'Express'; res.render('index');
  })
- [사용법]
1. 변수 사용법
- <title>{{title}}</title>

# Nunjucks 파일 안에서 변수 사용
1. html 내 변수 선언
- {% set node = 'Node.js' %}
2. html태그 들어간 문자열의 태그를 인식/인식X 방법
[ex][인식]  <p>{{'<strong>이스케이프하지 않음</strong>' | safe}}</p>
[ex][인식X] <p>{{'<strong>이스케이프</strong>'}}</p>

# Nunjucks 반복문
1. {% for 변수명 in (객체|리스트) %} ... {{변수명}} ... {% endfor %}
+ 리스트 : fruit , 객체 : fruit.key명
+ {% set fruit = ['사과', '배', ... ] %} => 리스트
2. {% for 변수명 in (객체|리스트) %} ... {{loop.index}} ... {% endfor %}
+ loop.index로 몇 번째 원소인지 알 수 있음

# Nunjucks 조건문
1. {% if 조건문 %} ... {% elif 조건문 %} ... {% else %} ... {% endif %}

# Nunjucks include
- include 포함하고자 하는 파일명(확장자 뺌)
+ ex> {% include "header.html" %}

# extends와 block
- block : 공통된 페이지에서 바뀌는 부분 영역에 이름을 지어줌
          (다른 페이지에 공통된 영역 이름이 있다면 해당 영역에 넣어줌)
- extends : 다른 페이지의 내용을 가져옴(include와 다르게 block이 적용됨)
[EX]
* layout.html
-   <header>헤더입니다.</header>
-   {% block content %}
    {% endblock %}
-   <footer>푸터입니다.</footer>
-   {% block script %}
    {% endblock %}
* body.html
-   {% extends "layout.html" %}
-   {% block content %}
    <main><p> 내용입니다. </p></main>
    {% endblock %}
-   {% block script %}
    <script src='/main.js'></script>
    {% endblock %}
        
* 최종 body.html
-   <header>헤더입니다.</header>
-   <main><p> 내용입니다. </p></main>
-   <footer>푸터입니다.</footer>
-   <script src='/main.js'></script>



