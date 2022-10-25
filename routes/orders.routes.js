const express = require("express");

const ordersController = require("../controllers/orders.controller");

const router = express.Router();

router.post("/", ordersController.addOrder); // /cart/items

router.get("/", ordersController.getOrders); // /cart/items

module.exports = router;