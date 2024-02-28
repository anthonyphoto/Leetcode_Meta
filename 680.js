// 680. Valid Palindrome II
// Easy
// Topics
// Companies

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true

// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:

// Input: s = "abc"
// Output: false

 

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const arr = s.split('');
    if (arr.length <= 1) return true;

    let left = 0;
    let right = arr.length - 1;
    let diff = 0;

    while (left <= right) {
        // console.log(left, right)
        if (arr[left] === arr[right]){
            left++;
            right--;
        } else {

            if (arr[left + 1] === arr[right]){
                diff++;
                left++;
            } else if (arr[left] === arr[right - 1]) {
                diff++;
                right--;
            } else {
                return false;
            }
        }
        if (diff > 1) return false;
    }

    return diff <= 1;



};

const s = "abca";
console.log(validPalindrome(s));