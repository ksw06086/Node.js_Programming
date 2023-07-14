// 파일 생성
const fs = require('fs').promises;

// promiss로 바꿈(여기서는 await sync를 사용가능)
fs.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        throw err;
    });

// promiss(.then), callback((err, data)=>{})함수 는 비동기라 순서대로 실행이 안된다. 순서대로 해주기 위한 방법
// 1. 비동기를 유지한채로 순서대로 -> 이게 좋음
// 2. 함수를 동기식으로 실행하게 만듦
// 서버 시작하면 모든 사용자가 해야하기 때문에 비동기 / 그 전에 초기화 작업은 동기

