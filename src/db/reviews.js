module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.STRING,
        required: true,
      },
      rate: {
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
  return Review;
};
