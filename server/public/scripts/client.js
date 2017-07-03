// declare variables
var calculatorObj = {
  x: 0,
  y: 0,
  type: 0,
};
var inputs;
var calcSelection;

$(document).ready(function() {
  // verify everything setup
  console.log('jquery and js sourced');
  // call sC function to $select the calculation
  selectCalculation();
  // push inputs and selectedCalculation to calculatorObj
  numberInputs();
  equalsButton();
  clear();
});

// create function with click listener to send inputs to calculatorObj
function numberInputs() {
  $('.numbers').on('click', function() {
    var $button = $(this).attr('id');
    inputAppend($button);
  });
}

function equalsButton() {
  $('#enter').on('click', function() {
    // split apart the three values in the input field at the spaces
    // and assign as properties to calculatorObj
    inputs = $('#calcInput').val().split(' ');
    // regExp selecting second input
    calculatorObj.x = inputs[0];
    calculatorObj.y = inputs[2];
    clear();
    // log to verify object looks correct
    console.log(calculatorObj);
    // create POST request to send calculatorObj to server
    $.ajax({
      type: 'POST',
      url: '/calcArray',
      data: {calculatorObj: calculatorObj},
      success: function(response) {
        // check what is coming back
        console.log(response);
        var answer = response.calcResponse.answer;
        $('#calcInput').val(' ' + answer);
      }
    });
  });
}





//create click listener that sends selected calc to calculatorObj
function selectCalculation() {
  $('.calculation').on('click', function() {
    // create if else to check if input already has info entered or if calculation is already selected, if so trigger
    // alert asking user to start over...
    //make sure no other button is currently active
    $('button[name=calc]').removeClass('active');
    // on click button toggles class thus changing color
    $(this).addClass('active');
    // target the last button clicked and assign it to calcObj
    calculatorObj.type = ($(this).attr('id'));
    inputAppend(' ' + calculatorObj.type + ' ');
  });
}

// reset all inputs and text
function clear() {
  $('#clear').on('click', function() {
    $('input').val('');
    $('button[name=calc]').removeClass('active');
    $('#result').text('');
  });
}

function inputAppend(num){
    $('#calcInput').val($('#calcInput').val() + num);
}
