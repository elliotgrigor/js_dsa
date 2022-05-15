/**
 * Multiple Pointers - Problem 3
 * -----------------------------
 * Implement a function which accepts a sorted (ascending) array and returns the
 * number of unique values in the array. There can be negative numbers, but it
 * will always be sorted.
 * 
 * Must have both a linear time and space complexity -- O(n)
 * Bonus: Constant space complexity is possible -- O(1)
 */

function countUniqueValues(ascendingNumbers) {
  /**
   * 1. Loop over array from start and finish, ignoring head and tail indices
   * 2. Compare both current values to previous values
   * 3. Increment unique number counter if they're different
   * 4. Add 1 to counter for difference in starting values
   */
}

const result1 = countUniqueValues(); // 0
const result2 = countUniqueValues([]); // 0
const result3 = countUniqueValues([10, 10, 10, 10]); // 1
const result4 = countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
const result5 = countUniqueValues([1, 2, 2, 3, 4, 4, 4, 6, 7, 9, 9, 12]); // 8
const result6 = countUniqueValues([-2, -1, -1, 0, 1]); // 4

console.log('Results:', result1, result2, result3, result4, result5, result6);
