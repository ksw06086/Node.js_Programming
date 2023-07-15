// 버퍼로 바꾸기
const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

// 버퍼 배열로 만들고 붙여서 출력
const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
console.log(Buffer.concat(array).toString());

// 빈 버퍼 5개 생성
console.log(Buffer.alloc(5));

// 우리가 fs에서 readme.txt 불러온게 버퍼 방식 한번에 불러오는 것