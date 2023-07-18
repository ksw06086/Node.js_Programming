# express 서버
- 400, 404, 500 등의 에러가 미리 구현되어 있음 따로 지정 안해주어도 됨

# process.env.PORT
- 프로세스에 세팅된 PORT 번호 가져옴

# nodemon
- 개발할 때 보통 nodemon 서버를 많이 씀
- 실행 시 몇줄이 더 실행이 됨
- 장점 : 항상 파일에 수정이 있으면 수정 후 재실행을 해주어야 하는데 따로 재실행을 해주지 않아도 nodemon이 알아서 파일 바뀌었는지 체크하고 재실행해줌

# express.sendFile(html파일)
- 파일 내용 가져오기

# res.send()
- res.status(200).send() 즉, status(200)이 생략되어있음

# res.setHeader( { 'Content-Type': 'application/json' })
- res.writeHeader()와 같은 기능 status만 없음

# res.json()은 리턴이 아니고 응답을 보낼 뿐이어서 다음 코드도 실행이 됨