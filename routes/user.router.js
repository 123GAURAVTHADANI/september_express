const express = require("express");
const { getUser, createUser } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.get("/getUser", getUser);

userRouter.post("/createUser", createUser);

module.exports = { userRouter };
