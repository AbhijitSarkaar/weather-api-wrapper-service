const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("base route");
});

app.listen(process.env.PORT);
