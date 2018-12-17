const express = require("express");
const app = express();
const port = 8080;

// Routes
app.get("/", function (req, res) {
  res.render("index", { title: "liamhockley.me", message: "Welcome to my personal website" });
});

// Server
app.listen(port, () => {
  console.log("Server Started...");
});
