// 백그라운드에서 비동기는 동시에 실행이 가능한데 몇개까지 가능할까?
// node는 기본 4개까지 가능함 => 내 스레드 최대 만큼 증가시킬 수 있음(난 코어 8개 있음)
// (방법 : Terminal에 SET UV_THREADPOOL_SIZE = ?)
// A그룹 : 4 7430 / 2 7521 / 1 7720 / 3 7802
// B그룹 : 5 14865 / 6 14973 / 8 15148 / 7 15152
// 1. 해시기법임(단방향 암호화)
// crypto 메서드 : createHash('해시버전'), update('암호화할 문자열'), digest('암호화기법<ex : hex, base64 등>')
// crypto 암호화 : node는 pbkdf2와 scrypt 지원
// crypto pbkdf2 인수 : 비밀번호, salt(암호화기법<ex : hex, base64 등>), 반복횟수, 출력바이트, 알고리즘(해시버전)
// 2. 암호화(대칭형 암호화, 복호화가 가능함)
const crypto = require('crypto'); 

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('1', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('2', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('3', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('4', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('5', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('6', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('7', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 120, 'sha512', () => {
    console.log('8', Date.now() - start);
});
