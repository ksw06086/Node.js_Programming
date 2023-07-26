## 시퀄라이즈 API 정보사이트
- sequelize.org/master

# Op(Operator) 객체
- gt : >
- lt : <
- gte : >=
- lte : <=
- in : [1,2,3] 중 속하는지
- ne : !=

# INSERT 시퀄라이즈 문
- const { User } = require('../models');
  User.create({
    name: 'zero',
    age: 24,
    married: false,
    comment: '자기소개1',
  });

# SELECT 시퀄라이즈 문
- SELECT * FROM nodejs.users; => User.findAll();
- SELECT name, married FROM nodejs.users; 
  => User.findAll({
         attributes: ['name', 'married'],
     });
- select name, age from nodejs.users where married = 1 and age > 30;
  [=>]
  const { Op } = require('sequelize');
  const { User } = require('../models');
  User.findAll({
    attributes: ['name', 'age'],
    where: {
        married: true,
        age: { [Op.gt]: 30 },
    }
  });
- select id, name from nodejs.users where married = 0 or age > 30;
  [=>]
  const { Op } = require('sequelize');
  const { User } = require('../models');
  User.findAll({
    attributes: ['name', 'age'],
    where: {
        [Op.or]: [{ married: true }, { age: { [Op.gt]: 30 } }],
    },
  });
- select id from nodejs.users order by age desc  limit 1 offset 1;
  [=>]
  User.findAll({
    attributes: ['id'],
    order: [['age', 'DESC']],
    limit: 1,
    offset: 1,
  });

# UPDATE 시퀄라이즈 문
- User.update({
    comment: '바꿀 내용',
  }, {
    where: {id: 2},
  });

# DELETE 시퀄라이즈 문
- User.destroy({
    where: {id: 2},
  })


