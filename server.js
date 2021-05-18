require("dotenv").config();
const express = require("express");
const mongoose = require("./db/connection");
const app = express();
const PORT = 3001



app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
  });

app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});