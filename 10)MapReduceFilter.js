// map
// The map function is available on a JavaScript array. Using this function, we can get a new array by applying a transformation function on each and every element in the array. The general syntax for JS array map operation is:
arr.map((elem){
    process(elem)
    return processedValue
}) // returns new array with each element processed
// Suppose, there are few unwanted characters entered into serial keys we are working with recently. We need to remove them. Instead of removing the character by iterating and finding, we can use map to perform the same operation and get result array.
var data = ["2345-34r", "2e345-211", "543-67i4", "346-598"];
var re = /[a-z A-Z]/;
var cleanedData = data.map((elem) => {return elem.replace(re, "")});
console.log(cleanedData); // ["2345-34", "2345-211", "543-674", "346-598"]