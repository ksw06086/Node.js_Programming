const mongoose = require('mongoose');

const connect = () => {
  // 배포가 아닌 개발중일 때 이 if를 사용하면 SQL문이 터미널에 떠서 잘 되는지 확인 가능
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  // 몽고DB에 연결해주는 부분
  mongoose.connect('mongodb://root:1234@localhost:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser: true,
  }).then(() => {
    console.log("몽고디비 연결 성공");
  }).catch((err) => {
    console.error("몽고디비 연결 에러", err);
  });
};

// 몽고디비 연결하다 에러났을 때
mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
// 몽고디비 끊겼을 때 연결 재시도
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;