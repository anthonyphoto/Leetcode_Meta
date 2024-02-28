// 791. Custom Sort String
// Medium
// Topics
// Companies

// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.

 

// Example 1:

// Input: order = "cba", s = "abcd"
// Output: "cbad"
// Explanation: 
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a". 
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

// Example 2:

// Input: order = "cbafg", s = "abcd"
// Output: "cbad"

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

// var customSortString = function(order, s) {
//     if (s === '') return '';
//     let str = s.split('');

//     const out = [];

//     for (let i = 0; i < order.length; i++) {
//         const ch = order[i];
//         if (str.includes(ch)) {
//             let tmp = [];
//             for (let j = 0; j < str.length; j++) {
//                 if (str[j] === ch) {
//                     out.push(ch);
//                 } else {
//                     tmp.push(str[j]);
//                 }
//                 str = tmp;



//             }
//             // const ind = str.indexOf(ch);
//             // str.splice(ind, 1)
//             // str = str.filter(item => item !== ch);
//             // out.push(ch);
//         }
//     }
//     out.push(...str);
//     return out.join('');
// };

var customSortString = function(order, s) {
    if (s === '') return '';
    let str = s.split('');
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], 1);
        } else {
            const cnt = map.get(str[i]) + 1;
            map.set(str[i], cnt);
    
        }
    }


    const out = [];

    for (let i = 0; i < order.length; i++) {
        const cnt = map.get(order[i]);
        for (j = 0; j < cnt; j++) {
            out.push(order[i]);
        }
        map.delete(order[i]);
    }

    for (let [key, cnt] of map.entries()) {
        // const cnt = map.get(ch);
        for (j = 0; j < cnt; j++) {
            out.push(key);
        }
    }

    return out.join('');

    // const out = [];

    // for (let i = 0; i < order.length; i++) {
    //     const ch = order[i];
    //     if (str.includes(ch)) {
    //         let tmp = [];
    //         for (let j = 0; j < str.length; j++) {
    //             if (str[j] === ch) {
    //                 out.push(ch);
    //             } else {
    //                 tmp.push(str[j]);
    //             }
    //             str = tmp;



    //         }
    //         // const ind = str.indexOf(ch);
    //         // str.splice(ind, 1)
    //         // str = str.filter(item => item !== ch);
    //         // out.push(ch);
    //     }
    // }
    // out.push(...str);
    // return out.join('');
};


// const order = "cba"; 
// const s = "abcd";

const order = "kqep"; 
const s = "pekeq";
console.log(customSortString(order, s))
