const fs = require('fs');
const readStream = fs.createReadStream('./readme_stream.txt', { highWaterMark: 16 });
// createReadStream이 한번에 읽는 범위가 64KB임 그런데 우리는 162바이트여서 한번에 읽어버린 것
// 그래서 눈으로 확인하고 싶으면 highWaterMark에 바이트 값을 주어서 임의로 쪼개지개 해야함

const data = [];

// 스트림은 비동기라서 비동기는 모두 에러처리 해주어야함
// 가져온다.
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
});
// 다됐다.
readStream.on('end', () => {
    console.log('end:', Buffer.concat(data).toString());
});
readStream.on('error',(err) => {
    console.log('error:', err);
});

// 스트림의 장점
// ex) 서버 사용 가능 메모리 80바이트 / 다운받을 버퍼 162바이트
// 162바이트를 모두 읽지 못함 -> 16바이트로 쪼개서 16바이트 메모리만 사용하면서 가져올 수 있음
// 동영상 올리거나 할 때 필요한 부분임

