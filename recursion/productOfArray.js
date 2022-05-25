/**
 * Recursion - Problem 13
 * ----------------------
 * Write a function which takes an array of numbers and returns the
 * product of them all.
 */

function productOfArray(numbers) {
  /**
   * Need to track current element, so a helper function is required.
   * 
   * Exit condition is the last index of the array, so
   * 1. Track current element in array
   * 2. Use helper function for recursion, using iterator variable to
   *      check for last index
   * 3. If last index, return current value alone
   * 4. Otherwise, multiply current value by next value
   */

  return (function recur(numbers, i = 0) {
    if (i >= numbers.length - 1) return numbers[i];
    return numbers[i] * recur(numbers, i + 1);
  })(numbers);
}

console.log(productOfArray([6, 3, 10, 11, 9, 16])); // 285,120
console.log(productOfArray([-1, 9, 12, 6, -7])); // 4,536
console.log(productOfArray([-3, -10, 9, 3, -8])); // -6,480
