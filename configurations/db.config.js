const { default: mongoose } = require("mongoose");

function dbConfig() {
  try {
    mongoose
      .connect(
        "mongodb+srv://garvthad:123Gaurav@cluster0.yl7bq.mongodb.net/SeptBatch?appName=Cluster0",
      )
      .then((res) => {
        console.log("DB COnnected successfully!!");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { dbConfig };
