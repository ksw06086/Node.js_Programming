const fs = require('fs');
const writeStream = fs.createWriteStream('./writeStream.txt');

// write는 write, end, finish가 있음
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

// 쓸때도 나눠서 보낼 수 있음
writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();