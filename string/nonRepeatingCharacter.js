/*
Find the First Non-Repeating Character in a String:

Problem: Given a string, find the first non-repeating character.
Example:

Input: "leetcode"
Output: "l"
*/

function firstNonRepeatingCharacter(str) {
    const charCount = {}

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    // Find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char
        }
    }

    // If no non-repeating character is found
    return null
}

// Test the function
console.log(firstNonRepeatingCharacter("leetcode")); // Output: "l"
console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
console.log(firstNonRepeatingCharacter("aabbc")); // Output: "c"


/*
Find the All Non-Repeating Characters in a String:

Problem: Given a string, find all non-repeating characters.
Example:

Input: "leetcode"
Output: ["l", "t", "d"]
*/

function findAllNonRepeatingCharacters(str) {
    const charCount = {}
    const result = []

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1
    }

    // Find all characters with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            result.push(char)
        }
    }

    return result
}

// Test the function
console.log(findAllNonRepeatingCharacters("leetcode")); // Output: ["l", "t", "d"]
console.log(findAllNonRepeatingCharacters("aabbcc")); // Output: []
console.log(findAllNonRepeatingCharacters("aabbc")); // Output: ["c"]