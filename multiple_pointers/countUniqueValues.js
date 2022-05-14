/**
 * Multiple Pointers - Problem 3
 * -----------------------------
 * Implement a funciton which accepts a sorted (ascending) array and returns the
 * number of unique values in the array. There can be negative numbers, but it
 * will always be sorted.
 * 
 * Must have both a linear time and space complexity -- O(n)
 * Bonus: Constant space complexity is possible -- O(1)
 */

function countUniqueValues(ascendingNumbers) {}

countUniqueValues([]); // 0
countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 2, 3, 4, 4, 4, 6, 7, 9, 9, 12]); // 8
