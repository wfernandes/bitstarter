var express = require('express');
var fs = require('fs');
var buf = require('buffer');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello Warren!');
  var stuff = fs.readFileSync('index.html','utf-8');
  buf = new Buffer(256);
  buf.write(stuff);
  response.send(buf.toString('utf-8'));

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
