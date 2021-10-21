var express = require('express');

var path = require('path');

var app = express();

const PORT = process.env.PORT || 3124;

app.use(express.static(path.join(__dirname, '../../public/')));

app.listen(PORT, function () {
  console.log("Listening on 3124 ");
})