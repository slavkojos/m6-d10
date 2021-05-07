const express = require("express");
const Product = require("../../db").Product;
const Category = require("../../db").Category;
const Brand = require("../../db").Brand;
const Review = require("../../db").Review;
const router = express.Router();
const multer = require("multer");
const url = require("url");
const { pathToFileURL } = url;
const path = require("path");
const { dirname, join } = path;
const fs = require("fs-extra");

const upload = multer();
const currentWorkingDirectory = path.dirname(__filename);
const publicFolderDirectory = join(currentWorkingDirectory, "../../../public");
console.log("public", publicFolderDirectory);

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Product.findAll({ include: [Brand.name, Category.name] });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Product.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Product.findByPk(req.params.id);
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Product.update(req.body, { where: { id: req.params.id }, returning: true });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await Product.destroy({ where: { id: req.params.id } });
      if (rows > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not found");
      }
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router.post("/:id/upload", upload.single("image"), async (req, res, next) => {
  try {
    const { originalname, buffer, size } = req.file;
    const finalDestination = join(publicFolderDirectory, originalname);
    fs.writeFile(finalDestination, buffer);
    const link = `${req.protocol}://${req.hostname}:${process.env.PORT}/${originalname}`;
    const data = await Product.update({ imageUrl: link }, { where: { id: req.params.id }, returning: true });
    res.send(data);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id/reviews", async (req, res, next) => {
  try {
    const data = await Review.findAll({ where: { productId: req.params.id } });
    res.send(data);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
