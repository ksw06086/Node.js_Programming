const fs = require('fs').promises;
const constants = require('fs').constants;

// 해당 폴더 있는지 확인
// fs.access = fs.existsSync
// fs.stat : 폴더인지, 일반 파일인지, 심볼릭 링크인지, 바로가기인지 알아낼 수 있음
// fs.appendFile : 기존 파일에 추가해서 덧붙임
fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject(new '이미 폴더 있음');
    })
    .catch((err) => {
        if(err === 'ENOENT'){
            console.log('폴더 없음');
            return fs.mkdir('./folder');
        }
        return Promise.reject(err);
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        return fs.open('./folder/file.js', 'w');
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        fs.rename('./folder/file.js', '/folder/newfile.js');
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
    });