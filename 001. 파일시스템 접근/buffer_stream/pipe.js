const fs = require('fs');

const readStream = fs.createReadStream('./read_stream.txt', { highWaterMark : 16 });
const writeStream = fs.createWriteStream('./wirteStream2.txt');
// 16바이트씩 조금씩 writeStream에 들어가는 것(파일 복사)
readStream.pipe(writeStream);