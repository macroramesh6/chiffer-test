module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
    Comments.associate = (models) => {
      Comments.belongsTo(models.Task, {
        foreignKey: 'taskId',
        onDelete: 'CASCADE',
      });
    };
    return Comments;
  };
  