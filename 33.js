// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:

// Input: nums = [1], target = 0
// Output: -1


// Time O(log N)
// Space O(lon N) - *Recursive Callstack*
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, left = 0) {
    if (nums.length === 0) return -1;

    const first = nums[0];
    const last = nums[nums.length - 1];

    let result = -1;
    const mid = parseInt(nums.length/2);
    if (nums[mid] === target) return (mid + left);

    if (first < last) { // sorted sub-array
        if (target < nums[mid]) {
            return search(nums.slice(0, mid), target, left);
        } else {
            return search(nums.slice(mid + 1), target, left + mid + 1);
        }
    } else {
        const leftRes = search(nums.slice(0, mid), target, left);
        const rightRes = search(nums.slice(mid + 1), target, left + mid + 1);
        return leftRes !== -1 ? leftRes : rightRes;
    }

    
};

const nums = [4,5,6,7,0,1,2];
console.log(search(nums, 3));
