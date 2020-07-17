// All the new class syntax you see in ES5, ES6 is just a syntactical sugar coating for the underlying prototypical OOP. Creating a class is done using a function in JavaScript.

var X = function (j) {
  //<--good practice to capitalize function constructor
  this.i = 0;
  this.j = j;

  this.getJ = function () {
    return this.j;
  };
};

var x1 = new X(1);
var x2 = new X(2);

console.log(x1.getJ());
console.log(x2.getJ());
