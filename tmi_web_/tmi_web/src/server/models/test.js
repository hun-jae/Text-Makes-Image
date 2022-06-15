module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'test', // 테이블의 이름을 지정합니다.
      {
       name: {
        type: DataTypes.STRING(20),
        allowNull : true
       }
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};

  // Sequelize는 컬럼의 id를 지정하지 않아도 테이블이 생성 될 때 자동으로 id를 부여