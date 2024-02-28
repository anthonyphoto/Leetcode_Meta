// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// const history = new Set();
// var subsets = function(nums, first = true) {
//     if (nums.length === 0) return [];

//     const out = [];
//     const key = nums.toString();
//     if (!history.has(key)) {
//         out.push(nums);
//         history.add(key);
//     }

//     for (let i = 0; i < nums.length; i++) {
//         const reduced = [...nums.slice(0,i), ...nums.slice(i+1)]
//         out.push(...subsets(reduced, false));
//     }
//     return first ? [[], ...out] : out;

// };

// O(N * 2^ N) copy (N) and all subset(2^N)
// Space the same.

let history = new Set();
var rec = function(nums) {
    if (nums.length === 0) return [];

    const out = [];
    const key = nums.toString();
    if (!history.has(key)) {
        out.push(nums);
        history.add(key);
    }

    for (let i = 0; i < nums.length; i++) {
        const reduced = [...nums.slice(0,i), ...nums.slice(i+1)]
        if (!history.has(reduced.toString())) { // Backtrace
            out.push(...rec(reduced));
        }
    }
    return out;

};

var subsets = function(nums) {
    history = new Set();

    if (nums.length === 0) return [];

    return [[], ...rec(nums)];

};

const nums = [1,2];
const res = subsets(nums);
console.log("RES:", res);

