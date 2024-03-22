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

// TRAVERSE A STRING (return consonants)
var traverseString = function (s) {
  let consonants = "";
  for (let i = 0; i < s.length; i++) {
    if (!"aeiou".includes(s[i])) consonants = consonants + s[i];
  }
  return consonants;
};
// invoke the function
console.log(traverseString("Mwanika")); // Mwnk
console.log(traverseString("The quick brown fox jumps over the lazy dog")); // Th qck brwn fx jmps vr th lzy dg

// TRAVERSE A STRING (return consonants)
var traverseString2 = function (s) {
  let consonants = [];
  for (let i = 0; i < s.length; i++) {
    if (!"aeiou".includes(s[i])) consonants.push(s[i]);
  }
  return consonants.join("");
};
// invoke the function
console.log(traverseString2("Mwanika")); // Mwnk
console.log(traverseString2("The quick brown fox jumps over the lazy dog")); // Th qck brwn fx jmps vr th lzy dg

// TRAVERSE AN ARRAY OF STRINGS
var traverseArray = function (a) {
  let characters = [];
  a.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      characters.push(el[i]);
    }
  });
  return characters;
};
// invoke the function
console.log(traverseArray(["Mwanika", "Stephen", "Crispin"]));

// same as:
var a = ["Mwanika", "Stephen", "Crispin"];
console.log(
  String(a)
    .replace(/[^A-Za-z]/g, "")
    .split("")
);

// REVERSE STRING -> method1
var reverseString = function (str) {
  var reversed_string = "";
  for (var i = str.length - 1; i > -1; i--) {
    reversed_string = reversed_string + str[i];
  }
  return reversed_string;
};
// invoke the function
console.log(reverseString("Mwanika")); // akinawM
console.log(reverseString("JavaScript is awesome")); // emosewa si tpircSavaJ

// REVERSE STRING -> method2
var reverseString2 = function (str) {
  var reversed_string = [];
  str.split("").forEach((el) => {
    reversed_string.unshift(el);
  });
  return reversed_string.join("");
};
// invoke the function
console.log(reverseString2("Mwanika")); // akinawM
console.log(reverseString2("JavaScript is awesome")); // emosewa si tpircSavaJ

// Reverse words in a string:--------------------------------------
function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
// invoke the function
console.log(reverseWords("JavaScript is awesome")); // tpircSavaJ si emosewa

// Reverse an array:------------------------------------
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

// ROTATE MATRIX LEFT (Anti-Clockwise)
var rotateMatrixLeft = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      let last = n - 1 - row;
      let offset = col - row;

      // swap index by index:
      let top = matrix[row][col];

      // right edge -> top edge
      matrix[row][col] = matrix[col][last];

      // bottom edge -> right edge
      matrix[col][last] = matrix[last][last - offset];

      // left edge -> bottom edge
      matrix[last][last - offset] = matrix[last - offset][row];

      // top edge -> left edge
      matrix[last - offset][row] = top;
    }
  }
  return matrix;
};
// invoke the function
var matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotateMatrixLeft(matrix);

// ROTATE STRING BY K PLACES
var rotateString = function (string, k, direction) {
  // Rotate Right (Clockwise)
  if (direction === "right") {
    k = string.length - k;
    let str1 = string.slice(k, string.length);
    let str2 = string.slice(0, k);
    let merge_string = str1 + str2;
    return merge_string;
  }

  // Rotate Left (Anti-Clockwise)
  if (direction === "left") {
    let str1 = string.slice(k, string.length);
    let str2 = string.slice(0, k);
    let merge_string = str1 + str2;
    return merge_string;
  }
};

// ROTATE ARRAY BY K PLACES
var rotateArray = function (array, k, direction) {
  // Rotate Right (Clockwise)
  if (direction === "right") {
    var merge_array = null;
    k = array.length - k;
    let arr1 = array.slice(k, array.length);
    let arr2 = array.slice(0, k);
    merge_array = arr1.concat(arr2);
    return merge_array;
  }

  // Rotate Left (Anti-Clockwise)
  if (direction === "left") {
    var merge_array = null;
    let arr1 = array.slice(k, array.length);
    let arr2 = array.slice(0, k);
    merge_array = arr1.concat(arr2);
    return merge_array;
  }
};

/* ------------------------------------------------------------------------------------ */

/* LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS -> USING POINTERS
To Solve this problem we need to have two pointers that both start at 0 index, or the first char of the given
string, and an empty set also a var for the longestSubstringLength We start looping over the string chars and
check if the char is not in our set we add it to the set then we move the right pointer, increasing the sliding window, get
the max between longestSubstringLength, which is intialized as 0 and our chars set size or length, and so on untill
we find a char existed in the list, if so we delete the first char in our set then we increase the left pointer to start
from the next Letter */

var lengthOfLongestSubstring = function (s) {
  // initialize variables
  let i = 0;
  let j = 0;
  let longestSub = 0;
  let uniquechars = [];

  while (i < s.length) {
    // The char is not found in the array
    if (!uniquechars.includes(s[i])) {
      uniquechars.push(s[i]);
      longestSub = Math.max(longestSub, uniquechars.length);
      i++;
    } else {
      // The char is found in the array
      uniquechars.shift(s[j]);
      j++;
    }
  }
  return longestSub;
};
// invoke the function
console.log(lengthOfLongestSubstring("")); // "" -> 0
console.log(lengthOfLongestSubstring("dvdf")); // vdf -> 3
console.log(lengthOfLongestSubstring("abbbcabcdefef")); // abcdef -> 6
console.log(lengthOfLongestSubstring("pwwkew")); // wke, kew -> 3

// LONGEST COMMON SUBSEQUENCE
var longestCommonSubsequence = function (s1, s2) {
  if (s1.length === 0 || s2.length === 0) return "";
  if (s1.slice(-1) === s2.slice(-1))
    return (
      longestCommonSubsequence(s1.slice(0, -1), s2.slice(0, -1)) + s1.slice(-1)
    );

  let subseq1 = longestCommonSubsequence(s1.slice(0, -1), s2);
  let subseq2 = longestCommonSubsequence(s1, s2.slice(0, -1));
  if (subseq1.length > subseq2.length) return subseq1;
  return subseq2;
};
// invoke the function
// console.log(longestCommonSubsequence("ABCD", "ACBAD")); // ACD
// console.log(longestCommonSubsequence("ABCD", "ABCAD")); // ABCD
// console.log(longestCommonSubsequence("RAVEN", "HAVOC")); // AV
// console.log(slongestCommonSubsequence("ABBCC", "DBBCC")); // BBCC

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

// RETURN ANAGRAMS (PERMUTATIONS) OF STRING WITHOUT REPEATING CHARACTERS
var generatePermutation = (string) => {
  let anagrams_permutations = [];
  if (string.length === 0) return anagrams_permutations;
  if (string.length === 1) {
    anagrams_permutations.push(string);
  }

  for (let i = 0; i < string.length; i++) {
    let cha1 = string.charAt(i);
    let cha2 = string.slice(0, i) + string.slice(i + 1, string.length);

    generatePermutation(cha2).filter((item) => {
      anagrams_permutations.push(cha1 + item);
    });
  }

  return [...new Set(anagrams_permutations)];
};
// invoke the function
console.log(generatePermutation("aabc"));
//console.log(generatePermutation(["S", "t", "e", "p", "h", "e", "n"]));
//console.log(generatePermutation([1, 2, 3]));

/* ------------------------------------------------------------------------------------ */

// SORT THE ARRAY IN A WAY THAT NUMBERS COME FIRST AND STRINGS SECOND
var firstNumsSecondAlps = function (arr) {
  let [nums, alps] = [[], []];

  nums = arr.filter((el) => typeof el === "number");
  alps = arr.filter((el) => typeof el === "string");

  nums.sort(function (e1, e2) {
    if (e1 > e2) return 1;
    return -1;
  });
  alps.sort(function (e1, e2) {
    e1 = e1.toLowerCase();
    e2 = e2.toLowerCase();
    if (e1 > e2) return 1;
    return -1;
  });

  return nums.concat(alps);
};

/* REGULAR EXPRESSION (RegExp)
Return a sorted string without symbols and numbers. */
var regExp = function (s) {
  // transform string then sort
  s = s
    .replace(/[^A-Za-z]/g, "")
    .split("")
    .sort(function (e1, e2) {
      // Alphabet Case-Insensitive Sort
      e1 = e1.toLowerCase();
      e2 = e2.toLowerCase();
      if (e1 > e2) return 1;
      return -1;
    });
  return s.join("");
};

/* ------------------------------------------------------------------------------------ */

// CHECK IF A STRING CONTAINS ANOTHER STRING
console.log("Programming language".includes("programming")); // false
console.log("Programming language".includes("Programming")); // true
console.log("Programming".includes("Programming language")); // false
console.log(["Programming", "language"].includes("Programming")); // true

// COMMON CHARACTERS
var commonCharacters = function (s1, s2) {
  let comChars = [];
  // common characters
  s1.split("").filter((el) => {
    if (s2.split("").includes(el)) {
      comChars.push(el);
    }
  });
  return comChars.join("");
};

// NOT COMMON CHARACTERS
var notCommonCharacters = function (s1, s2) {
  let notComChars = [];
  // not common characters in s1
  s1.split("").filter((el) => {
    if (!s2.split("").includes(el)) {
      notComChars.push(el);
    }
  });
  // not common characters in s2
  s2.split("").filter((el) => {
    if (!s1.split("").includes(el)) {
      notComChars.push(el);
    }
  });

  return notComChars.join("");
};

// COMMON ELEMENTS SUM -> type insensitive
var commonElements = function (a1, a2) {
  let comElements = [];
  let sum = 0;

  a1.filter((e1) => {
    a2.filter((e2) => {
      // type insensitive
      if (e1 == e2) {
        comElements.push(e1);
      }
    });
  });

  return comElements.reduce((e1, e2) => {
    return +e1 + +e2;
  }, sum);
};

/* ------------------------------------------------------------------------------------ */

// THE OCCURRENCE OF A LETTER IN STRING
var letterCount = function (s, letter) {
  let indices = [];
  let a = s.toLowerCase().split("");

  for (let [idx, el] of a.entries()) {
    if (el.includes(letter.toLowerCase())) {
      indices.push(idx);
    }
  }

  return [letter, indices.length];
};

// THE OCCURRENCE OF A WORD IN STRING
var wordCount = function (s, word) {
  let indices = [];
  word = word.toLowerCase();
  let a = s.toLowerCase().replaceAll(" ", ",").split(",");

  for (let [idx, el] of a.entries()) {
    if (el.includes(word)) {
      indices.push(idx);
    }
  }

  return [word, indices.length];
};

// THE OCCURRENCE OF SUBSTRING IN STRING
var countSubstrings = function (str, substr) {
  let regexp = new RegExp(substr, "gi");
  let count = str.match(regexp).length;
  return count;
};

// THE WORDS / NUMBER OF WORDS WITH SUBSTRING
var wordHasSubstring = function (string, substring) {
  let words = [];
  substring = substring.toLowerCase();
  let arr = string.toLowerCase().replaceAll(" ", ",").split(",");

  arr.filter((item) => {
    if (item.includes(substring)) {
      words.push(item);
    }
  });

  return words;
};

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

// SWAP UPPERCASE AND LOWERCASE LETTERS
var swapCase = function (str) {
  let new_array = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i].includes(str.toLowerCase()[i]))
      new_array.push(str[i].toUpperCase());
    else new_array.push(str[i].toLowerCase());
  }

  return new_array.join("");
};

// SWITCH REVERSER
var switchReverser = function (a) {
  let alps = [];
  let nums = [];

  a.forEach((el) => {
    if (typeof el === "string") alps.push(el.toUpperCase());
    else nums.push(el);
  });

  if (alps.length === a.length) return alps;
  if (nums.length === a.length) return nums.reverse();
  return a;
};

// PIG LATIN CONVERTER
var pigLatinConverter = function (str) {
  str = str.toLowerCase();
  let start = str.match(/[aeiou]/gi);
  let end = str.indexOf(start[0]);

  if ("aeiou".includes(str[0])) return str + "way";
  else return str.substring(end) + str.substring(0, end) + "ay";
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

// // MAXIMUM PRODUCT SUBARRAY
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
