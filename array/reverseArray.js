/*
Reverse an Array:

Problem: Given an array, reverse the array in-place.
Example:
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

*/

const reverseArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

const reverseArrayWithoutTemp = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        // XOR swap algorithm
        // Step 1: XOR the values at start and end indices
        arr[start] = arr[start] ^ arr[end];

        // Step 2: XOR the result with the value at end index
        // This gives us the original value that was at start
        arr[end] = arr[start] ^ arr[end];

        // Step 3: XOR the result from step 1 with the new value at end
        // This gives us the original value that was at end
        arr[start] = arr[start] ^ arr[end];

        // Move the pointers
        start++;
        end--;
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
console.log(reverseArrayWithoutTemp(arr));
