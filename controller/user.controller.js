const { UserModel } = require("../models/users.model");
const jwt = require("jsonwebtoken");

function getUser(req, res) {
  UserModel.find({})
    .then((response) => {
      // throw new Error("test!!!!!");
      res.status(200).json({ users: response });
    })
    .catch((error) => {
      res.status(500).json({ message: `Something went wrong!! ${error}` });
    });
}

function createUser(req, res) {
  UserModel.create(req.body)
    .then((response) => {
      res.status(201).json({ message: "User is created successfully!!!" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Something went wrong!!!", error: error });
    });
}

async function signInUser(req, res) {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "Email / password is mandatory" });
  }
  let user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.json({ message: "email id is wrong!!!" });
  }
  let checkPassword = await user.comparePassword(password);
  if (!checkPassword) {
    return res.json({ message: "password is wrong!!!" });
  }
  let token = await jwt.sign(req.body, process.env.PRIVATE_KEY);
  res.cookie("token", token);
  return res.json({ message: "Welcome to the jungle!!" });
}

function getUserDetailsById(req, res) {
  UserModel.find({ _id: req.params.id })
    .then((response) => {
      res.status(200).json({ users: response });
    })
    .catch((error) => {
      res.status(500).json({ message: `Something went wrong!! ${error}` });
    });
}

module.exports = { getUser, createUser, getUserDetailsById, signInUser };
