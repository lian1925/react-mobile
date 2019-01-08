var express = require("express");
var http = require("http");

var app = express();

var history = require("connect-history-api-fallback");

app.use(history());

app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.send("Hello NodeJs!");
});

var server = app.listen(8000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
