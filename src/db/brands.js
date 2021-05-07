module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "brand",
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
  return Brand;
};
