const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./models/userModel");

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

// create

app.post("/", async (req, res) => {
  const [name, email, age] = req.body;

  const User = require("./models/userModel");

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

// ----------------- -------------
app.get("/", (req, res) => {
  res.send("api runing in the bankend");
});

app.listen(process.env.PORT, (err) => {
  if (err) console.log("error", err);
  console.log("runing successfully at", process.env.PORT);
});
