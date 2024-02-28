// 273. Integer to English Words

// Convert a non-negative integer num to its English words representation.

 

// Example 1:

// Input: num = 123
// Output: "One Hundred Twenty Three"

// Example 2:

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Example 3:

// Input: num = 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"


/**
 * @param {number} num
 * @return {string}
 */
function convertString(num) {
    const numToStr = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [13, ''],
        [13, ''],
        [13, ''],
        [13, ''],
        [13, ''],
    ]);
    let out = '';
    if (num > 100) {
        
    }
    return num;
}

var numberToWords = function(num) {
    const klist = [];
    const units = new Map([
        [ 0, ''],
        [ 1, 'Thousand'],
        [ 2, 'Million']
    ]);

    let knum = num;

    while (knum > 0) {
        klist.push(knum % 1000);
        knum = parseInt(knum / 1000);
    }

    let out = '';
    for (let i = klist.length - 1; i >= 0; i--) {
        out += convertString(klist[i]) + ' ' + units.get(i) + ' ';

    }

    console.log(klist)
    return out;



    
};


console.log(numberToWords(1234567));