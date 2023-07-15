const fs = require('fs').promises;

// 폴더 내용 확인 -> 파일 있으면 삭제 -> 폴더 삭제
fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        return fs.unlink('./folder/newfile.js');
    }) 
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./foler');
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.log(err);
    });