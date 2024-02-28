// 247. Given an integer n, return all the strobogrammatic numbers that are of length n. You may return the answer in any order.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 

// Example 1:

// Input: n = 2
// Output: ["11","69","88","96"]

// Example 2:

// Input: n = 1
// Output: ["0","1","8"]



/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n, isFirst=true) {
    const nums = ['0', '1', '8', ['6', '9'], ['9', '6']];
    
    let out = [];

    if (n === 0) return [''];
    if (n === 1) {
        
        for (let item of nums) {
            if (item.length === 1) {
                out.push(item);
            }
        }
        return out;
    }

    for (let item of nums) {
        if (item[0] === '0' && isFirst) continue;
        const first = item[0];
        const last = item.length > 1 ? item[1] : item[0];
        const res = findStrobogrammatic(n - 2, false);
        out.push(...res.map(prev => first + prev + last))
    }

    return out;

};


console.log(findStrobogrammatic(1));