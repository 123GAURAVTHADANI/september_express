var jwt = require("jsonwebtoken");
function isVerified(req, res, next) {
  if (req.cookies["token"] && jwt.verify(req.cookies["token"], "123Gaurav")) {
    return next();
  }
  return res.json({ message: "Kindly Login!!!!!" });
}
module.exports = { isVerified };
