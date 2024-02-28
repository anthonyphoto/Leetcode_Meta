// 349. Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     let left = 0;
//     let right = 0;
//     let out = [];

//     while (left < nums1.length && right < nums2.length) {

//         const leftVal = nums1[left];
//         const rightVal = nums2[right];
        
//         if (leftVal === rightVal ) {
//             out.push(leftVal);
//             left++;
//             right++;
//         } else if (leftVal < rightVal ) {
//             left++;
//         } else {
//             right++;
//         }
//     }

//     return out;
    
// };

var intersection = function(nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    const out = [];

    for (let num1 of num1Set) {
        if (num2Set.has(num1)) out.push(num1);
    }

    return out;



    
};


const nums1 = [1,2,2,1];
const nums2 = [2,2];

console.log(intersection(nums1, nums2))