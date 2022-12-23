const router = require("express").Router();
const User = require("../models/User.model");
const fetch = require("node-fetch");

router.post("/fetchusers", async (req, res) => {
  var alluser;
  try {
    const resp = await fetch("https://randomuser.me/api/?results=50");
    const data = await resp.json();

    alluser = data.results;
  } catch (err) {
    res.status(500).json(err.message);
  }

  try {
    // Creating a new mongoose doc
    const newUser = new User({ newResults: alluser });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE ALL
router.delete("/deleteusers", async (req, res) => {
  try {
    await User.deleteMany();

    res.status(201).json("All Data Deleted");
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET ALL DETAILS
router.get("/userdetails", async (req, res) => {
  try {
    const userdetails = await User.find();

    res.status(200).json({ userdetails });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
