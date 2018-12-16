const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to liamhockley.me");
});

// Server
app.listen(8080, () => {
  console.log("Server Started...");
});
