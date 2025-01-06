const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
dotenv.config();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the Server
    const PORT = process.env.PORT || 6000;
    app.listen(PORT, () => {
      console.log(`Server running successfully on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(userRoute);
