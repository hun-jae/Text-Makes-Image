module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'test', // ���̺��� �̸��� �����մϴ�.
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

  // Sequelize�� �÷��� id�� �������� �ʾƵ� ���̺��� ���� �� �� �ڵ����� id�� �ο�