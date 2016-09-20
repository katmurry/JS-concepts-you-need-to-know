/*

- Reference: http://javascriptissexy.com/understand-javascript-closures-with-ease/

Closure is essentially an inner function.

It has access to 3 scope chains:
- It's own scope (variable defined between its curly brackets)
- Outer function's variables (including parameters) - even after the outer function returns.
- Global variables
*/

//Vanilla JS
function drive(turnOne, turnTwo) {
  var directions = "You want to drive ";
  //this inner function has access to outer function variables including parameters
  function instructions() {
    return directions + turnOne + " then " + turnTwo;
  }
  return instructions();
}

drive("left", "right"); // "You want to drive left then right"

//jQuery
$(function(){
  var groceryList = []; //an empty array
  $(".groceryItem").click(function(){ //this closure has access to the groceryList variable
    groceryList.push(this.prop("name")); //update the groceryList in the outer function's scope with the items pushed to the array
  });
});
