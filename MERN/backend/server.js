// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();
// const User = require("./models/userModel");
// app.use(express.json());

// mongoose
//   .connect(process.env.URI)
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// // create

// app.post("/", async (req, res) => {
//   const [name, email, age] = req.body;

//   const User = require("./models/userModel");

//   try {
//     const userAdded = await User.create({
//       name: name,
//       email: email,
//       age: age,
//     });
//     res.status(201).json(userAdded);
//   } catch (error) {
//     console.log(error);
//     res.send(400).json({ error: error.message });
//   }
// });

// // ----------------- -------------
// app.get("/", (req, res) => {
//   res.send("api runing in the bankend");
// });

// app.listen(process.env.PORT, (err) => {
//   if (err) console.log("error", err);
//   console.log("runing successfully at", process.env.PORT);
// });


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/userModel");

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Create User
app.post("/", async (req, res) => {
  // Destructure from req.body
  const { name, email, age } = req.body;

  try {
    // Create a new user
    const userAdded = await User.create({ name, email, age });
    res.status(201).json(userAdded); // Success response
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message }); // Error response
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("API running in the backend");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
