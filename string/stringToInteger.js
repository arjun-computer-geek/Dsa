/*
Convert a String to an Integer (atoi):

Problem: Implement the function atoi to convert a string to an integer.
Example:

Input: "42"
Output: 42
*/

function atoi(str) {
    let result = 0
    let sign = 1
    let i = 0

    // Ignore leading whitespace
    while (str[i] === ' ') {
        i++
    }

    // Check for sign
    if (str[i] === '+' || str[i] === '-') {
        sign = str[i] === '+' ? 1 : -1
        i++
    }

    // Process digits
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        result = result * 10 + (str[i] - '0')
        i++
    }

    // Apply sign and check for overflow
    result *= sign
    if (result > 2147483647) return 2147483647
    if (result < -2147483648) return -2147483648

    return result
}

// Test cases
console.log(atoi("42")); // Output: 42
console.log(atoi("   -42")); // Output: -42
console.log(atoi("4193 with words")); // Output: 4193
console.log(atoi("words and 987")); // Output: 0
console.log(atoi("-91283472332")); // Output: -2147483648