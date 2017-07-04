// need to require in express here too so that we have access to it
// this also connects in bodyParser...I believe...
var express = require('express');
var router = express.Router();

// connect in modules
var add = require('../modules/add.js');
var subtract = require('../modules/subtract.js');
var multiply = require('../modules/multiply.js');
var divide = require('../modules/divide.js');

var calcResult = {answer: undefined};

//post request for calculation  -- QUESTION (2)
router.post('/', function(req, res) {
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

// export and make these methods available to other files
module.exports = router;
