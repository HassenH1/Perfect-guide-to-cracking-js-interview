// All the new class syntax you see in ES5, ES6 is just a syntactical sugar coating for the underlying prototypical OOP. Creating a class is done using a function in JavaScript.

var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4,
};
// function constructor
function Animal(name, type) {
  this.name = name;
  this.type = type;
}
// Here we are creating objects for the class (using new keyword)
var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);

// We can add methods for a given class(function) like this. Attach a class method like this.
Animal.prototype.shout = function () {
  console.log(this.name + "is " + this.sound + "ing...");
};

//unfinished
