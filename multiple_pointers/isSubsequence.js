/**
 * Multiple Pointers - Problem 7
 * -----------------------------
 * Write a function which takes two strings and checks whether the characters in
 * the first string form a subsequence of the characters in the second string.
 * The character order of the string should be consistent.
 * 
 * Must have linear time complexity O(n + m) and constant space complexity O(1)
 */

function isSubsequence(str1, str2) {
  /**
   * 1. Loop over str2
   * 2. Increment second pointer when char doesn't match
   * 3. If str1 pointer finds char match at n-1, done -> return true
   * 3. If str2 pointer gets out of range, no subsequence -> return false
   */

  let [ptr1, ptr2] = [0, 0];

  while (ptr2 < str2.length) {
    const char1 = str1[ptr1];
    const char2 = str2[ptr2];

    if (char1 === char2) {
      if (ptr1 === str1.length - 1) return true;
      ptr1++;
    }

    ptr2++;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
