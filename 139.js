// 139. Word Break
// Medium
// Topics
// Companies

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false



/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// O(m^n) where n is input string length.. and m is word Dic size
// Space O(n) - call stack usage


// Hash solution: O(m * n^2)
// hash table O(n^2)
var wordBreak = function(s, wordDict, history = new Map()) {
    if (s === '') return true;
    // console.log("--", s)

    if (history.get(s)) return history.get(s);

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
        const word = wordDict[i];


        const first = s.substr(0, word.length);
        if (first === word) {
            res = res || wordBreak(s.substr(word.length), wordDict);
        }
    }
    history.set(s, res);
    return res;
};

// const s = 'catsandog';
// const wordDict = ["cats","dog","sand","and","cat"];

const s = 'applepenapple';
const wordDict = ["apple","pen"];
console.log(wordBreak(s, wordDict));