/*
Check if a String is a Palindrome:

Problem: Check whether a given string is a palindrome (same when read forward and backward).
Example:

Input: "madam"
Output: true
*/

function isPalindrome(str) {
    const len = str.length
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}

// Test the function
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false