const express = require("express");
const app = express();
const config = require("config");

app.use(express.static("public"));
app.set("view engine", "pug");

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    message: "Welcome to my personal website",
    title: "liamhockley.me"
  });
});

app.listen(config.get("port"), () => {
  console.log("Listening on port " + config.get("port"));
});
