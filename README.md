# Perfect-guide-to-cracking-js-interview

Learning these basic elements in depth to turn a JS interview favorable to myself.

### 1) Understand the JS functions well

### 2) Understand JavaScript scope well {Closures as well}

### 3) Understand this keyword well(global, function and object scopes)

### 4) Understand objects well =======(unfinished)

### 5) Understand Prototypical Inheritance well

### 6) Pass By Value And Pass By Reference In JavaScript

### 7) Hoisting

### 8) Callback functions

### 9) Understand the regular expressions well =======(unfinished)

### 10) Understand Map, Reduce and Filter well

### 11) Event Bubbling & Event Capturing

### 12) Big O Notation — Time and Space Complexity

### JavaScript and React Interview Question

##### 1)How do you write comments inside JSX?

##### 2)What is virtual DOM?

##### 3)Mutability and immutability?

##### 4)Data flow in React?

##### 5)Map, Filter, Reduce, Every, Some array methods.

##### 6)Reverse String.

##### 7)Hoisting in JS Refer to A.

##### 7)What is a promise? In which states can a Promise be?

##### 8)Difference between Map and ForEach methods.

##### 9)Prop validation in React.

##### 10)What is the children prop in React?

##### 11)What is the difference between synchronous and asynchronous code in JavaScript?

##### 12)What are reducers? What are actions?

##### 13)What are falsy values in JavaScript?

###### A. Hoisting

//What will be the output?
    
var first = 1;
    
function myFunc() {
  console.log(first);
  var first = 2;
  }

myFunc()
B.

//What will be the output?

function myFunc() {
  return
      {
      message: 'Hello'
    }
}

myFunct()
C.

//What will be the output?

const funcOne = () => console.log('one');

const funcTwo = () => {
  console.log('two');
  return funcOne;
}

funcTwo()();
D.

//What will be the output?

const arr = [1,2,3,4,5,6];
const result = arr.map(item => item * 2)[3];

result;
###### E. Pass by value, pass by reference.

//What will be the output?
//Part 1
var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};

user1 === user2

//Part 2
var arr1 = [1,2,3];
var arr2 = [1,2,3];

arr1 === arr2

//Part 3
var person = {
  name: 'Sachin'
}
var newPerson = person;
newPerson.age = 24

person;

###### Advanced
#### 1)What is call stack in JavaScript? What is the size of stack in Google Chrome?
