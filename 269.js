// 269. Alien Dictionary

// There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are sorted lexicographically by the rules of this new language.

// If this claim is incorrect, and the given arrangement of string in words cannot correspond to any order of letters, return "".

// Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.

 

// Example 1:

// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"

// Example 2:

// Input: words = ["z","x"]
// Output: "zx"

// Example 3:

// Input: words = ["z","x","z"]
// Output: ""
// Explanation: The order is invalid, so return "".

/**
 * @param {string[]} words
 * @return {string}
 */

class Word {
    constructor(val, pred=[]) {
        this.val = val;
        this.pred = pred;
    }
}

function addDep(arr, map) {
    // console.log('-', arr)
    if (arr.length === 0) return;
    // let prev = '';
    const order = [];
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        const first = arr[i].shift();
        subArr.push([...arr[i]]);

        if (i === arr.length - 1 || first !== arr[i + 1]) {
            subArr = subArr.filter(item => item.length > 0);
            if (subArr.length > 1) {
                addDep(subArr, map);
                subArr = [];    
            }
            order.push(first);
        } 

    }

    let prev = null;

    for (let i = 0; i < order.length; i++) {
        const cur = order[i];

        if (cur === prev) continue;

        const val = map[cur];
        if (val === undefined) {
            map.set(cur, []);
            if (prev) {
                // console.log("-?__ ", dep.get(cur));
                map.get(cur)?.push(prev);
            }
        } else {
            if (prev) val.push(prev);
        }
        
        prev = cur;

    }
}


function makeOrder(keys, map, visited = new Set()) {
    const res = [];
    console.log('-', keys, map)
    for (let key of keys) {
        const deps = map.get(key);
        res.push(...makeOrder(deps, map, visited));

        if (!visited.has(key)) {
            visited.add(key);
            res.push(key)
        }
    }
    return res;
}


var alienOrder = function(words) {
    const map = new Map();

    let arr = []; // array of array of character

    for (let i = 0; i < words.length; i++){
        arr.push(words[i].split(''));
    }
    addDep(arr, map)
    // console.log("DEP", map)

    // makeOrder()
    const keys = [];
    for (let key of map.keys()) {
        keys.push(key);
    }

   return makeOrder(keys, map).join('');
};


// const words = ["wrt","wrf","er","ett","rftt"];
const words = ["z","x","z"];
// const words = ["rt","rf"];
console.log('ANS:', alienOrder(words));
