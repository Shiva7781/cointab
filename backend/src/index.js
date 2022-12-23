const express = require("express");
const app = express();

const userRoute = require("./routes/user.controller");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// to see if frontend and backend are connected
app.get("/check", async (req, res) => {
  return res.send("success!");
});

app.use("/", userRoute);

module.exports = app;
