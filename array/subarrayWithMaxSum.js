/*
Find the Contiguous Subarray with the Maximum Sum:

Problem: Given an array, find the contiguous subarray that has the largest sum.
Example:

Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray: [4,-1,2,1])
*/

function maxSubarraySum(arr) {
    let maxSum = arr[0]
    let currentSum = arr[0]
    let start = 0
    let end = 0
    let tempStart = 0

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] > arr[i]) {
            currentSum += arr[i]
        } else {
            currentSum = arr[i]
            tempStart = i
        }

        if (currentSum > maxSum) {
            maxSum = currentSum
            start = tempStart
            end = i
        }
    }

    return {
        maxSum: maxSum,
        subarray: arr.slice(start, end + 1)
    }
}

// Test the function
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const result = maxSubarraySum(input)
console.log(`Maximum sum: ${result.maxSum}`)
console.log(`Subarray: [${result.subarray.join(',')}]`)