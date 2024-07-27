// Hoisting:
function Add() {
  console.log(answer);
  var answer = 2;
}
// invoke the function
Add(); // undefined

// Given these variables:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let integers = [1, 2, 3, 4, 5];
let number = 12;
// invoke the function
console.log(fruits.toString()); // Banana,Orange,Apple,Mango
console.log(integers.toString()); // 1,2,3,4,5
console.log(number.toString()); // 12

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

// Objects:
let obj = { name: "Mwanika", age: 42, gender: "M" };
console.log(obj["age"]); // same as obj.age -> 42

// Return array of charachers using the spread operator:
var s = "mwanika";
console.log([...s]); // same as s.split("")

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
console.log(solution(numbers)); // prints elements array [1, 2]

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

// OUTPUT A MATRIX:
var matrix = [];

// method 1:
for (let x = 0; x < 10; x++) {
  matrix.push([2 ** x, 2 * x ** 2]);
}

// method 2:
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((item) => {
  matrix.push([2 ** item, 2 * item ** 2]);
});

// method 3:
var matrix2 = arr.map((element) => [2 ** element, 2 * element ** 2]);
// invoke the function
console.table(matrix);
console.table(matrix2);

// COUNTDOWN:
function countdown(n) {
  if (n < 1) {
    return n;
  }
  console.log(n);
  return countdown(n - 1);
}
// invoke the function
console.log(countdown(5)); // 5 4 3 2 1 0

// SEPARATE A STRING WITH A SPECIAL CHARACTER SEQUENCE INTO AN ARRAY OF SUBSTRINGS:
var str = " John <----> Smith ";
var regexp = /\s*<---->\s*/g;
var separate_string = str.trim().split(regexp);
console.log(separate_string); // ['John', 'Smith']
console.log(separate_string.join(" ")); // John Smith

// PATTERN MATCHING
var reg = function (word) {
  // return only special characters and white space
  word = word.replace(/[A-Za-z]/g, ""); // NOT /[^A-Za-z]/g;
  return word;
};
// invoke the function
console.log(reg("mwan.. &ika")); // .. &

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

/* ------------------------------------------------------------------------------------ */

// Methods to remove duplicates from an array:
var arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

// 1- Use of Set()
console.log([...new Set(arr)]); // ['scale', 'happy', 'strength', 'peace']

// 2- Use of forEach() or map()
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

// 3- Use of filter()
function removeDuplicates(arr) {
  function unique(item, index) {
    return arr.indexOf(item) === index;
  }

  return arr.filter(unique);
}
console.log(removeDuplicates(arr)); // ['scale', 'happy', 'strength', 'peace']

// 4- Use of reduce()
function removeDuplicates(arr) {
  function unique(el1, el2) {
    if (!el1.includes(el2)) el1.push(el2);
    return el1;
  }

  return arr.reduce(unique, []);
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

// APPLICATION OF Set()
// Return count of duplicates in array:
function countDuplicates(arr) {
  // remove duplicates
  let set = [...new Set(arr)];
  // count
  return arr.length - set.length;
}
// invoke the function
var arr = ["cat", "book", "pencil", "book", "cat", "cat"];
console.log(countDuplicates(arr)); // 3

/* ------------------------------------------------------------------------------------ */
// MIN, MAX, GENERATING RANDOM VALUES:

// Min:
function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Finding the minimum value of an array:
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
console.log(minValue);

// Max:
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//
var a = [];
for (var i = 0; i < 10; ++i) {
  a[i] = Math.floor(Math.random() * 100 + 1);
}
console.log(a);

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

/* ------------------------------------------------------------------------------------ */

// SORTING AND SEARCHING ALGORITHMS

// (i) Implement Quick Sort Algorithm:
function quickSort(nums) {
  if (nums.length == 0) {
    return [];
  }
  let left_of_pivote = [];
  let pivot = nums[0];
  let right_of_pivot = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) left_of_pivote.push(nums[i]);
    else right_of_pivot.push(nums[i]);
  }
  return quickSort(left_of_pivote).concat(pivot, quickSort(right_of_pivot));
}
// invoke the function
console.log(quickSort([1, 6, 3, 4, 5, 1, 0, 4, 8])); // [0, 1, 1, 3, 4, 4, 5, 6, 8]

// (ii) Implement Merge Sort Algorithm:
/* Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the
end to hold B. Write a method to merge B into A in sorted order. */
// compare the arrays element by element and return the concatenated result
var mergeArrays = function (arrA, arrB) {
  let [sortedArr, leftIndex, rightIndex] = [[], 0, 0];
  while (leftIndex < arrA.length && rightIndex < arrB.length) {
    if (arrA[leftIndex] < arrB[rightIndex]) {
      sortedArr.push(arrA[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(arrB[rightIndex]);
      rightIndex++;
    }
  }
  return sortedArr.concat(arrA.slice(leftIndex)).concat(arrB.slice(rightIndex));
};
//
var mergeSort = function (originalArr) {
  if (originalArr.length <= 1) {
    return originalArr;
  }
  let [middle] = [Math.floor(originalArr.length / 2)];
  let [arrA, arrB] = [originalArr.slice(0, middle), originalArr.slice(middle)];
  // from previous function
  return mergeArrays(mergeSort(arrA), mergeSort(arrB));
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
// (iii) Implement Binary Search Algorithm:
function binarySearch(arr, data) {
  let lowestIdx = 0;
  let highestIdx = arr.length - 1;

  while (lowestIdx <= highestIdx) {
    let midIdx = Math.floor((highestIdx + lowestIdx) / 2);
    if (arr[midIdx] < data) {
      lowestIdx = midIdx + 1;
    } else if (arr[midIdx] > data) {
      highestIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }
  return -1;
}
// invoke the function
console.log(binarySearch([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)); // 8
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

/* ------------------------------------------------------------------------------------ */

// ASSORTED CHALLENGES

// CONVERT 12HOURS TO 24HOURS
var convertTwelveHoursToTwentyFourHours = function (timeStr) {
  let [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = +hours + 12;
  return `${hours}:${minutes}`;
};

/* Explanation
  console.log(time1.split(" ")) // ['5:00', 'PM']
  let str = '5:00'
  console.log(str.split(":")) // ['5', '00'] */

// CONVERT 24HOURS TO 12HOURS
var convertTwentyFourHoursToTwelveHours = function (timeStr) {
  let [hours, minutes] = timeStr.split(":");
  if (hours === "12") {
    hours = "12";
    return `${hours}:${minutes} PM`;
  }
  if (hours > "12") {
    hours = +hours - 12;
    return `${hours}:${minutes} PM`;
  }
  if (hours < "12") {
    return `${hours}:${minutes} AM`;
  }
};

// NUMBER OF DAYS BETWEEN TWO DATES
var daysBetweenDates = function (date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let difference = (date1 - date2) / (1000 * 3600 * 24); // milliseconds

  return Math.abs(difference);
};

// SUBTRACT DAYS
var subtractDays = function (date, days) {
  date = new Date(date);
  date.setDate(date.getDate() - days); // add + 1 if date format is: 12/31/2022 or 12-31-2022
  return date;
};

/* ------------------------------------------------------------------------------------ */

// PALINDROMES AND ANAGRAMS (PERMUTATIONS)

/* VALID PALINDROME
Given a string, write a method to decide if it is a palindrome. */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  // reverse the input and return the result of the comparison
  return s === s.split("").reverse().join("");
};

// Given two strings, write a method to decide if one is a palindrome of the other. */
var isPalindromes = function (str1, str2) {
  let merge_str = str1 + str2;
  // Then make the string case-insensitive by converting to lowercase
  merge_str = merge_str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let [i, j] = [0, merge_str.length - 1];
  while (j > 0) {
    if (merge_str[i] != merge_str[j]) return false;
    i++;
    --j;
  }
  return true;
};

/* VALID ANAGRAM (PERMUTATION)
Given two strings, write a method to decide if one is a permutation of the other. */
var isPermutation = function (s1, s2) {
  // sort the input and return the result of the comparison
  return (
    s1
      .replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("") ===
    s2
      .replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("")
  );
};
// invoke the function
console.log(isPermutation("anagram", "nagaram")); // true
console.log(isPermutation("rat", "car")); // false

/* ------------------------------------------------------------------------------------ */

// FILTER STRINGS WITH "cie"
// method 1:
var spellingRule = function (words_array) {
  function misspelled(word) {
    if (word.indexOf("cie") > -1) {
      return true;
    }
    return false;
  }

  return words_array.filter(misspelled);
};

// method 2:
var spellingRule = function (words_array, str) {
  filtered_array = [];

  words_array.filter((item) => {
    if (item.includes(str)) {
      filtered_array.push(item);
    }
  });

  return filtered_array;
};

// COUNT VOWELS AND CONSONANTS
var countVowelsConsonants = function (string) {
  let vowels = [];
  let consonants = [];

  // transform string and transverse
  string = string.replace(/[^A-Za-z]/g, "").toLowerCase();

  for (var char of string) {
    if ("aeiou".includes(char)) vowels.push(char);
    else consonants.push(char);
  }

  let vowelCount = vowels.length;
  let consonantCount = consonants.length;
  if (vowels.length > 0 || consonants.length > 0) {
    return { vowelCount, consonantCount };
  }
  return -1;
};
// invoke the function
console.log(
  countVowelsConsonants("The quick brown fox jumps over the lazy dog")
); // { vowelCount: 11, consonantCount: 24 }

/* ------------------------------------------------------------------------------------ */

// RETURN AN ARRAY OF FIRST AND LAST CHARACTER OF EACH WORD:
var firstLastCharacter = function (words_array) {
  let res = [];
  words_array.filter((item) => {
    res.push(item[0] + item[item.length - 1]);
  });

  return res;
};

// IS MULTIPLE:
var fizzBuzz = function (num) {
  // check if the number is a multiple of 3 and 5
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";

  // check if the number is a multiple of 3
  if (num % 3 === 0) return "fizz";

  // check if the number is a multiple of 5
  if (num % 5 === 0) return "buzz";

  return num;
};

// IS PRIME NUMBER
var isPrimeNumber = function (num) {
  if (num < 2) return false;
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

/* ------------------------------------------------------------------------------------ */

// RETURN AN ARRAY OF EVEN SQUARE IN THE RANGE
var even_squares = function (start, end) {
  let evensq = [];

  for (start; start <= end; start++) {
    if (start % 2 === 0) evensq.push(start * start);
  }
  return evensq;
};
// invoke the function
console.log(even_squares(0, 10)); // [0, 4, 16, 36, 64, 100]

// COUNT EVEN ELEMENTS IN THE RANGE
var even_elements = function (start, end) {
  let counteven = 0;

  for (start; start <= end; start++) {
    if (start % 2 === 0) counteven++;
  }
  return counteven;
};
// invoke the function
console.log(even_elements(0, 10)); // 6

// RETURN AN ARRAY OF STRINGS WITH PREFIX AND SUFFIX
var prefix_suffix = function (prefix, suffix) {
  let strings = [];

  prefix.split("").forEach((item) => {
    strings.push(item + suffix);
  });

  return strings;
};
// invoke the function
console.log(prefix_suffix("JKLMNOPQ", "ack"));

/* ------------------------------------------------------------------------------------ */

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

/* REMOVE ELEMENT FROM UNSORTED ARRAY
Given an integer array nums unsorted, remove val in-place.
Then return the number of elements in nums. */
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

// BALANCED BRACKETS

// method 1:
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

// method 2:
var balancedBrackets2 = function (s) {
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

// // MAXIMUM PRODUCT SUBARRAY:
// var maxProduct = function (nums) {
//   let product = 0;
//   let accumulator = [];
//   if (Math.max(...nums) < 0) return Math.max(...nums);
//   else
//     nums.forEach((el) => {
//       product = Math.max(el, product * el);
//       accumulator.push(product);
//     });

//   return Math.max(...accumulator);
// };
// // invoke the function
// console.log(maxProduct([2, 3, -2, 4])); // 6
// console.log(maxProduct([-2, 0, -1])); // 0
// console.log(maxProduct([-1])); // -1
// console.log(maxProduct([-2])); // -2
// console.log(maxProduct([-2, -1, -3])); // 3

// // CHECK IF s2 CONTAINS A PERMUTATION OF s1:
// var checkInclusion = function (s1, s2) {
//   if (s2 === s1) return true;
//   if (s2.includes(s1.split("").reverse().join(""))) return true;
//   if ([...new Set(s2)].sort().join("") === [...new Set(s1)].sort().join(""))
//     return true;
//   return false;
// };
// // invoke the function
// console.log(checkInclusion("ab", "eidbaooo")); // true
// console.log(checkInclusion("ab", "eidboaoo")); // false
// console.log(checkInclusion("ab", "ab")); // true
// console.log(checkInclusion("abc", "bbbca")); // true
// console.log(checkInclusion("hello", "ooolleoooleh")); // false