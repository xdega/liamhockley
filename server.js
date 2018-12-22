const express = require("express");
const app = express();
const config = require("config");
const path = require("path");

app.use(express.static("public"));
app.set("view engine", "pug");
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(config.get("port"), () => {
  console.log("Listening on port " + config.get("port"));
});
