/**
 * Multiple Pointers/Frequency Counter - Problem 5
 * -----------------------------------------------
 * Note: This can be solved using either the multiple pointers or frequency
 * counter method.
 * 
 * Implement a function which accepts a variable number of arguments and checks
 * whether there are any duplicates among the arguments passed in.
 * 
 * Must have linear time and space complexity -- O(n)
 * Bonus: Time -- O(n log n), Space -- O(1)
 */

function areThereDuplicates() {
  /**
   * 1. Loop over arguments object
   * 2. Make each value a key equal to true in counter object
   *      e.g. [1, 2, 3] -> { '1': true, '2': true, '3': true }
   * 3. If key already exists with value true, duplicate == true
   * 4. If all values can be assigned true, duplicate == false
   */
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
