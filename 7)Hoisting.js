// What is hoisting in JavaScript?
// In simple and easy words hoisting in JavaScript means Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope.

car = "BMW";
var car;
console.log(car); //Prints "BMW"

// When the code is executed, then it goes through a compiler. During this phase, scope gets defined and the variable and function declarations are moved to the top of their scope. If they are defined inside a function, they are moved to the top of this function, and if they are outside a function, to the top of the global scope.

// Function Declarations Are Hoisted, but Function Expressions Are Not in JavaScript -----------------

carDetails();

function carDetails() {
  var model = "AUDI"; //this would be hoisted to the top of the function not global
  console.log(model);
}

// The variable declaration will then be hoisted to the top of the function, not of the global scope of the program. Also declared the carDetails() in the global scope, and hoisting works the same for variable and function declarations: our function declaration will be moved to the top, before the execution of the function shown in this example...
function carDetails() {
  // function ^^^declaration^^^ is moved to the top of the global scope

  var model; // variable declaration is moved to the top of the local scope

  model = "AUDI"; // variable assignement is left in place

  console.log(model);
}

carDetails(); // Prints “AUDI”

// the main thing you should know that is functions are hoisted first, and then variables.
// Example
var color;

function color() {
  console.log("BLACK");
}

console.log(color); // Prints “function color(){ console.log(“BLACK”);}” cuz functions are hoisted first
