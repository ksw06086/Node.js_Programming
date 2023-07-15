const fs = require('fs');
const zlib = require('zlib'); // 압축가능하게 해줌

const readStream = fs.createReadStream('./read_stream.txt', { highWaterMark : 16 });
const zlibStream = fs.createGzipStream();
const writeStream = fs.createWriteStream('./wirteStream2.txt');
// 16바이트씩 조금씩 writeStream에 들어가는 것(파일 복사)
// 파이프는 스트림 지원하는 애들만 가능함
readStream.pipe(zlibStream).pipe(writeStream);