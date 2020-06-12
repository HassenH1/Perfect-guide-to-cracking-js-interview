// If you take the browser, in the global context it refers to the window object
// this === window;

//When the context and scope of program changes, this at that particular point changes accordingly. Now see this in a local context is:

function Foo() {
  console.log(this.a, "<---------------------------is this it?");
}
var food = { a: "Magical this" };
Foo(food); // food is this

function Foo() {
  console.log(this, "<-------------------------is this it?"); //this is a global object here and would return the window object
}

//this in object scope. Here
//this is actually referring to the object itself. this as we previously mentioned behaves differently in different places. Know them well.
var person = {
  name: "Stranger",
  age: 24,
  get identity() {
    return { who: this.name, howOld: this.age };
  },
};
