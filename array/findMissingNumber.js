/*
Find the Missing Number:

Problem: Given an array containing n distinct numbers in the range [0, n], find the missing number.
Example:

Input: [3, 0, 1]
Output: 2
*/

function findMissingNumber(nums) {
    const n = nums.length
    const expectedSum = (n * (n + 1)) / 2
    const actualSum = nums.reduce((sum, num) => sum + num, 0)
    return expectedSum - actualSum
}

// Test the function
console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
console.log(findMissingNumber([0, 1])); // Output: 2