const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phoneNumber: Number,
  password: String,
});

userSchema.pre("save", async function () {
  // Only hash if password was modified
  if (!this.isModified("password")) {
    return;
  }
  const saltRounds = 10;
  this.password = await bcrypt.hash(this.password, saltRounds);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };

// 123Bhumi - xyz (strong)

//
