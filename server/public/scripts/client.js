// declare variables
var calculatorObj = {
  x: 0,
  y: 0,
  type: 0,
};
var inputs;
var calcSelection;
var selectionArray = [];

$(document).ready(function() {
  // verify everything setup
  console.log('jquery and js sourced');
  //hide the computing div -- to be shown during delay
  // $('#computing').hide();
  selectCalculation();
  numberInputs();
  equalsButton();
  clear();
  clearButton();
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
    // console.log(calculatorObj);
    // create POST request to send calculatorObj to server
    $.ajax({
      type: 'POST',
      url: '/calcArray',
      data: {calculatorObj: calculatorObj},
      success: function(response) {
        // check what is coming back
        // console.log(response);
        computing();
        var answer = response.calcResponse.answer;
        setTimeout(function() {
          $('#calcInput').val(answer);
          computing();
          }, 3000);
      }
    });
    console.log(selectionArray);
    selectionArray = [];
  });
}

// switch interface with computing div
function computing() {
  $('.container').toggleClass('delay');
  $('#compOverlay').toggleClass('computing');
}

//create click listener that sends selected calc to calculatorObj
function selectCalculation() {
  $('.calculation').on('click', function() {
    // add selection to selectionArray so later we can verify only one math operation is selected
    selectionArray.push($(this).attr('id'));
    //make sure no other button is currently active
    $('button[name=calc]').removeClass('active');
    // on click button toggles class thus changing color
    $(this).addClass('active');
    // target the last button clicked and assign it to calcObj
    calculatorObj.type = ($(this).attr('id'));
    inputAppend(' ' + calculatorObj.type + ' ');
    // create if else to check if input already has info entered or if calculation is already selected, if so trigger
    // alert asking user to start over...
    if(selectionArray.length > 1) {
      alert("Please select only one mathematical operation");
      clear();
    }
  });
}

// function to reset all inputs and text
function clear() {
    $('input').val('');
    $('button[name=calc]').removeClass('active');
    $('#result').text('');
    selectionArray = [];
}

// click listener for clear button to call clear function
// seperating this from clear() because sometimes we want to call clear() seperate
// from the click listener
function clearButton() {
  $('#clear').on('click', clear);
}

// target the input field and append values into it
function inputAppend(num){
    $('#calcInput').val($('#calcInput').val() + num);
}
