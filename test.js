let numbers =[23, 53, 6, 34, 69, 23, 86];

let secondLargesrNumber = numbers.sort(((a, b) => a - b))[numbers.length - 2]

// console.log(secondLargesrNumber);


const anArray = [34, 32, 92, 62, 93, 103, 68, 36, 86];

let arrayLength = anArray.length;
let secondLargestNumber = anArray.sort((a, b) => a - b);

console.log(secondLargestNumber);