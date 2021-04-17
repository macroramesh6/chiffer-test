module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
    return Task;
  };
  