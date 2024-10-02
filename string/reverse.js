/*
Reverse a String:

Problem: Given a string, reverse it.
Example:
Input: "hello"
Output: "olleh"
*/

function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

// Test the function
console.log(reverseString("hello kem chho? Maza ma?")); // Output: "olleh"