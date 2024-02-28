// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]



// Time Complexity: O(N * N!) 처음 O(N)는 map펑션
// Space: Same O(N*N!)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, first = true) {
    if (nums.length === 0) {
        return first ? [] : [[]];
    }
    let out = [];

    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
        const res = permute(rest, false).map(item => ([first, ...item]));
        out.push(...res);
    }
    return out;
};

const nums = [1, 2, 3];

console.log(permute(nums));
