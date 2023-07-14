// 파일 가져오기
const fs = require('fs').promises;

/* fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e> => 컴퓨터가 다루는 언어 byte화 한 것
    console.log(data.toString()); // 우리가 사용하는 언어로 바꿔줘야함
}); */

// promiss로 바꿈(여기서는 await sync를 사용가능)
fs.readFile('./readme.txt')
    .then((data) => {
        // Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e => 컴퓨터가 다루는 언어 byte화 한 것
        console.log(data); 
        // 우리가 사용하는 언어로 바꿔줘야함
        console.log(data.toString()); 
    })
    .catch((err) => {
        throw err;
    });