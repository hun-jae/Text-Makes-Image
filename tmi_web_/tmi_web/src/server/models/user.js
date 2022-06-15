module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user", // ���̺��� �̸��� �����մϴ�.
    {
      uid: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};

// Sequelize�� �÷��� id�� �������� �ʾƵ� ���̺��� ���� �� �� �ڵ����� id�� �ο�
