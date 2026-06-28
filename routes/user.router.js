const express = require("express");
const {
  getUser,
  createUser,
  getUserDetailsById,
  signInUser,
} = require("../controller/user.controller");
const { ageMiddleware } = require("../middlewares/age.middleware");
const { isVerified } = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.get("/getUsers", isVerified, getUser);

userRouter.post("/createUser", createUser);

userRouter.post("/login", signInUser);

userRouter.get("/getUserById/:id", getUserDetailsById);

module.exports = { userRouter };
