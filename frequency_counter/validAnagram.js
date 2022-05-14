/**
 * Frequency Counter -- Problem 2
 * ------------------------------
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first.
 * 
 * Must have linear time complexity -- O(n)
 */

function validAnagram(str1, str2) {
  /**
   * 1. loop over both strings
   * 2. increment each letter's appearance
   * 3. save each letter from each string as key in object literal with similar
   *    but different keys
   * 4. compare each matching keyval for matching quantities of characters
   *
   * e.g. { 'a': 1, 'a2': 1 } -- compare keyval ['a'] to keyval ['a' + '2']
   */
}

validAnagram('', '')               ? console.log(true) : console.log(false); // true
validAnagram('anagram', 'aaagrmn') ? console.log(true) : console.log(false); // true
validAnagram('shrek', 'shark')     ? console.log(true) : console.log(false); // false
