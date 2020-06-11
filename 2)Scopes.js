//3 different types of scopes
// Global scope
// Local Scope/Function scope
// Block scope(Introduced in ES6)

//Global scope
x = 10;
function Foo() {
  console.log(x); // Prints 10
}
Foo();

//Local/Function scope
pi = 3.14;
function circumference(radius) {
  console.log(pi); //prints 3.14
  pi = 3.14159; //gets reassigned here
  console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
}
circumference(2);
console.log(
  pi,
  "<-------this works because pi isnt a 'var' or 'let' so its globally changable"
); //3.14159
