const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phoneNumber: Number,
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };
