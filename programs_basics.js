// Given these variables:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let integers = [1, 2, 3, 4, 5];
let number = 12;
// invoke the function
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
console.log(integers.toString()); // 1,2,3,4,5
console.log(number.toString()); // 12

// Hoisting:
function Add() {
  console.log(answer);
  var answer = 2;
}
// invoke the function
Add(); // undefined

// Swapping two strings:
function stringSwap(str1, str2) {
  [str1, str2] = [str2, str1];
  return str1 + " " + str2;
}
// invoke the function
console.log(stringSwap("Mwanika", "Stephen")); // Stephen Mwanika

// Swapping values:
let [x, y] = [1, 2]; // Same as var x=1, y=2
[x, y] = [x + 1, y + 1]; // Same as x=x+1, y=y+1
console.log([x, y]); // Prints [2,3]
[x, y] = [y, x]; // Swap the value of the two variables
console.log([x, y]); // Prints [3,2]

// Strings as Arrays -> chartAt()
var str = "test";
console.log(str.charAt(0)); // same as console.log(str[0]) => "t"
console.log(str[1]); // "e"

// Arrays -> indexOf(), lastIndexOf()
var arr = [0, 1, 2, 1, 0];
console.log(arr.indexOf[1]); // undefined
console.log(arr.indexOf(1)); // 1
console.log(arr.lastIndexOf(1)); // 3
console.log(arr.indexOf(3)); // -1
console.log(arr.includes(1)); // true
arr.forEach(console.log);

// Merge Array:
let arr1 = [1, 2, [3, 4]];
let arr2 = [[5, 6], 7, 8];
let arr3 = arr1.concat(arr2);
// invoke the function
console.log(arr3);

// An application of map() and filter()
const evenSquares = (arr) => {
  var squares = [];
  arr.forEach((ele) => {
    if (ele % 2 === 0) squares.push(ele * ele);
  });
  return squares;
};
// invoke the function
console.log(evenSquares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//reduceRight() works just like reduce(), except that it processes the array from highest
//index to lowest (right-to-left), rather than from lowest to highest. You might want to
//do this if the reduction operation has right-to-left precedence, for example:
var a = [2, 3, 4];
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function (accumulator, value) {
  return Math.pow(value, accumulator);
});
console.log(big);

// Function defined and immediately invoked:
const tenSquared = (function (x) {
  return x * x;
})(10);
console.log(tenSquared); // 100

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
const distance = (x1, y1, x2, y2) => {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};
// define the points
let [x1, y1, x2, y2] = [0, 0, 3, 4]; // Same as let x1=0, y1=0, x2=3, y2=4
// invoke the function
console.log(distance(x1, y1, x2, y2));

// Function to calculate the hypotenuse of a Triangle.
const hypotenuse = (a, b) => {
  const square = (x) => {
    return x * x;
  };
  return Math.sqrt(square(a) + square(b));
};
// invoke the function
console.log(hypotenuse(3, 4));

// Remove even number:
function removeEvenNumber(arr) {
  var odds = [];
  for (let el of arr) {
    if (el % 2 != 0)
      // Check if the item in the list is NOT even ('%' is the modulus symbol!)
      odds.push(el); //If it isn't even append it to the empty list
  }
  return odds; // Return the new list
}
// invoke the function
console.log(removeEvenNumber([3, 2, 41, 3, 34])); // [3, 41, 3]

// Remove the first two elements of an array using array destructuring:
function removeFirstTwoElements(arr) {
  const [, , ...list] = arr;
  return list;
}
// invoke the function
var arr = [8, 9, 10, 11, 12];
console.log("new array: " + removeFirstTwoElements(arr)); // [10, 11, 12]

// Shallow copying:
var girl = {
  name: "Anna",
  info: { age: 20, number: 123 },
};
let newGirl = { ...girl };
newGirl.info.age = 30;
// invoke the function
console.log(girl.info.age, newGirl.info.age); // 30 30

/* ------------------------------------------------------------------------------------ */

// for loop
var solution = function (items_array) {
  let copy_items = [];

  for (let i = 0; i < items_array.length; i++) {
    copy_items.push(i, items_array[i]);
  }

  return copy_items;
};
// invoke the function
var items = ["item1", "item2", "item3"];
console.log(solution(items)); // [0, 'item1', 1, 'item2', 2, 'item3']

// convert a for loop to forEach()
var solution = function (items_array) {
  let copy_items = [];

  items_array.forEach((item, index) => {
    copy_items.push(index, item);
  });

  return copy_items;
};
// invoke the function
var items = ["item1", "item2", "item3"];
console.log(solution(items)); // [0, 'item1', 1, 'item2', 2, 'item3']

// addition using forEach()
// this solution also sums elements of a mixed array:
var solution = function (nums) {
  let sum = 0;

  nums.forEach((el) => {
    sum += +el;
  });

  return sum;
};
// invoke the function
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [67, 45, "34", "23", 4, 6, "6"];
console.log(solution(numbers1)); // 15 sum of numbers
console.log(solution(numbers2)); // 185 sum of numbers + strings

// addition using map()
// this solution also sums elements of a mixed array:
var solution = function (nums) {
  let sum = 0;

  nums.map((el) => {
    sum += +el;
  });

  return sum;
};
// invoke the function
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [67, 45, "34", "23", 4, 6, "6"];
console.log(solution(numbers1)); // 15 sum of numbers
console.log(solution(numbers2)); // 185 sum of numbers + strings

// addition using reduce()
// this solution also sums elements of a mixed array:
var solution = function (nums) {
  // compute sum
  function sum(e1, e2) {
    return +e1 + +e2;
  }

  return nums.reduce(sum);
};
// invoke the function
var numbers1 = [1, 2, 3, 4, 5];
var numbers2 = [67, 45, "34", "23", 4, 6, "6"];
console.log(solution(numbers1)); // 15 sum of numbers
console.log(solution(numbers2)); // 185 sum of numbers + strings

// MIN, MAX using reduce()
var solution = function (nums) {
  // compute min
  function min(e1, e2) {
    if (e1 > e2) return e2;
    if (e1 < e2) return e1;
    return e1;
  }
  // compute max
  function max(e1, e2) {
    if (e1 > e2) return e1;
    if (e1 < e2) return e2;
    return e1;
  }

  return { min_element: nums.reduce(min), max_element: nums.reduce(max) };
};
// invoke the function
var numbers1 = [3, 4, 5, 1, 2];
var numbers2 = [67, 45, "34", "23", 4, 6, "6"];
console.log(solution(numbers1)); // { min_element: 1, max_element: 5 }
console.log(solution(numbers2)); // { min_element: 4, max_element: 67 }

// filter()
var solution = function (nums) {
  function lessThanThree(el) {
    return el < 3;
  }

  return nums.filter(lessThanThree);
};
// invoke the function
var numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers)); // [1, 2]

// every()
var solution = function (nums) {
  function lessThanThree(el) {
    return el < 3;
  }

  return nums.every(lessThanThree);
};
// invoke the function
var numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers)); // false: not every elments < 3

// some()
var solution = function (nums) {
  function lessThanThree(el) {
    return el < 3;
  }

  return nums.some(lessThanThree);
};
// invoke the function
var numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers)); // true: some elments < 3

// for...of loop
var solution = function (items_array) {
  let copy_items = [];

  for (let item of items_array) {
    if (item < 3) copy_items.push(item);
  }

  return copy_items;
};
// invoke the function
var numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers)); // prints elments array [1, 2]

// for...in loop
var solution = function (items_array) {
  let copy_items = [];

  for (let item in items_array) {
    if (item < 3) copy_items.push(item);
  }

  return copy_items;
};
// invoke the function
var numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers)); // prints indices array ['0', '1', '2']

/* ------------------------------------------------------------------------------------ */

// Methods to remove duplicates from an array:
var arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

// 1 - Use of Set()
console.log([...new Set(arr)]); // ['scale', 'happy', 'strength', 'peace']

// 2- Use of filter()
function removeDuplicates(arr) {
  function rd(item, index) {
    return arr.indexOf(item) === index;
  }

  return arr.filter(rd);
}
console.log(removeDuplicates(arr)); // ['scale', 'happy', 'strength', 'peace']

// 3- Use of forEach() or map()
function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((el) => {
    if (!unique.includes(el)) {
      unique.push(el);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr)); // ['scale', 'happy', 'strength', 'peace']

// 4- Use of Reduce()
function removeDuplicates(arr) {
  function rd(el1, el2) {
    if (!el1.includes(el2)) el1.push(el2);
    return el1;
  }

  return arr.reduce(rd, []);
}
// invoke the function
console.log(removeDuplicates(arr)); // ['scale', 'happy', 'strength', 'peace']

// 5- Use of indexOf()
function removeDuplicates(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates(arr)); // ['scale', 'happy', 'strength', 'peace']

/* ------------------------------------------------------------------------------------ */

// Return an array of elements: [MIN, MAX]
function findMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
// invoke the function
console.log(findMinMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(findMinMax([5, 2, 3, 8, 1, 0])); // [0, 8]

// Find the largest(max) element in the unsorted array:
function findMaxElement(arr) {
  let max_ele = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let ele of arr) {
    if (ele > max_ele) {
      max_ele = ele;
    }
  }
  return max_ele;
}
// invoke the function
console.log(findMaxElement([1, 2, 3, 4, 5])); // 5
console.log(findMaxElement([5, 2, 3, 8, 1, 0])); // 8

// Find the smallest(min) element in the unsorted array:
function findMinElement(arr) {
  let min_ele = Number.POSITIVE_INFINITY; // larger than all other numbers
  for (let ele of arr) {
    if (ele < min_ele) {
      min_ele = ele;
    }
  }
  return min_ele;
}
// invoke the function
console.log(findMinElement([5, 2, 3, 8, 1, 0])); // 0

// A recursive function (one that calls itself) that computes factorials
// x! is the product of x and all positive integers less than it.
const factorial = (x) => {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
};
// invoke the function
console.log(factorial(4));

// Return an array that holds N elements of the Fibonacci Series(Additive Sequence)
// Iterative function
const fibonacciSeries = (number_of_terms, firstTerm, secondTerm) => {
  var [fibonacciList, nextTerm] = [[]];
  // for first element; count=1 and index=0
  for (var count = 1; count <= number_of_terms; count++) {
    fibonacciList.push(firstTerm);
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return fibonacciList;
};
// invoke the function
console.log(fibonacciSeries(20, 0, 1));

// Implement a function to check if a given number is a fibonacci number:
function isFibonacci(num) {
  if (num === 0) {
    return true;
  }

  let [firstTerm, secondTerm, nextTerm] = [0, 1, 0];

  while (nextTerm < num) {
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;

    if (nextTerm === num) {
      return true;
    }
  }
  return false;
}
// invoke the function
console.log(isFibonacci(0)); // true
console.log(isFibonacci(1)); // true
console.log(isFibonacci(2)); // true

// Print primes in the range...
const getPrimes = (start, end) => {
  var primesList = [];
  for (start; start <= end; start++) {
    var [prime, numSqrt] = [true, Math.sqrt(start)];
    for (var div = 2; div <= numSqrt; div++) {
      if (start % div == 0) {
        prime = false;
        break;
      }
    }
    if (prime && start > 1) {
      primesList.push(start);
    }
  }
  return primesList;
};
// invoke the function
console.log(getPrimes(0, 100));

// Check if a number is prime:
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
// invoke the function
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(7)); // true

// Armstrong numbers between a range...
var isArmstrongNumber = (num) => {
  let [strN, power, sum] = [String(num), String(num).length, 0];
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }
  return sum === num;
};

const armstrongRange = (lower, upper) => {
  const res = [];
  for (let i = lower; i <= upper; i++) {
    if (isArmstrongNumber(i)) {
      res.push(i);
    }
  }
  return res;
};
console.log(armstrongRange(1, 400));

// Test number if Armstrong:
var isArmstrongNumber = (num) => {
  let [strN, power, sum] = [String(num), String(num).length, 0];
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }
  return sum === num;
};
// invoke the function
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(370));
console.log(isArmstrongNumber(371));

// Implement a function to find the missing element in an array:
// Given an array A of N integers,
// return the smallest positive integer (greater than 0) that does not occur in A.
function solution(A) {
  var [len, i] = [A.length, 1];
  while (i <= len) {
    if (!A.includes(i)) return i;
    i++;
  }
  return i;
}
// invoke the function
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([1, 2, 4, 6, 3, 7, 8])); // 5

/* 2SUM
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target. You may assume that each input would have exactly one
solution, and you may not use the same element twice.You can return the answer in any order. 
*/
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};
// invoke the function
console.log(twoSum([2222222, 2222222], 4444444)); // [0, 1]
console.log(twoSum([2, 7, 11, 15], 18)); // [1, 2]
console.log(twoSum([2, 7, 11, 15], 17)); // [0, 3]

// 2SUM SORTED ARRAY
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return null;
};
// invoke the function
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]

/* ------------------------------------------------------------------------------------ */

// Reverse the string:
function reverseString(str) {
  var reversed_string = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed_string += str.charAt(i);
  }
  return reversed_string;
}
// invoke the function
console.log(reverseString("Mwanika")); // akinawM

// Reverse words in a string:
function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
// invoke the function
console.log(reverseWords("JavaScript is awesome")); // tpircSavaJ si emosewa

// Reverse an array:
function reverseArray(arr) {
  var reversed_array = [];
  while (arr.length) {
    reversed_array.push(arr.pop());
  }

  return reversed_array;
}
// invoke the function
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]

/* ------------------------------------------------------------------------------------ */
// SORTING AND SEARCHING ALGORITHMS

// (i) Implement Quick Sort Algorithm:
const quickSort = (originalArr) => {
  if (originalArr.length <= 1) {
    return originalArr;
  }
  var [leftArr, rightArr, sortedArr, pivot, len] = [
    [],
    [],
    [],
    originalArr.pop(), // originalArr.shift() --- refer to Stack & Queue
    originalArr.length,
  ];
  for (var idx = 0; idx < len; idx++) {
    if (originalArr[idx] <= pivot) {
      // using pivot value start comparing
      leftArr.push(originalArr[idx]); // leftArr.unshift(originalArr[idx])
    } else {
      rightArr.push(originalArr[idx]); // rightArr.unshift(originalArr[idx])
    }
  }
  // array will be returned untill sorting occurs
  return sortedArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
};
// invoke the function
console.log(quickSort([1, 6, 3, 4, 5, 1, 0, 4, 8])); // [0, 1, 1, 3, 4, 4, 5, 6, 8]

// (ii) Implement Merge Sort Algorithm:
/* Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the
end to hold B. Write a method to merge B into A in sorted order. */
const mergeSort = (originalArr) => {
  if (originalArr.length <= 1) {
    return originalArr;
  }
  var [middle] = [Math.floor(originalArr.length / 2)];
  var [arrA, arrB] = [originalArr.slice(0, middle), originalArr.slice(middle)];

  // compare the arrays element by element and return the concatenated result
  const merge = (arrA, arrB) => {
    var [sortedArr, leftIndex, rightIndex] = [[], 0, 0];
    while (leftIndex < arrA.length && rightIndex < arrB.length) {
      if (arrA[leftIndex] < arrB[rightIndex]) {
        sortedArr.push(arrA[leftIndex]);
        leftIndex++;
      } else {
        sortedArr.push(arrB[rightIndex]);
        rightIndex++;
      }
    }
    return sortedArr
      .concat(arrA.slice(leftIndex))
      .concat(arrB.slice(rightIndex));
  };

  // from previous function
  return merge(mergeSort(arrA), mergeSort(arrB));
};
// invoke the function
var originalArr = [1, 6, 3, 4, 5, 1, 0, 4, 8];
console.log(mergeSort(originalArr)); // [0, 1, 1, 3, 4, 4, 5, 6, 8]

// (iii) Implement Binary Search Algorithm:
/* Search in Rotated Array: Given a sorted array of n integers that has been rotated an unknown
number of times, write code to find an element in the array. You may assume that the array was
originally sorted in increasing order.
EXAMPLE
lnput: find 5 in {15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
Output: 8 (the index of 5 in the array) */
// BINARY SEARCH (return the index of an element searched in a sorted array):
const binarySearch = (arr, ele) => {
  var [lowIndex, highIndex] = [0, arr.length - 1];
  while (lowIndex <= highIndex) {
    var midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] === ele) {
      return midIndex;
    }
    if (arr[midIndex] > ele) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return null; // if not found: same as return -1
};
// invoke the function
console.log(binarySearch([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)); // 8
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // null
console.log(
  binarySearch(
    ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // null

/* ------------------------------------------------------------------------------------ */
// OBJECT STORE (Dictionary)
// Sorting Objects:
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// SORT THE OBJECT BY SALARY
const sortEmployeesBySalary = (employees) => {
  return employees.sort((obj1, obj2) => obj1.salary - obj2.salary);
  // same as
  // return employees.sort((obj1, obj2) => (obj1.salary > obj2.salary ? 1 : -1));
};
// invoke the function
console.table(sortEmployeesBySalary(employees));
/*
┌─────────┬─────────┬────────┬─────────────────────┐
│ (index) │  name   │ salary │      hireDate       │
├─────────┼─────────┼────────┼─────────────────────┤
│    0    │ 'David' │ 75000  │  'August 15, 2009'  │
│    1    │ 'David' │ 75000  │  'August 15, 2009'  │
│    2    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    3    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    4    │ 'John'  │ 90000  │   'July 1, 2010'    │
│    5    │ 'John'  │ 90000  │   'July 1, 2010'    │
└─────────┴─────────┴────────┴─────────────────────┘
*/

// Keys, Values, Entries:
let myKeys = Object.keys(employees);
console.log(myKeys); // ['0', '1', '2']

let myValues = Object.values(employees);
console.log(myValues);
/*
[
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]
*/

let myEntries = Object.entries(employees);
console.log(myEntries);
/*
[
  [
    '0',
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' }
  ],
  [
    '1',
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' }
  ],
  [ '2', { name: 'John', salary: 90000, hireDate: 'July 1, 2010' } ]
]
*/

// same as
let output = Object.keys(employees).map((key) => [String(key), employees[key]]);
console.log(output);
/*
[
  [
    '0',
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' }
  ],
  [
    '1',
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' }
  ],
  [ '2', { name: 'John', salary: 90000, hireDate: 'July 1, 2010' } ]
]
*/

// Object.entries + Destructuring:
let myObjArr = [];

myEntries.forEach(([key, val]) => {
  myObjArr.push(key);
  myObjArr.push(val);
});
console.log(myObjArr);
/*
[
  '0',
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  '1',
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  '2',
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]
*/

// Converting an array to an object:
let newObj = Object.fromEntries(myEntries);
console.log(newObj);
/*
{
  '0': { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  '1': { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  '2': { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
}
*/

// EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS
// extract (names, salaries) from employees array
const extractValues = (arr, prop1, prop2) => {
  let output = [];

  arr.forEach((item) => {
    output.push(item[prop1], item[prop2]);
  });

  return output;
};
// invoke the function
console.log(extractValues(employees, "name", "salary"));
/*
[
  'John', 90000, 'David',
  75000,  'Ana', 80000,
  'John', 90000, 'David',
  75000,  'Ana', 80000
] */

// Lists as Objects -> push()
// Return an array that holds the indexes of the enumerable properties of an obj.
const propIndexes = (employees) => {
  if (typeof employees !== "object") throw TypeError(); // Object argument required
  var [props, indexes] = [[], []]; // Return these arrays
  for (var prop of employees) {
    props.push(prop); // add it to the array.
  }

  for (var prop in props) {
    indexes.push(prop); // add it to the array.
  }
  return { indexes, props }; // Return indexes.
};
// invoke the function
console.log(propIndexes(employees));
/*
{
  indexes: [ '0', '1', '2' ],
  props: [
    { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
    { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
    { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
  ]
}
*/

// Invert Key Value of an Object:
const flipKeyValue = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
console.log(flipKeyValue({ x: 1, y: 2 })); // { '1': 'x', '2': 'y' }

// Object transformations:
let obj = { a: 1, b: 2, c: 3 };
obj = Object.fromEntries(
  Object.entries(obj).map(([key, val]) => [key, val * val])
);
console.log(obj); // { a: 1, b: 4, c: 9 }

// OBJECT UTILITY FUNCTIONS THAT ENUMERATE PROPERTIES

o = { name: "Stephen", age: "40", dob: "1982", career: "software engineering" };
p = { name: "Jerome", age: "15", dob: "2007", school: "St. Maria Goreti S.S" };

/* Copy the enumerable properties of p to o, and return o.
   If o and p have a property by the same name, o's property is overwritten. */
function extend(o, p) {
  for (prop in p) {
    // For all props in p.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// invoke the function
console.log(extend(o, p));

/* Copy the enumerable properties of p to o, and return o.
   If o and p have a property by the same name, o's property is left alone. */
function merge(o, p) {
  for (prop in p) {
    // For all props in p.
    if (o.hasOwnProperty[prop]) continue; // Except those already in o.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// invoke the function
console.log(merge(o, p));

/* Remove properties from o if there is not a property with the same name in p.
   Return o. */
function restrict(o, p) {
  for (prop in o) {
    // For all props in o
    if (!(prop in p)) delete o[prop]; // Delete if not in p
  }
  return o;
}
// invoke the function
console.log(restrict(o, p));

/* For each property of p, delete the property with the same name from o.
   Return o. */
function subtract(o, p) {
  for (prop in p) {
    // For all props in p
    delete o[prop]; // Delete from o (deleting a
    // nonexistent prop is harmless)
  }
  return o;
}
// invoke the function
console.log(subtract(o, p));

/* Return a new object that holds the properties of both o and p.
   If o and p have properties by the same name, the values from o are used. */
function union(o, p) {
  return extend(extend({}, o), p);
}
// invoke the function
console.log(union(o, p));

/* Return a new object that holds only the properties of o that also appear
   in p. This is something like the intersection of o and p, but the values of
   the properties in p are discarded */
function intersection(o, p) {
  return restrict(extend({}, o), p);
}
// invoke the function
console.log(intersection(o, p));

// UNIQUE OBJECT ARRAY
// Creates an array of objects with unique property values (name)
var uniqueObjectArray = function (arr) {
  let q = [];
  arr.forEach((item) => q.push([item.name, item]));
  return [...new Map(q).values()];
};
// invoke the function
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];
console.log(uniqueObjectArray(employees));

/* ------------------------------------------------------------------------------------ */

// 1- SUBARRAY -> SUM
var sumSubArray = function (arr) {
  let result = 0;
  let sum;
  let n = arr.length;
  // Computing sum of subarray using formula
  for (let i = 0; i < n; i++) {
    result = result + arr[i] * (i + 1) * (n - i);
    sum = result;
  }
  // Return all subarray sum
  return sum;
};
// invoke the function
//var arr = [0, 1, 2, 3, 4, 5]; // 140
var arr = [1, 2, 3, 4, 5]; // 105
console.log(sumSubArray(arr));

// 2- EVEN LENGTH SUBARRAY -> SUM
var sumEvenSubArray = function (arr) {
  let sum;
  let result = 0;
  let n = arr.length;

  if (n % 2 === 0) {
    // if n is even, then compute
    for (let i = 0; i < n; i++) {
      result = result + arr[i] * (i + 1) * (n - i);
      sum = result / 2;
    }
    return sum;
  }
  if (n % 2 != 0) {
    // if n is odd, then compute
    for (let i = 1; i < n; i = i + 2) {
      result = result + arr[i] * (i + 1) * (n - i);
      sum = result;
    }
    return sum;
  }
  return -1;
};
// invoke the function
//var arr = [0, 1, 2, 3, 4, 5]; // 70
var arr = [1, 2, 3, 4, 5]; // 48
console.log(sumEvenSubArray(arr));

// 3- ODD LENGTH SUBARRAY -> SUM
var sumOddSubArray = function (arr) {
  let sum;
  let result = 0;
  let n = arr.length;

  if (n % 2 === 0) {
    // if n is even, then compute
    for (let i = 0; i < n; i++) {
      result = result + arr[i] * (i + 1) * (n - i);
      sum = result / 2;
    }
    return sum;
  }
  if (n % 2 != 0) {
    // if n is odd, then compute
    for (let i = 0; i < n; i = i + 2) {
      result = result + arr[i] * (i + 1) * (n - i);
      sum = result;
    }
    return sum;
  }
  return -1;
};
// invoke the function
//var arr = [0, 1, 2, 3, 4, 5]; // 70
var arr = [1, 2, 3, 4, 5]; // 57
console.log(sumOddSubArray(arr));

/* ------------------------------------------------------------------------------------ */

// solution 1:
const balancedBrackets = (str) => {
  const stack = [];
  let openers = ["{", "[", "("];
  let closers = ["}", "]", ")"];

  const dict = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (openers.includes(char)) {
      stack.push(char);
    } else if (closers.includes(char)) {
      //is our stack empty?

      if (!stack.length) {
        return false;
      }
      //does our popped element not match the corresponding element?
      else if (dict[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// solution 2:
var isValid = function (s) {
  // add code
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    // If character is an opening brace add it to a stack
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    }
    //if closing brace, pop from stack
    else {
      let lastEle = stack.pop();
      //Return false if the element popped doesn’t match the corresponding closing brace in the map
      if (s[i] !== map[lastEle]) {
        return false;
      }
    }
  }
  //if stack not empty at end, return false
  if (stack.length !== 0) {
    return false;
  }

  return true;
};
// invoke the function
var s = "{[]()}";
var s = "{[(])}";
var s = "{[}";
if (isValid(s)) console.log("valid");
else console.log("invalid");

// Output a Matrix:
// method 1
const values1 = [];
// for (let x = 0; x < 10; x++) {
//   values1.push([2 ** x, 2 * x ** 2]);
// }
// method 2
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((item) => {
  values1.push([2 ** item, 2 * item ** 2]);
});
// method 3
const values2 = arr.map((element) => [2 ** element, 2 * element ** 2]);
// invoke the function
console.table(values1);
console.table(values2);

// COUNTDOWN
function countdown(n) {
  if (n < 1) {
    console.log(n);
    return;
  }
  console.log(n);
  return countdown(n - 1);
}
// invoke the function
countdown(5);
// 5
// 4
// 3
// 2
// 1
// 0

/* REMOVE DUPLICATES FROM SORTED ARRAY
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
such that each unique element appears only once. The relative order of the elements should
be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the
following things:

Change the array nums such that the first k elements of nums contain the unique elements in
the order they were present in nums initially. The remaining elements of nums
are not important as well as the size of nums.

Return k. */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return k;
};
// invoke the function
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

// REMOVE ELEMENT FROM UNSORTED ARRAY
var removeElement = function (nums, val) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 0; // Initialize the count of unique elements to 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return k;
};
// invoke the function
console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5

// Separate a string with a special character sequence into an array of substrings:
var str = " John <----> Smith ";
var regexp = /\s*<---->\s*/g;
var separate_string = str.trim().split(regexp);
console.log(separate_string); // ['John', 'Smith']
console.log(separate_string.join(" ")); // John Smith

//
var reg = function (word) {
  let regexp = /[A-Za-z]/g; // NOT /[^A-Za-z]/g;

  // return only special characters and white space
  word = word.replace(regexp, "");
  return word;
};
// invoke the function
console.log(reg("mwan..&ika")); // ..&

// FLATTEN AN ARRAY
var flattenArray = function (arr) {
  let new_arr = [];

  arr.forEach((el) => {
    new_arr.push(el.join());
  });
  return new_arr.join().replaceAll(" ", ",").split(",");
};
// invoke the function
var arr = [
  ["Mwanika", "Stephen", "Crispin"],
  ["Akoth", "Justine"],
  ["Olweny", "John"],
];
console.log(flattenArray(arr));

let ob = { name: "Mwanika", age: 42, gender: "M" };
console.log(ob["age"]); // same as ob.age -> 42

// RETURN ARRAY OF CHARACHERS USING THE SPREAD OPERATOR
var s = "mwanika";
console.log([...s]);

// REMOVE THE FIRST TWO ELEMENTS OF AN ARRAY USING ARRAY DESTRUCTURING
function removeFirstTwoElements(arr) {
  const [, , ...list] = arr;
  return list;
}
// invoke the function
var arr = [8, 9, 10, 11, 12];
console.log(removeFirstTwoElements(arr)); // [10, 11, 12]

// Application of Set()
// Return count of duplicates in array:
function countDuplicates(arr) {
  // remove duplicates
  let set = [...new Set(arr)];

  // count = length of superset - length of subset ()
  return arr.length - set.length;
}
// invoke the function
var arr = ["cat", "book", "pencil", "book", "cat", "cat"];
console.log(countDuplicates(arr)); // 3
