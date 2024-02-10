/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the alphanumeric string is equal to its reverse
    return alphanumericString === alphanumericString.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true
console.log(isPalindrome("_7_")); // Output: true