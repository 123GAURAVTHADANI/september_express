const express = require("express");
const {
  getUser,
  createUser,
  getUserDetailsById,
  signInUser,
} = require("../controller/user.controller");
const { ageMiddleware } = require("../middlewares/age.middleware");
const { isVerified, authorize } = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.get(
  "/getUsers",
  isVerified,
  authorize("admin", "super-admin", "student"),
  getUser,
);

userRouter.post(
  "/createUser",
  isVerified,
  authorize("admin", "super-admin"),
  createUser,
);

userRouter.post("/login", signInUser);

userRouter.get("/getUserById/:id", getUserDetailsById);

module.exports = { userRouter };
