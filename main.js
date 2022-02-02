// প্রাকটিস প্রব্লেম-

// 1. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

// 2. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

// 3. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

// 4. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

// 5. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

// 6. Write a function that takes a three-parameter and outputs the biggest number.

// 7. Write a function that takes an array as parameter and outputs the biggest number.





// =============  Solution  =============

// 1. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

const numbers = [34, 53, 23, 60, 69, 34, 73, 4, 62, 98];

let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let arrayNumber = numbers[i];
  if (arrayNumber < lowest) {
    lowest = arrayNumber;
  }
}

// console.log(lowest);

// 2. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

function lowNum(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is the Lowest Number.`);
  } else if (num2 < num1 && num2 < num3) {
    console.log(`${num2} is the Lowest Number.`);
  } else {
    console.log(num3, "is the Lowest Number.");
  }
}

// lowNum(43, 34, 4);

// 3. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে।

function findAverge(arrayOfAvg) {
  let sum = 0;
  let totalLenth = arrayOfAvg.length;
  for (let i = 0; i < arrayOfAvg.length; i++) {
    sum += arrayOfAvg[i];
  }

  return (avg = sum / totalLenth);
}

let simpleArray = [10, 20, 30];
// console.log(findAverge(simpleArray));

// 4. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

function areaOfRectangle(height, lenth) {
  return (area = height * lenth);
}

// console.log(areaOfRectangle(24, 3));

// 5. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

const anArray = [34, 32, 92, 62, 93, 103, 68, 36, 86]

let arrayLength = anArray.length;
let secondLargestNumber = anArray.sort(((a, b) => a - b))[arrayLength - 2];

// console.log(secondLargestNumber);


// 6. Write a function that takes a three-parameter and outputs the biggest number.
function bigNum(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is the Biggest Number.`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is the Biggest Number.`);
  } else {
    console.log(num3, "is the Biggest Number.");
  }
}

// bigNum(33, 34, 3);


// 7. Write a function that takes an array as parameter and outputs the biggest number.


function highestNum(numArray){

  let highNum = numArray[0];

  for(let i = 0; i < numArray.length; i++){
    if(numArray[i] > highNum){
      highNum = numArray[i]
    }
  }
  return highNum;

}


// console.log(highestNum([34, 23, 23, 69, 62, 98, 123, 83]));



// 8. কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second lowest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

const anArray2 = [34, 12, 32, 92, 62, 93, 103, 22, 68, 36, 86]

let secondLowestNumber = anArray2.sort(((a, b) => a - b))[1];

console.log(secondLowestNumber);
