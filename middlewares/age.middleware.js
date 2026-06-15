function ageMiddleware(request, response, next) {
  try {
    let age = request.query.age;
    if (!(age >= 18)) {
      response.json({ message: "Kindly provide the age more than 18" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = { ageMiddleware };

// http://localhost:5001/api/v1/user/getUser?age=18&county="India"
