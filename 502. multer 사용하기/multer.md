# multer
- multer가 미들웨어는 아니고 multer 함수를 호출하면 그 안에 4가지 미들웨어가 있음
1. multer 함수 옵션
* 자주 쓰이는 옵션
- storage : 업로드 파일 어디에 저장할 것인지 선택(disk, memory(드뭄), s3(s3), 클라우드(googleCloudStorage)) 
+ destination : 어디에 저장
+ filename : 파일이름 바꿈
+ done(인수1, 인수2) 함수 : 인수1 - error낼 경우 값 주고, 아니면 null 
                           인수2 - 값 전달
- limits : 파일 사이즈 설정 등 제한 둘 수 있음
+ fileSize : 파일 사이즈 설정

2. multer 내 미들웨어
- (1) .single : 1개의 파일만 업로드할 때
+ req.file에 업로드된 정보들이 들어있음
- (2) .array : 여러개의 파일을 업로드할 때
+ req.files에 업로드된 정보들이 배열로 들어있음
- (3) .fields( { name : '파일태그name' }, ...) : name이 다른 여러개 이미지 업로드 할 때
+ req.files.파일태그name에 업로드된 정보들이 들어있음
- (4) .none() : 이미지가 없는데 폼만 multipart/form-data일 때 -> 보낼 때도 formData로 보내줄 때 
+ 파일이 없으니 req.file은 없고, req.body로만 가져올 것임

