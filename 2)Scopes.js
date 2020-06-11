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
