const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("api runing in the bankend");
});

app.listen(4000);

