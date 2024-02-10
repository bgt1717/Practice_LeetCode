/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIndex = 0;
    let tIndex = 0;

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++; // Move to the next character in s
        }
        tIndex++; // Always move to the next character in t
    }

    // If sIndex reached the end of s, all characters in s were found in t in the same order
    return sIndex === s.length;
};

// Test cases
console.log(isSubsequence("abc", "ahbgdc")); // Output: true
console.log(isSubsequence("axc", "ahbgdc")); // Output: false
console.log(isSubsequence("ace", "abcde")); // Output: true
console.log(isSubsequence("aec", "abcde")); // Output: false
console.log(isSubsequence("", "ahbgdc"));   // Output: true (empty string is always a subsequence)
console.log(isSubsequence("abc", ""));      // Output: false (s is not present in an empty string t)
