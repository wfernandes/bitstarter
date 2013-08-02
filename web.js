var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello Warren!');
  fs.readFileSync('index.html', function(err, data){
	if(err) throw err;
	var buffer = new Buffer();
	buffer.write(data);
	response.send(buffer.toString('utf-8'));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
