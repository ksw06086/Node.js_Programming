const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if(isMainThread) {  // 메인스레드(처음 실행됨 여기서 워커스레드 생성함)
    // 여기서 워커스레드 생성하고 워커스레드에게 일을 분배해줌 그래서 이들이 일을 마치면 
    // 그걸 메인스레드로 보내서 합쳐서 최종 결과물로 리턴함
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));
    for(let worker of threads) {
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () => {
            threads.delete(worker);
            if(threads.size === 0){
                console.log("워커 끝~");
            }
        });
    }
} else {    // 워커스레드
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}