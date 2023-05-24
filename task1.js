function reverseString (str) {
    if (typeof str !== 'string') return 'parameter is not a string'
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseString('')); // expected => ''
console.log(reverseString('Hello, World!')); // expected => '!dlroW ,olleH'
console.log(reverseString('Hello123')); // expected => '321olleH'
console.log(reverseString('AbCdEfG')); // expected => 'GfEdCbA'
console.log(reverseString(null)); // expected => 'parameter is not a string'
console.log(reverseString(undefined)); // expected => 'parameter is not a string'
console.log(reverseString(true)); // expected => 'parameter is not a string'
console.log(reverseString({})); // expected => 'parameter is not a string'
console.log(reverseString('This is a long string that will be used to test the performance of the reverse string function.')); // Check output and performance