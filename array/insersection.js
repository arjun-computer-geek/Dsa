/*
Find the Intersection of Two Arrays:

Problem: Given two arrays, return their intersection.
Example:

Input: [1, 2, 2, 1], [2, 2]
Output: [2, 2]
*/

function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1)
    const intersection = []

    for (const num of arr2) {
        if (set1.has(num)) {
            intersection.push(num)
            set1.delete(num); // To handle duplicates
        }
    }

    return intersection
}

// Test the function
const array1 = [1, 2, 2, 1]
const array2 = [2, 2]
console.log(findIntersection(array1, array2)); // Output: [2, 2]