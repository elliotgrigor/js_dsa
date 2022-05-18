/**
 * Multiple Pointers - Problem 7
 * -----------------------------
 * Write a function which takes two strings and checks whether the characters in
 * the first string for a subsequence of the characters in the second string.
 * The character order of the string should be consistent.
 * 
 * Must have linear time complexity O(n + m) and constant space complexity O(1)
 */

function isSubsequence() {}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
