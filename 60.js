// 60. One Edit Distance

// Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

// A string s is said to be one distance apart from a string t if you can:

//     Insert exactly one character into s to get t.
//     Delete exactly one character from s to get t.
//     Replace exactly one character of s with a different character to get t.
// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.

// Example 2:

// Input: s = "", t = ""
// Output: false
// Explanation: We cannot get t from s by only one step.

// O(N)


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    const diff = s.length - t.length;

    if (Math.abs(diff)===1) {
        const long = diff > 0 ? s : t;
        const short = diff > 0 ? t : s;

        let cnt = 0;
        let j = 0;

        for (let i = 0; i < long.length; i++) {
            if (long[i] === short[j]) {
                j++;
            } else {
                cnt++;
                if (cnt > 1) return false;
            }

        }
        return cnt <= 1;

    } else if (diff === 0) { // edit
        let cnt = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== t[i]) {
                cnt++;
                if (cnt > 1) return false;
            }
        }

        return cnt !== 0;

    } else {
        return false;
    }
};


const s = 'ab2';
const t = 'ab2';

console.log(isOneEditDistance(s,t));