// 다른 프로세스 불러오는 것
// 다른 언어도 사용해서 실행시킬 수 있음 -> 다른 언어의 파일을 불러와 실행 가능
// 다만, 관련 설치해야할 기본 설치 프로그램이 설치되어있어야 함, java/c++/python 등
// 실행시킬 순 없고 실행해달라고 불러오는 것일 뿐 -> 효율이 좋다고 말할 순 없음
const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']);

process.stdout.on('data', function (data) {
    console.log(data.toString());
});

process.stderr.on('data', function (data) {
    console.error(data.toString());
});