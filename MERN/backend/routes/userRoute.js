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

// GET single User
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//UPDATE || function name is "patch"

router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get body", req.body);
  console.log("get id", id);
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
