const express = require("express");

const ordersController = require("../controllers/orders.controller");

const router = express.Router();

router.post("/", ordersController.addOrder); // /cart/items

router.get("/", ordersController.getOrders); // /cart/items

router.get("/success", ordersController.getSuccess); // /cart/items

router.get("/failure", ordersController.getFailure); // /cart/items


module.exports = router;