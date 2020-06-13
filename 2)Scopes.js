// 3 different types of scopes
// Global scope
// Local Scope/Function scope
// Block scope(Introduced in ES6)

//Global scope
x = 10; //when there is no keyword such as 'var' or 'let' the variable is a global
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

// Block scope(Introduced in ES6)
var a = 10;

function Foo() {
  if (true) {
    let a = 4;
    console.log(a, "<-------what this?"); //is is 4 within the scope of the conditional
  }

  // alert(a); // alerts '10' because the 'let' keyword
  console.log(a); // 10
}
Foo();

//JavaScript closure is a function that returns another function.
function generator(input) {
  var index = 0;
  return {
    next: function () {
      if (index < input.length) {
        index += 1;
        return input[index - 1];
      }
      return "";
    },
  };
}

var mygenerator = generator("boomerang");
mygenerator.next(); // returns "b"
mygenerator.next(); // returns "o"
mygenerator = generator("toon");
mygenerator.next(); // returns "t"
//Here, the scope is playing an important role. A closure is a function that returns another function and wraps data. The above string generator qualifies for a closure. The index value is preserved between multiple function calls. The internal function defined can access the variables defined in the parent function. This is a different scope. If you defined one more function in the second level function, that can access all parent’s variables.
