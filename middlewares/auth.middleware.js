var jwt = require("jsonwebtoken");
function isVerified(req, res, next) {
  const token = req.cookies["token"];
  if (!token) {
    return res.status(401).json({ message: "Access denied." });
  }
  const user = jwt.verify(req.cookies["token"], "123Gaurav");
  if (user) {
    req.user = user;
    return next();
  }
  return res.json({ message: "Kindly Login!!!!!" });
}

function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}
module.exports = { isVerified, authorize };
