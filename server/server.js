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
var calcResult = {answer: undefined};

//post request for calculation  -- QUESTION (2)
app.post("/calcArray", function(req, res) {
  // calcResult = {answer: undefined};
  var inputsObj = req.body;
  // store data from post request in server side variables
  // convert inputs from strings to numbers
  var inputOne = Number(inputsObj.calculatorObj.x);
  var inputTwo = Number(inputsObj.calculatorObj.y);
  var selectedCalculation = inputsObj.calculatorObj.type;
  // log it out to make sure variables are selecting correctly
  console.log("succesfully receiving data from client:", inputOne, inputTwo, selectedCalculation);
  // check selectedCalculation and pass inputs into function
  if(selectedCalculation == '+') {
    var aResult = add(inputOne, inputTwo);
    calcResult.answer = aResult;
  }
  else if(selectedCalculation == '-') {
    var sResult = subtract(inputOne, inputTwo);
    calcResult.answer = sResult;
  }
  else if(selectedCalculation == 'X') {
    var mResult = multiply(inputOne, inputTwo);
    calcResult.answer = mResult;
  }
  else if(selectedCalculation == '%') {
    var dResult = divide(inputOne, inputTwo);
    calcResult.answer = dResult;
  }
  // respond to request with calculated result
  res.send({calcResponse: calcResult});
  console.log(calcResult);
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
