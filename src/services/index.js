const route = require("express").Router();

const productsRoute = require("./products");
const categoriesRoute = require("./categories");
const brandsRoute = require("./brands");
const reviewsRoute = require("./reviews");

route.use("/products", productsRoute);
route.use("/categories", categoriesRoute);
route.use("/brands", brandsRoute);
route.use("/reviews", reviewsRoute);
module.exports = route;
