// 47. Permutations II

// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

 

// Constraints:

//     1 <= nums.length <= 8
//     -10 <= nums[i] <= 10



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1) return [nums];

    let out = [];

    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        const subArr = nums.filter((_, ind) => i !== ind);
        
        const res = permuteUnique(subArr)
        out.push(...res.map(item => [first, ...item]));
        // out = [...out, ...res.map(item => [first, ...item])];
    }

    return out;
};

const num = [1, 2, 3];

console.log(permuteUnique(num))