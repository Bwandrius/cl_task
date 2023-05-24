const randArray = Array.from({length: 100}, () => Math.floor(Math.random() * 100) + 1);
const mixedArray = [6, 15, '150', 80, 'h', 73, 'ds55,', 38, null, 79, 'Y', 51, 7];

function findMinMax (arr) {
    let max = arr[0];
    let min = arr[0];
    
    for (let num of arr) {
    if (!Number.isInteger(num)) continue;
    if (num > max) max = num;
    if (num < min) min = num;
    }
    
    return `min: ${min} max: ${max}`
}

console.log(findMinMax(randArray));
console.log(findMinMax(mixedArray)); // expected => min: 6 max: 80