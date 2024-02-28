// 215. Kth Largest Element in an Array
// Medium
// Topics
// Companies

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    const pq = new PQ();
    for (let i = 0; i < nums.length; i++) { // array를 heap으로 바꾸는건 n*logn이지만 O(n)으로도 가능
        pq.push(nums[i)); // log n
    }

    let out;

    for (let i = 0; i < k; i++) {
        out = pq.pop()
    }




    
};