// map <-----------------------------------------
// The map function is available on a JavaScript array. Using this function, we can get a new array by applying a transformation function on each and every element in the array. The general syntax for JS array map operation is:
arr.map((elem) => {
  process(elem);
  return processedValue;
}); // returns new array with each element processed
// Suppose, there are few unwanted characters entered into serial keys we are working with recently. We need to remove them. Instead of removing the character by iterating and finding, we can use map to perform the same operation and get result array.
var data = ["2345-34r", "2e345-211", "543-67i4", "346-598"];
var re = /[a-z A-Z]/;
var cleanedData = data.map((elem) => {
  return elem.replace(re, "");
});
console.log(cleanedData); // ["2345-34", "2345-211", "543-674", "346-598"]

// reduce <-----------------------------------------
// Reduce function reduces a given list to one final result. We can also do the same thing by iterating the array and saving the intermediate result in a variable. But here this is a cleaner way to reduce an array to a value. The general syntax for JS reduce operation is:

array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
// function(total, currentValue, index, arr): It is the required parameter and used to run for each element of array. It contains four parameter which are listed below:
// total: It is required parameter and used to specify the initialValue, or the previously returned value of the function.
// currentValue: It is required parameter and used to specify the value of the current element.
// currentIndex: It is optional parameter and used to specify the array index of the current element.
// arr: It is optional parameter and used to specify the array object the current element belongs to.
// initialValue: It is optional parameter and used to specify the value to be passed to the function as the initial value.

// One practical application for reduce can be flattening an array of arrays. Flattening is converting internal arrays to one single array. For Ex:
var arr = [[1, 2], [3, 4], [5, 6]];
// We can achieve this by normal iteration. But using reduce, it is a straight code. Magic!
var flattenedArray = arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []); // returns [1, 2, 3, 4, 5, 6]

//adding numbers
const numbers = [1,-1,3,2]
numbers.reduce((accumulator, currentValue) => {
  console.log(accumulator)
  return accumulator + currentValue
}, /*accumlator is 0*/ 0)
//steps
//a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5