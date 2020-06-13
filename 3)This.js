// If you take the browser, in the global context "this" refers to the window object
// this === window; //true

//When the context and scope of program changes, this at that particular point changes accordingly. Now see this in a local context is:

function Foo() {
  console.log(this.a, "<---------------------------is this it?");
}
var food = { a: "Magical this" };
Foo.call(food); // food is this
// The ^^call() allows for a function/method belonging to one object to be assigned and called for a different object.
// call() provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object

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
