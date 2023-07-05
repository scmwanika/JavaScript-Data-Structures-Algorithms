// // Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
// function isPermutation(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }
//   if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
//     return true;
//   }
//   return false;
// }
// // invoke the function
// if (isPermutation("amadm", "madam") === true) {
//   console.log("the strings are permutations of each other");
// } else {
//   console.log("the strings are not permutations of each other");
// }

// // Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// function isPalindromePermutation(string) {
//   let regexp = /[^A-Za-z0-9]/gi;
//   string = string
//     .toLowerCase()
//     .replace(regexp, "")
//     .split("")
//     .reduce((curSet, nexChar) => {
//       if (nexChar !== "") {
//         (curSet.has(nexChar) && curSet.delete(nexChar)) || curSet.add(nexChar);
//       }
//       return curSet;
//     }, new Set());

//   return string.size <= 1;
// }
// // invoke the function
// console.log(isPalindromePermutation("refer")); // true
// console.log(isPalindromePermutation("rrfee")); // true
// console.log(isPalindromePermutation("taco cat")); // true
// console.log(isPalindromePermutation("atco cta")); // true

// // Largest subarray sum
// var largestSubarraySum = function (array) {
//   let currentSum = 0;
//   let largestSum = 0;

//   for (let number of array) {
//     currentSum = Math.max(0, currentSum + number);
//     largestSum = Math.max(largestSum, currentSum);
//   }
//   return largestSum;
// };
// // invoke the function
// console.log(largestSubarraySum([1, 100, 4, 15, 9, 30])); // 159
// console.log(largestSubarraySum([1, 100, 4, 15, 9, 30, -1])); // 159
// console.log(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30])); // 159
// console.log(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1])); // 159
// console.log(largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(largestSubarraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4])); // 0

// // Count subarrays equal to sum
// var subarraySum = function (nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum = sum + nums[j];
//       if (sum === k) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// // invoke the function
// console.log(subarraySum([2, 2, -4, 1, 1, 2], -3)); // 1
// console.log(subarraySum([2, 2, 2], 4)); // 2
// console.log(subarraySum([3, 2, 1], 3)); // 2

// // 1- SUM SUBARRAY
// var sumSubArray = function (arr) {
//   let result = 0;
//   let sum;
//   let n = arr.length;
//   // Computing sum of subarray using formula
//   for (let i = 0; i < n; i++) {
//     result = result + arr[i] * (i + 1) * (n - i);
//     sum = result;
//   }
//   // Return all subarray sum
//   return sum;
// };
// // invoke the function
// //var arr = [0, 1, 2, 3, 4, 5]; // 140
// var arr = [1, 2, 3, 4, 5]; // 105
// console.log(sumSubArray(arr));

// // 2- SUM EVEN LENGTH SUBARRAY
// var sumEvenSubArray = function (arr) {
//   let sum;
//   let result = 0;
//   let n = arr.length;

//   if (n % 2 === 0) {
//     // if n is even, then compute
//     for (let i = 0; i < n; i++) {
//       result = result + arr[i] * (i + 1) * (n - i);
//       sum = result / 2;
//     }
//     return sum;
//   } else if (n % 2 != 0) {
//     // if n is odd, then compute
//     for (let i = 1; i < n; i = i + 2) {
//       result = result + arr[i] * (i + 1) * (n - i);
//       sum = result;
//     }
//     return sum;
//   } else return -1;
// };
// // invoke the function
// //var arr = [0, 1, 2, 3, 4, 5]; // 70
// var arr = [1, 2, 3, 4, 5]; // 48
// console.log(sumEvenSubArray(arr));

// // 3- SUM ODD LENGTH SUBARRAY
// var sumOddSubArray = function (arr) {
//   let sum;
//   let result = 0;
//   let n = arr.length;

//   if (n % 2 === 0) {
//     // if n is even, then compute
//     for (let i = 0; i < n; i++) {
//       result = result + arr[i] * (i + 1) * (n - i);
//       sum = result / 2;
//     }
//     return sum;
//   } else if (n % 2 != 0) {
//     // if n is odd, then compute
//     for (let i = 0; i < n; i = i + 2) {
//       result = result + arr[i] * (i + 1) * (n - i);
//       sum = result;
//     }
//     return sum;
//   } else return -1;
// };
// // invoke the function
// //var arr = [0, 1, 2, 3, 4, 5]; // 70
// var arr = [1, 2, 3, 4, 5]; // 57
// console.log(sumOddSubArray(arr));

// // Check if an Array is a Subset of Another Array:
// var isSubset = (parentArray, subsetArray) => {
//   return subsetArray.every((el) => {
//     return parentArray.includes(el);
//   });
// };
// // invoke the function
// let arr1 = ["a", "b", "c"];
// let arr2 = ["b", "c"];
// let arr3 = ["c", "d"];

// console.log(isSubset(arr1, arr2)); // returns true
// console.log(isSubset(arr1, arr3)); // returns false
// if (isSubset(arr1, arr3) === true) console.log("VALID SUBSET");
// else console.log("INVALID"); // INVALID

// // Check if a String is a Substring or Subsequence of Another String:
// // Check if an Array is a Subarray or Subsequence of Another Array:
// function isSubString(string, sequence) {
//   let seqIdx = 0;
//   string = string.toLowerCase().split(""); // convert string to an array
//   for (const value of string) {
//     if (value === sequence[seqIdx]) seqIdx++;
//     if (seqIdx === sequence.length) return true;
//   }
//   return false;
// }
// // invoke the function for string
// console.log(isSubString("stephen", "hen")); // true
// if (isSubString("stephen", "hen") === true) console.log("VALID SUBSEQUENCE");
// else console.log("INVALID"); // VALID SUBSEQUENCE

// // invoke the function for array
// //console.log(isSubArray(["a", "b", "c"], ["b", "c"])); // true
// //console.log(isSubArray(["a", "b", "c"], ["c", "b"])); // false
// // if (isSubArray(["a", "b", "c"], ["b", "c"]) === true)
// //   console.log("VALID SUBARRAY OR SUBSEQUENCE");
// // else console.log("INVALID"); // INVALID

// // Count the Number of Substring Occurrences in a String:
// var countSubstrings = (str, word) => {
//   var regex = new RegExp(word, "gi");
//   let count = str.match(regex).length;
//   return count;
// };
// // invoke the function
// let str =
//   "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane gave Mike 1 of her orange so she is now left with only 1 Orange.";
// let word = "orange";

// console.log(countSubstrings(str, word)); // 4

// // Longest Common Subsequence:
// function solution(s1, s2) {
//   if (s1.length === 0 || s2.length === 0) {
//     return "";
//   } else if (s1.slice(-1) === s2.slice(-1)) {
//     return solution(s1.slice(0, -1), s2.slice(0, -1)) + s1.slice(-1);
//   } else {
//     const sub1 = solution(s1.slice(0, -1), s2);
//     const sub2 = solution(s1, s2.slice(0, -1));
//     return sub1.length > sub2.length ? sub1 : sub2;
//   }
// }
// // invoke the function
// console.log(solution("ABCD", "ACBAD")); // ACD
// console.log(solution("ABCD", "ABCAD")); // ABCD

// // Find duplicates in the string:
// // Find duplicates in the array:
// function isDuplicate(str) {
//   let [count, duplicate, regexp] = [{}, [], /[^A-Za-z0-9]/gi];

//   str
//     // .toLowerCase()
//     // .replace(regexp, "")
//     // .split("")
//     .forEach((item) => {
//       if (count[item]) {
//         count[item] += 1;
//         return;
//       }
//       count[item] = 1;
//     });

//   for (let prop in count) {
//     if (count[prop] >= 2) {
//       // if isUnique (No Duplicate) === 1
//       duplicate.push(prop);
//       return true;
//     }
//   }
//   console.log(count);
//   //return duplicate;
//   return false;
// }
// // invoke the function
// //console.log(isDuplicate("Mwanika Stephen Crispin")); // [ 'a', 'n', 'i', 's', 'e', 'p' ]
// console.log(isDuplicate(["cat", "book", "pencil", "book", "cat", "cat"])); // ['cat', 'book']

// // Rotate String
// function rotateString(string, K, direction) {
//   if (direction === "right") {
//     // rotate clockwise(right)
//     K = string.length - K;
//     let str1 = string.slice(K, string.length);
//     let str2 = string.slice(0, K);
//     let merge_string = str1 + str2;
//     return merge_string;
//   }
//   if (direction === "left") {
//     // rotate anti-clockwise(left)
//     let str1 = string.slice(K, string.length);
//     let str2 = string.slice(0, K);
//     let merge_string = str1 + str2;
//     return merge_string;
//   }
// }
// // invoke the function
// console.log(rotateString("JavaScript", 2, "right")); // ptjavaScri

// // Return an array that holds the indexes of a searched element in the rotated array (merge_array):
// function rotateArray(array, K, direction, ele) {
//   if (direction === "right") {
//     var merge_array = null;
//     // rotate clockwise(right)
//     K = array.length - K;
//     let arr1 = array.slice(K, array.length);
//     let arr2 = array.slice(0, K);
//     merge_array = arr1.concat(arr2);
//     console.log(merge_array);

//     // code to return indexes
//     var [indexes, len, idx] = [[], merge_array.length, 0];
//     while (idx < len) {
//       // While more indexes to find...
//       idx = merge_array.indexOf(ele, idx); // Find
//       if (idx === -1) break; // if nothing found, break.
//       indexes.push(idx); // else, store the idx in indexes
//       idx++; // and continue to the next idx
//     }
//     return indexes; // Return an array of indexes
//   }

//   if (direction === "left") {
//     var merge_array = null;
//     // rotate anti-clockwise(left)
//     let arr1 = array.slice(K, array.length);
//     let arr2 = array.slice(0, K);
//     merge_array = arr1.concat(arr2);
//     console.log(merge_array);

//     // code to return indexes
//     var [indexes, len, idx] = [[], merge_array.length, 0];
//     while (idx < len) {
//       // While more indexes to find...
//       idx = merge_array.indexOf(ele, idx); // Find
//       if (idx === -1) break; // if nothing found, break.
//       indexes.push(idx); // else, store the idx in indexes
//       idx++; // and continue to the next idx
//     }
//     return indexes; // Return an array of indexes
//   }
// }
// // invoke the function
// console.log(rotateArray([1, 2, 3, 4, 5], 2, "right", 2)); // [4, 5, 1, 2, 3] // [3]

// // Test isDuplicate: Return an array that holds the indexes of a searched duplicate element in an array:
// const isDuplicate = (arr, ele) => {
//   /* The array of indexes to return
//    * The length of the array to be searched
//    * The search starts at index 0
//    */
//   var [indexes, len, idx] = [[], arr.length, 0];
//   while (idx < len) {
//     // While more indexes to find...
//     idx = arr.indexOf(ele, idx); // Find
//     if (idx === -1) break; // if nothing found, break.
//     indexes.push(idx); // else, store the idx in indexes
//     idx++; // and continue to the next idx
//   }
//   if (indexes.length > 1) {
//     console.log("duplicates found at indexes ", indexes);
//     return true;
//   } else return false;

//   //return indexes; // Return an array of indexes
// };
// // invoke the function
// console.log(isDuplicate([1, 2, 3, 4, 5], 1)); // false 1 is not duplicate
// console.log(isDuplicate([1, 2, 5, 4, 5], 5)); // true 5 is duplicate
// console.log(isDuplicate([1, 2, 3, 4, 5], 6)); // false 6 is not duplicate

// // Rotate Matrix Right by 90 degrees
// const rotateMatrixClockWise = (matrix) => {
//   let len = matrix.length;
//   for (let row = 0; row < len / 2; row++) {
//     for (let col = row; col < len - row - 1; col++) {
//       // start rotation from left
//       let temp = matrix[row][col];

//       // move left to top
//       matrix[row][col] = matrix[len - 1 - col][row];

//       // move top to right
//       matrix[len - 1 - col][row] = matrix[len - 1 - row][len - 1 - col];

//       // move right to bottom
//       matrix[len - 1 - row][len - 1 - col] = matrix[col][len - 1 - row];

//       // move bottom to left
//       matrix[col][len - 1 - row] = temp;
//     }
//   }
//   return matrix;
// };
// // invoke the function
// var matrix = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// console.log(rotateMatrixClockWise(matrix)); // [ [ 6, 3, 0 ], [ 7, 4, 1 ], [ 8, 5, 2 ] ]

// // Rotate Matrix left by 90 degrees
// const rotateMatrixAntiClockWise = (matrix) => {
//   let len = matrix.length;
//   for (let row = 0; row < len / 2; row++) {
//     for (let col = row; col < len - row - 1; col++) {
//       // start rotation from right
//       let temp = matrix[row][col];

//       // move right to top
//       matrix[row][col] = matrix[col][len - 1 - row];

//       // move top to left
//       matrix[col][len - 1 - row] = matrix[len - 1 - row][len - 1 - col];

//       // move left to bottom
//       matrix[len - 1 - row][len - 1 - col] = matrix[len - 1 - col][row];

//       // move bottom to right
//       matrix[len - 1 - col][row] = temp;
//     }
//   }
//   return matrix;
// };
// // invoke the function
// var matrix = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// console.log(rotateMatrixAntiClockWise(matrix)); // [ [ 2, 5, 8 ], [ 1, 4, 7 ], [ 0, 3, 6 ] ]

// /* Sorted Matrix Search:
// Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element.
// If the element is found, prints its position and returns true, otherwise prints "element not found" and returns false */
// const findElement = (matrix, elem) => {
//   let row = 0;
//   let col = matrix[0].length - 1;
//   while (row < matrix.length && col >= 0) {
//     if (matrix[row][col] == elem) {
//       //console.log({ row, col }); // { row: 2, col: 1 }
//       console.log([row, col]); // [ 2, 1 ]
//       //console.log(Object.entries({ row, col })); // [ [ 'row', 2 ], [ 'col', 1 ] ]
//       return true;
//     } else if (matrix[row][col] > elem) {
//       col--;
//     } else {
//       row++;
//     }
//   }
//   console.log("element not found");
//   return false;
// };
// // invoke the function
// var matrix = [
//   [10, 20, 30, 40],
//   [15, 25, 35, 45],
//   [27, 29, 37, 48],
//   [32, 33, 39, 50],
// ];
// console.log(findElement(matrix, 29));

// // Linear Search
// const linearSearch = (array, element) => {
//   for (const [idx, ele] of array.entries()) {
//     if (ele === element) {
//       return idx;
//     }
//   }
// };
// // invoke the function
// console.log(
//   linearSearch(
//     ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
//     "ball"
//   )
// ); // 4

// // Find the sum of common elements in two arrays:
// function commonElements(arr1, arr2) {
//   let comElements = arr1.filter((ele) => arr2.includes(ele));
//   let sum = comElements.reduce(function (cur, nex) {
//     return cur + nex;
//   }, 0);
//   return sum;
// }
// // invoke the function
// console.log(commonElements([1, 2, 3], [2, 3, 4])); // [2, 3] // 5

// // Return an object representing the character count of a string:
// function charCount(str) {
//   var regexp = /[^A-Za-z0-9]/gi;
//   // make the string case insensitive by converting to the same case
//   // then remove whitespace, and any unwanted characters from the strings
//   // finally, convert to an array
//   var arr = str.toLowerCase().replace(regexp, "").split("");
//   return arr.reduce(function (cur, nex) {
//     cur[nex] = cur[nex] + 1 || 1;
//     return cur;
//   }, {});
// }
// // invoke the function
// console.log(charCount("Mwanika Stephen Crispin"));
// console.log(Object.entries(charCount("Mwanika Stephen Crispin")));
// //console.log(Object.keys(charCount("Mwanika Stephen Crispin")));
// //console.log(Object.values(charCount("Mwanika Stephen Crispin")));

// /* Peaks and Valleys: In an array of integers, a "peak" is an element which is greater than or equal
// to the adjacent integers and a "valley" is an element which is less than or equal to the adjacent
// integers. For example, in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys. Given an
// array of integers, sort the array into an alternating sequence of peaks and valleys.
// EXAMPLE
// Input: {5, 3, 1, 2, 3}
// Output: {5, 1, 3, 2, 3} */

// // JavaScript program to print an array in alternating sequence (alternating sorting):
// function alternateSort(arr) {
//   // sort the array
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   // console.log(arr); // prints sorted array

//   let finalArr = []; // added
//   let [i, j] = [0, arr.length - 1];

//   while (i < j) {
//     finalArr.push(arr[j--], arr[i++]);
//   }

//   // If array length is odd then print the last middle element.
//   if (arr.length % 2 == 0) return finalArr;
//   if (arr.length % 2 != 0) return finalArr.concat(arr[i]);
// }
// // invoke the function
// //var arr = [1, 12, 4, 6, 7, 10];
// //var arr = [7, 1, 2, 3, 4, 5, 6];
// //var arr = [1, 6, 9, 4, 3, 7, 8, 2];
// var arr = [5, 3, 1, 2, 3];
// console.log(alternateSort(arr)); // [5, 1, 3, 2, 3]

// // The most frequent character in a string:
// // The most frequent element in an array:
// // OR
// // The least frequent character in a string:
// // The least frequent element in an array:
// function isMostFrequentChar(str) {
//   str = str
//     .toLowerCase()
//     .split("")
//     .reduce((acc, val) => {
//       acc[val] = (acc[val] || 0) + 1;
//       return acc;
//     }, {});
//   return Object.keys(str).filter((x) => {
//     return str[x] == Math.max.apply(null, Object.values(str)); // for most frequent
//     //return str[x] == Math.min.apply(null, Object.values(str)); // for least frequent
//   });
// }
// // invoke the function
// console.log(isMostFrequentChar("Mwanika")); // ['a']
// console.log(isMostFrequentChar("Mwanika Stephen Crispin")); // ['n', 'i']

// // invoke the function
// //console.log(isLeastFrequentChar("Mwanika")); // [ 'm', 'w', 'n', 'i', 'k' ]
// //console.log(isLeastFrequentChar("Mwanika Stephen Crispin")); // ['m', 'w', 'k', 't', 'h', 'c', 'r']

// /* String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). */
// const stringCompression = (str) => {
//   str = str.toLowerCase();
//   let [compStr, count] = ["", 1];

//   for (let i = 0; i < str.length; i++) {
//     let [cur, nex] = [str.charAt(i), str.charAt(i + 1)];

//     if (cur === nex) {
//       count++;
//     } else {
//       compStr += cur + String(count);
//       count = 1;
//     }
//   }
//   return compStr.length < str.length ? compStr : str;
// };
// // invoke the function
// console.log(stringCompression("aabCccccaaa")); // a2blc5a3
// console.log(stringCompression("wwwaabbbb")); // w3a2b4
// console.log(stringCompression("kkkkj")); // k4j1
// console.log(stringCompression("aab")); // aab

// // Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to each other.
// var groupAnagrams = function (arr) {
//   let obj = {};

//   arr.forEach((str) => {
//     let letters = str.split("").sort();

//     obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
//   });

//   const keys = Object.keys(obj);
//   const values = keys.map(function (v) {
//     return obj[v].sort();
//   });
//   return values.sort();
// };
// // invoke the function
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'ate', 'eat', 'tea' ], [ 'bat' ], [ 'nat', 'tan' ] ]

// // The length of the longest substring without repeating characters: mtd -- 1
// var longestSubstringLength = function (str) {
//   let [currentString, finalLength] = [[], 0];

//   for (let i = 0; i < str.length; i++) {
//     const currentCharacterIndex = currentString.indexOf(str[i]);

//     if (currentCharacterIndex !== -1) {
//       currentString.splice(0, currentCharacterIndex + 1);
//     }

//     currentString.push(str[i]);

//     finalLength = Math.max(finalLength, currentString.length);
//   }

//   return finalLength;
// };
// // invoke the function
// var string = "abbbcabcdefef";
// console.log(longestSubstringLength(string)); // 6

// // The length of the longest substring without repeating characters: mtd -- 2
// let getLength = function (str) {
//   let finalLength = 0;

//   for (let i = 0; i < str.length; i++) {
//     let currentString = new Set();

//     for (let j = i; j < str.length; j++) {
//       if (currentString.has(str[j])) {
//         break;
//       } else {
//         currentString.add(str[j]);
//       }
//     }

//     finalLength = Math.max(finalLength, currentString.size);
//   }

//   return finalLength;
// };
// // invoke the function
// var string = "abbbcabcdefef";
// console.log(getLength(string));

// // Counting substrings of a string that contains only one distinct letter in JavaScript
// const countSpecialStrings = (str = "") => {
//   let { length } = str;
//   let res = length;
//   if (!length) {
//     return length;
//   }
//   for (let j = 0, i = 1; i < length; ++i) {
//     if (str[i] === str[j]) {
//       res += i - j;
//     } else {
//       j = i;
//     }
//   }
//   return res;
// };
// // invoke the function
// console.log(countSpecialStrings("iiiji")); // 'iii', 'i', 'i', 'i', 'i', 'j', 'ii', 'ii' // 8
// console.log(countSpecialStrings("abcb")); // 'a', 'b', 'c', 'b' // 4

// Sorting the Products
var solution = function (a) {
  let res = [];
  // write your solution here
  a.forEach((ele) => {
    res.push(ele * ele);
    // case insensitive sort
    res = res.sort(function (s, t) {
      if (s > t) return 1;
      if (s < t) return -1;
      return 0;
    });
  });
  return res;
};
// invoke the function
console.log(solution([-5, -1, 0, 3, 10])); // [ 0, 1, 9, 25, 100 ]

// Word Weight
const str = "turing";
const calculateWeight = (str = "") => {
  str = str.toLowerCase();
  const legend = "abcdefghijklmnopqrstuvwxyz";
  let weight = "";
  const { length: l } = str;
  for (let i = 0; i < l; i++) {
    const el = str[i];
    const curr = legend.indexOf(el);
    weight += curr + 1;
  }
  // code introduced
  let sum = 0;
  let sumNew = 0;
  // n = 1;
  weight.split("").forEach((item) => {
    sum += +item;
  });
  // n = 2;
  sum
    .toString()
    .split("")
    .forEach((item) => {
      sumNew += +item;
    });
  return sumNew;
  //return weight;
};
// invoke the function
console.log(calculateWeight(str)); // 8

// Sum an Array
function sum(nums) {
  return nums.reduce(add);
}
function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}
// invoke the function
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(nums)); // 55
