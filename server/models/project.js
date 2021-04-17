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
    return Project;
};
