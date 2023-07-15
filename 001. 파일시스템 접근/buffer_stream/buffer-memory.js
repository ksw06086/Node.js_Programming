// 버퍼 통째로 옮기는 방식 -> 메모리 사용량이 얼마인지 볼 것
const fs = require('fs');
// 사용하고 있는 메모리 확인 - 버퍼일 때
console.log('before:', process.memoryUsage().rss);

const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);
console.log('buffer: ', process.memoryUsage().rss);
// before: 31666176
// buffer:  1032388608