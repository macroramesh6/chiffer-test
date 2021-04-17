module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Project;
};
