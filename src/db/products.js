module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
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
      description: {
        type: DataTypes.STRING,
        required: true,
      },

      imageUrl: {
        type: DataTypes.STRING,
        required: true,
      },
      price: {
        type: DataTypes.INTEGER,
        required: true,
      },
    },
    { timestamps: true }
  );
  /* Cart.associate = (models) => {
    Cart.belongsTo(models.User);
    Cart.belongsTo(models.Product);
  }; */
  return Product;
};
