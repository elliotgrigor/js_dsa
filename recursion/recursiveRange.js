/**
 * Recursion - Problem 14
 * ----------------------
 * Write a function which accepts a number and add up all the numbers
 * from 0 to the number passed into the function.
 */

function recursiveRange(num) {
  /**
   * 1. Recur from 0 to num
   * 2. If current number == num, return last number itself
   * 3. Otherwise add current number onto next number
   */

  function recur(tempNum = 0) {
    if (tempNum === num) {
      return tempNum;
    }

    return tempNum + recur(tempNum + 1);
  }

  return recur();
}

console.log(recursiveRange(9)); // 45
console.log(recursiveRange(21)); // 231
console.log(recursiveRange(198)); // 19,701
console.log(recursiveRange(2033)); // 2,067,561
