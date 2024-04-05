// SUBSTRINGS, SUBARRAYS, SUBSEQUENCES, SUBSETS

/* SUBSTRINGS AND SUBARRAYS
-> a substring is a string that occurs in another string.
-> a subarray is a slice from a contiguous array.
both substrings and subarrays occupy consective positions and inherently maintain
the order of characters and elements respectively. */
var subStringsArrays = function (str) {
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
var subSequencesSubsets = function (arr) {
  let result = [];
  let subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  return arr.reduce(subs, [result]);
};

/* ------------------------------------------------------------------------------------ */

// IS SUBSTRING | COMBINATION OF ANOTHER STRING
var isSubString = function (str, substr) {
  let res;
  if (str.toLowerCase().includes(substr.toLowerCase())) res = "Valid Substring";

  if (res === "Valid Substring") return true;
  return false;
};

// IS SUBSEQUENCE OF ANOTHER STRING
var isSubStringSequence = function (str, subseq) {
  let idx = 0;
  let arr = str.toLowerCase().split("");

  arr.filter((el) => {
    if (el.includes(subseq.toLowerCase()[idx])) idx++;
  });

  if (idx === subseq.length) return true;
  return false;
};

// IS SUBSET OF ANOTHER STRING
var isSubSetStr = function (str, subset) {
  let idx = 0;
  let arr = str.toLowerCase().split("").sort();

  arr.filter((el) => {
    if (el.includes(subset.toLowerCase().split("").sort()[idx])) idx++;
  });

  return idx === subset.length;
};

/* ------------------------------------------------------------------------------------ */

// IS SUBARRAY | COMBINATION OF ANOTHER ARRAY
var isSubArray = function (arr, subarr) {
  subarr = subarr.join("").toString();
  arr = arr.join("").toString();

  let res;
  if (arr.toLowerCase().includes(subarr.toLowerCase())) res = "Valid Subarray";

  if (res === "Valid Subarray") return true;
  return false;
};

// IS SUBSEQUENCE OF ANOTHER ARRAY
var isSubArraySequence = function (arr, subseq) {
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
var isSubSetArr = function (arr, subset) {
  subset = subset.join("").toString();
  arr = arr.join("").toString();
  arr = arr.toLowerCase().split("").sort();

  let idx = 0;

  arr.filter((el) => {
    if (el.includes(subset.toLowerCase().split("").sort()[idx])) idx++;
  });

  return idx === subset.length;
};

// SUBSETS 1
var subsets = function (nums) {
  let result = [];
  let subs = (sub_sets, value) =>
    sub_sets.concat(sub_sets.map((set) => [...set, value]));
  return nums.reduce(subs, [result]);
};
// invoke the function
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // [[], [0]]

/* SUBSETS 2
Given an integer array nums that may contain duplicates, return all possible subsets
(the power set).
The solution set must not contain duplicate subsets. Return the solution in any order. */
var subsetsWithDup = function (nums) {
  let result = [];
  let uniquesubsets;

  let subs = (sub_sets, value) =>
    sub_sets.concat(sub_sets.map((set) => [...set, value]));
  uniquesubsets = nums.sort().reduce(subs, [result]);

  // Transform arrays to strings
  let stringArray = uniquesubsets.sort().map(JSON.stringify);
  // Remove duplicates
  let uniqueStringArray = new Set(stringArray);
  // Transform back to array of arrays
  let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

  return uniqueArray;
};
// invoke the function
// console.log(subsetsWithDup([1, 2, 2])); // [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]
// console.log(subsetsWithDup([0])); // [[], [0]]
// console.log(subsetsWithDup([4, 4, 4, 1, 4])); //
console.log(subsetsWithDup([1, 2, 1])); //

/* ------------------------------------------------------------------------------------ */

// PERMUTATION:
var permute = function (arr) {
  let resultArr = [];
  if (arr.length === 0) return resultArr;
  if (arr.length === 1) resultArr.push(arr);

  for (let i = 0; i < arr.length; i++) {
    const swapPermutation = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let j = 0; j < swapPermutation.length; j++) {
      const mergePermutation = [arr[i]].concat(swapPermutation[j]);
      //resultArr.push(mergePermutation.join("")); // for strings
      resultArr.push(mergePermutation); // for arrays
    }
  }
  return resultArr;
};
// invoke the function
//console.log(permute("123")); // ['123', '132', '213', '231', '312', '321']
console.log(permute(["1", "2", "3"]));
/*
[
  ['1', '2', '3'], ['1', '3', '2'], ['2', '1', '3'],
  ['2', '3', '1'], ['3', '1', '2'], ['3', '2', '1']
] 
*/
console.log(permute([1, 2, 3]));
// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
console.log(permute([0, 1])); // [[0, 1], [1, 0]]
console.log(permute([1])); // [[1]]

/* ------------------------------------------------------------------------------------ */

// ARRAYS AND STRINGS

// IS UNIQUE || IS DUPLICATE:
var isUnique = function (nums) {
  // Get object element count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  if (Math.max(...Object.values(obj)) > 1) return false; // "isDuplicate";
  return true; // "isUnique";
};
// invoke the function
console.log(isUnique([2, 2, 1])); // false
console.log(isUnique([-4, 1, 2, 1, 2])); // false
console.log(isUnique([1])); // true
console.log(isUnique([1, 2, 1, 3, 2, 5])); // false

/* CHECK PALINDROME:
Given two strings, write a method to decide if one is a palindrome of the other. */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // reverse the input and return the result of the comparison
  return s === s.split("").reverse().join("");
};
// invoke the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true

// IS PALINDROME NUMBER:
var isPalindromeNumber = function (x) {
  x = String(x);
  // reverse the input string and return the result of the comparison
  return x === x.split("").reverse().join("");
};
// invoke the function
console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(-121)); // false
console.log(isPalindromeNumber(10)); // false

// CHECK PERMUTATION:
/* Given two strings, write a method to decide if one is a permutation of the other. */

var checkPermutation = function (s1, s2) {
  let regexp = /[^a-z0-9]/g;
  // sort the input and return the result of the comparison
  return (
    s1.toLowerCase().replace(regexp, "").split("").sort().join("") ===
    s2.toLowerCase().replace(regexp, "").split("").sort().join("")
  );
};
// invoke the function
console.log(checkPermutation("amadm", "madam")); // true

/* URLify: 
Write a method to replace all spaces in a string with '%20'. You may assume that the 
string has sufficient space at the end to hold the additional characters, and that you 
are given the "true" length of the string. 
EXAMPLE 
Input: "Mr John Smith ", 13 
Output: "Mr%20John%20Smith" */

var urlify = function (string) {
  return string.trim().replace(/\s/g, "%20");
};
// invoke the function
console.log(urlify("Mr John Smith ", 13)); // "Mr%20John%20Smith"

/* IS PALINDROME PERMUTATION: 
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just 
dictionary words. */

var isPalindromePermutation = function (str) {
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
// invoke the function
console.log(isPalindromePermutation("Tact Coa")); // true
console.log(isPalindromePermutation("refer")); // true
console.log(isPalindromePermutation("rrfee")); // true
console.log(isPalindromePermutation("taco cat")); // true
console.log(isPalindromePermutation("atco cta")); // true

/* IS ONE AWAY: 
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check 
if they are one edit (or zero edits) away. */

var isOneAway = function (s1, s2) {
  let notCom = [];
  s1.split("").filter((el) => {
    if (!s2.includes(el)) {
      notCom.push(el);
    }
  });

  if (notCom.length <= 1) return true;
  return false;
};
// invoke the function
console.log(isOneAway("pale", "ple")); // true
console.log(isOneAway("pales", "pale")); // true
console.log(isOneAway("pale", "bale")); // true
console.log(isOneAway("pale", "bake")); // false

/* STRING COMPRESSION: 
Implement a method to perform basic string compression using the counts of repeated 
characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" 
string would not become smaller than the original string, your method should return the 
original string. You can assume the string has only uppercase and lowercase letters */

var stringCompression = (s) => {
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
// invoke the function
console.log(stringCompression("aabCccccaaa")); // a2b1c5a3
console.log(stringCompression("wwwaabbbb")); // w3a2b4
console.log(stringCompression("kkkkj")); // k4j1
console.log(stringCompression("aab")); // aab

// ANOTHER VERSION OF STRING COMPRESSION -> NOT RELATED TO ABOVE
var strCompressions = (s) => {
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
// invoke the function
console.log(strCompressions("aabCccccaaa")); // a5b1c5
console.log(strCompressions("wwwaabbbb")); // w3a2b4
console.log(strCompressions("kkkkj")); // k4j1
console.log(strCompressions("aab")); // a2b1

/* ROTATE MATRIX: 
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
write a method to rotate the image by 90 degrees. Can you do this in place? */

// ROTATE MATRIX RIGHT (CLOCKWISE)
var rotateMatrixRight = function (matrix) {
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
// invoke the function
var matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(rotateMatrixRight(matrix));
/* [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]] */

// ROTATE MATRIX LEFT (ANTI-CLOCKWISE)
var rotateMatrixLeft = function (matrix) {
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
// invoke the function
var matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(rotateMatrixLeft(matrix));
/* [[11, 10, 7, 16], [9, 8, 6, 12], [1, 4, 3, 14], [5, 2, 13, 15]] */

/* ZERO MATRIX: 
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
column are set to 0. */

/* IS STRING ROTATION:
Assume you have a method isSubstring which checks if one word is a substring of another. 
Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g "waterbottle" is a rotation of "erbottlewat"). */

var isSubstring = function (s1, s2) {
  s1 = s1.toLowerCase().split("").sort().join("");
  s2 = s2.toLowerCase().split("").sort().join("");
  return s1 === s2;
};
// invoke the function
console.log(isSubstring("waterbottle", "erbottlewat")); // true s2 is a rotation of sl

// SORTING AND SEARCHING

/* SORTED MERGE: 
You are given two sorted arrays, A and B, where A has a large enough buffer at the end to 
hold B. Write a method to merge B into A in sorted order. */

/* GROUP ANAGRAMS: 
Write a method to sort an array of strings so that all the anagrams are next to each other.
*/

var groupAnagrams = function (nums) {
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
// invoke the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(groupAnagrams(["321", "213", "897", "456", "987", "798"]));
// [['321', '213'], ['897', '987', '798'], ['456']]
console.log(groupAnagrams([""])); // [['']]
console.log(groupAnagrams(["a"])); // [['a']]

/* SEARCH IN ROTATED ARRAY: 
Given a sorted array of n integers that has been rotated an unknown number of times, write 
code to find an element in the array. You may assume that the array was originally sorted 
in increasing order. */

var searchRotatedArray = function (nums, target) {
  let index = [];
  for (let [idx, el] of nums.entries()) {
    if (el === target) {
      index.push(idx);
    }
  }
  return index;
};
// invoke the function
console.log(searchRotatedArray([2, 5, 6, 0, 0, 1, 2], 0)); // [3, 4]
console.log(searchRotatedArray([2, 5, 6, 0, 0, 1, 2], 3)); // []

/* SORTED SEARCH, NO SIZE: 
You are given an array-like data structure Listy which lacks a size method. It does, 
however, have an elementAt (i) method that returns the element at index i in 0(1) time. 
If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) Given a Listy which contains sorted, positive 
integers, find the index at which an element x occurs. If x occurs multiple times, you may 
return any index. */

var sortedSearch = function (listy, element) {
  let indices = [];
  for (let [idx, el] of listy.entries()) {
    if (el === element) {
      indices.push(idx);
    }
  }
  // index / indices of searched element
  return indices[0]; // return only one index
};
// invoke the function
console.log(sortedSearch([0, 0, 1, 2, 2, 5, 6], 2)); // 3

/* SPARSE SEARCH: 
Given a sorted array of strings that is interspersed with empty strings, write a method to 
find the location of a given string.
EXAMPLE
Input: ball, ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
Output: 4 */

var sparseSearch = function (array, element) {
  let indices = [];
  for (let [idx, el] of array.entries()) {
    if (el === element) {
      indices.push(idx);
    }
  }
  // index / indices of searched element
  return indices[0]; // return only one index
};
// invoke the function
console.log(
  sparseSearch(
    ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // 4

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

var missingInt = function (nums) {
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
// invoke the function
console.log(missingInt([3, 0, 1])); // 2
console.log(missingInt([0, 1])); // 2
console.log(missingInt([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

/* FIND DUPLICATES:
You have an array with all the numbers from 1 to N, where N is at most 32,000. The array 
may have duplicate entries and you do not know what N is. With only 4 kilobytes of memory
available, how would you print all duplicate elements in the array? */

var findDuplicate = function (nums) {
  // Get object element count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  // Get numbers with count > 1
  let numbers = Object.keys(obj).filter((x) => {
    return obj[x] > 1;
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
console.log(findDuplicate([2, 2, 1])); // 2
console.log(findDuplicate([-4, 1, 2, 1, 2])); // [1, 2]
console.log(findDuplicate([1])); // -1
console.log(findDuplicate([1, 2, 1, 3, 2, 5])); // [1, 2]

/* SORTED MATRIX SEARCH: 
Given an M x N matrix in which each row and each column is sorted in ascending order, 
write a method to find an element. */

var searchSortedMatrix = (matrix, target) => {
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
// invoke the function
console.log(
  searchSortedMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    28
  )
); // false
console.log(
  searchSortedMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    29
  )
); // true

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

var getRankOfNumber = function (stream, x) {
  stream.sort(function (e1, e2) {
    if (e1 > e2) return 1;
    return -1;
  });

  if (stream.includes(x)) {
    return stream.lastIndexOf(x);
  }
};
// invoke the function
console.log(getRankOfNumber([5, 1, 4, 4, 5, 9, 7, 13, 3], 1)); // 0
console.log(getRankOfNumber([5, 1, 4, 4, 5, 9, 7, 13, 3], 3)); // 1
console.log(getRankOfNumber([5, 1, 4, 4, 5, 9, 7, 13, 3], 4)); // 3

/* PEAKS AND VALLEYS:
In an array of integers, a "peak" is an element which is greater than or equal to the 
adjacent integers and a "valley" is an element which is less than or equal to the adjacent 
integers.
For example, in the array [5, 1, 3, 2, 3], [5, 3, 3] are peaks and [1, 2] are valleys. 
Given an array of integers, sort the array into an alternating sequence of peaks and valleys.
*/

var peaksValleys = function (arr) {
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
// invoke the function
console.log(peaksValleys([5, 3, 1, 2, 3])); // [5, 1, 3, 2, 3]

/* ------------------------------------------------------------------------------------ */

// REVERSE INTEGER
var reverseInteger = function (num) {
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
// invoke the function
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
console.log(reverseInteger(-1234567890)); // -987654321

// REVERSE WORDS IN A STRING
var reverseWords = function (s) {
  let arr = s.replaceAll(" ", ",").split(",");
  let reverseArr = [];

  arr.filter((word) => {
    if (word.length > 0) reverseArr.unshift(word);
  });
  // constraints

  return reverseArr.join(" ");
};
// invoke the function
console.log(reverseWords("the sky is blue")); // blue is sky the
console.log(reverseWords(" hello world ")); // world hello
console.log(reverseWords("a good  example")); // example good a

// LENGTH OF LAST WORD
var lengthOfLastWord = function (s) {
  let arr = s.replaceAll(" ", ",").split(",");
  let filtered_words = [];

  arr.filter((word) => {
    if (word.length > 0) filtered_words.push(word);
  });

  return filtered_words[filtered_words.length - 1].length;
};
// invoke the function
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

// COUNT MAXIMUM HEIGHT
var countMax = function (nums) {
  //let el = Math.max(...nums); or
  let el = nums.sort(function (e1, e2) {
    // descending numerical sort
    return e2 - e1;
  })[0];
  let count = 0;

  nums.filter((num) => {
    if (num === el) count++;
  });

  return count;
};
// invoke the function
console.log(countMax([4, 4, 1, 3])); // 2

// FIND THE SINGLE LETTER
var singleLetter = function (s) {
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
  let letters = Object.keys(obj).filter((x) => {
    return obj[x] === 1;
  });

  if (letters.length === 0) return -1;
  if (letters.length === 1) return letters[0];
  if (letters.length > 1) return letters;
};
// invoke the function
console.log(singleLetter("aabCccccaaa")); // b
console.log(singleLetter("wwwaabbbb")); // -1
console.log(singleLetter("kkkkj")); // j
console.log(singleLetter("aab")); // b

// FIND THE SINGLE NUMBER
var singleNumber = function (nums) {
  // Get number count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  // Get numbers with count = 1
  let numbers = Object.keys(obj).filter((x) => {
    return obj[x] === 1;
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
// invoke the function
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([-4, 1, 2, 1, 2])); // -4
console.log(singleNumber([1])); // 1
console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3, 5]

// CLIMBING STAIRS
/* A child is running up a staircase with n steps and can hop either
1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways
the child can run up the stairs. */
var climbStairs = function (n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (n > 0)
    return climbStairs(n - 3) + climbStairs(n - 2) + climbStairs(n - 1);
};
// invoke the function
console.log(climbStairs(2)); // 2 ways
console.log(climbStairs(3)); // 4 ways
console.log(climbStairs(5)); // 13 ways
console.log(climbStairs(30)); // 53798080 ways

// SEARCH INSERT POSITION
var searchInsert = function (nums, target) {
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
// invoke the function
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 10)); // 4

// SEARCH IN ROTATED SORTED ARRAY
var search = function (nums, target) {
  for (let [idx, el] of nums.entries()) {
    if (el === target) {
      return true;
    }
  }
  // else
  return false;
};
// invoke the function
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false

// SORT ALPHABET AND NUMBERS ASCENDING
var sortAlpsNums = function (a) {
  a.sort(function (e1, e2) {
    // alphabet case-insensitive sort
    if ((typeof e1 && typeof e2) === "string") {
      e1 = e1.toLowerCase();
      e2 = e2.toLowerCase();
      if (e1 > e2) return 1;
      return -1;
    }
    // numerical sort
    if ((typeof e1 && typeof e2) === "number") {
      if (e1 > e2) return 1;
      return -1;
    }
  });
  return a;
};
// invoke the function
console.log(sortAlpsNums(["a", "B", "A", "c", "b"])); // ["a", "A", "B", "b", "c"]
console.log(sortAlpsNums([2, 3, 10, 4, 100])); // [2, 3, 4, 10, 100]
console.log(
  sortAlpsNums(["ant", "33", "Bug", "4", "cat", "1111", "Dog", "222"])
); // ['1111','222','33','4','ant','Bug','cat','Dog']

// SORT DESCENDING
var solution = function (a) {
  a.sort(function (e1, e2) {
    // numerical sort
    return e2 - e1;
  });
  return a;
};
// invoke the function
console.log(solution([4, 2, 6, 5, 9])); // [9, 6, 5, 4, 2]

// MISSING NUMBER:
var missingNumber = function (a1, a2) {
  let missing = [];
  // missing number in a2
  a1.filter((el) => {
    if (!a2.includes(el)) {
      missing.push(el);
    }
  });
  // missing number in a1
  a2.filter((el) => {
    if (!a1.includes(el)) {
      missing.push(el);
    }
  });

  return missing;
};
// invoke the function
console.log(missingNumber([8, 7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3, 4])); // [8, 4, 6, 4]

// FIND MINIMUM IN ROTATED SORTED ARRAY
var findMin = function (nums) {
  let el = nums.sort(function (e1, e2) {
    // descending numerical sort
    return e1 - e2;
  })[0];
  return el;
};
// invoke the function
console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11

// ROTATE STRING RIGHT (CLOCKWISE) BY K PLACES
var rotateStringRight = function (string, k) {
  let merge_string = null;
  k = string.length - k;
  let str1 = string.slice(k, string.length);
  let str2 = string.slice(0, k);
  merge_string = str1 + str2;
  return merge_string;
};
// invoke the function
console.log(rotateStringRight("12345", 2)); // 45123

// ROTATE ARRAY RIGHT (CLOCKWISE) BY K PLACES
var rotateArrayRight = function (nums, k) {
  let merge_array = null;
  k = nums.length - k;
  let arr1 = nums.slice(k, nums.length);
  let arr2 = nums.slice(0, k);
  merge_array = arr1.concat(arr2);
  return merge_array;
};
// invoke the function
console.log(rotateArrayRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// MAXIMUM SUM SUBARRAY:
var maxSum = function (nums) {
  let presum = 0;
  let sum = 0;
  let accumulator = [];
  if (Math.max(...nums) < 0) return Math.max(...nums);
  else
    nums.forEach((el) => {
      sum = Math.max(presum, sum + el);
      accumulator.push(sum);
    });

  return Math.max(...accumulator);
};
// invoke the function
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSum([1])); // 1
console.log(maxSum([-1])); // -1
console.log(maxSum([-2])); // -2
console.log(maxSum([-2, -1, -3])); // -1
console.log(maxSum([5, 4, -1, 7, 8])); // 23

// NUMBER OF SUBARRAYS EQUAL TO SUM -> method1:
var subarraySum = function (nums, k) {
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
// invoke the function
console.log(subarraySum([-2], -2)); // 1
console.log(subarraySum([-2, -1], -1)); // 1
console.log(subarraySum([-2, -1, -1], -1)); // 2
console.log(subarraySum([-1, -2, -1], -1)); // 2

// NUMBER OF SUBARRAYS EQUAL TO SUM -> method2:
var subarraySum1 = function (arr, k) {
  let new_array = [];
  let result = [];

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length + 1; j++) {
      new_array.push(arr.slice(i, j));
    }
  }

  // compute sum
  function sum(e1, e2) {
    return +e1 + +e2;
  }

  // push sum of subsequences to result
  new_array.filter((item) => {
    if (item.reduce(sum) === k) {
      result.push(item);
    }
  });

  if (result.length > 0) return result.length;
  return -1;
};
// invoke the function
console.log(subarraySum1([2, 7, 11, 15], 33)); // 1

// IS ADDITIVE SEQUENCE:
var isAdditiveSeries = function (arr) {
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
// invoke the function
console.log(isAdditiveSeries([1, 1, 2, 3, 5, 8])); // true
console.log(isAdditiveSeries([8, 3, 5, 13])); // true

/* ------------------------------------------------------------------------------------ */

/* OBJECT STORE -> Dictionary Sorting Objects */
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// SORT THE OBJECT BY SALARY (ASCENDING SORT)
var sortEmployeesBySalary = function (employees) {
  employees.sort((obj1, obj2) => {
    if (obj1.salary > obj2.salary) return 1;
    return -1;
  });
  return employees;
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

// UNIQUE OBJECT ARRAY
// Creates an array of objects with unique property values (name)
var uniqueObjectArray = function (arr) {
  let unique = [];
  arr.forEach((item) => unique.push([item.name, item]));
  return [...new Map(unique).values()];
};
// invoke the function
console.log(uniqueObjectArray(employees));
/*
[
  { name: 'David', salary: 75000, hireDate: 'August 15, 2009' },
  { name: 'Ana', salary: 80000, hireDate: 'December 12, 2011' },
  { name: 'John', salary: 90000, hireDate: 'July 1, 2010' }
]
*/

var uniqueObjectArray2 = function (arr) {
  let unique = [];
  arr.forEach((item) => unique.push([item.name, item.salary, item]));
  return [...new Map(unique).values()];
};
// invoke the function
console.log(uniqueObjectArray2(employees)); // [75000, 80000, 90000]

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
  return indices.length;
};
// invoke the function
console.log(letterCount("Mwanika", "A")); // 2

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

  return indices.length;
};
// invoke the function
console.log(wordCount("The quick brown fox jumps over the lazy dog", "The")); // 2

// THE OCCURRENCE OF SUBSTRING IN STRING
var countSubstrings = function (str, substr) {
  let regexp = new RegExp(substr, "gi");
  let count = str.match(regexp).length;
  return count;
};
// invoke the function
console.log(
  countSubstrings(
    "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
gave Mike 1 of her orange so she is now left with only 1 Orange.",
    "ORaNGe"
  )
); // 4

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

  return words.length; // ['oranges', 'oranges', 'orange', 'orange.']
};
// invoke the function
console.log(
  wordHasSubstring(
    "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
  gave Mike 1 of her orange so she is now left with only 1 Orange.",
    "ORaNGe"
  )
); // 4

/* ------------------------------------------------------------------------------------ */

// FIND INDEX OF PEAK ELEMENT:
var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};
// invoke the function
console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1])); // 0
console.log(findPeakElement([2, 1])); // 0
console.log(findPeakElement([1, 2])); // 1
console.log(findPeakElement([6, 5, 4, 3, 2, 3, 2])); // 0
console.log(findPeakElement([1, 2, 3])); // 2
console.log(findPeakElement([3, 4, 2, 1, 2])); // 1

// FIND THE INDEX OF THE FIRST OCCURRENCE IN A STRING:
var strStr = function (haystack, needle) {
  if (haystack.includes(needle)) return haystack.indexOf(needle);
  return -1;
};
// invoke the function
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1

// LONGEST COMMON PREFIX:
var longestCommonPrefix = function (strs) {
  let firstCha = [];
  strs.forEach((el) => {
    firstCha.push(el[0]);
  });
  //
  if (strs.length === 0) return -1;
  if ([...new Set(firstCha)].length !== 1) return -1;
  else
    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 0; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) return strs[0].slice(0, i);
      }
    }
};
// invoke the function
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["flower", "floor", "flood"])); // flo
console.log(longestCommonPrefix(["Mwanika", "Stephen", "Crispin"])); // -1
console.log(longestCommonPrefix([])); // -1

// LONGEST COMMON SUFFIX:
var longestCommonSuffix = function (strs) {
  let str = [];
  let lastCha = [];
  strs.forEach((el) => {
    str.push(el.split("").reverse().join(""));
    lastCha.push(el[el.length - 1]);
  });
  //
  if (str.length === 0) return -1;
  if ([...new Set(lastCha)].length !== 1) return -1;
  else
    for (let i = 0; i < str[0].length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (str[0][i] !== str[j][i])
          return str[0].slice(0, i).split("").reverse().join("");
      }
    }
};
// invoke the function
console.log(longestCommonSuffix(["flower", "flow", "flight"])); // -1
console.log(longestCommonSuffix(["flowering", "flooring", "flooding"])); // ing
console.log(longestCommonSuffix(["Mwanika", "Stephen", "Crispin"])); // -1
console.log(longestCommonSuffix([])); // -1

// LONGEST CONSECUTIVE:
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let count = 1;
  let max = 1;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      count++;
      max = Math.max(max, count);
    } else if (nums[i] === nums[i - 1]) continue;
    else {
      count = 1;
    }
  }
  return max;
};
// invoke the function
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 2, 3, 5, 6, 7, 8, 11])); // 4
console.log(longestConsecutive([1])); // 1

/* ------------------------------------------------------------------------------------ */

// THE MOST FREQUENT CHARACTER OR WORD IN A STRING
var mostFrequent = function (s) {
  let obj = {};
  s.toLowerCase()
    .replace(/[^A-Za-z]/g, "")
    .split("")

    // // for word count
    // .replaceAll(" ", ",")
    // .split(",")

    .forEach((el) => {
      if (obj[el]) return obj[el]++;
      obj[el] = 1;
    });

  //return obj; // {m: 1, w: 1, a: 2, n: 1, i: 1, k: 1}

  //return Math.max(...Object.values(obj)); // 2 -> count of the most frequent character

  return Object.keys(obj)
    .filter((x) => {
      return obj[x] === Math.max(...Object.values(obj));
    })
    .join(""); // a -> the most frequent character
};
// invoke the function
console.log(mostFrequent("mwanika")); // a

/* ------------------------------------------------------------------------------------ */

// WORD WITH THE MOST VOWELS -> method 1:
var mostVowels = function (words) {
  let vowels = [];
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
    .filter((x) => {
      return obj[x] === Math.max(...Object.values(obj));
    })
    .join(""); // aeiou -> word with the most vowels
};
// invoke the function
console.log(mostVowels(["meow", "aeiou", "FOUR"])); // aeiou

// method 2:
var mostVowels2 = function (words) {
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
// invoke the function
console.log(mostVowels2(["meow", "aeiou", "FOUR"])); // aeiou

// WORDS WITH MORE THAN ONE VOWEL
var moreThanOneVowel = function (words) {
  let vowels = [];
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
    .filter((x) => {
      return obj[x] > 1;
    })
    .join(); // aeiou,FOUR -> words with more than one vowel
};
// invoke the function
console.log(moreThanOneVowel(["mew", "aeiou", "FOUR"])); // ['aeiou', 'FOUR']

/* ------------------------------------------------------------------------------------ */

// EVEN LENGTH SUBSETS:
var subSequence = function (arr) {
  let newArray = [];
  let evenSubsequence = [];
  let oldSubsequence = [];

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length + 1; j++) {
      newArray.push(arr.slice(i, j));
    }
  }

  // filter subsequences from newArray
  newArray.filter((item) => {
    if (item.length % 2 === 0) evenSubsequence.push(item);
    else oldSubsequence.push(item);
  });

  // sum even subsequences
  function sum(e1, e2) {
    return +e1 + +e2;
  }
  if (evenSubsequence.length > 0)
    // then compute total sum
    return evenSubsequence.flat().reduce(sum);
  // else
  return -1;

  // return { evenSubsequence, oldSubsequence };

  // return {
  //   even_sum: evenSubsequence.flat().reduce(sum),
  //   old_sum: oldSubsequence.flat().reduce(sum),
  // };

  // return { Total: newArray.flat().reduce(sum) };
};
// invoke the function
var array = [1, 4, 2, 5];
console.log(subSequence(array));
/*
{
  evenSubsequence: [[1, 4], [1, 4, 2, 5], [4, 2], [2, 5]],
  oldSubsequence: [[1], [1, 4, 2], [4], [4, 2, 5], [2], [5]]
}

{ even_sum: 30, old_sum: 30 }

{ Total: 60 }
*/

// SORT PRODUCTS:
var sortProducts = function (a) {
  let res = [];
  a.forEach((el) => {
    // square element and append product to res array
    res.push(el * el);
    // then sort res array
    res.sort(function (e1, e2) {
      if (e1 > e2) return 1;
      return -1;
    });
  });
  return res;
};

// WORD WEIGHT:
var wordWeight = function (s, n) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let weight = "";
  let sum1 = 0;
  let sum2 = 0;
  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    weight += alphabet.indexOf(s[i]) + 1;
  }

  // Step1: n = 1;
  if (n === 1) {
    weight.split("").forEach((item) => {
      sum1 += +item;
    });
    return sum1;
  }

  // Step2: n = 2;
  if (n === 2) {
    weight.split("").forEach((item) => {
      sum1 += +item;
    });
    sum1
      .toString()
      .split("")
      .forEach((item) => {
        sum2 += +item;
      });
    return sum2;
  }

  return -1;
};

// PAIRING:
var pairing = function (nums) {
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) {
      return obj[el]++;
    }
    obj[el] = 1;
  });

  //
  let pairs = [];
  obj = Object.values(obj); // [2, 4]
  obj.filter((el) => {
    if (el % 2 === 0) pairs.push(el / 2); // if no remainder
    else pairs.push((el - 1) / 2);
  });

  // helper function to sum pairs array
  function sum(e1, e2) {
    return +e1 + +e2;
  }
  // total pairs
  if (pairs.reduce(sum) === 0) return "none";
  else return pairs.reduce(sum);
};
// invoke the function
console.log(pairing([5, 8, 5, 8, 8, 8])); // 3 -> pairs/boxes
console.log(pairing([1, 2, 3, 4])); // 0 -> none

// BALANCED DIGIT:
var balancedDigit = function (nums, target) {
  // helper function to sum nums array
  function sum(e1, e2) {
    return +e1 + +e2;
  }
  // compute missing value
  let missing;
  missing = target - nums.reduce(sum);
  return missing;
};
// invoke the function
console.log(balancedDigit([3, 7, 1, 8, 1, 3], 25)); // 2
console.log(balancedDigit([1, 2, 3, 4], 11)); // 1

// REORDER AN ARRAY:

// FIND DUPLICATE AND MISSING NUMBER:
var duplicateAndMissing = function (nums) {
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    obj[el] = 1;
  });
  //
  let dup = Object.keys(obj).filter((x) => {
    return obj[x] > 1;
  });
  //
  nums.sort(function (e1, e2) {
    return e2 - e1;
  });
  return [Number(dup[0]), nums[0] + 1];
};
// invoke the function
console.log(duplicateAndMissing([1, 2, 3, 4, 3])); // [3, 5]
console.log(duplicateAndMissing([1, 2, 2])); // [2, 3]
console.log(duplicateAndMissing([1, 2, 3, 2])); // [2, 4]

// SWAP UPPERCASE AND LOWERCASE LETTERS:
var swapCase = function (str) {
  let new_array = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(str.toLowerCase()[i]))
      new_array.push(str[i].toUpperCase());
    else new_array.push(str[i].toLowerCase());
  }

  return new_array.join("");
};

/* SWITCH REVERSER -> create a program that will:
- reverse the order of a list if the list consists of integers alone,
- convert the list items to uppercase if the list contains words only,
- return the same list if the list members don't satisfy either of these two criteria. */
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

/* PIG LATIN CONVERTER -> create a program:
- if the word starts with a consonant or group of consonants, move all letters before the
  first vowel to the end of the word then add "ay",
- if the word starts with a vowel, simply add "way" to the end of the word. */
var pigLatinConverter = function (str) {
  str = str.toLowerCase();
  let start = str.match(/[aeiou]/gi);
  let end = str.indexOf(start[0]);

  if ("aeiou".includes(str[0])) return str + "way";
  else return str.substring(end) + str.substring(0, end) + "ay";
};

/* ------------------------------------------------------------------------------------ */

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Using Pointers):
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

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestSubstring = function (str) {
  let substrings = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  //
  let uniqueSubStr = [];
  let lenUniqueSubStr = [];
  let maxlen;
  let result;

  substrings.filter((el) => {
    let set = [...new Set(el)];
    uniqueSubStr.push(set.join("")); // abcdef
  });

  uniqueSubStr.filter((el) => {
    if (str.includes(el)) {
      lenUniqueSubStr.push(el.length);
      maxlen = Math.max(...lenUniqueSubStr);

      // Output substring with maximum length
      if (str.includes(el) && el.length === maxlen) {
        result = el;
      }
    }
  });

  return result;
};
// invoke the function
var string = "abbbcabcdefef";
console.log(longestSubstring(string)); // abcdef

// LONGEST COMMON SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestSubstrings = function (str1, str2) {
  let substrings1 = [];
  let substrings2 = [];

  // string1
  for (i = 0; i < str1.length; i++) {
    for (j = i + 1; j < str1.length + 1; j++) {
      substrings1.push(str1.slice(i, j));
    }
  }
  // string2
  for (i = 0; i < str2.length; i++) {
    for (j = i + 1; j < str2.length + 1; j++) {
      substrings2.push(str2.slice(i, j));
    }
  }

  //
  let comSubStr = [];
  let uniqueSubStr = [];
  let lenUniqueSubStr = [];
  let maxlen;
  let result;

  substrings1.filter((el) => {
    substrings2.filter((item) => {
      if (item.includes(el)) {
        comSubStr.push(el);
      }
    });
  });

  // unique substrings -> can be adjusted for repeating characters as shown in comments
  comSubStr.filter((el) => {
    let set = [...new Set(el)]; // OR remove, then;
    uniqueSubStr.push(set.join("")); // uniqueSubStr.push(el);
    lenUniqueSubStr.push(set.join("").length); // lenUniqueSubStr.push(el.length);
    maxlen = Math.max(...lenUniqueSubStr);

    // Output substring with maximum length
    uniqueSubStr.filter((el) => {
      if (el.length === maxlen) {
        result = el;
      }
    });
  });
  return result;
};
// invoke the function
console.log(longestSubstrings("raven", "havoc")); // av
console.log(longestSubstrings("abbcc", "dbbcc")); // bc
console.log(longestSubstrings("ABCD", "ACBAD")); // D
console.log(longestSubstrings("ABCD", "ABCAD")); // ABC

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestCommonSubsequence = function (str1, str2) {
  let subseq1 = [];
  let subseq2 = [];
  let ressubseq1 = [];
  let ressubseq2 = [];

  // subsequence1
  let subs1 = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  subseq1 = str1.split("").reduce(subs1, [subseq1]);
  // .....
  subseq1.filter((el) => {
    ressubseq1.push(el.join(""));
  });

  // subsequence2
  let subs2 = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  subseq2 = str2.split("").reduce(subs2, [subseq2]);
  // .....
  subseq2.filter((el) => {
    ressubseq2.push(el.join(""));
  });

  //
  let comSubSeq = [];
  let uniqueSubSeq = [];
  let lenUniqueSubSeq = [];
  let maxlen;
  let result;

  ressubseq1.filter((el) => {
    ressubseq2.filter((item) => {
      if (item.includes(el)) {
        comSubSeq.push(el);
      }
    });
  });

  // unique subsequence -> can be adjusted for repeating characters as shown in comments
  comSubSeq.filter((el) => {
    let set = [...new Set(el)]; // OR remove, then;
    uniqueSubSeq.push(set.join("")); // uniqueSubStr.push(el);
    lenUniqueSubSeq.push(set.join("").length); // lenUniqueSubStr.push(el.length);
    maxlen = Math.max(...lenUniqueSubSeq);

    // Output subsequence with maximum length
    uniqueSubSeq.filter((el) => {
      if (el.length === maxlen) {
        result = el;
      }
    });
  });
  return result;
};
// invoke the function
console.log(longestCommonSubsequence("abc", "adcc")); // ac
console.log(longestCommonSubsequence("raven", "havoc")); // av
console.log(longestCommonSubsequence("abbcc", "dbbcc")); // bc
console.log(longestCommonSubsequence("step", "hen")); // e
console.log(longestCommonSubsequence("Stephen", "tep")); // tep
console.log(longestCommonSubsequence("ABCD", "ACBAD")); // ACD
console.log(longestCommonSubsequence("ABCD", "ABCAD")); // ABCD

/* ------------------------------------------------------------------------------------ */

// CASE 1:
var obj1 = { meow: 2, aeiou: 5, FOUR: 2 };
console.log(Object.entries(obj1)); // [[ 'meow', 2 ], [ 'aeiou', 5 ], [ 'FOUR', 2 ]]
console.log(Object.values(obj1)); // [2, 5, 2]
console.log(Object.keys(obj1)); // ['meow', 'aeiou', 'FOUR']

// CASE 2:
var obj2 = [
  ["meow", 2],
  ["aeiou", 5],
  ["FOUR", 2],
];
console.log(Object.entries(obj2));
// [["0", ["meow", 2]], ["1", ["aeiou", 5]], ["2", ["FOUR", 2]]]
console.log(Object.values(obj2)); // [[ 'meow', 2 ], [ 'aeiou', 5 ], [ 'FOUR', 2 ]]
console.log(Object.keys(obj2)); // ['0', '1', '2']

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
