ㅌ₩// 468 Validate IP Address
// Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00", and "192.168@1.1" are invalid IPv4 addresses.

// A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

//     1 <= xi.length <= 4
//     xi is a hexadecimal string which may contain digits, lowercase English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
//     Leading zeros are allowed in xi.

// For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

// const isLeadingZeros = str => {
//     return /^0+/.test(str);
// }

const isV4StrValid = str => {
    if (str.length === 0) return false;
    if (str.length !== 1 && str[0] === '0') return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') return false;
        // if (i !== str.length - 1 && str[i] === '0') return false;
    }
    return true;
}

const isV6StrValid = str => {
    const valid = '0123456789abcdefABCDEF';
    if (str.length < 1 || str.length > 4) return false;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!valid.includes(char)) return false;
    }
    return true;

}

// O(N)

/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if(queryIP.includes('.')) {
        const arr = queryIP.split('.');
        if (arr.length !== 4) return 'Neither';

        for (let i = 0; i < arr.length; i++) {
            if(!isV4StrValid(arr[i])) return 'Neither';
            const num = parseInt(arr[i], 10);
            if (num < 0 || num > 255) return 'Neither';
        }

        return 'IPv4';
        
    } else if (queryIP.includes(':')) {
        const arr = queryIP.split(':');
        if (arr.length !== 8) return 'Neither';

        for (let i = 0; i < arr.length; i++) {
            if(!isV6StrValid(arr[i])) return 'Neither';
        }
        
        return 'IPv6';
    } 

    return 'Neither';
};

const queryIP = "172.16.204.1";
// const queryIP = "1.0.1.";
const queryIP2 = "2001:0db8:85a3:0:0:8A2E:0370:7334";

console.log(validIPAddress(queryIP));
// console.log(validIPAddress("172.16.254.01"));
// console.log(validIPAddress("172.16.25s4.1"));
// console.log(validIPAddress("172..16.254.1"));
// console.log(validIPAddress("256.16.254.1"));
// console.log(validIPAddress("1.16.254.1"));
// console.log('-----------------------')
// console.log(validIPAddress(queryIP2));
// console.log(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334'));
// console.log(validIPAddress('2001:0dbx:8a3:0:0:8A2E:0370:7334'));
