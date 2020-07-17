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

//base class
var Job = function () {
  this.pays = true;
};

//prototype method which is defined outside the parent class
Job.prototype.print = function () {
  console.log(this.pays ? "please hire me" : "no thanks");
};

//subclass
var TechJob = function (title, pays) {
  Job.call(this); //this line calls the Job function constructor and becomes the parent class
  //this method allows the subclass(TechJob) to inherent all the properties and method defined inside the parent class(Job)
  this.title = title;
  this.pays = pays;
};

//i want to inherent from Job.prototype
//Object. <------this is the master Object
TechJob.prototype = Object.create(Job.prototype);
//basically setting techJon function constructor as constructor
TechJob.prototype.constructor = TechJob;
//now create object from this subclass
var softwarePosition = new TechJob("javascript developer", true);

//now if you want to override the parent method prototype you can do this, comment out to leave the original parent method if needed
TechJob.prototype.print = function () {
  console.log(
    this.pays
      ? this.title + " is a great, hire me"
      : "i would rather learn javascript"
  );
};

//now imagine we removed both print methods from the base class and subclass (so comment those out for now)
//now we are going to use the master object (Object.<insert whatever here>)
Object.prototype.print = function () {
  console.log("I am printing from the Master Object");
}; //Object prototype methods is available to all objects

var softwarePosition2 = new TechJob("vb programmer", false);
console.log(softwarePosition.print()); //print() comes from the parent class even tho we created an instance of subclass. Basically the subclass is able to inherent all the feature from parentclass
console.log(softwarePosition2.print());
