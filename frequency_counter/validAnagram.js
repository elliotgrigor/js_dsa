/**
 * Frequency Counter -- Problem 2
 * ------------------------------
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first.
 * 
 * Must have linear time complexity -- O(n)
 */

function validAnagram() {
  /**
   * 1. loop over both strings
   * 2. increment each letter's appearance
   * 3. save to independent data structures
   * 4. compare each data structure for matching quantities of characters
   */
}

validAnagram('', '')               ? console.log(true) : console.log(false); // true
validAnagram('anagram', 'aaagrmn') ? console.log(true) : console.log(false); // true
validAnagram('shrek', 'shark')     ? console.log(true) : console.log(false); // false
