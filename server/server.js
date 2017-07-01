// initial npm connections and things I don't fully understand
var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require('body-parser');
  // connect in modules
var add = require('./modules/add.js');
var subtract = require('./modules/subtract.js');
var multiply = require('./modules/multiply.js');
var divide = require('./modules/divide.js');
app.use(bodyParser.urlencoded({extended: true}));
var inputsArray = [];
var calcResult = [];

//post request for calculation  -- QUESTION (2)
app.post("/calcArray", function(req, res) {
  calcResult = [];
  inputsArray = req.body;
  // store data from post request in server side variables
  var inputOne = inputsArray.calculatorArr[0];
  var inputTwo = inputsArray.calculatorArr[1];
  var selectedCalculation = inputsArray.calculatorArr[2];
  // log it out to make sure variables are selecting correctly
  console.log("succesfully receiving data from client:", inputOne, inputTwo, selectedCalculation);
  // check selectedCalculation and pass inputs into function
  if(selectedCalculation == 'add') {
    var aResult = add(inputOne, inputTwo);
    calcResult.push(aResult);
  }
  else if(selectedCalculation == 'subtract') {
    var sResult = subtract(inputOne, inputTwo);
    calcResult.push(sResult);
  }
  else if(selectedCalculation == 'multiply') {
    var mResult = multiply(inputOne, inputTwo);
    calcResult.push(mResult);
  }
  else if(selectedCalculation == 'divide') {
    var dResult = divide(inputOne, inputTwo);
    calcResult.push(dResult);
  }
  // respond to request with calculated result
  res.send({calcResponse: calcResult});
});

// catch all
app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

// verify that app is listening and log out to terminal
app.listen(port, function() {
  console.log('Server running on port', port);
});
