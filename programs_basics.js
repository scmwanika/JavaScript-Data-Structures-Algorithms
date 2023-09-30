/* ---------- THE BASICS ---------- */

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

// Two Sum:
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
// invoke the function
console.log(twoSum([2, 7, 11, 15], 9)); // true
console.log(twoSum([2, 7, 11, 15], 18)); // true

/* Write a function that does the following:
console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz instead of the number for multiples of both 3 and 5 */

const fizzBuzz = (num) => {
  for (let n = 1; n <= num; n++) {
    // check if the number is a multiple of 3
    if (n % 3 === 0) {
      console.log("fizz");
    } // check if the number is a multiple of 5
    else if (n % 5 === 0) {
      console.log("buzz");
    } // check if the number is a multiple of 3 and 5
    else if (n % 3 === 0 && n % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(n);
    }
  }
};
// invoke the function
fizzBuzz(5);
/* 1
   2
   fizz
   4
   buzz */

/* ---------- CODING CHALLENGES ---------- */

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

// 1 Test strings if Anagram:
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regexp = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  str1 = str1.toLowerCase().replace(regexp, "").split("").sort().join("");
  str2 = str2.toLowerCase().replace(regexp, "").split("").sort().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}
// invoke the function
console.log(isAnagram("123", "311"));
console.log(isAnagram("123", "321"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("they see", "the eyes"));
console.log(isAnagram("no.de", "deno./"));
console.log(isAnagram("stop", "p ots"));

// 2a Test string if Palindrome:
const isPalindrome = (str) => {
  var regexp = /[^A-Za-z0-9]/gi;
  // make the string case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the string
  str = str.toLowerCase().replace(regexp, "");
  // reverse the input string and return the result of the comparison
  return str === str.split("").reverse().join("");
};
// invoke the function
console.log(isPalindrome("1221"));
console.log(isPalindrome("12121"));
console.log(isPalindrome("book"));
console.log(isPalindrome("leveL"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Refer"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("0_0 (: /- :) 0–0"));

// // 2b Test string if Palindrome: USING FOR LOOP
// const isPalindrome = (str) => {
//   // Remove whitespace, and unwanted characters from the string
//   var re = /[^A-Za-z0-9]/gi; // Remove any one character not between the brackets.
//   // Then make the string case-insensitive by converting to lowercase
//   str = str.toLowerCase().replace(re, "");
//   var i, j;
//   for (i = 0, j = str.length - 1; i < j; i++, --j) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     return true;
//   }
// };
// // invoke the function
// console.log(isPalindrome("1221"));
// console.log(isPalindrome("12121"));
// console.log(isPalindrome("book"));
// console.log(isPalindrome("eye"));
// console.log(isPalindrome("Refer"));
// console.log(isPalindrome("A man, a plan, a canal. Panama"));
// console.log(isPalindrome("0_0 (: /- :) 0–0"));

// // 2c Test string if Palindrome: USING WHILE LOOP
// function isPalindrome(str) {
//   var regexp = /[^A-Za-z0-9]/gi;
//   // make the string case insensitive by converting to the same case
//   // then remove whitespace, and any unwanted characters from the string
//   str = str.toLowerCase().replace(regexp, "");
//   var [i, j] = [0, str.length - 1];
//   while (j > 0) {
//     if (str[i] != str[j]) {
//       return false;
//     }
//     i++;
//     --j;
//   }
//   return true;
// }
// // invoke the function
// console.log(isPalindrome("1221"));
// console.log(isPalindrome("12121"));
// console.log(isPalindrome("book"));
// console.log(isPalindrome("leveL"));
// console.log(isPalindrome("eye"));
// console.log(isPalindrome("Refer"));
// console.log(isPalindrome("A man, a plan, a canal. Panama"));
// console.log(isPalindrome("0_0 (: /- :) 0–0"));

// 3a Test strings if Reverse:
function isReverse(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regexp = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  // also reverse the second string, and comapare to the first string
  str1 = str1.toLowerCase().replace(regexp, "");
  str2 = str2.toLowerCase().replace(regexp, "").split("").reverse().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}
// invoke the function
console.log(isReverse("Pots", "Stop"));

// 3b Test strings if Reverse:
function isReverse(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regexp = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  str1 = str1.toLowerCase().replace(regexp, "");
  str2 = str2.toLowerCase().replace(regexp, "");

  if (str1.length != str2.length) {
    return false;
  }
  var [i, j] = [0, str2.length - 1];
  while (j > 0) {
    if (str1[i] != str2[j]) {
      return false;
    }
    i++;
    --j;
  }
  return true;
}
// invoke the function
console.log(isReverse("Pots", "Stop"));

// 4 Permutations:
var duplicatePermutations = (string) => {
  let permutationsArray = [];
  if (string.length === 0) return permutationsArray;
  if (string.length === 1) return string.split();

  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);

    let nextChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of duplicatePermutations(nextChars)) {
      permutationsArray.push(currentChar + permutation);
    }
  }
  return permutationsArray;
};
// invoke the function
console.log(duplicatePermutations("aabc"));

var noDuplicatePermutations = (string) => {
  let permutationsArray = [];
  if (string.length === 0) return permutationsArray;
  if (string.length === 1) return string.split();

  for (let i = 0; i < string.length; i++) {
    let currentChar = string.charAt(i);

    if (string.indexOf(currentChar) != i) continue; // added this code to differentiate

    let nextChars = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of noDuplicatePermutations(nextChars)) {
      permutationsArray.push(currentChar + permutation);
    }
  }
  return permutationsArray;
};
// invoke the function
console.log(noDuplicatePermutations("aabc"));

/* ---------- SORTING AND SEARCHING ---------- */

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

// (iii) Implement Linear Search Algorithm:
/* Sparse Search: Given a sorted array of strings that is interspersed with empty strings, write a
method to find the location of a given string.
EXAMPLE
Input: ball, {"at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""}
Output: 4 */
// LINEAR SEARCH:
const linearSearch = (array, element) => {
  for (const [idx, ele] of array.entries()) {
    if (ele === element) {
      return idx;
    }
  }
};
// invoke the function
console.log(
  linearSearch(
    ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // 4
console.log(linearSearch(["a", "b", "c", "d"], "d")); // 3

// (iv) Implement Binary Search Algorithm:
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

/* ---------- OBJECT UTILITY FUNCTIONS THAT ENUMERATE PROPERTIES ---------- */

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

/* ---------- Test parentheses (balanced brackets) ---------- */

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
