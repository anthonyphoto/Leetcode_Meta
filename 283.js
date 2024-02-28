// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let left = 0;
    let right = 0;
    let cnt = 0;
    while (left < nums.length) {
        if (right >= nums.length) {
            nums[left++] = 0;
            continue;
        }

        const num = nums[right];
        if (num === 0) {
            cnt++;
        } else {
            nums[left++] = num;

        }

        right++;

    }
    
};


// const nums = [0,1,0,3,12];
const nums = [0];
moveZeroes(nums);
console.log(nums);
