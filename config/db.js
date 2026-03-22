const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://bedcom1022_db_user:ZoKABbSwxLIV2WhY@" +
      "ac-pixwuak-shard-00-00.3nzshae.mongodb.net:27017," +
      "ac-pixwuak-shard-00-01.3nzshae.mongodb.net:27017," +
      "ac-pixwuak-shard-00-02.3nzshae.mongodb.net:27017/policeWindowSystem" +
      "?ssl=true&replicaSet=atlas-110mdm-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;