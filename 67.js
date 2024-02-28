// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const arr1 = a.split('');
    const arr2 = b.split('');

    let ind1 = arr1.length - 1;
    let ind2 = arr2.length - 1;
    let res = [];
    let carryover = 0;

    while (ind1 >= 0 || ind2 >= 0) {
        const num1 = ind1 < 0 ? 0 : parseInt(arr1[ind1], 10);
        const num2 = ind2 < 0 ? 0 : parseInt(arr2[ind2], 10);
        const sum = num1 + num2 + carryover;
        const newDigit = (sum % 2).toString();
        // console.log('-', ind1, ind2, sum, newDigit)
        carryover = parseInt(sum / 2, 10) ;

        res = [newDigit, ...res];
        ind1--;
        ind2--;

    }

    if (carryover === 1) {
        res = ['1', ...res];
    }
    // console.log("res", res)

    return res.join('');
    
};

const a = "1010"; 
const b = "1011";

console.log(addBinary(a,b));


