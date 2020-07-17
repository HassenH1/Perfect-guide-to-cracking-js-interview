// All the new class syntax you see in ES5, ES6 is just a syntactical sugar coating for the underlying prototypical OOP. Creating a class is done using a function in JavaScript.

//function constructor --------------------
var Y = function (j) {
  //<--good practice to capitalize function constructor
  this.i = 0;
  this.j = j;

  // this.getJ = function () {
  //   return this.j;
  // };
};

//^^^^this is how you can add methods and properties to function constructor^^^^
//every function has a property called prototype
//now we are attaching this method to itVV
Y.prototype.getJ = function () {
  //{objectName}.prototype.{methodName}
  return this.j;
};

var x1 = new Y(1);
var x2 = new Y(2);

console.log(x1.getJ());
console.log(x2.getJ());

//---------------------------

//Master Object -------------------

var X = function () {};

console.dir(X, "<-------what this"); //allows you to look at the object in more detail
/*
print this ous
function x()
  arguments: null
  caller: null
  length: 0
  name: ""
prototype: x
__proto__: function() //if you expand this it has a bunch of methods and properties and X is ultimately created from this Object
*/

//creating subClass (subConstructor)
//overriding in Prototype Chain
//Adding prototype to Master Object
