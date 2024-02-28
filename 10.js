// 10. Regular Expression Matching

// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

//     '.' Matches any single character.​​​​
//     '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".

// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function compare(s, p) {
    console.log('-', s, p);
    if (s === null || p === null) {
        return (s === p) ? true : false;
    }

    const firstS = s.shift();
    const firstP = p.shift();
    
    if (firstP === '*') return true;

    if (firstS === firstP || firstP === '.') {
        return compare(s, p);

    } else return false;
}


var isMatch = function(s, p) {
    const str = s.split('');
    const pat = p.split('');
    return compare(str, pat);


};

// const s = "aa"; const p = "a*";
const s = "aa"; const p = "a";
console.log(isMatch(s, p));