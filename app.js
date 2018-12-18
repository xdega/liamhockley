const express = require("express");
const app = express();
const port = 8080;

// Routes
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", {
    message: "Welcome to my personal website",
    title: "liamhockley.me"
  });
});

// Server
app.listen(port, () => {
  console.log("Server Started...");
});
