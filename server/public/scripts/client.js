// declare variables
var calculatorArr = [];
var inputOne;
var inputTwo;
var calcSelection;

$(document).ready(function() {
  // verify everything setup
  console.log('jquery and js sourced');

  // call sC function to $select the calculation
  selectCalculation();
  // push inputs and selectedCalculation to calculatorArr
  enterValues();




});

// create function with click listener to send inputs to calculatorArr
function enterValues() {
  $('#enter').on('click', function() {
    // reset the array to accept new values
    calculatorArr = [];
    // select inputs and push values to calculatorArr
    inputOne = $('#input-one').val();
    inputTwo = $('#input-two').val();
    calculatorArr.push(inputOne, inputTwo, calcSelection);
    // log to verify everything is adding correctly
    console.log(calculatorArr);
    // create POST request to send calculatorArr to server
    $.ajax({
      type: 'POST',
      url: '/calcArray',
      data: {calculatorArr: calculatorArr},
      success: function(response) {
        // check what is coming back
        console.log(response);
        var answer = response.calcResponse[0];
        $('#result').text(' ' + answer);
      }
    });
  });
}

//create click listener that sends selected calc to calculatorArr
function selectCalculation() {
  $('.calculation').on('click', function() {
    // on click button toggles class thus changing color
    $(this).toggleClass('active');
    // ADD LATER -- don't allow user to click another caluclation button
    calcSelection = ($(this).attr('id'));
    // QUESTION (1)
    // calculatorArr.push(calcSelection);
    // calculatorArr.push(12345);
  });
}
