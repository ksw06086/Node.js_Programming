// 파일 복사(이건 압축 방법 사용 못함)
const fs = require('fs').promises;

fs.copyFile('./readme.txt', './writeme.txt')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((err) => {
        console.error(err);
    });