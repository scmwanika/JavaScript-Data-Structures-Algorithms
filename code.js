// // Substrings & Subarrays:
// var str1 = "123";
// var str2 = "1234";
// console.log(str2.includes(str1)); // true

// var arr1 = [1, 2, 3];
// var arr2 = [1, 2, 3, 4];
// console.log(arr2.join("").includes(arr1.join(""))); // true

// // Given:
// var str1 = "31";
// var str2 = "1234";

// // Subsequences:
// var subsequence = function (str1, str2) {
//   let idx = 0;
//   str2.split("").filter((el) => {
//     if (el.includes(str1[idx])) idx++;
//   });
//   return idx === str1.length;
// };
// // invoke the function
// console.log(subsequence(str1, str2)); // false

// // Subsets:
// var subset = function (str1, str2) {
//   let idx = 0;
//   str2
//     .split("")
//     .sort()
//     .filter((el) => {
//       if (el.includes(str1.split("").sort()[idx])) idx++;
//     });
//   return idx === str1.length;
// };
// // invoke the function
// console.log(subset(str1, str2)); // true

// // Index of last substring:
// var indexLastSubstring = function (string, substring) {
//   if (string.includes(substring)) return string.lastIndexOf(substring);
//   return -1;
// };
// // invoke the function
// console.log(indexLastSubstring("sadbutsad", "sad")); // 6
// console.log(indexLastSubstring("leetcode", "leeto")); // -1

// var str = "The quick brown fox jumps over the lazy dog";
// console.log(str.match(/the/gi)); // [ 'The', 'the' ]
// console.log(str.replace(/the/gi, "THE")); // THE quick brown fox jumps over THE lazy dog
// console.log(str.replace(/ /gi, ",").split(","));
// /*
//     [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ]
// */

// /* ------------------------------------------------------------------------------------ */

// // CASE 1:
// var obj1 = { meow: 2, aeiou: 5, FOUR: 2 };
// console.log(Object.entries(obj1)); // [[ 'meow', 2 ], [ 'aeiou', 5 ], [ 'FOUR', 2 ]]
// console.log(Object.values(obj1)); // [2, 5, 2]
// console.log(Object.keys(obj1)); // ['meow', 'aeiou', 'FOUR']

// // CASE 2:
// var obj2 = [
//   ["meow", 2],
//   ["aeiou", 5],
//   ["FOUR", 2],
// ];
// console.log(Object.entries(obj2));
// // [["0", ["meow", 2]], ["1", ["aeiou", 5]], ["2", ["FOUR", 2]]]
// console.log(Object.values(obj2)); // [[ 'meow', 2 ], [ 'aeiou', 5 ], [ 'FOUR', 2 ]]
// console.log(Object.keys(obj2)); // ['0', '1', '2']

// /* Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers. Then print the respective minimum
// and maximum values as an object. */
// var minMaxSum = function (arr) {
//   let min = 0;
//   let max = 0;

//   for (let i = 0, j = arr.length - 1; j > 0; i++, j--) {
//     min = min + arr[i];
//     max = max + arr[j];
//   }
//   return { min, max };
// };
// // invoke the function
// console.log(minMaxSum([1, 3, 5, 7, 9])); // {min: 16, max: 24}

// // SPLIT ARRAY:
// var splitArray = function (arr) {
//   let arr1 = [];
//   let arr2 = [];

//   for (let i = 0, j = arr.length - 1; j >= i; i++, j--) {
//     arr1.push(arr[i]);
//     arr2.push(arr[j]);
//   }
//   //
//   if (arr.length % 2 !== 0) {
//     const [, ...arr3] = arr2.reverse();
//     return [arr1, arr3];
//   }
//   return [arr1, arr2.reverse()];
// };
// // invoke the function
// console.log(splitArray([1, 3, 5, 7, 9])); // [[1, 3, 5], [7, 9]]
// console.log(splitArray([1, 3, 7, 9])); // [[1, 3], [7, 9]]

// // Sum digits:
// var sumDigits = function (nums) {
//   let total = 0;
//   nums.forEach((el) => {
//     total += +el; // total = total + el;
//   });
//   return total;
// };
// // invoke the function
// console.log(sumDigits([1, 2, 3, 4, 5])); // 15

// // Swap case:
// var swapCase = function (str) {
//   let new_array = [];
//   str.split("").filter((el) => {
//     if (el === el.toLowerCase()) new_array.push(el.toUpperCase());
//     else new_array.push(el.toLowerCase());
//   });
//   return new_array.join("");
// };
// // invoke the function
// console.log(swapCase("heLLo")); // HEllO
// console.log(swapCase("HEllO")); // heLLo

// var countWord = function (str) {
//   let nums = str
//     .toLowerCase()
//     .replace(/[^A-Za-z ]/g, "")
//     .replace(/ /gi, ",")
//     .split(",");

//   // Get object
//   let obj = {};
//   let obj1 = [];
//   nums.forEach((el) => {
//     if (obj[el]) return obj[el]++;
//     else obj[el] = 1;
//   });
//   Object.entries(obj).filter((el) => {
//     if (!el.includes("")) obj1.push(el);
//   });
//   return obj1.sort();
// };
// // invoke the function
// console.log(
//   countWord("This is the TEXT. Text, text, text - THIS TEXT! Is this the text?")
// ); // [ [ 'is', 2 ], [ 'text', 6 ], [ 'the', 2 ], [ 'this', 3 ] ]

// var sequence = function (nums) {
//   let newseq = [];

//   nums.filter((el) => {
//     if (el % 2 === 0) newseq.push(el);
//     else newseq.push(-el);
//   });

//   return newseq;
// };
// // invoke the function
// console.log(sequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // [ -1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12 ]

// // Swapping values:
// let [a, b, c] = [2, 1, 3];
// console.log([a, b, c]); // Prints [2, 1, 3]
// console.log([a, b, c].sort()); // Prints [1, 2, 3]

// let [x, y] = [1, 2]; // Same as var x=1, y=2
// [x, y] = [x + 1, y + 1]; // Same as x=x+1, y=y+1
// console.log([x, y]); // Prints [2,3]
// [x, y] = [y, x]; // Swap the value of the two variables
// console.log([x, y]); // Prints [3,2]

// var test = function (nums) {
//   nums.forEach((el) => {
//     if (el % 2 === 0) el.pop();
//   });
//   return nums.flat();
// };
// // invoke the function
// console.log(test([[1], [2], [3], [4], [5]])); // [ 1, 3, 5 ]

// //
// var isPalindromePermutation = function (nums) {
//   // Get object element count
//   let obj = {};
//   //str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   nums.forEach((el) => {
//     if (obj[el]) return obj[el]++;
//     else obj[el] = 1;
//   });

//   // Get entries with odd values
//   let entrys = [];
//   Object.values(obj).filter((el) => {
//     if (el % 2 !== 0) entrys.push(el);
//   });

//   if (entrys.length === 0 || entrys.length === 1) return true;
//   return false;
// };
// // invoke the function
// console.log(isPalindromePermutation([1, 2, 3, 2, 1])); // true
// console.log(isPalindromePermutation([1, 2, 3, 1, 2])); // true
// console.log(isPalindromePermutation([1, 2, 3, 2, 1, 2])); // false
// console.log(isPalindromePermutation([1, 1, 3, 2, 2])); // true
// console.log(isPalindromePermutation([1, 2, 1, 2, 3])); // true

// //
// var stringCompression1 = (s) => {
//   s = s.toLowerCase().replace(/[^A-Za-z]/g, "");
//   let [compstr, count] = ["", 1];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i + 1]) {
//       count++;
//     } else {
//       compstr = compstr + s[i] + count;
//       count = 1;
//     }
//   }
//   if (compstr.length < s.length) return compstr;
//   return s;
// };
// // invoke the function
// console.log(stringCompression1("aabCccccaaa")); // a2b1c5a3
// console.log(stringCompression1("wwwaabbbb")); // w3a2b4
// console.log(stringCompression1("kkkkj")); // k4j1
// console.log(stringCompression1("aab")); // aab

// // // Count subarrays equal to sum:
// // var subarraySum = function (nums, k) {
// //   let subarrays = [];
// //   let count = 0;

// //   // sum elements
// //   // function sum(e1, e2) {
// //   //   return +e1 + +e2;
// //   // }

// //   for (i = 0; i < nums.length; i++) {
// //     for (j = i + 1; j < nums.length + 1; j++) {
// //       subarrays.push(nums.slice(i, j))
// //       // if (nums.slice(i, j).reduce(sum) === k) {
// //       //   count++;
// //       // }
// //     }
// //   }
// //   return subarrays;
// //   // if (count > 0) return count;
// //   // return -1;
// // };
// // // invoke the function
// // console.log(subarraySum([-2], -2)); // 1
// // console.log(subarraySum([-2, -1], -1)); // 1
// // console.log(subarraySum([-2, -1, -1], -1)); // 2

// // // [ [ -2 ] ]
// // // [ [ -2 ], [ -2, -1 ], [ -1 ] ]
// // // [ [ -2 ], [ -2, -1 ], [ -2, -1, -1 ], [ -1 ], [ -1, -1 ], [ -1 ] ]

// /* GROUP ANAGRAMS:
// Write a method to sort an array of strings so that all the anagrams are next to each other.
// */
// var groupAnagrams = function (nums) {
//   let obj = {};
//   nums.forEach((el) => {
//     let chars = el;
//     //
//     if (obj[chars]) return obj[chars].push(el);
//     return (obj[chars] = [el]);
//   });

//   return Object.values(obj);

//   // // Sort anagrams
//   // let anagrams = [];
//   // Object.values(obj).filter((item) => {
//   //   anagrams.push(item.sort());
//   // });
//   // return anagrams.sort();
// };
// // invoke the function
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]"
// console.log(groupAnagrams(["321", "213", "897", "456", "987", "798"]));
// // [['321', '213'], ['897', '987', '798'], ['456']]"
// console.log(groupAnagrams([321, 213, 897, 1000, 456, 987, 798]));
