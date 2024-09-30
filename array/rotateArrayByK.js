/*
Rotate an Array by 'k' Positions:

Problem: Given an array, rotate it by 'k' positions to the right.
Example:
Input: [1, 2, 3, 4, 5], k = 2
Output: [4, 5, 1, 2, 3]

*/

function rotateArrayByK(arr, k) {
    // Normalize k to be within array length
    k = k % arr.length;

    // Reverse the entire array
    reverse(arr, 0, arr.length - 1);

    // Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Reverse the remaining elements
    reverse(arr, k, arr.length - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example usage
console.log(rotateArrayByK([1, 2, 3, 4, 5, 6], 4)); // Output: [4, 5, 1, 2, 3]
