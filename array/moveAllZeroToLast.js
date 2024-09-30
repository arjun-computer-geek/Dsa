/*
Move All Zeros to the End of the Array:

Problem: Move all zeros in an array to the end while maintaining the relative order of other elements.
Example:

Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]
*/

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0

    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i]
            nonZeroIndex++
        }
    }

    // Fill the rest with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0
    }

    return arr
}

// Test the function
const input = [0, 1, 0, 3, 12]
console.log(moveZerosToEnd(input)); // Output: [1, 3, 12, 0, 0]