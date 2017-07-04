# weekend_challenge_two_calculator

LESSONS LEARNED
  * Can make buttons act like radio inputs by simply adding a removeClass() to the click listener before making the selected button active
  * don't need to reset calculatorObj because with dot notation I'll target the specific property and reset it each time
  * selectCalculation is passing the correct selected calculation I think because $(this) from selectCalculation will be targeting the last button clicked when enter is hit
  HARD MODE
    * how to append value to input field
    * inside click listener call function just by name not with ()
  * when requiring in modules into my routes file (operations.js) I had to use .. to go to the parent directory -- otherwise the require() was looking in routes, and the modules folder isn't in routes
  * I tried out routing for the first time, I don't fully understand what I did but I followed an instructor example and got it to work. My comprehension is:
    * I move the server side code (in this case a post request) into a specific file in the routes folder, then I require to that file and app.use to link to it -- thus connecting the client side URL from the request with the server side AND with the route. Then in the route I need to make sure to module.export to make it avaialable again...? I req'ed in my modules to the new routes file.
    * I think I see possibility here, how using server.js as the Post office helps keep it tidier and then it can link routes with client.js  

GOTCHAS
  * forgot #id selector
  * careful on variable names and dot notation and bracket index selection with ajax requests
  * numbers were concatenating when adding
  * When I switched from calculatorArr to calculatorObj I had to go back and reset all req/res points -- i.e. array.push to calcObj.x
  * forgot to add in module.exports = router; and got big ol error



QUESTIONS
 (2) is it ok to name variables the same thing on client and server? i.e. calculatorArr
 () what is this bundle.js error in browser console?          related to this? https://www.npmjs.com/package/bundle-js

BASE MODE
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
[X] refactor code to include route?
[X] Create a delay from when the client receives the response from the Server, and when the calculation is actually displayed on the DOM.
The delay should be 3 seconds.
[X] During that delay, show information that says 'computing' until the 3 second delay has finished,
[X] then remove the 'computing' message while showing the calculation.
[ ] add bootstrap or similar grid framework for layout
[ ] polish appearance with CSS 
