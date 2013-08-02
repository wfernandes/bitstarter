var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello Warren!');
  var buffer = new Buffer(256);
  buffer.write(fs.readFileSync('index.html'));
  response.send(buffer.toString('utf-8');

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
