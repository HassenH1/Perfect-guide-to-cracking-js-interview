// Pass by Value:
// In Pass by Value, Function is called by directly passing the value of the variable as the argument. Changing the argument inside the function doesn’t affect the variable passed from outside the function.

// Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).

function callByValue(varOne, varTwo) {
  //literally passing the ^^^variables^^^ declared
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

// However, when a variable refers to an object which includes array, the value is the reference to the object.

// Pass by Reference:
// In Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. In Javascript objects and arrays follows pass by reference.

function callByReference(varObj) {
  console.log("Inside Call by Reference Method");
  varObj.a = 100;
  console.log(varObj);
}
let varObj = { a: 1 };
console.log("Before Call by Reference Method");
console.log(varObj);
callByReference(varObj);
console.log("After Call by Reference Method");
console.log(varObj);

// output will be :
// ---------------
// Before Call by Reference Method
// {a: 1}
// Inside Call by Reference Method
// {a: 100}
// After Call by Reference Method
// {a: 100}

// so if we are passing object or array as an argument to the method, then there is a possibility that value of the object can change
