# Op(Operator) 사용법
- &gt : >
- &lt : <
- &gte : >=
- &lte : <=
- &in : [1,2,3] 중 속하는지
- &ne : !=

# mongoDB INSERT 문
- [1개]     db.컬렉션명.insertOne
+ db.users.insertOne({ name: 'zero', age: 24, married: false, comment: '안녕하세요. 간단히 몽고디비 사용에 대해 알아봅시다.', createdAt: new Date() });
+ {
    acknowledged: true,
    insertedId: ObjectId("[primaryKey]64c105892a7b062af2282a13")
  }
+ ObjectId("64c105892a7b062af2282a13") 관계 맺을 때 필요함
- [여러개]  db.컬렉션명.insertMany
- mongoDB에 [save명령어]는 [없어짐]

# mongoDB SELECT 문
1. [1개] findOne({}) / [여러개] find({})
2. 조회할 필드 조회
   find({}, { _id:0, name: 1, married: 1 }) => 1은 추가, 0은 제외
3. $or, $gt 사용
   db.users.find({ age: { $gt: 30 }}, { married: false }, { _id:0,..})
   db.users.find({ $or: [{ age: { $gt: 30 }}, {married: false}] }, ...);
4. 정렬(OrderBy => sort) / 1 : 오름차순, -1 : 내림차순
   db.users.find({}, { _id:0, ... }).sort({ age: -1 })
5. limit, skip(offset)
   db.users.find({}, { _id:0, ... }).sort({ age: -1 }).limit(1).skip(1)

# mongoDB UPDATE 문
* 형식 updateOne({조건}, { $set: {값 변경} }, { upsert: true })
1. [1개] updateOne({})/[여러개] updateMany({})
- db.users.updateOne({ name: 'nero'},{ $set: { comment: '안녕하세요. 이 필드를 바꿔보겠습니다.' } })
+ { $set: {} } 안해주면 해당 컬럼에 대한 데이터만이 아닌 하나의 로우 전체를 바꾸게 됨
+ upsert: true - 조건에 해당하는 로우가 있으면 수정하고, 없으면 새로 로우를 생성(insert)해주라는 것

# mongoDB DELETE 문
1. [1개] deleteOne({조건}) / [여러개] deleteMany({})
- db.users.deleteOne({ name: 'nero' });
