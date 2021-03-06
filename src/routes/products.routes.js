const { Router } = require("express");
const {
  getProducts,
  createProduct,
} = require("../controllers/products.controller");

const router = Router();
router.get("/products", getProducts);
router.post("/products", createProduct);
module.exports = router;
