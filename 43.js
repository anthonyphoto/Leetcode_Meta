// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const arr1 = num1.split('').map(ch => parseInt(ch));
    const arr2 = num2.split('').map(ch => parseInt(ch));

    let res = 0;

    let iDigit = 1;
    let jDigit = 1;

    for (let i = num1.length - 1; i >= 0; i--) {


        jDigit = 1;
        for (let j = num2.length - 1; j >= 0; j--) {
            // console.log(num1[i], num2[j])
            res += num1[i] * iDigit * num2[j] * jDigit;

            jDigit *= 10;
        }

        iDigit *= 10;


    }
    return res;
};


const num1 = "123";
const num2 = "456";

console.log(multiply(num1, num2))