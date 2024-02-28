// 159. Longest Substring with At Most Two Distinct Characters
// Medium
// Topics
// Companies

// Given a string s, return the length of the longest
// substring
// that contains at most two distinct characters.

 

// Example 1:

// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.

// Example 2:

// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const lookup = new Map();

    let left = 0;
    let right = 0;
    const arr = s.split('');

    let distinct = 0;

    let longest = 0;

    lookup.set(arr[0], 1);



    while(left < arr.length && right < arr.length) {
        // console.log("-", left, right)
        
        if (lookup.size <= k) {
            longest = Math.max(longest, right - left + 1);
        }
        
        if (lookup.size <= k) {
            // console.log("-r", left, right)
            
            right++;
            const ch = arr[right];

            if (lookup.get(ch)) {
                lookup.set(ch, lookup.get(ch) + 1);
            } else {
                lookup.set(ch, 1);
            }
    
        } else if (lookup.size > k) {
            const ch = arr[left];
            const val = lookup.get(ch);
            if (val > 1) {
                lookup.set(ch, val - 1);
            } else {
                lookup.delete(ch);
            }
            left++;
        } 

    }
    return longest;
    
};

// const s = "eceba";
const s = "aa";
console.log(lengthOfLongestSubstringKDistinct(s, 1));
