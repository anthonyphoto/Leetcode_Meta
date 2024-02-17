// 노트
// 숫자 array [1, 2, 3] 이라고 하면 숫자로 바꿔서 123 이렇게 커지는 순서임
// Permutation의 마지막 permutation은 reverse order로 되어 있음
// 1. array 마지막에서 시작해서 앞에 숫자가 작아지곡점 (x) 그 순간 멈춘다. (작아지는 점이 없으면 마지막 perm)
// 2. x와 그 후의 sub array에서 x보다 큰 수 중에서 제일 작은 수를 골라서 swap 한다. 
// 3. swap후에 나머지 sub arry를 작은순서대로 sort한다. 
// O(n^2) 내 생각
// Space 는 arr만 썼음 n


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length;
    for (let i = len - 1; i > 0; i--) {  // iterate n-1, ... 2, 1 

        if (nums[i-1] < nums[i]) {
            const target = i - 1;
            let j = len - 1;
            while(target < j) {
                if (nums[target]<nums[j]) {
                    [nums[target], nums[j]] = [nums[j], nums[target]];
                    break;
                }
                j--;
            }

            const arr = nums.slice(i);
            arr.sort((a, b) => a - b);

            for (let j=i; j < len; j++) {
                nums[j] = arr[j - i];
            }
            return;
        }
    }
    // perm is in reverse order
    nums.sort((a, b) => a - b);
};


const nums = [2, 3, 1]; // -> 3,1,2
// const nums = [3, 2, 1]; // 
// const nums = [1, 3, 2]; // -> 2,1,3
// const nums = [1, 5, 4, 3, 2]; // 2, 1, 2, 3, 4
nextPermutation(nums);
console.log(nums);



// Warming up 퍼뮤테이션 갖기

const arr = [1, 2, 3];

const perm = (arr, res, leftArray=[]) => {
    if (arr.length === 0) {
        res.push(leftArray)
        return;
    };

    for (let i = 0; i < arr.length; i++) {
        const newArr = [...arr];
        const newLeftArray = [...leftArray, newArr[i]];
        const rest = newArr.filter((_, ind) => ind !== i);
        perm(rest, res, newLeftArray);
    }
}
// const res = []
// perm(arr, res);
// console.log(res);







// Next Permutation
// permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.

// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
