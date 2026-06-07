function getUser(req, res) {
  res.json({ message: "GET USERSSSS!!!!" });
}

function createUser(req, res) {
  console.log(req.body);
  res.json({ message: "CREATE USERSSSS!!!!" });
}

module.exports = { getUser, createUser };
