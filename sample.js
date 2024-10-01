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
    return (obj[el] = 1);
  });

  // characters with odd count(values)
  let count = 0;
  Object.values(obj).filter((el) => {
    if (el % 2 !== 0) count++;
  });

  if (count <= 1) return true;
  return false;
};
// invoke the function
console.log(isPalindromePermutation("Tact Coa")); // true
console.log(isPalindromePermutation("refer")); // true
console.log(isPalindromePermutation("rrfee")); // true
console.log(isPalindromePermutation("taco cat")); // true

/* STRING COMPRESSION: 
  Implement a method to perform basic string compression using the counts of repeated 
  characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" 
  string would not become smaller than the original string, your method should return the 
  original string. You can assume the string has only uppercase and lowercase letters */

var stringCompression1 = function (s) {
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  let compstr = "";
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    else {
      compstr = compstr + s[i] + count;
      count = 1;
    }
  }
  if (compstr.length < s.length) return compstr;
  return s;
};
// invoke the function
console.log(stringCompression1("aabCccccaaa")); // a2b1c5a3
console.log(stringCompression1("wwwaabbbb")); // w3a2b4
console.log(stringCompression1("kkkkj")); // k4j1
console.log(stringCompression1("aab")); // aab

// ANOTHER VERSION OF STRING COMPRESSION -> NOT RELATED TO ABOVE
var stringCompression2 = (s) => {
  let obj = {};
  s.toLowerCase()
    .replace(/[^a-z]/g, "")
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
console.log(stringCompression2("aabCccccaaa")); // a5b1c5
console.log(stringCompression2("wwwaabbbb")); // w3a2b4
console.log(stringCompression2("kkkkj")); // k4j1
console.log(stringCompression2("aab")); // a2b1

/* ------------------------------------------------------------------------------------ */
// Missing Elements in other array:

var missingElement = function (nums1, nums2) {
  let missing = [];
  nums1.filter((el) => {
    // elements missing in nums2:
    if (!nums2.includes(el)) missing.push(el);
  });
  return missing;
};
// invoke the function
console.log(missingElement([1, 2, 3, 4, 5], [1, 3, 5])); // [ 2, 4 ]

/* GROUP ANAGRAMS: 
  Write a method to sort an array of strings so that all the anagrams are next to each other.
  */
var groupAnagrams = function (nums) {
  let obj = {};
  nums.forEach((el) => {
    let chars = el.split("").sort();
    //
    if (obj[chars]) return obj[chars].push(el);
    return (obj[chars] = [el]);
  });

  return Object.values(obj);

  // // Sort anagrams
  // let anagrams = [];
  // Object.values(obj).filter((item) => {
  //   anagrams.push(item.sort());
  // });
  // return anagrams.sort();
};
// invoke the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]"
console.log(groupAnagrams(["321", "213", "897", "456", "987", "798"]));
// [['321', '213'], ['897', '987', '798'], ['456']]"

/* MISSING INT: 
  Given an input file with four billion non-negative integers, provide an algorithm to 
  generate an integer that is not contained in the file. Assume you have 1 GB of memory 
  available for this task.
  FOLLOW UP
  What if you have only 10 MB of memory? Assume that all the values are distinct and we now 
  have no more than one billion non-negative integers. */
var missingInt = function (nums) {
  let missing = [];

  for (let start = 1; start <= nums.length; start++) {
    if (!nums.includes(start)) {
      missing.push(start);
    }
  }
  return missing;
};
// invoke the function
console.log(missingInt([1, 3, 4, 6, 7, 7, 9, 10, 11])); // [ 2, 5, 8 ]
console.log(missingInt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // []
console.log(missingInt([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // [ 1 ]
console.log(missingInt([1, 2, 3, 4, 6, 7, 8, 9, 10, 11])); // [ 5 ]
console.log(missingInt([1, 2, 3, 4, 6, 7, 7, 9, 10, 11])); // [ 5, 8 ]

/* PEAKS AND VALLEYS:
  In an array of integers, a "peak" is an element which is greater than or equal to the 
  adjacent integers and a "valley" is an element which is less than or equal to the adjacent 
  integers.
  For example, in the array [5, 1, 3, 2, 3], [5, 3, 3] are peaks and [1, 2] are valleys. 
  Given an array of integers, sort the array into an alternating sequence of peaks and valleys.
  */
var peaksAndValleys = function (arr) {
  // sort the array
  arr.sort(function (e1, e2) {
    return e1 - e2;
  });

  let new_arr = [],
    start = 0,
    stop = arr.length - 1;

  while (start < stop) {
    new_arr.push(arr[stop--], arr[start++]);
  }

  if (arr.length === 0) return -1;
  // If array length is odd then print the last middle element.
  if (arr.length % 2 === 0) return new_arr;
  return new_arr.concat(arr[start]);
};
// invoke the function
console.log(peaksAndValleys([5, 3, 1, 2, 3])); // [5, 1, 3, 2, 3]

// Search Sorted Matrix:
var searchSortedMatrix = function (matrix, target) {
  for (row = 0, col = matrix[0].length - 1; row < matrix.length, col > 0; ) {
    if (matrix[row][col] === target) return true; // [row, col]
    if (matrix[row][col] < target) row++;
    if (matrix[row][col] > target) col--;
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
    29
  )
); // true [ 2, 1 ]

// Right Rotate Matrix:
var rightRotateMatrix = function (matrix) {
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
console.log(
  rightRotateMatrix([
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50],
  ])
);
/*
      [
        [ 32, 27, 15, 10 ],
        [ 33, 29, 25, 20 ],
        [ 39, 37, 35, 30 ],
        [ 50, 48, 45, 40 ]
      ]
  */

// Maximum subarray sum:
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
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [ 4, -1, 2, 1 ] -> 6

// Count subarrays equal to sum:
var subarraySum = function (nums, k) {
  let count = 0;

  // sum elements
  function sum(e1, e2) {
    return +e1 + +e2;
  }

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      if (nums.slice(i, j).reduce(sum) === k) {
        count++;
      }
    }
  }

  if (count > 0) return count;
  return -1;
};
// invoke the function
console.log(subarraySum([-2], -2)); // 1
console.log(subarraySum([-2, -1], -1)); // 1
console.log(subarraySum([-2, -1, -1], -1)); // 2

// Substrings and Subarrays:
var subStringsSubarrays = function (str) {
  let res = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      res.push(str.slice(i, j));
    }
  }
  return res;
};
// invoke the function
console.log(subStringsSubarrays("dog")); // [ 'd', 'do', 'dog', 'o', 'og', 'g' ]
console.log(subStringsSubarrays([1, 4, 2, 5]));
/*
  [
    [ 1 ], [ 1, 4 ], [ 1, 4, 2 ], [ 1, 4, 2, 5 ], [ 4 ], [ 4, 2 ], [ 4, 2, 5 ], [ 2 ], [ 2, 5 ], [ 5 ]
  ]
  */

// Subsequences and Subsets:
var subSequencesSubsets = function (str) {
  let res = [];
  let subsequences = (subset, value) =>
    subset.concat(subset.map((set) => [...set, value]));
  return str.split("").reduce(subsequences, [res]);
};
// invoke the function
console.log(subSequencesSubsets("dog"));
/*
  [ [], [ 'd' ], [ 'o' ], [ 'd', 'o' ], [ 'g' ], [ 'd', 'g' ], [ 'o', 'g' ], [ 'd', 'o', 'g' ] ]
  */

// EVEN LENGTH SUBSTRINGS:
var evenLengthSubstring = function (arr) {
  let res = [];

  // sum elements
  function sum(e1, e2) {
    return +e1 + +e2;
  }

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length + 1; j++) {
      if (arr.slice(i, j).length % 2 === 0)
        res.push(arr.slice(i, j).reduce(sum));
      // [[1, 4], [1, 4, 2, 5], [4, 2], [2, 5]] -> [ 5, 12, 6, 7 ]
    }
  }

  if (res.length > 0) return res.reduce(sum);
  return -1;
};
// invoke the function
console.log(evenLengthSubstring([1, 4, 2, 5])); // -> 30

// RIGHT ROTATE STRING BY K PLACES:
var rightRotateString = function (str, k) {
  let result = null;
  k = str.length - k;
  let str1 = str.slice(k, str.length);
  let str2 = str.slice(0, k);
  result = str1 + str2;
  return result;
};
// invoke the function
console.log(rightRotateString("ABCDEFG", 3)); // "EFGABCD"

// RIGHT ROTATE ARRAY BY K PLACES:
var rightRotateArray = function (nums, k) {
  let result = null;
  k = nums.length - k;
  let arr1 = nums.slice(k, nums.length);
  let arr2 = nums.slice(0, k);
  result = arr1.concat(arr2);
  return result;
};
// invoke the function
console.log(rightRotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]

// SORTING:
var sortElements = function (nums) {
  let res = [];
  nums.forEach((el) => {
    res.push(el * el);
  });

  res.sort(function (e1, e2) {
    if (e1 > e2) return 1;
    return -1;
  });
  return res;
};
// invoke the function
console.log(sortElements([4, 2, 6, 5, 9])); // [ 4, 16, 25, 36, 81 ]

// Sort alphabet and numbers:
var sortAlpsNums = function (array) {
  let alps = [];
  let nums = [];

  array.filter((el) => {
    // filter element
    if (typeof el === "string") alps.push(el);
    else nums.push(el);
  });

  // sort alphabet
  alps.sort(function (e1, e2) {
    if (e1.toLowerCase() > e2.toLowerCase()) return 1;
    return -1;
  });
  // sort numbers
  nums.sort(function (e1, e2) {
    if (e1 > e2) return 1;
    return -1;
  });

  // merge alphabet and numbers
  return alps.concat(nums);
};
// invoke the function
console.log(sortAlpsNums(["a", "B", "A", "c", "b"])); // [ 'A', 'a', 'b', 'B', 'c' ]
console.log(sortAlpsNums([2, 3, 10, 4, 100])); // [ 2, 3, 4, 10, 100 ]
console.log(sortAlpsNums(["F", "e", 6, 5, "f", "A", 2, "a", "z", 9]));
// [ 'a', 'A', 'e', 'f', 'F', 'z', 2, 5, 6, 9 ]
console.log(
  sortAlpsNums(["ant", "33", "Bug", "4", "cat", "1111", "Dog", "222"])
);
// [ '1111', '222', '33', '4', 'ant', 'Bug', 'cat', 'Dog' ]

// WORD WEIGHT:
var wordWeight = function (s, n) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let weight = "";
  let sum1 = 0;
  let sum2 = 0;

  for (let char of s.toLowerCase()) weight += alphabet.indexOf(char) + 1;

  weight.split("").forEach((item) => {
    sum1 += +item;
  });

  sum1
    .toString()
    .split("")
    .forEach((item) => {
      sum2 += +item;
    });

  if (n === 1) return sum1;
  if (n === 2) return sum2;
  return -1;
};
// invoke the function
console.log(wordWeight("Turing", 2)); // 8

// PAIRING:
var countPairs = function (nums) {
  let obj = {};

  // sum elements
  function sum(e1, e2) {
    return e1 + e2;
  }

  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    return (obj[el] = 1);
  });

  //
  let pairs = [];
  let arr = Object.values(obj); // [2, 4]
  arr.filter((el) => {
    if (el % 2 === 0) pairs.push(el / 2); // if no remainder
    else pairs.push((el - 1) / 2);
  });

  // total pairs
  if (pairs.reduce(sum) === 0) return -1; // "none"
  return pairs.reduce(sum);
};
// invoke the function
console.log(countPairs([5, 8, 5, 8, 8, 8])); // 3 pairs
console.log(countPairs([5, 8, 5, 8, 8])); // 2 pairs
console.log(countPairs([1, 2, 3, 4])); // -1
console.log(countPairs([5, 8, 8, 8, 8, 9])); // 2 pairs
console.log(countPairs([5, 7, 8, 8, 8, 8])); // 2 pairs

// The count of characters in a string:
var countCharacters = function (string) {
  let obj = {};
  string
    .toLowerCase()
    .replace(/ /g, "")
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
    .filter((char) => {
      return obj[char] === Math.max(...Object.values(obj));
      //if(obj[char] === Math.max(...Object.values(obj))) return char
    })
    .join();
};
// invoke the function
console.log(countCharacters("The quick brown fox jumps over the lazy dog")); // o

// BALANCED DIGIT:
var balancedDigit = function (nums1, nums2) {
  // sum elements
  function sum(e1, e2) {
    return +e1 + +e2;
  }

  // compute missing value
  let missing = null;
  missing = nums2.reduce(sum) - nums1.reduce(sum);
  return missing;
};
// invoke the function
console.log(balancedDigit([3, 7, 1, 8, 1, 3], [5, 5, 15])); // 2
console.log(balancedDigit([1, 2, 3, 4], [11])); // 1

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// //
// arr[2] = [4, arr[2]];
// arr[1] = [5, arr[1]];
// console.log(arr.flat()); // [ 1, 5, 2, 4, 3 ]

// REORDER AN ARRAY:
var reorderArray = function (x, y) {
  let arr = [];
  let res = [];
  for (let i = 0; i < x.length, i < y.length; i++) {
    arr[y[i]] = [x[i], arr[y[i]]];
  }
  //
  arr
    .flat()
    .flat()
    .forEach((el) => {
      if (typeof el === "number") res.push(el);
    });
  return res;
};
// invoke the function
console.log(reorderArray([1, 2, 3, 4, 5], [0, 1, 2, 2, 1])); // [ 1, 5, 2, 4, 3 ]

// DUPLICATE AND MISSING NUMBER:
var duplicateAndMissing = function (nums) {
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    return (obj[el] = 1);
  });

  // find duplicate
  let dup = Object.keys(obj).filter((k) => {
    return obj[k] > 1;
  });

  // sort in descending order
  nums.sort(function (e1, e2) {
    if (e1 > e2) return -1;
    return 1;
  });
  return [Number(dup), nums[0] + 1];
};
// invoke the function
console.log(duplicateAndMissing([1, 2, 3, 4, 3])); // [3, 5]
console.log(duplicateAndMissing([1, 2, 2])); // [2, 3]
console.log(duplicateAndMissing([1, 2, 3, 2])); // [2, 4]

// The count of a substring in a string:
var countSubstring = function (char, string) {
  let pattern = new RegExp(char, "gi");
  let arr = string.match(pattern);
  if (arr !== null) return arr.length;
  return -1;
};
// invoke the function
console.log(
  countSubstring("the", "The quick brown fox jumps over the lazy dog")
); // 2
console.log(
  countSubstring("th", "The quick brown fox jumps over the lazy dog")
); // 2
console.log(
  countSubstring("they", "The quick brown fox jumps over the lazy dog")
); // -1

// The count of a character in a string:
var countCharacter = function (char, string) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    if (string.toLowerCase()[i] === char.toLowerCase()) count++;
  }
  if (count > 0) return count;
  return -1;
};
// invoke the function
console.log(countCharacter("t", "The quick brown fox jumps over the lazy dog")); // 2
console.log(
  countCharacter("th", "The quick brown fox jumps over the lazy dog")
); // -1

// The count of a word in a string:
var countWord = function (word, string) {
  let count = 0;
  string = string.toLowerCase().split(" ");
  for (i = 0; i < string.length; i++) {
    if (string[i] === word.toLowerCase()) count++;
  }
  if (count > 0) return count;
  return -1;
};
// invoke the function
console.log(countWord("the", "The quick brown fox jumps over the lazy dog")); // 2
console.log(countWord("th", "The quick brown fox jumps over the lazy dog")); // -1
console.log(countWord("they", "The quick brown fox jumps over the lazy dog")); // -1

// Reverse string:
var reverseString = function (str) {
  let reversedString = [];
  str.split(" ").forEach((word) => {
    reversedString.unshift(word);
  });
  return reversedString.join(" ");
};
// invoke the function
console.log(reverseString("The quick brown fox jumps over the lazy dog"));
// dog lazy the over jumps fox brown quick The

// Reverse array -> Method 1:
var reverseArray1 = function (nums) {
  return nums.reverse();
};
// invoke the function
console.log(reverseArray1([4, 2, 6, 5, 9])); // [ 9, 5, 6, 2, 4 ]

// Reverse array -> Method 2:
var reverseArray2 = function (nums) {
  let reversed = [];
  nums.forEach((el) => {
    reversed.unshift(el);
  });
  return reversed;
};
// invoke the function
console.log(reverseArray2([4, 2, 6, 5, 9])); // [ 9, 5, 6, 2, 4 ]

// Length of the last word:
var lastWordLength = function (str) {
  let reversedString = [];
  str.split(" ").forEach((word) => {
    reversedString.unshift(word);
  });
  return reversedString[0].length;
};
// invoke the function
console.log(lastWordLength("The quick brown fox jumps over the lazy dog")); // 3

// Find maximum element in the array:
var findMaxElement = function (nums) {
  nums.sort(function (e1, e2) {
    if (e1 > e2) return -1;
    return 1;
  });
  return nums[0];
};
// invoke the function
console.log(findMaxElement([3, 4, 5, 1, 2, 5, 0])); // 5

// Count maximum element in the array:
var countMaxElement = function (nums) {
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
// invoke the function
console.log(countMaxElement([3, 4, 5, 1, 2, 5, 0])); // 2

// /* FIND DUPLICATES:
// You have an array with all the numbers from 1 to N, where N is at most 32,000. The array
// may have duplicate entries and you do not know what N is. With only 4 kilobytes of memory
// available, how would you print all duplicate elements in the array? */

var findDuplicate = function (nums) {
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
// invoke the function
console.log(findDuplicate([1, 2, 3, 4, 3, 4])); // [3, 4]
console.log(findDuplicate([1, 2, 2])); // [2]
console.log(findDuplicate([1, 2, 3, 2])); // [2]
