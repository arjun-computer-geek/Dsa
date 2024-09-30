/*
Find All Pairs That Sum Up to a Specific Value:

Problem: Find all unique pairs in an array that sum up to a given target.
Example:
Input: [1, 2, 3, 4, 5], Target: 6
Output: [[1, 5], [2, 4]]
*/

function findAllPairs(arr, target) {
    const result = []
    const seen = new Set()

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]
        if (seen.has(complement)) {
            result.push([complement, arr[i]])
        }
        seen.add(arr[i])
    }

    return result
}

// Example usage
const input = [1, 2, 3, 4, 5]
const target = 6
console.log(findAllPairs(input, target)); // Output: [[1, 5], [2, 4]]