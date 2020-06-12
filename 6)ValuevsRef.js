// Pass by Value:
// In Pass by Value, Function is called by directly passing the value of the variable as the argument. Changing the argument inside the function doesn’t affect the variable passed from outside the function.

// Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).

function callByValue(varOne, varTwo) {
  console.log("Inside Call by Value Method");
  varOne = 100;
  varTwo = 200;
  console.log("varOne =" + varOne + "varTwo =" + varTwo);
}
let varOne = 10;
let varTwo = 20;
console.log("Before Call by Value Method");
console.log("varOne =" + varOne + "varTwo =" + varTwo);
callByValue(varOne, varTwo);
console.log("After Call by Value Method");
console.log("varOne =" + varOne + "varTwo =" + varTwo);

// output will be :
// ---------------
// Before Call by Value Method
// varOne =10 varTwo =20
// Inside Call by Value Method
// varOne =100 varTwo =200
// After Call by Value Method
// varOne =10 varTwo =20
