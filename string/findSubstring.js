/*
Find All Substrings of a String:

Problem: Given a string, find all possible substrings.
Example:

Input: "abc"
Output: ["a", "ab", "abc", "b", "bc", "c"]
*/

function findAllSubstrings(str) {
    const substrings = []

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j))
        }
    }

    return substrings
}

// Test the function
const input = "abc"
console.log(findAllSubstrings(input))