const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports = async () => {
  mongoose.set("strictQuery", false);

  return mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB connected!");
    })
    .catch((err) => {
      console.log("DB", err.message);
    });
};
