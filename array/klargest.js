/*
Find the "Kth" Largest Element in an Array:

Problem: Given an array, find the Kth largest element.
Example:
Input: [3, 2, 1, 5, 6, 4], k = 2
Output: 5
*/

function findKthLargest(nums, k) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a)

    // Return the kth element (1-indexed)
    return nums[k - 1]
}

// Test the function
const arr1 = [3, 2, 1, 5, 6, 4]
const k1 = 2
console.log(findKthLargest(arr1, k1)); // Output: 5

function findKthLargest(nums, k) {
    const n = nums.length;
    return quickSelect(nums, 0, n - 1, n - k);
}

function quickSelect(nums, left, right, k) {
    if (left === right) return nums[left];

    const pivotIndex = partition(nums, left, right);

    if (k === pivotIndex) {
        return nums[k];
    } else if (k < pivotIndex) {
        return quickSelect(nums, left, pivotIndex - 1, k);
    } else {
        return quickSelect(nums, pivotIndex + 1, right, k);
    }
}

function partition(nums, left, right) {
    const pivot = nums[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (nums[j] <= pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }

    [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];
    return i + 1;
}

// Test the function
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(arr, k)); // Output: 5
