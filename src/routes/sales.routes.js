const { Router } = require("express");
const { getSales, createSale } = require("../controllers/sales.controller");

const router = Router();
router.get("/sales", getSales);
router.post("/sales", createSale);
module.exports = router;
