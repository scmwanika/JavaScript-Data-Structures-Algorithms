// ARRAYS AND STRINGS

/* Is Unique: 
Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? */

/* Check Permutation: 
Given two strings, write a method to decide if one is a permutation of the other. */

/* URLify: 
Write a method to replace all spaces in a string with '%20'. You may assume that the 
string has sufficient space at the end to hold the additional characters, and that you are 
given the "true" length of the string. (Note: If implementing in Java, please use a 
character array so that you can perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith" */

/* Palindrome Permutation: 
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just 
dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.) */

/* One Away: 
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check 
if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false */

/* String Compression: 
Implement a method to perform basic string compression using the counts of repeated 
characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" 
string would not become smaller than the original string, your method should return the 
original string. You can assume the string has only uppercase and lowercase letters */

/* Rotate Matrix: 
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
write a method to rotate the image by 90 degrees. Can you do this in place? */

/* Zero Matrix: 
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
column are set to 0. */

/* String Rotation:
Assumeyou have a method isSubstring which checks if one word is a substring of another. 
Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g "waterbottle" is a rotation of"erbottlewat"). */

// SORTING AND SEARCHING

/* Sorted Merge: 
You are given two sorted arrays, A and B, where A has a large enough buffer at the end to 
hold B. Write a method to merge B into A in sorted order. */

/* Group Anagrams: 
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

  // let anagrams = []; // for sorting anagrams
  // obj.filter((item) => {
  //   anagrams.push(item.sort());
  // });

  // return anagrams.sort();
};
// invoke the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

/* Search in Rotated Array: 
Given a sorted array of n integers that has been rotated an unknown number of times, write 
code to find an element in the array. You may assume that the array was originally sorted 
in increasing order. */

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

/* Sorted Search, No Size: 
You are given an array-like data structure Listy which lacks a size method. It does, 
however, have an elementAt (i) method that returns the element at index i in 0(1) time. 
If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) Given a Listy which contains sorted, positive 
integers, find the index at which an element x occurs. If x occurs multiple times, you may 
return any index. */

var linearSearch = function (array, element) {
  let indices = [];
  for (let [idx, el] of array.entries()) {
    if (el === element) {
      indices.push(idx);
    }
  }
  // index / indices of searched element
  return indices; // if indices.length > 1, then element is Duplicate
};
// invoke the function
console.log(
  linearSearch(
    ["ball", "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // [0, 5]

/* Sparse Search: 
Given a sorted array of strings that is interspersed with empty strings, write a method to 
find the location of a given string.
EXAMPLE
Input: ball, ["ball", "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
Output: [0, 5] */

var linearSearch = function (array, element) {
  let indices = [];
  for (let [idx, el] of array.entries()) {
    if (el === element) {
      indices.push(idx);
    }
  }
  // index / indices of searched element
  return indices; // if indices.length > 1, then element is Duplicate
};
// invoke the function
console.log(
  linearSearch(
    ["ball", "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // [0, 5]

/* Sort Big File: 
Imagine you have a 20 GB file with one string per line. Explain how you would sort the file.
*/

/* Missing Int: 
Given an input file with four billion non-negative integers, provide an algorithm to 
generate an integer that is not contained in the file. Assume you have 1 GB of memory 
available for this task.
FOLLOW UP
What if you have only 10 MB of memory? Assume that all the values are distinct and we now 
have no more than one billion non-negative integers. */

var missingNumber = function (nums) {
  let n = nums.length;
  let missing = "";
  let nums2 = [];

  for (let start = 0; start <= n; start++) {
    nums2.push(start);
  }
  // missing elements in nums2
  nums2.filter((el) => {
    if (!nums.includes(el)) {
      missing = missing + el;
    }
  });
  return Number(missing);
};
// invoke the function
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

/* Find Duplicates:
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

  // Get entries with value > 1
  let entrys = [];
  Object.entries(obj).filter((el) => {
    if (!el.includes(1)) entrys.push(el);
  });

  // Get keys from entries and convert to datatype "number"
  let keys = [];
  entrys.flat().filter((el) => {
    if (typeof el === "string") keys.push(Number(el));
  });

  if (keys.length === 0) return -1;
  if (keys.length === 1) return keys[0];
  if (keys.length > 1) return keys;
};
console.log(findDuplicate([2, 2, 1])); // 2
console.log(findDuplicate([-4, 1, 2, 1, 2])); // [1, 2]
console.log(findDuplicate([1])); // -1
console.log(findDuplicate([1, 2, 1, 3, 2, 5])); // [1, 2]

/* Sorted Matrix Search: 
Given an M x N matrix in which each row and each column is sorted in ascending order, 
write a method to find an element. */

var searchMatrix = (matrix, target) => {
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
  searchMatrix(
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
  searchMatrix(
    [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [27, 29, 37, 48],
      [32, 33, 39, 50],
    ],
    29
  )
); // true

/* Rank from Stream: 
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

/* Peaks and Valleys:
In an array of integers, a "peak" is an element which is greater than or equal to the 
adjacent integers and a "valley" is an element which is less than or equal to the adjacent 
integers.
For example, in the array [5, 1, 3, 2, 3], [5, 3, 3] are peaks and [1, 2] are valleys. 
Given an array of integers, sort the array into an alternating sequence of peaks and valleys.
EXAMPLE
Input: [5, 3, 1, 2, 3]
Output: [5, 1, 3, 2, 3] */

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
  let obj = {};
  s.toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .forEach((el) => {
      if (obj[el]) return obj[el]++;
      else obj[el] = 1;
    });

  //
  let res = [];
  Object.entries(obj).filter((el) => {
    if (el.includes(1)) res.push(el);
  });

  return res.flat()[0];
};
// invoke the function
console.log(singleLetter("aabCccccaaa")); // b
console.log(singleLetter("wwwaabbbb")); //
console.log(singleLetter("kkkkj")); // j
console.log(singleLetter("aab")); // b

// FIND THE SINGLE NUMBER
var singleNumber = function (nums) {
  // Get object element count
  let obj = {};

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    else obj[el] = 1;
  });

  // Get entries with value = 1
  let entrys = [];
  Object.entries(obj).filter((el) => {
    if (el.includes(1)) entrys.push(el);
  });

  // Get keys from entries and convert to datatype "number"
  let keys = [];
  entrys.flat().filter((el) => {
    if (typeof el === "string") keys.push(Number(el));
  });

  if (keys.length === 0) return -1;
  if (keys.length === 1) return keys[0];
  if (keys.length > 1) return keys;
};
// invoke the function
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([-4, 1, 2, 1, 2])); // -4
console.log(singleNumber([1])); // 1
console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3, 5]

// REMOVE DUPLICATES FROM SORTED ARRAY

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
        if (e1 < e2) return -1;
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
      if (e1 < e2) return -1;
    }
    // numerical sort
    if ((typeof e1 && typeof e2) === "number") {
      if (e1 > e2) return 1;
      if (e1 < e2) return -1;
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

// MISSING ELEMENTS
var missingElements = function (a1, a2) {
  let missing = [];
  // missing elements in a1
  a1.filter((el) => {
    if (!a2.includes(el)) {
      missing.push(el);
    }
  });
  // missing elements in a2
  a2.filter((el) => {
    if (!a1.includes(el)) {
      missing.push(el);
    }
  });

  return missing;
};
// invoke the function
console.log(
  missingElements([8, 7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3, 4])
); // [8, 4, 6, 4]

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

// ROTATE ARRAY RIGHT (CLOCKWISE) BY K PLACES
var rotateRight = function (nums, k) {
  var merge_array = null;
  k = nums.length - k;
  let arr1 = nums.slice(k, nums.length);
  let arr2 = nums.slice(0, k);
  merge_array = arr1.concat(arr2);
  return merge_array;
};
// invoke the function
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]

// ROTATE MATRIX RIGHT (CLOCKWISE)
var rotateMatrixRight = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      let last = n - 1 - row;
      let offset = col - row;

      // implement the swap index by index:
      let top = matrix[row][col];

      // left edge -> top edge
      matrix[row][col] = matrix[last - offset][row];

      // bottom edge -> left edge
      matrix[last - offset][row] = matrix[last][last - offset];

      // right edge -> bottom edge
      matrix[last][last - offset] = matrix[col][last];

      // top edge -> right edge
      matrix[col][last] = top;
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
/*
[
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
*/

// SET MATRIX ZEROES
var setZeroes = function (matrix) {};
// invoke the function

// SPIRAL MATRIX
var spiralOrder = function (matrix) {};
// invoke the function

// MAXIMUM SUM SUBARRAY
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

// COUNT PERMUTATIONS OF A STRING

// let ob = { name: "Mwanika", age: 42, gender: "M" };
// console.log(ob["age"]); // same as ob.age -> 42

// VALID ANAGRAM | PERMUTATION
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
// invoke the function
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

// ADDITIVE SEQUENCE
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

// // ADDITIVE NUMBER
// var isAdditiveNumber = function (num) {
//   // sort the array and
//   // check if every element is equal to the sum of the previous 2 elements
//   num = num.split("").sort(function (e1, e2) {
//     return e1 - e2;
//   });

//   for (i = 2; i < num.length; i++) {
//     if (Number(num[i - 1]) + Number(num[i - 2]) != Number(num[i])) return false;
//   }
//   return true;
// };
// // invoke the function
// console.log(isAdditiveNumber("112358")); // true
// console.log(isAdditiveNumber("199100199")); // true
