const express = require("express");
const { handleGetOrders } = require("../controller/order.controller");

const orderRouter = express.Router();

orderRouter.get("/getOrders", handleGetOrders);

module.exports = { orderRouter };
