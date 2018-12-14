var express = require('express');
var app = express();

// Routes
app.get('/', function (req, res) {
  res.send('Welcome to liamhockley.me');
});

// Server
app.listen(8080, function () {
  console.log('Server Started...');
});


