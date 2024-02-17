/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || nums.length < 3) return [];

    const sort = [...nums]; 
    sort.sort((a, b) => a - b); // -4, -1, -1, 0, 1, 2
    const result = [];
    const history = new Set();

    for (let i = 0; i < sort.length - 2; i++) {
        const first = i;
        let second = i + 1;
        let third = sort.length - 1;
        while (second < third){
            const sum = sort[first] + sort[second] + sort[third];
            if (sum === 0) {
                // const key = `${sort[first]},${sort[second]},${sort[third]}`;
                const ans = [sort[first], sort[second], sort[third]];
                key = ans.toString();

                if (!history.has(key)) {
                    history.add(key);
                    result.push(ans);    
                }
                second++;
                third = sort.length -1;
            } else if (sum < 0) {
                second++;
            } else {
                third--;
            }
        }
    }
    return result;
    
};

nums = [-1,0,1,2,-1,-4];    //Output: [[-1,-1,2],[-1,0,1]]
const res = threeSum(nums);

console.log(res);

// Big O : n^2 오ㅐ냐면 sort n*logn  nested for loop
// Space: sort (n 혹은 log n), history n^2 보통 result (n^2)는 뺌




// 15. 3Sum
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105