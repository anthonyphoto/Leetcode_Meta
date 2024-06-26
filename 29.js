// 29. Divide Two Integers

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.

// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// BRUTE O(N) N - dividend n - divisor 1 브루트
// Time(Log N)
// Space O(1)
var divide = function(dividend, divisor) {
    let isNegative = false;
    cnt = 0;
    let updatedDividend = dividend;
    if (dividend < 0) {
        isNegative = true;
        updatedDividend = -dividend;        
    }

    if (divisor < 0) {
        isNegative = !isNegative;
        divisor = -divisor;
    }

    let increment = 1;
    let updatedDivisor = divisor;

    while (updatedDividend >= divisor) {
        
        if (updatedDividend > updatedDivisor + updatedDivisor) {
            updatedDivisor = updatedDivisor << 1;
            increment = increment << 1;    
            // console.log("-:", updatedDividend, updatedDivisor, cnt, increment)
        }

        if (updatedDividend < updatedDivisor) {
            updatedDivisor = updatedDivisor >> 1;
            increment = increment >> 1;
            // console.log("--:", updatedDividend, updatedDivisor, cnt, increment)
            continue;
        }
        
        cnt += increment;
        // console.log("***CNT", cnt, increment)
        updatedDividend -= updatedDivisor;

    }

    if (isNegative) {
        cnt = -cnt;
    }

    if (cnt > Math.pow(2, 31) - 1) {
        cnt = Math.pow(2, 31) - 1;
    } else if (cnt < -Math.pow(2, 31)) {
        cnt = -Math.pow(2, 31);
    }

    return cnt;
    
};

console.log(divide(-2147483648, -1));
// console.log(divide(10, 3));
