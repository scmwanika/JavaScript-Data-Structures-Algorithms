// SUBSTRINGS, SUBARRAYS, SUBSEQUENCES, SUBSETS

/* SUBSTRINGS AND SUBARRAYS
-> a substring is a string that occurs in another string.
-> a subarray is a slice from a contiguous array.
both substrings and subarrays occupy consective positions and inherently maintain
the order of characters and elements respectively. */
exports.subStringsArrays = function (str) {
  let result = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};

/* SUBSEQUENCES AND SUBSETS
-> a subsequence of an array is a new array that is formed from the original array
by deleting some (or none) of the elements without disturbing the relative
positions and order of the remaining elements.
a subsequence may be continuous or non-continuous: for example;
[1,3,5] is a non-continuous subsequence of [1,2,3,4,5] while
[1,2,3] is a continuous subsequence of [1,2,3,4,5]

[1,3,2] is not a subsequence of [1,2,3,4,5] because the array does not maintain 
relative position and order of elements. However,
[1,3,2] is a subset of [1,2,3,4,5]. a subset may not maintain relative position
and order of elements.

-> a subset is any possible combination of the original set. for example;
[1,3,2] is a subset of [1,2,3,4,5]. a subset may not maintain relative position
and order of elements. */
exports.subSequencesSubsets = function (arr) {
  let result = [];
  let subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  return arr.reduce(subs, [result]);
};

/* ------------------------------------------------------------------------------------ */

// IS SUBSTRING | COMBINATION OF ANOTHER STRING
exports.isSubString = function (str, substr) {
  let res;
  if (str.toLowerCase().includes(substr.toLowerCase())) res = "Valid Substring";

  if (res === "Valid Substring") return true;
  return false;
};

// IS SUBSEQUENCE OF ANOTHER STRING
exports.isSubStringSequence = function (str, subseq) {
  let idx = 0;
  let arr = str.toLowerCase().split("");

  arr.filter((el) => {
    if (el.includes(subseq.toLowerCase()[idx])) idx++;
  });

  if (idx === subseq.length) return true;
  return false;
};

// IS SUBSET OF ANOTHER STRING
exports.isSubSetStr = function (str, subset) {
  let idx = 0;
  let arr = str.toLowerCase().split("").sort();

  arr.filter((el) => {
    if (el.includes(subset.toLowerCase().split("").sort()[idx])) idx++;
  });

  return idx === subset.length;
};

/* ------------------------------------------------------------------------------------ */

// IS SUBARRAY | COMBINATION OF ANOTHER ARRAY
exports.isSubArray = function (arr, subarr) {
  subarr = subarr.join("").toString();
  arr = arr.join("").toString();

  let res;
  if (arr.toLowerCase().includes(subarr.toLowerCase())) res = "Valid Subarray";

  if (res === "Valid Subarray") return true;
  return false;
};

// IS SUBSEQUENCE OF ANOTHER ARRAY
exports.isSubArraySequence = function (arr, subseq) {
  subseq = subseq.join("").toString();
  arr = arr.join("").toString();
  arr = arr.toLowerCase().split("");

  let idx = 0;

  arr.filter((el) => {
    if (el.includes(subseq.toLowerCase()[idx])) idx++;
  });

  if (idx === subseq.length) return true;
  return false;
};

// IS SUBSET OF ANOTHER ARRAY
exports.isSubSetArr = function (arr, subset) {
  subset = subset.join("").toString();
  arr = arr.join("").toString();
  arr = arr.toLowerCase().split("").sort();

  let idx = 0;

  arr.filter((el) => {
    if (el.includes(subset.toLowerCase().split("").sort()[idx])) idx++;
  });

  return idx === subset.length;
};

// // SUBSETS 1
// exports.subsets = function (nums) {
//   let result = [];
//   let subs = (sub_sets, value) =>
//     sub_sets.concat(sub_sets.map((set) => [...set, value]));
//   return nums.reduce(subs, [result]);
// };
// // invoke the function
// console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
// console.log(subsets([0])); // [[], [0]]

// /* SUBSETS 2
// Given an integer array nums that may contain duplicates, return all possible subsets
// (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order. */
// exports.subsetsWithDup = function (nums) {
//   let result = [];
//   let uniquesubsets;

//   let subs = (sub_sets, value) =>
//     sub_sets.concat(sub_sets.map((set) => [...set, value]));
//   uniquesubsets = nums.sort().reduce(subs, [result]);

//   // Transform arrays to strings
//   let stringArray = uniquesubsets.sort().map(JSON.stringify);
//   // Remove duplicates
//   let uniqueStringArray = new Set(stringArray);
//   // Transform back to array of arrays
//   let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

//   return uniqueArray;
// };
// // invoke the function
// // console.log(subsetsWithDup([1, 2, 2])); // [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]
// // console.log(subsetsWithDup([0])); // [[], [0]]
// // console.log(subsetsWithDup([4, 4, 4, 1, 4])); //
// console.log(subsetsWithDup([1, 2, 1])); //

// /* ------------------------------------------------------------------------------------ */

// // PERMUTATION:
// exports.permute = function (arr) {
//   let resultArr = [];
//   if (arr.length === 0) return resultArr;
//   if (arr.length === 1) resultArr.push(arr);

//   for (let i = 0; i < arr.length; i++) {
//     const swapPermutation = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
//     for (let j = 0; j < swapPermutation.length; j++) {
//       const mergePermutation = [arr[i]].concat(swapPermutation[j]);
//       //resultArr.push(mergePermutation.join("")); // for strings
//       resultArr.push(mergePermutation); // for arrays
//     }
//   }
//   return resultArr;
// };
// // invoke the function
// //console.log(permute("123")); // ['123', '132', '213', '231', '312', '321']
// console.log(permute(["1", "2", "3"]));
// /*
// [
//   ['1', '2', '3'], ['1', '3', '2'], ['2', '1', '3'],
//   ['2', '3', '1'], ['3', '1', '2'], ['3', '2', '1']
// ]
// */
// console.log(permute([1, 2, 3]));
// // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// console.log(permute([0, 1])); // [[0, 1], [1, 0]]
// console.log(permute([1])); // [[1]]

/* ------------------------------------------------------------------------------------ */

// ARRAYS AND STRINGS

// IS UNIQUE || IS DUPLICATE:
exports.isUnique = function (nums) {
  // Get object element count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  if (Math.max(...Object.values(obj)) > 1) return false; // "isDuplicate";
  return true; // "isUnique";
};

/* CHECK PALINDROME:
Given two strings, write a method to decide if one is a palindrome of the other. */
exports.isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // reverse the input and return the result of the comparison
  return s === s.split("").reverse().join("");
};

// IS PALINDROME NUMBER:
exports.isPalindromeNumber = function (x) {
  x = String(x);
  // reverse the input string and return the result of the comparison
  return x === x.split("").reverse().join("");
};

// CHECK PERMUTATION:
/* Given two strings, write a method to decide if one is a permutation of the other. */

exports.checkPermutation = function (s1, s2) {
  let regexp = /[^a-z0-9]/g;
  // sort the input and return the result of the comparison
  return (
    s1.toLowerCase().replace(regexp, "").split("").sort().join("") ===
    s2.toLowerCase().replace(regexp, "").split("").sort().join("")
  );
};

/* URLify: 
Write a method to replace all spaces in a string with '%20'. You may assume that the 
string has sufficient space at the end to hold the additional characters, and that you 
are given the "true" length of the string. 
EXAMPLE 
Input: "Mr John Smith ", 13 
Output: "Mr%20John%20Smith" */

exports.urlify = function (string) {
  return string.trim().replace(/\s/g, "%20");
};

/* IS PALINDROME PERMUTATION: 
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just 
dictionary words. */

exports.isPalindromePermutation = function (str) {
  // Get object element count
  let obj = {};
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  str.split("").forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  // Get entries with odd values
  let entrys = [];
  Object.values(obj).filter((el) => {
    if (el % 2 !== 0) entrys.push(el);
  });

  if (entrys.length === 0 || entrys.length === 1) return true;
  return false;
};

/* IS ONE AWAY: 
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check 
if they are one edit (or zero edits) away. */

exports.isOneAway = function (s1, s2) {
  let notCom = [];
  s1.split("").filter((el) => {
    if (!s2.includes(el)) {
      notCom.push(el);
    }
  });

  if (notCom.length <= 1) return true;
  return false;
};

/* STRING COMPRESSION: 
Implement a method to perform basic string compression using the counts of repeated 
characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" 
string would not become smaller than the original string, your method should return the 
original string. You can assume the string has only uppercase and lowercase letters */

exports.stringCompression = (s) => {
  s = s.toLowerCase().replace(/[^A-Za-z]/g, "");
  let [compstr, count] = ["", 1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      compstr = compstr + s[i] + count;
      count = 1;
    }
  }
  if (compstr.length < s.length) return compstr;
  return s;
};

// ANOTHER VERSION OF STRING COMPRESSION -> NOT RELATED TO ABOVE
exports.strCompressions = (s) => {
  let obj = {};
  s.toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .forEach((el) => {
      if (obj[el]) {
        return obj[el]++;
      }
      obj[el] = 1;
    });

  return Object.entries(obj).flat().join("");
};

/* ROTATE MATRIX: 
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
write a method to rotate the image by 90 degrees. Can you do this in place? */

// ROTATE MATRIX RIGHT (CLOCKWISE)
exports.rotateMatrixRight = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      // swap index by index:
      let top = matrix[row][col];

      // left edge -> top edge
      matrix[row][col] = matrix[n - 1 - col][row];

      // bottom edge -> left edge
      matrix[n - 1 - col][row] = matrix[n - 1 - row][n - 1 - col];

      // right edge -> bottom edge
      matrix[n - 1 - row][n - 1 - col] = matrix[col][n - 1 - row];

      // top edge -> right edge
      matrix[col][n - 1 - row] = top;
    }
  }
  return matrix;
};

// ROTATE MATRIX LEFT (ANTI-CLOCKWISE)
exports.rotateMatrixLeft = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      // swap index by index:
      let top = matrix[row][col];

      // right edge -> top edge
      matrix[row][col] = matrix[col][n - 1 - row];

      // bottom edge -> right edge
      matrix[col][n - 1 - row] = matrix[n - 1 - row][n - 1 - col];

      // left edge -> bottom edge
      matrix[n - 1 - row][n - 1 - col] = matrix[n - 1 - col][row];

      // top edge -> left edge
      matrix[n - 1 - col][row] = top;
    }
  }
  return matrix;
};

/* ZERO MATRIX: 
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
column are set to 0. */

/* IS STRING ROTATION:
Assume you have a method isSubstring which checks if one word is a substring of another. 
Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g "waterbottle" is a rotation of "erbottlewat"). */

exports.isSubstring = function (s1, s2) {
  s1 = s1.toLowerCase().split("").sort().join("");
  s2 = s2.toLowerCase().split("").sort().join("");
  return s1 === s2;
};

// SORTING AND SEARCHING

/* SORTED MERGE: 
You are given two sorted arrays, A and B, where A has a large enough buffer at the end to 
hold B. Write a method to merge B into A in sorted order. */

/* GROUP ANAGRAMS: 
Write a method to sort an array of strings so that all the anagrams are next to each other.
*/

exports.groupAnagrams = function (nums) {
  let obj = [];
  nums.forEach((el) => {
    let chars = el.split("").sort();
    //
    if (obj[chars]) {
      return obj[chars].push(el);
    } else return (obj[chars] = [el]);
  });

  obj = Object.values(obj);

  return obj;

  // // Sort anagrams
  // let anagrams = [];
  // obj.filter((item) => {
  //   anagrams.push(item.sort());
  // });
  // return anagrams.sort();
};

/* SEARCH IN ROTATED ARRAY: 
Given a sorted array of n integers that has been rotated an unknown number of times, write 
code to find an element in the array. You may assume that the array was originally sorted 
in increasing order. */

exports.searchRotatedArray = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      indices.push(i);
    }
  }

  return indices;
};

/* SORTED SEARCH, NO SIZE: 
You are given an array-like data structure Listy which lacks a size method. It does, 
however, have an elementAt (i) method that returns the element at index i in 0(1) time. 
If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) Given a Listy which contains sorted, positive 
integers, find the index at which an element x occurs. If x occurs multiple times, you may 
return any index. */

exports.sortedSearch = function (listy, element) {
  let index = [];
  for (let i = 0; i < listy.length; i++) {
    if (listy[i] === element) {
      index.push(i);
    }
  }

  return index[0];
};

/* SPARSE SEARCH: 
Given a sorted array of strings that is interspersed with empty strings, write a method to 
find the location of a given string.
EXAMPLE
Input: ball, ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
Output: 4 */

exports.sparseSearch = function (array, element) {
  let index = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      index.push(i);
    }
  }

  return index[0];
};

/* SORT BIG FILE: 
Imagine you have a 20 GB file with one string per line. Explain how you would sort the file.
*/

/* MISSING INT: 
Given an input file with four billion non-negative integers, provide an algorithm to 
generate an integer that is not contained in the file. Assume you have 1 GB of memory 
available for this task.
FOLLOW UP
What if you have only 10 MB of memory? Assume that all the values are distinct and we now 
have no more than one billion non-negative integers. */

exports.missingInt = function (nums) {
  let n = nums.length;
  let missing = "";
  let nums2 = [];

  for (let start = 0; start <= n; start++) {
    nums2.push(start);
  }
  // missing elements in nums
  nums2.filter((el) => {
    if (!nums.includes(el)) {
      missing = missing + el;
    }
  });
  return Number(missing);
};

/* FIND DUPLICATES:
You have an array with all the numbers from 1 to N, where N is at most 32,000. The array 
may have duplicate entries and you do not know what N is. With only 4 kilobytes of memory
available, how would you print all duplicate elements in the array? */

exports.findDuplicate = function (nums) {
  // Get object element count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  // Get numbers with count > 1
  let numbers = Object.keys(obj).filter((k) => {
    return obj[k] > 1;
  });

  // Convert numbers to datatype "number"
  let transformedNumbers = [];
  numbers.filter((el) => {
    transformedNumbers.push(Number(el));
  });

  if (transformedNumbers.length === 0) return -1;
  if (transformedNumbers.length === 1) return transformedNumbers[0];
  if (transformedNumbers.length > 1) return transformedNumbers;
};

/* SORTED MATRIX SEARCH: 
Given an M x N matrix in which each row and each column is sorted in ascending order, 
write a method to find an element. */

exports.searchSortedMatrix = (matrix, target) => {
  for (
    let row = 0, col = matrix[0].length - 1;
    row < matrix.length && col >= 0;

  ) {
    if (matrix[row][col] === target) return true; // return [[row, col], true]
    if (matrix[row][col] > target) col--;
    if (matrix[row][col] < target) row++;
  }
  return false;
};

/* RANK FROM STREAM: 
Imagine you are reading in a stream of integers. Periodically, you wish to be able to look 
up the rank of a number x (the number of values less than or equal to x). lmplement the 
data structures and algorithms to support these operations. That is, implement the method 
track ( int x), which is called when each number is generated, and the method 
getRankOfNumber(int x), which returns the number of values less than or equal to x 
(not including x itself).
EXAMPLE
Stream (in order of appearance): 5, 1, 4, 4, 5, 9, 7, 13, 3
getRankOfNumber(l) = 0
getRankOfNumber(3) = 1
getRankOfNumber(4) = 3 */

exports.getRankOfNumber = function (stream, x) {
  stream.sort(function (e1, e2) {
    if (e1 > e2) return 1;
    return -1;
  });

  if (stream.includes(x)) {
    return stream.lastIndexOf(x);
  }
};

/* PEAKS AND VALLEYS:
In an array of integers, a "peak" is an element which is greater than or equal to the 
adjacent integers and a "valley" is an element which is less than or equal to the adjacent 
integers.
For example, in the array [5, 1, 3, 2, 3], [5, 3, 3] are peaks and [1, 2] are valleys. 
Given an array of integers, sort the array into an alternating sequence of peaks and valleys.
*/

exports.peaksValleys = function (arr) {
  if (arr.length === 0) return -1;
  // sort the array
  arr.sort(function (a, b) {
    return a - b;
  });

  let new_arr = [];
  let [start, stop] = [0, arr.length - 1];

  while (start < stop) {
    new_arr.push(arr[stop--], arr[start++]);
  }

  // If array length is odd then print the last middle element.
  if (arr.length % 2 === 0) return new_arr;
  if (arr.length % 2 !== 0) return new_arr.concat(arr[start]);
};

/* ------------------------------------------------------------------------------------ */

// REVERSE INTEGER
exports.reverseInteger = function (num) {
  let arr = String(num).split("");
  let reverseArr = [];

  arr.forEach((el) => {
    if ("0123456789".includes(el)) reverseArr.unshift(el);
  });
  // constraints
  if (
    Number(reverseArr.join("")) < (-2) ** 31 ||
    Number(reverseArr.join("")) > 2 ** 31
  )
    return 0;
  //
  if (arr[0] === "-") return Number(arr[0] + reverseArr.join(""));
  else return Number(reverseArr.join(""));
};

// REVERSE WORDS IN A STRING
exports.reverseWords = function (s) {
  let arr = s.replaceAll(" ", ",").split(",");
  let reverseArr = [];

  arr.filter((word) => {
    if (word.length > 0) reverseArr.unshift(word);
  });
  // constraints

  return reverseArr.join(" ");
};

// Length of the last word:
exports.lastWordLength = function (str) {
  let reversedString = [];
  str
    .replace(/ /gi, ",")
    .split(",")
    .forEach((word) => {
      reversedString.unshift(word);
    });
  return reversedString[0].length;
};

// Count maximum element in the array:
exports.countMaxElement = function (nums) {
  nums.sort(function (e1, e2) {
    if (e1 > e2) return -1;
    return 1;
  });
  let count = 0;
  nums.filter((el) => {
    if (el === nums[0]) count++;
  });
  return count;
};

// FIND THE SINGLE LETTER
exports.singleLetter = function (s) {
  // Get letter count
  let obj = {};
  s.toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .forEach((el) => {
      if (obj[el]) return obj[el]++;
      else obj[el] = 1;
    });
  // Get letters with count = 1
  let letters = Object.keys(obj).filter((k) => {
    return obj[k] === 1;
  });

  if (letters.length === 0) return -1;
  if (letters.length === 1) return letters[0];
  if (letters.length > 1) return letters;
};

// FIND THE SINGLE NUMBER
exports.singleNumber = function (nums) {
  // Get number count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  // Get numbers with count = 1
  let numbers = Object.keys(obj).filter((k) => {
    return obj[k] === 1;
  });

  // Convert numbers to datatype "number"
  let transformedNumbers = [];
  numbers.filter((el) => {
    transformedNumbers.push(Number(el));
  });

  if (transformedNumbers.length === 0) return -1;
  if (transformedNumbers.length === 1) return transformedNumbers[0];
  if (transformedNumbers.length > 1) return transformedNumbers;
};

// CLIMBING STAIRS
/* A child is running up a staircase with n steps and can hop either
1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways
the child can run up the stairs. */
exports.climbStairs = function (n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (n > 0)
    return climbStairs(n - 3) + climbStairs(n - 2) + climbStairs(n - 1);
};

// SEARCH INSERT POSITION
exports.searchInsert = function (nums, target) {
  let indices = [];
  for (let [idx, el] of [
    ...new Set(
      nums.concat(target).sort(function (e1, e2) {
        if (e1 > e2) return 1;
        return -1;
      })
    ),
  ].entries()) {
    if (el === target) {
      indices.push(idx);
    }
  }
  // index / indices of searched element
  return Number(indices); // if indices.length > 1, then element is Duplicate
};

// ROTATE STRING RIGHT (CLOCKWISE) BY K PLACES
exports.rotateStringRight = function (string, k) {
  exports.merge_string = null;
  k = string.length - k;
  let str1 = string.slice(k, string.length);
  let str2 = string.slice(0, k);
  merge_string = str1 + str2;
  return merge_string;
};

// ROTATE ARRAY RIGHT (CLOCKWISE) BY K PLACES
exports.rotateArrayRight = function (nums, k) {
  exports.merge_array = null;
  k = nums.length - k;
  let arr1 = nums.slice(k, nums.length);
  let arr2 = nums.slice(0, k);
  merge_array = arr1.concat(arr2);
  return merge_array;
};

// MAXIMUM SUM SUBARRAY: -> MTD 1
exports.maxSubarraySum = function (nums) {
  let presubsum = 0,
    cursubsum = 0;

  nums.forEach((el) => {
    presubsum = Math.max(0, presubsum + el);
    cursubsum = Math.max(presubsum, cursubsum);
  });
  if (Math.max(...nums) < 0) return Math.max(...nums);
  return cursubsum;
};
// // invoke the function
// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [ 4, -1, 2, 1 ] -> 6
// console.log(maxSubarraySum([-2, 0, -1])); // [ 0 ] -> 0
// console.log(maxSubarraySum([-2, -3, -1])); // [ -1 ] -> -1
// console.log(maxSubarraySum([2, -8, 3, -2, 4, -10])); // [ 3, -2, 4 ] -> 5

// MAXIMUM SUBARRAY SUM: -> MTD 2
var maxSubarraySum2 = function (nums) {
  let maxsum = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      maxsum = Math.max(maxsum, sum);
    }
  }
  if (Math.max(...nums) < 0) return Math.max(...nums);
  return maxsum;
};
// invoke the function
console.log(maxSubarraySum2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [ 4, -1, 2, 1 ] -> 6
console.log(maxSubarraySum2([-2, 0, -1])); // [ 0 ] -> 0
console.log(maxSubarraySum2([-2, -3, -1])); // [ -1 ] -> -1
console.log(maxSubarraySum2([2, -8, 3, -2, 4, -10])); // [ 3, -2, 4 ] -> 5

// COUNT SUBARRAYS WHOSE ELEMENTS ADD UP TO K:
exports.countSubarrays = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) count++;
    }
  }
  return count;
};
// // invoke the function
// console.log(countSubarrays([-2], -2)); // 1
// console.log(countSubarrays([-2, -1], -1)); // 1
// console.log(countSubarrays([-2, -1, -1], -1)); // 2
// console.log(countSubarrays([-1, -2, -1], -1)); // 2

// IS ADDITIVE SEQUENCE:
exports.isAdditiveSeries = function (arr) {
  // sort the array and
  // check if every element is equal to the sum of the previous 2 elements
  arr.sort(function (e1, e2) {
    return e1 - e2;
  });

  for (i = 2; i < arr.length; i++) {
    if (arr[i - 1] + arr[i - 2] != arr[i]) return false;
  }
  return true;
};

/* ------------------------------------------------------------------------------------ */

/* OBJECT STORE -> Dictionary Sorting Objects */
let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// SORT THE OBJECT BY SALARY (ASCENDING SORT)
exports.sortEmployeesBySalary = function (employees) {
  employees.sort((prop1, prop2) => {
    if (prop1.salary > prop2.salary) return 1;
    return -1;
  });
  return employees;
};

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

/* ------------------------------------------------------------------------------------ */

// The count of a substring in a string:
exports.countSubstring = function (char, string) {
  let pattern = new RegExp(char, "gi");
  let arr = string.match(pattern);
  if (arr !== null) return arr.length;
  return -1;
};

// The count of a character in a string:
exports.countCharacter = function (char, string) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    if (string.toLowerCase()[i] === char.toLowerCase()) count++;
  }
  if (count > 0) return count;
  return -1;
};

// The count of a word in a string:
exports.countWord = function (word, string) {
  let count = 0;
  string = string.toLowerCase().replace(/ /gi, ",").split(",");
  for (i = 0; i < string.length; i++) {
    if (string[i] === word.toLowerCase()) count++;
  }
  if (count > 0) return count;
  return -1;
};

/* ------------------------------------------------------------------------------------ */

// FIND INDEX OF PEAK ELEMENT:
exports.findPeakElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};

// FIND THE INDEX OF THE FIRST OCCURRENCE IN A STRING:
exports.strStr = function (haystack, needle) {
  if (haystack.includes(needle)) return haystack.indexOf(needle);
  return -1;
};

// LONGEST COMMON PREFIX:
var longestCommonPrefix = function (words) {
  let firstword = words[0];
  if (words.length <= 1) return -1;
  for (let i = 0; i < firstword.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (firstword[i] !== words[j][i]) return firstword.slice(0, i);
    }
  }
};
// invoke the function
console.log(longestCommonPrefix([])); // -1
console.log(longestCommonPrefix(["floor", "flower", "flood"])); // flo

// LONGEST COMMON SUFFIX:
var longestCommonSuffix = function (words) {
  let nwords = [];
  words.forEach((word) => {
    nwords.push(word.split("").reverse().join(""));
  });

  let firstword = nwords[0];
  if (nwords.length <= 1) return -1;
  for (let i = 0; i < firstword.length; i++) {
    for (let j = 0; j < nwords.length; j++) {
      if (firstword[i] !== nwords[j][i])
        return firstword.slice(0, i).split("").reverse().join("");
    }
  }
};
// invoke the function
console.log(longestCommonSuffix([])); // -1
console.log(longestCommonSuffix(["feeder", "flower", "water"])); // er

/* ------------------------------------------------------------------------------------ */

// The count of characters in a string:
exports.characterFrequency = function (string) {
  let obj = {};
  string
    .toLowerCase()
    .replace(/ /gi, "")
    .split("")
    .forEach((el) => {
      if (obj[el]) return obj[el]++;
      return (obj[el] = 1);
    });
  //return obj;
  /*
      {
        t: 2, h: 2, e: 3, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1,
        f: 1, x: 1, j: 1, m: 1, p: 1, s: 1, v: 1, l: 1, a: 1, z: 1, y: 1, d: 1, g: 1
      }
  */

  //return Math.max(...Object.values(obj)); // 4

  return Object.keys(obj)
    .filter((k) => {
      return obj[k] === Math.max(...Object.values(obj));
    })
    .join(); // o
};

/* ------------------------------------------------------------------------------------ */

// WORD WITH THE MOST VOWELS -> method 1:
exports.mostVowels = function (words) {
  vowels = [];
  words.forEach((word) => {
    word.split("").forEach((character) => {
      if ("aeiou".includes(character.toLowerCase())) vowels.push(word);
    });
  });
  //
  let obj = {};
  vowels.forEach((el) => {
    if (obj[el]) return obj[el]++;

    obj[el] = 1;
  });
  //
  return Object.keys(obj)
    .filter((k) => {
      return obj[k] === Math.max(...Object.values(obj));
    })
    .join(""); // aeiou -> word with the most vowels
};

// method 2:
exports.mostVowels2 = function (words) {
  let wordToReturn;
  let highestVowelCount = -1;

  for (let i = 0; i < words.length; i++) {
    let vowelCount = words[i].match(/[aeiouAEIOU]/g).length;
    if (vowelCount > highestVowelCount) {
      highestVowelCount = vowelCount;
      wordToReturn = words[i];
    }
  }
  return wordToReturn;
};

// WORDS WITH MORE THAN ONE VOWEL
exports.moreThanOneVowel = function (words) {
  vowels = [];
  words.forEach((word) => {
    word.split("").forEach((character) => {
      if ("aeiou".includes(character.toLowerCase())) vowels.push(word);
    });
  });
  //
  let obj = {};
  vowels.forEach((el) => {
    if (obj[el]) return obj[el]++;

    obj[el] = 1;
  });
  //
  return Object.keys(obj)
    .filter((k) => {
      return obj[k] > 1;
    })
    .join(); // aeiou,FOUR -> words with more than one vowel
};

/* ------------------------------------------------------------------------------------ */

// SWAP UPPERCASE AND LOWERCASE LETTERS:
exports.swapCase = function (str) {
  let new_array = [];
  str.split("").filter((el) => {
    if (el === el.toLowerCase()) new_array.push(el.toUpperCase());
    else new_array.push(el.toLowerCase());
  });
  return new_array.join("");
};

/* SWITCH REVERSER -> create a program that will:
- reverse the order of a list if the list consists of integers alone,
- convert the list items to uppercase if the list contains words only,
- return the same list if the list members don't satisfy either of these two criteria. */
exports.switchReverser = function (a) {
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

/* PIG LATIN CONVERTER -> create a program:
- if the word starts with a consonant or group of consonants, move all letters before the
  first vowel to the end of the word then add "ay",
- if the word starts with a vowel, simply add "way" to the end of the word. */
exports.pigLatinConverter = function (str) {
  let start = str.match(/[aeiouAEIOU]/);
  let end = str.indexOf(start[0]); // [ 'a', index: 2, input: 'chatter', groups: undefined ]

  if ("aeiouAEIOU".includes(str[0])) return str + "way";
  return str.slice(end) + str.slice(0, end) + "ay";
};
// // invoke the function
// console.log(pigLatinConverter("chatter")) // atterchay
// console.log(pigLatinConverter("Chatter")) // atterChay

/* ------------------------------------------------------------------------------------ */

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Using Pointers):
exports.lengthOfLongestSubstring = function (s) {
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

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
exports.longestSubstring = function (str) {
  let unique_substr = null;
  let dict = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      unique_substr = [...new Set(str.slice(i, j))].join("");

      // Length of each substr
      if (str.includes(unique_substr))
        dict.push({ unique_substr: unique_substr, len: unique_substr.length });
      // descending sort by len
      dict.sort(function (prop1, prop2) {
        return prop2.len - prop1.len;
      });
    }
  }
  if (str.length === 0) return 0;
  return Object.values(dict[0])[1];
  // if (str.length === 0) return str;
  // return Object.values(dict[0])[0];
};

// LONGEST COMMON SUBSTRING WITHOUT REPEATING CHARACTERS:
exports.longestCommonSubstring = function (string1, string2) {
  let count = 0,
    res = null;
  for (let i = 0; i < string1.length; i++) {
    for (let j = i + 1; j < string1.length + 1; j++) {
      let substr1 = [...new Set(string1.slice(i, j).split(""))].join("");
      // Common unique substring
      if (string2.includes(substr1)) {
        count = Math.max(count, substr1.length);
        if (count === substr1.length) res = substr1;
      }
    }
  }
  return res;
};

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS:
exports.longestCommonSubsequence = function (text1, text2) {
  let res = [],
    count = 0,
    result = null;

  // define helper function
  function subsequences(e1, e2) {
    let arr = e1.map((set) => [...set, e2]);
    return e1.concat(arr);
  }
  //
  text1
    .split("")
    .reduce(subsequences, [res])
    .filter((el) => {
      let subseq1 = [...new Set(el)].join("");
      //
      text2
        .split("")
        .reduce(subsequences, [res])
        .filter((el) => {
          // Common unique subsequence
          if (el.join("").includes(subseq1)) {
            count = Math.max(count, subseq1.length);
            if (count === subseq1.length) result = subseq1;
          }
        });
    });
  return result;
};

/* ------------------------------------------------------------------------------------ */

/* Given five positive integers, find the minimum and maximum values that can be
calculated by summing exactly four of the five integers. Then print the respective minimum
and maximum values as an object. */
var minMaxSum = function (arr) {
  let min = 0;
  let max = 0;

  for (let i = 0, j = arr.length - 1; j > 0; i++, j--) {
    min = min + arr[i];
    max = max + arr[j];
  }
  return { min, max };
};
// invoke the function
console.log(minMaxSum([1, 3, 5, 7, 9])); // {min: 16, max: 24}

// SPLIT ARRAY:
var splitArray = function (arr) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0, j = arr.length - 1; j >= i; i++, j--) {
    arr1.push(arr[i]);
    arr2.push(arr[j]);
  }
  //
  if (arr.length % 2 !== 0) {
    const [, ...arr3] = arr2.reverse();
    return [arr1, arr3];
  }
  return [arr1, arr2.reverse()];
};
// invoke the function
console.log(splitArray([1, 3, 5, 7, 9])); // [[1, 3, 5], [7, 9]]
console.log(splitArray([1, 3, 7, 9])); // [[1, 3], [7, 9]]

/* ------------------------------------------------------------------------------------ */

// Substrings & Subarrays:
var str1 = "123";
var str2 = "1234";
console.log(str2.includes(str1)); // true

var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, 4];
console.log(arr2.join("").includes(arr1.join(""))); // true

// Given:
var str1 = "31";
var str2 = "1234";

// Subsequences:
var subsequence = function (str1, str2) {
  let idx = 0;
  str2.split("").filter((el) => {
    if (el.includes(str1[idx])) idx++;
  });
  return idx === str1.length;
};
// invoke the function
console.log(subsequence(str1, str2)); // false

// Subsets:
var subset = function (str1, str2) {
  let idx = 0;
  str2
    .split("")
    .sort()
    .filter((el) => {
      if (el.includes(str1.split("").sort()[idx])) idx++;
    });
  return idx === str1.length;
};
// invoke the function
console.log(subset(str1, str2)); // true

// Index of last substring:
var indexLastSubstring = function (string, substring) {
  if (string.includes(substring)) return string.lastIndexOf(substring);
  return -1;
};
// invoke the function
console.log(indexLastSubstring("sadbutsad", "sad")); // 6
console.log(indexLastSubstring("leetcode", "leeto")); // -1

var str = "The quick brown fox jumps over the lazy dog";
console.log(str.match(/the/gi)); // [ 'The', 'the' ]
console.log(str.replace(/the/gi, "THE")); // THE quick brown fox jumps over THE lazy dog
console.log(str.replace(/ /gi, ",").split(","));
/*
    [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ]
*/

/* ------------------------------------------------------------------------------------ */
