const fs = require('fs');
// 둘다 동기인데 차이가 무엇일까?? 
// - 이 파일을 한 번만 실행하면 똑같지만 이 파일을 10번 수행한다면
// - 1번은 1 -> 2 -> 3 -> ... -> 10 이렇게 순서대로
// - 2번은 10개 파일이 비동기로 묶어서 들어가서 동시에 실행이 된다(콜백헬 발생된다.)
// - 2번을 깔끔하게 보이고 싶어서 .then이 있는 promiss 활용하는 것
// 1. 동기 접근(순서대로)
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());

// 2. 비동기인데 동기적 접근(순서대로) - callback함수 활용
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme.txt', (err, data) => {
            if (err) {
                throw err;
            }
            console.log('3번', data.toString());
            fs.readFile('./readme.txt', (err, data) => {
                if (err) {
                    throw err;
                }
                console.log('4번', data.toString());
            });
        });
    });
});

// 3. 비동기인데 동기적 접근(순서대로) - promiss함수 활용
//    훨씬 더 깔끔해보이고 가독성이 좋음
fs.readFile('./readme.txt')
    .then((data) => {
        console.log('1번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('2번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('3번', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then((data) => {
        console.log('4번', data.toString());
    })
    .catch((err) => {
        throw err;
    });

// 4. 비동기인데 동기적 접근(순서대로) - await async 활용
//    비동기로 한거랑 똑같이 보이지만 비동기로 작동함
async function main() {
    let data = await fs.readFile('./readme.txt');
    console.log('1번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('2번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('3번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('4번', data.toString());
}
main();
