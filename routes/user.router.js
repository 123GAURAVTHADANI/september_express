const express = require("express");
const {
  getUser,
  createUser,
  getUserDetailsById,
} = require("../controller/user.controller");
const { ageMiddleware } = require("../middlewares/age.middleware");

const userRouter = express.Router();

userRouter.get("/getUser", ageMiddleware, getUser);

userRouter.post("/createUser", createUser);

userRouter.get("/getUserById/:id", getUserDetailsById);

module.exports = { userRouter };
