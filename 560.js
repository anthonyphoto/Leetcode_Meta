// 560 Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a *contiguous* non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// brute force O(N^3)
var subarraySumBruteForce = function(nums, k) { 
    const lookup = new Set();

    let cnt = 0;

    for (let i = 0; i < nums.length; i++){
        for (let j = i; j < nums.length; j++) {
            const arr = [nums[i], ...nums.slice(i+1, j+1)];
            const key = arr.toString();
            if (lookup.has(key)) {
                cnt++;
                continue;
            }
            const sum = arr.reduce((acc, cur) => acc + cur, 0);
            if (sum === k) {
                cnt++;
                lookup.add(key);
            } 
        }
    }
    return cnt;
};

// O(N^2)
var subarraySum = function(nums, k) {    

    let cnt = 0;

    for (let i = 0; i < nums.length; i++){
        let prevSum = 0;
        for (let j = i; j < nums.length; j++) {
            prevSum += nums[j];
            // const arr = [nums[i], ...nums.slice(i+1, j+1)];
            // const sum = arr.reduce((acc, cur) => acc + cur, 0);
            if (prevSum === k) {
                cnt++;
            }
        }
    }
    return cnt;
};


// const nums = [1, 1, 1]; const k = 2;
// const nums = [1, 2, 3]; const k = 3;
const nums = [1, -1, 0]; const k = 0;

console.log("Ans: ", subarraySum(nums, k));