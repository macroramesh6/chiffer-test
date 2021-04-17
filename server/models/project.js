module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Project.associate = (models) => {
        Project.belongsTo(models.Organization, {
          foreignKey: 'projectId',
          onDelete: 'CASCADE',
        });
      };

    Project.associate = (models) => {
        Project.hasMany(models.Task, {
          foreignKey: 'projectId',
          // as: 'todoItems',
        });
      };
    return Project;
};
