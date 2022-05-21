/**
 * Sliding Window - Problem 8
 * --------------------------
 * Given an array of integers and a number, write a function which finds the
 * maximum sum of a subarray with the length of the number passed to the
 * function.
 * 
 * Note: A subarray must consist of *consecutive* elements from the original
 * array.
 *   e.g. [100, 200, 300] -> [100, 200] true
 *                        -> [100, 300] false
 * 
 * Must have linear time complexity O(n) and constant space complexity O(1)
 */

function maxSubarraySum(nums, count) {}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
