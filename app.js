const express = require("express");
const app = express();
const port = 8080;

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to liamhockley.me");
});

// Server
app.listen(port, () => {
  console.log("Server Started...");
});
