/**
 * Sliding Window - Problem 10
 * ---------------------------
 * Write a function which accepts a string and returns the length of the
 * longest substring with all distinct characters.
 * 
 * Must have linear time complexity O(n)
 */

function findLongestSubstring(str) {}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7 -> 'rithmsc'
console.log(findLongestSubstring('thisisawesome')); // 6 -> 'awesom'
console.log(findLongestSubstring('thecatinthehat')); // 7 -> 'hecatin'
console.log(findLongestSubstring('bbbbb')); // 1 -> 'b'
console.log(findLongestSubstring('longestsubstring')); // 8 -> 'ubstring'
console.log(findLongestSubstring('thisishowwedoit')); // 6 -> 'wedoit'
