/*
Find the Number of Duplicates in an Array:

Problem: Count the number of duplicate elements in an array.
Example:

Input: [1, 2, 3, 4, 4, 5, 5]
Output: Duplicates = [4, 5]
*/

function findDuplicates(arr) {
    const counts = {}
    const duplicates = []

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1
        if (counts[num] === 2) {
            duplicates.push(num)
        }
    }

    return duplicates
}

// Test the function
const input = [1, 2, 3, 4, 4, 5, 5]
const result = findDuplicates(input)
console.log("Duplicates =", result)