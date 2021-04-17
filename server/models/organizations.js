module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define("Organization", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    // Org => User relationship
    Organization.associate = (models) => {
      Organization.hasMany(models.User, {
        foreignKey: 'organizationId',
        // as: 'todoItems',
      });
    };

    // Org => Project relationship
    Organization.associate = (models) => {
      Organization.hasMany(models.Project, {
        foreignKey: 'organizationId',
        // as: 'todoItems',
      });
    };
    return Organization;
  };
  