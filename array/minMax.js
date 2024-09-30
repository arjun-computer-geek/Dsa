// Find the Maximum and Minimum in an Array:

// Problem: Given an array, find the largest and smallest elements in it.

// Example:
// Input: [3, 5, 1, 8, 4]
// Output: Maximum = 8, Minimum = 1

const findMinMax = arr => {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}
const arr = [3, 5, 1, 8, 4];
const { min, max } = findMinMax(arr);
console.log("Minimum:", min);
console.log("Maximum:", max);
