module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    { timestamps: false }
  );
  /* Cart.associate = (models) => {
      Cart.belongsTo(models.User);
      Cart.belongsTo(models.Product);
    }; */
  return Category;
};
