// declare variables
var calculatorObj = {
  x: 0,
  y: 0,
  type: 0,
};
var inputOne;
var inputTwo;
var calcSelection;

$(document).ready(function() {
  // verify everything setup
  console.log('jquery and js sourced');
  // call sC function to $select the calculation
  selectCalculation();
  // push inputs and selectedCalculation to calculatorObj
  enterValues();
  clear();
});

// create function with click listener to send inputs to calculatorObj
function enterValues() {
  $('.numbers').on('click', function() {
    var $button = $(this).attr('id');
    inputAppend($button);
  });
}

    //
    //
    // // select inputs and push values to calculatorObj
    // inputOne = $('#input-one').val();
    // inputTwo = $('#input-two').val();
    // calculatorObj.x = inputOne;
    // calculatorObj.y = inputTwo;
    // calculatorObj.type = calcSelection;
    // // log to verify everything is adding correctly
    // console.log(calculatorObj);
    // // create POST request to send calculatorObj to server
    // $.ajax({
    //   type: 'POST',
    //   url: '/calcArray',
    //   data: {calculatorObj: calculatorObj},
    //   success: function(response) {
    //     // check what is coming back
    //     console.log(response);
    //     var answer = response.calcResponse.answer;
    //     $('#result').text(' ' + answer);
    //   }
    // });


//create click listener that sends selected calc to calculatorObj
function selectCalculation() {
  $('.calculation').on('click', function() {
    //make sure no other button is currently active
    $('button[name=calc]').removeClass('active');
    // on click button toggles class thus changing color
    $(this).addClass('active');
    // target the last button clicked and assign it to calcObj
    calcSelection = ($(this).attr('id'));
    calculatorObj.type = calcSelection;
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
