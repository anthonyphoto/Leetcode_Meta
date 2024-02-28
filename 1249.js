// 1249. Minimum Remove to Make Valid Parentheses
// Medium
// Topics
// Companies
// Hint

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

//     It is the empty string, contains only lowercase characters, or
//     It can be written as AB (A concatenated with B), where A and B are valid strings, or
//     It can be written as (A), where A is a valid string.

 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.



/**
 * @param {string} s
 * @return {string}
 */

// O(n) where n = number of string
var minRemoveToMakeValid = function(s) {
    const arr = s.split('');
    const stack = [];
    const toDelete = new Set();

    for (let i = 0; i < arr.length; i++) {
        const ch = arr[i];
        if (ch === '(') {
            stack.push([ch, i]);
        } else if(ch === ')') {
            if (stack.length === 0) {
                toDelete.add(i);
            } else {
                stack.pop();
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        toDelete.add(stack[i][1]);
    }

    const out = [];

    for (let i = 0; i < arr.length; i++) {
        if (!toDelete.has(i)) out.push(arr[i])
    }

    return out.join('');
    
};

const s = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s));