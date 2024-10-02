/*
Implement a Basic String Compression:

Problem: Compress a string by replacing consecutive repeating characters with the character followed by the count of repeats.
Example:

Input: "aabcccccaaa"
Output: "a2b1c5a3"
*/

function compressString(str) {
    if (!str || str.length <= 1) {
        return str
    }

    let compressed = ''
    let count = 1
    let currentChar = str[0]

    for (let i = 1; i <= str.length; i++) {
        if (i < str.length && str[i] === currentChar) {
            count++
        } else {
            compressed += currentChar + count
            if (i < str.length) {
                currentChar = str[i]
                count = 1
            }
        }
    }

    return compressed.length < str.length ? compressed : str
}

// Test the function
console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
console.log(compressString("abcdef")); // Output: "abcdef"
console.log(compressString("aabbbcccc")); // Output: "a2b3c4"