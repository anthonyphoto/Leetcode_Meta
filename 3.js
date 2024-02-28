// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */


// Brute Force O(N^3)
// Space O(m)
// const check = (arr, left, right) => {
//     const lookup = new Set();
//     // console.log(arr, left, right)
    
//     for (let i = left; i <= right; i++) {
//         // console.log('-',arr[i])
//         if (lookup.has(arr[i])) {
//             return false;
//         } 
//         lookup.add(arr[i]);

//     }
//     // console.log("---", left, right)
//     return true;
// }

// var lengthOfLongestSubstring = function(s) {

//     let longest = 0;

//     const arr = s.split('');
//     for (let i = 0; i < arr.length; i++){


//         for (let j = i; j < arr.length; j++) {

//             if (check(arr, i, j)) {
//                 // console.log("**", i, j)
//                 longest = Math.max(longest, j - i + 1)
//             }
//         }
        
//     }
//     return longest;
    
// };

// Sliding Window Prob O(N)
// Space O(m) m = # of alphabet characters
var lengthOfLongestSubstring = function(s) {
    const arr = s.split('');
    if (arr.length === 0) return 0;

    let left = 0;
    let right = 0;
    let longest = 1;

    const lookup = new Set();

    while (right < arr.length) {
        if (lookup.has(arr[right])) {
            lookup.delete(arr[left]);
            left++;
        } else {
            lookup.add(arr[right]);
            longest = Math.max(longest, lookup.size);
            right++;
        }
        


    }

    return longest;


    
};


const s = "pwwkew";
// const s = "bbbbb";
console.log(lengthOfLongestSubstring(s));

