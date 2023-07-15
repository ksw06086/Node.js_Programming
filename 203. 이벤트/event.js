const EventEmitter = require('events');

// .addListener == .on
// 현재는 이벤트 1개만 만들었음
const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
}); // 이벤트 처음 호출할 때만 실행 그 이후엔 안됨

// .emit : 이벤트 실행
myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3'); // 이벤트 호출
myEvent.emit('event3'); // 이벤트 호출

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4'); // 이벤트 삭제(event4에 엮여있는 모든 콜백함수 지워짐)
myEvent.emit('event4'); // 실행 안 됨

const listener = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListeners('event5', listener); // 이벤트 한개만 삭제(이 경우 콜백함수가 무엇인지 변수로 넣어주어야함 listener처럼)
myEvent.emit('event5'); // 실행 안 됨

// event2에 listener가 몇개 들어있는지
console.log(myEvent.listenerCount('event2'));