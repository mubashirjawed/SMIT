const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: { type: String, unique: true },
  body: String,
  createdAt: { type: Date, default: Date.now },
  author: String,
});
