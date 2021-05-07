const { Sequelize, DataTypes } = require("sequelize");
const Product = require("./products");
const Review = require("./reviews");
const Category = require("./categories");
const Brand = require("./brands");
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: "postgres",
});

const models = {
  Product: Product(sequelize, DataTypes),
  Review: Review(sequelize, DataTypes),
  Category: Category(sequelize, DataTypes),
  Brand: Brand(sequelize, DataTypes),
  sequelize: sequelize,
};

models.Product.belongsTo(models.Category);
models.Product.belongsTo(models.Brand);
models.Category.hasMany(models.Product);
models.Brand.hasMany(models.Product);
models.Product.hasMany(models.Review);

// models.Product.belongsTo(models.Category)
// models.Category.hasMany(models.Product)

// models.Product.belongsToMany(models.User, {through:models.Cart})
// models.User.belongsToMany(models.Product, {through:models.Cart})

// models.Cart.belongsTo(models.User)
// models.User.hasMany(models.Cart)

// models.Cart.belongsTo(models.Product)
// models.Product.hasMany(models.Cart)

/* Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
}); */
sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log("Connection failed ", e));

module.exports = models;
