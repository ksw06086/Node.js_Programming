// 버퍼 통째로 옮기는 방식 -> 메모리 사용량이 얼마인지 볼 것
const fs = require('fs');
// 사용하고 있는 메모리 확인 - 스트림일 때
console.log('before:', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('buffer: ', process.memoryUsage().rss);
});

// before: 31674368
// buffer:  50999296