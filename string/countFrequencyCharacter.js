/*
Count the Frequency of Characters in a String:

Problem: Count how many times each character appears in a string.
Example:

Input: "character"
Output: {'c': 2, 'h': 1, 'a': 2, 'r': 2, 't': 1, 'e': 1}
*/

function countCharacterFrequency(str) {
    const frequencyMap = {}

    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1
    }

    return frequencyMap
}

// Test the function
console.log(countCharacterFrequency("character"))

/*
Count the Frequency of Characters in a String: (With reduce)

Problem: Count how many times each character appears in a string.
Example:

Input: "character"
Output: {'c': 2, 'h': 1, 'a': 2, 'r': 2, 't': 1, 'e': 1}
*/

function countCharacterFrequency(str) {
    return str.split('').reduce((frequencyMap, char) => {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1
        return frequencyMap
    }, {})
}

// Test the function
console.log(countCharacterFrequency("character"))