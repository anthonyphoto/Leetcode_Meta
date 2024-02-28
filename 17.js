// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:

// Input: digits = ""
// Output: []

// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]


// Time Complextity: O(4^N * N)
// Space: O(N) Recursion Call Stack- Hash map does not grow (O(1))
/**
 * @param {string} digits
 * @return {string[]}
 */
const lookup = new Map();
lookup.set('2', ['a', 'b', 'c']);
lookup.set('3', ['d', 'e', 'f']);
lookup.set('4', ['g', 'h', 'i']);
lookup.set('5', ['j', 'k', 'l']);
lookup.set('6', ['m', 'n', 'o']);
lookup.set('7', ['p', 'q', 'r', 's']);
lookup.set('8', ['t', 'u', 'v']);
lookup.set('9', ['w', 'x', 'y', 'z']);


const rec = digits => {
    if (digits === '') return [''];

    const first = digits[0];
    const rest = digits.slice(1);
    const letters = lookup.get(first);

    let out = [];

    for (let letter of letters) {
        const result = rec(rest);        
        out.push(...result.map(item => letter + item));
    }

    return out;    
}

var letterCombinations = function(digits) {
    if (digits === '') return [];
    return rec(digits);
};


const res = letterCombinations('23');
console.log(res)
