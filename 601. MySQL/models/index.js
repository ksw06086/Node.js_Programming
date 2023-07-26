// mysql2를 사용해서 mysql과 sequelize와 node 연결해주는 code
const Sequelize = require('sequelize');
// 만든 Model 불러오기
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

// 만든 Model db에 추가해주기
db.User = User;
db.Comment = Comment;

User.initiate(sequelize); // model과 mysql과 연결
Comment.initiate(sequelize); // model과 mysql과 연결

User.associate(db); // model 사이의 관계를 mysql과 연결
Comment.associate(db); // model 사이의 관계를 mysql과 연결

module.exports = db;