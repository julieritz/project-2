module.exports = function(sequelize, DataTypes) {
  const Page = sequelize.define("Page", {
    page: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Page.associate = function(models) {
    Page.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Page;
};
