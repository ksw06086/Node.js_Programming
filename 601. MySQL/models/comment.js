const Sequelize = require('sequelize');

// TypeScript 적용을 쉽게 하기 위해서 바꿈
// 기존에는 return super.init() -> 지금은 initiate
class Comment extends Sequelize.Model {
  static initiate(sequelize) {
    Comment.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
      },
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  // 관계 정의
  static associate(db) {
    // 댓글은 사용자에게 속해있다.(belongsTo)
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
};

module.exports = Comment;