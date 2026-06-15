const { UserModel } = require("../models/users.model");

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
      res.status(500).json({ message: "Something went wrong!!!" });
    });
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

module.exports = { getUser, createUser, getUserDetailsById };
