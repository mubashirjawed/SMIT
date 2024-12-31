const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("api runing");
});

app.listen(4000);

