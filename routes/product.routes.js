const { Router } = require("express");
const router = Router();
const { productGet } = require("../controllers/Product.controller");

router.get("/products", productGet);

module.exports = router;
