module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      owner: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      }
    });
    Task.associate = (models) => {
      Task.belongsTo(models.Project, {
        foreignKey: 'taskId',
        onDelete: 'CASCADE',
      });
    };
    Task.associate = (models) => {
      Task.hasMany(models.Comments, {
        foreignKey: 'taskId',
      });
    };
    return Task;
  };
  