const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length; // 내 컴퓨터의 CPU 코어 개수

 // 엄마 프로세스 생성
if (cluster.isMaster) { // 엄마 프로세스 생성
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    // 개수 워커를 생산(CPU 개수만큼 워커 프로세스 생성함, 총 8개 생성함)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    // 워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal', signal);
        // cluster.fork(); // 종료되면 새로 생성
    });
} else {
    // 워커들이 포트에서 대기(워커 프로세스에서 서버를 띄움)
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluster</p>');
        setTimeout(() =>{ // 워커 존재를 확인하기 위해 1초마다 강제종료
            process.exit(1);
        }, 1000);
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}