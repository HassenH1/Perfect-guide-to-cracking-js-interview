// So what are a few things about objects you should know?

// Iterating over the object is easy, using Object.keys
var marks = { physics: 98, maths: 95, chemistry: 91 };
var highScore = 0;
for (i of Object.keys(marks)) {
  console.log(marks[i], "<----------this is?"); // goes thru values of each key 98, 95, 91
  if (marks[i] > highScore) highScore = marks[i];
}

// Object.values returns the list of values of an object.
