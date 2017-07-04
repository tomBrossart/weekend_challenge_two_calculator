// initial npm connections and things I don't fully understand
var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// connect what was exported from operation.js here
var operationsRouter = require('./routes/operations.js');
app.use('/calcArray', operationsRouter);

// catch all
app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

// verify that app is listening and log out to terminal
app.listen(port, function() {
  console.log('Server running on port', port);
});
