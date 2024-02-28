// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const lookup = new Map();   // key of sorted string and array of its original words

    for (let str of strs) {
        const key = str.split('').sort().join('');
        const val = lookup.get(key);

        if (!val) {
            lookup.set(key, [ str ]);
        } else {
            val.push(str);
        }
    }

    const res = [];
    // console.log(lookup)

    for (let val of lookup.values()) {
        // console.log(lookup.get(key))
        res.push(val);
    }

    return res;


};

const strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));