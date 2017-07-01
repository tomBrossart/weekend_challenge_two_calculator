# weekend_challenge_two_calculator

[X] select inputs and push values to calculatorArr
[X] create click listener that sends math function to calculatorArr
[X] create click listener on Enter button click --
[X] create POST request in both client and server, and create variables for the inputs and calculation on server.js
[X] create +, -, X, % caluclation functions in seperate module
[ ] export and require those functions
[ ] create if else series that selects the correct calculation function and passes in the input values
[ ] respond with answer and insert answer into result input field
[ ] create click listener for clear button that emptys input fields and resets calculatorArr
[ ] refactor code to bring functions outside document ready


PRO module
[ ] figure out how to change input radios to be buttons
    // $
    // if($('button[class=calculation]'))
    //if(more than one active button)
      // {alert('Please only select one calculation')};
      // $('button').removeClass('active') }




GOTCHAS
  * forgot #id selector
  * careful on variable names and dot notation and bracket index selection with ajax requests


QUESTIONS
 (1)  for some reason I can't get calcSelection to push from inside selectCalculation but I can get it to push from inside enterValues
 (2) is it ok to name variables the same thing on client and server? i.e. calculatorArr
