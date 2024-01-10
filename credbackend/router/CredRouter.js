const express = require("express");

const test = require("../controllers/test");
const {
  addProduct,
  viewallProducts,
  viewoneProduct,
  editProduct,
  deleteProduct,
  test1,
} = require("../controllers/Product_cred");

const credRouter = express.Router();

credRouter.route("/test").get(test1);
credRouter.route("/products/add").post(addProduct);
credRouter.route("/products/all").get(viewallProducts);
credRouter.route("/products/view/:id").get(viewoneProduct);
credRouter.route("/products/edit/:id").post(editProduct)
credRouter.route("/products/delete/:id").delete(deleteProduct)

module.exports = credRouter;
