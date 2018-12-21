const express = require("express");
const app = express();
const config = require("config");

// Routes
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index", {
    message: "Welcome to my personal website",
    title: "liamhockley.me"
  });
});

// Server
app.listen(config.get("port"), () => {
  console.log("Listening on port " + config.get("port"));
});
