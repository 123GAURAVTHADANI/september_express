var express = require("express");
var app = express();
const dotenv = require("dotenv");
const { userRouter } = require("./routes/user.router");
const { orderRouter } = require("./routes/order.router");
const { dbConfig } = require("./configurations/db.config");
dotenv.config();

let port = process.env.PORT || 3000;

// IN BUILD MIDDLWARE / APPLICATION
app.use(express.json());

// EXPRESS - ROUTER MIDDLEWARE
app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderRouter);

// http://localhost:5001/api/v1/user/getUser?age=18
// http://localhost:5001/api/v1/user/createUser

app.listen(port, async () => {
  await dbConfig();
  console.log(`🚀 Listening to the port ${port}`);
});

// write() , writeHead(), end()

// domain:port/api/v1/endPoint
// http://localhost:5001/api/v1/user/getUser?query="iphone"
// http://localhost:5001/api/v1/order/getOrders
// http://localhost:5001/api/v1/posts/getPosts
// http://localhost:5001/api/v1//getPosts
// https://dummyjson.com/product

// onrender - url
// aws - url
