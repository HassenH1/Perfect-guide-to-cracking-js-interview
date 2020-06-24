//////////// Time
// --operations
// --Comparisons
// --Loop stuff
// --Pointer reference
// --function calls to outside

/////////// Space
// --Variables
// --Data Structure
// --Allocations
// --Function calls

// Constant Time (runtime doesn’t change whatever the input is) => O(1)
// Example
log([1, 2, 3, 4, 5]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}

// Linear Time => O(n)
// Example
logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6, 7, 8]);

function logAll(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Exponential Time => O(n^2) not good as data gets bigger
// Example
addAndLog(["A", "B", "C"]);
addAndLog(["A", "B", "C", "D"]);
addAndLog(["A", "B", "C", "D", "E"]);

function addAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

//Logarithmic => O(log n) divide and conq
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      high = mid = 1;
    } else {
      return mid;
    }
  }
  return -1;
}
