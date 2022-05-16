/**
 * Frequency Counter - Problem 4
 * -----------------------------
 * Given two positive integers, find out if the two numbers have the same
 * frequency of digits.
 * 
 * Must have linear time complexity -- O(n)
 */

function sameFrequency(num1, num2) {
  /**
   * 1. Cast integers to strings
   * 2. Loop over num1 string, increment num1's chars to object literal
   *      e.g. 182 -> { '1': 1, '8': 1, '2': 1 }
   * 3. Loop over num2 string, decrement when num2 char matches num1 key
   *      e.g. 281 -> { '1': 1, '8': 1, '2': 0 }
   *                                         ^ decrement on iter 1
   * 4. Only decrement when keyval > 0
   * 5. If trying to decrement when keyval < 0, stop comparison
   */
}

console.log(sameFrequency(12882, 28821)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3_589_578, 5_879_385)); // true
console.log(sameFrequency(22, 222)); // false
