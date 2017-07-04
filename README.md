# weekend_challenge_two_calculator

[X] select inputs and push values to calculatorArr
[X] create click listener that sends math function to calculatorArr
[X] create click listener on Enter button click --
[X] create POST request in both client and server, and create variables for the inputs and calculation on server.js
[X] create +, -, X, % caluclation functions in seperate module
[X] export and require those functions
[X] create if else series that selects the correct calculation function and passes in the input values
[X] respond with answer and insert answer into result input field
[X] create click listener for clear button that emptys input fields and resets calculatorArr
[X] refactor code to bring functions outside document ready
  [X]review Amanda's code to see how they handled buttons in GRG  
  [X]replace radio inputs with buttons
  [X] add key-value pairs to calculatorArr object that is being POSTed


HARD mode
[X] edit html to add all calculator buttons,
[X] add click listeners that display clicked nums in viewer bar
[X] figure out how to clear calcInput of numbers and show the selectedCalculation and add firstInput to calcObj
[X] update selectedCalculation to also display in viewer bar
[X] add second input to calculatorObj after selectedCalculation

PRO mode
[ ] refactor code to include route?
[ ] Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM.
The delay should be 3 seconds.
[ ] During that delay, show information that says 'computing' until the 3 second delay has finished,
[ ] then remove the 'computing' message while showing the calculation.
[ ] add bootstrap or similar grid framework for layout to polish appearance



LESSONS LEARNED
  * Can make buttons act like radio inputs by simply adding a removeClass() to the click listener before making the selected button active
  * don't need to reset calculatorObj because with dot notation I'll target the specific property and reset it each time
  * selectCalculation is passing the correct selected calculation I think because $(this) from selectCalculation will be targeting the last button clicked when enter is hit
  HARD MODE
    * how to append value to input field
    * inside click listener call function just by name not with ()

GOTCHAS
  * forgot #id selector
  * careful on variable names and dot notation and bracket index selection with ajax requests
  * numbers were concatenating when adding
  * When I switched from calculatorArr to calculatorObj I had to go back and reset all req/res points -- i.e. array.push to calcObj.x


QUESTIONS

 (2) is it ok to name variables the same thing on client and server? i.e. calculatorArr
 () what is this bundle.js error in browser console?          related to this? https://www.npmjs.com/package/bundle-js
