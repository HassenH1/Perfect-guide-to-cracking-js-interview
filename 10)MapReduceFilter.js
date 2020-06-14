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

// filter<-------------------------------------------
// This is the third type of functional programming concept. It is close to map as it also processes each element in the array and finally returns another array(not returning a value like in reduce). The length of the filtered array can be less than or equal to the original array. Because the filtering condition we pass may exclude few/zero inputs in the output array. The general syntax for JS filter operation is:
arr.filter((elem) => {
   return true/false
})
// Here elem is the data element of the array and true/false should be returned from the function to indicate inclusion/exclusion of filtered element. The common example is to filter the array of words which starts and ends with given conditions. Suppose, we should filter an array of words which starts with t and ends with r.
var words = ["tiger", "toast", "boat", "tumor", "track", "bridge"]
var newData = words.filter((elem) => {
   return elem.startsWith('t') && elem.endsWith('r') ? true:false;
}); // returns ["tiger", "tumor"]
// As you see, the original array is not changed in all three cases which are proving the purity of these functions.