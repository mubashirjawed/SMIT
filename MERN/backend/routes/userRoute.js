const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");


// Create User POST
router.post("/", async (req, res) => {
  // Destructure from req.body
  const { name, email, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

//  GET
router.get("/", async (req, res) => {
  try {
    const ShowAll = await User.find();
    res.status(200).json(ShowAll);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
});


module.exports = router;