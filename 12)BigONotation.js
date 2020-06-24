// Constant Time (runtime doesn’t change whatever the input is) => O(1)
// Example
log([1, 2, 3, 4, 5]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9]);
function log(array) {
  console.log(array[0]);
  console.log(array[1]);
}
