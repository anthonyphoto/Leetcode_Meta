// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function check(arr, i, j, t) {
    const lookup = new Map();
    for (let k = 0; k < t.length; k++) {
        lookup.set(t[k], 0);
    }

    for (let k = i; k <= j; k++) {
        const cnt = lookup.get(arr[k]);
        if (cnt !== undefined) {
            lookup.set(arr[k], cnt + 1);
        }
    }

    for (let cnt of lookup.values()) {
        if (cnt === 0) return false;
    }
    return true;

}

var minWindow = function(s, t) {
    const arr = s.split('');

    let minStr = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            // console.log('-', arr.slice(i, j+1))
            if (check(arr, i, j, t)) {
                const key = arr.slice(i, j + 1).join('');
                if (minStr === '') {
                    minStr = key;
                } else if (key.length < minStr.length) {
                    minStr = key;
                }


            }

        }
    }
    return minStr;

    // return '';
};

const s = "ADOBECODEBANC";
// const s = "DABC";
const t = "ABC";
console.log(minWindow(s, t));