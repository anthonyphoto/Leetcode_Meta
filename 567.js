// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// NOT PASSING ALL TEST
// var checkInclusion = function(s1, s2) {
//     let remain = s1;

//     for (let i = 0; i < s2.length; i++) {
//         console.log('--', i, s2[i], remain, )
//         if (!s1.includes(s2[i])) {
//             remain = s1;
//             continue;
//         }

//         const loc = remain.indexOf(s2[i]);
//         if (loc === -1) {
//             remain = s1;
//         } else {
//             remain = remain.slice(0, loc) + remain.slice(loc + 1);
//         }

//         if (remain === '') return true;
//     }
//     return false;
// };

// Brute Force
// const getPerm = str => {
//     if (str === '') return [''];

//     let out = [];

//     for (let i = 0; i < str.length; i++) {
//         const first = str[i];
//         const arr = str.split('');
//         [arr[i], arr[0]] = [arr[0], arr[i]];
//         const rest = arr.slice(1).join('');

//         const res = getPerm(rest);
//         // console.log('-res;',res)

//         for (let item of res) {
//             out.push(first + item);
//         }
//     }
//     return out;
// }

// var checkInclusion = function(s1, s2) {
//     const res = getPerm(s1);
//     for (let item of res) {
//         if (s2.includes(item)) return true;
//     }
//     return false;
// };

// sorting method
// time O(L2 * long l1 (l2 - l1)l1 long l)
// memory 
var checkInclusion = function(s1, s2) {
    const sortedS1 = s1.split('').sort().join('');
    console.log(sortedS1)
    const len = s1.length;

    const arr = s2.split('');

    const substrs = [];

    for (let i = 0; i < arr.length - len + 1; i++) {
        const substr = [];

        for (let j = i; j < len + i; j++) {
            if (!s1.includes(arr[j])) {
                break;
            }
            substr.push(arr[j]);
        }
        // console.log("-s:", substr)
        if (substr.length === len && substr.sort().join('')===sortedS1) {
            return true;
            // substrs.push(substr);
        }
        
    }

    return false;    

};


// const s1 = "ab";
// const s2 = "aabcdbeidb";
// const s2 = "eidbaooo";
const s1 = "adc";
const s2 = "dcda";

console.log(checkInclusion(s1, s2));