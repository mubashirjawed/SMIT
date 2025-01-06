const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel");

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Create User POST
app.post("/", async (req, res) => {
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

// Default Route GET
app.get("/", async (req, res) => {
  try {
    const ShowAll = await User.find();
    res.status(200).json(ShowAll);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
});

// Start the Server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
