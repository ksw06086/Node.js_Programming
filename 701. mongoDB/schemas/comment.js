const mongoose = require('mongoose');

// ObjectId 꺼내주지 않으면 mongoose.Schema.Types.ObjectId로 작성해주어야 함
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: 'User',
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// ref: 'User'을 안쓰는 사람도 많음 NoSQL(특성이 중복 감수함)이기 때문에
// 그래서 insert 할 때
// commenter: {
//   name: 'zero', age: 24, ... 이렇게 넣어주기도 함 -> 데이터 중복이 있을 수 있음, 하지만 접근이 쉬움
// }

module.exports = mongoose.model('Comment', commentSchema);