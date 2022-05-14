/**
 * Frequency Counter -- Problem 2
 * ------------------------------
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first.
 * 
 * Must have linear time complexity -- O(n)
 */

function validAnagram() {}

validAnagram('', '')               ? console.log(true) : console.log(false); // true
validAnagram('anagram', 'aaagrmn') ? console.log(true) : console.log(false); // true
validAnagram('shrek', 'shark')     ? console.log(true) : console.log(false); // false
