const Sequelize = require('sequelize');

// TypeScript 적용을 쉽게 하기 위해서 바꿈
// 기존에는 return super.init() -> 지금은 initiate
class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({ // 컬럼 정의
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN, // true false로 값을 줌
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, { // 모델에 대한 설정
            sequelize,
            // timestamp가 true면 created_at, updated_at 컬럼을 기본으로 넣어줌
            timestamps: false,
            // underscored : sequelize의 이름을 createAt으로 할지, create_at으로 할지 설정(자동으로 만들어주는 애들<foreign key도>)
            underscored: false,
            // true면 deleted_at 만들어줌(삭제되었으면 날리지 말고 true로 만들어줌) // soft delete
            paranoid: false,
            modelName: 'User',
            tableName: 'users',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}

module.exports = User;