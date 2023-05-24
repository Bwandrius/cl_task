// create an array 
let randArray = new Array(100);
for (let i = 0; i < randArray.length; i++) {
    randArray[i] = Math.floor(Math.random() * 100) + 1;
}

function findDuplicates (arr) {
    // storing duplicate numbers and duplicate array length
    let duplicates = [];
    let dupLength = 0;

    // using an array of zeroes to track how many times each number appears
    let counts = new Array(101);
    for (let i = 0; i < counts.length; i++) {
        counts[i] = 0;
    }
    
    // counting appearances of each number
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    
    // populating the duplicates array
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 1) {
            duplicates[dupLength] = {num: i, count: counts[i]};
            dupLength++;
        }
    }
    
    // JUST THE DUPLICATES THEMSELVES:
    // for (let i = 0; i < counts.length; i++) {
    //     if (counts[i] > 1) {
    //         duplicates[dupLength] = i;
    //         dupLength++;
    //     }
    // }

   
    return duplicates;
}

console.log(findDuplicates(randArray));




