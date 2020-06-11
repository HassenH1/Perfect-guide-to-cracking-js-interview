// In JavaScript, if you define a function as a variable, the variable name will be hoisted but you cannot access until JS execution encounters its definition.

console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}

//prints out 25

/////////////////////////

console.log(square(5));

var square = function (n) {
  return n * n;
};

//TypeError: square is not a function because 'var square' is hoisted
