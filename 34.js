// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]



// log(n)
// log(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const getResult = (res1, res2) => {
    if (res1[0] === -1 && res2[0] === -1) {
        return res1;
    } else if (res1[0] === -1) {
        return res2;
    } else if (res2[0] === -1) {
        return res1;
    } else {
        return [
            res1[0] < res2[0] ? res1[0] : res2[0],
            res1[1] < res2[1] ? res2[1] : res1[1]
        ]
    }
}

var searchRange = function(nums, target, left = 0) {
    console.log('-:',nums, left);
    const res = [-1, -1];
    if (nums.length === 0) return res;

    const mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) {
        console.log('--mid:', mid, left)
        if (res[0] === -1) {
            res[0] = mid + left;
            res[1] = mid + left;
        } else {
            if (res[0] < mid) res[0] = mid + left;
            if (res[1] > mid) res[1] = mid + left;
        }
    }

    if (target < nums[mid]) {
        const leftRes = searchRange(nums.slice(0, mid), target, left);
        
        return getResult(res, leftRes);
    } else if (target > nums[mid]) {
        const rightRes = searchRange(nums.slice(mid + 1), target, left + mid + 1);
        return getResult(res, rightRes);
    } else {
        const leftRes = searchRange(nums.slice(0, mid), target, left);
        const rightRes = searchRange(nums.slice(mid + 1), target, left + mid + 1);
        const merge = getResult(leftRes, rightRes);
        return getResult(res, merge);
    }    
};


const nums = [5,7,7,8,8,10];
console.log(searchRange(nums, 8));