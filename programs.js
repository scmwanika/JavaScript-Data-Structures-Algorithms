// CONVERT 12HOURS TO 24HOURS
exports.convertTwelveHoursToTwentyFourHours = function (timeStr) {
  let [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = +hours + 12;
  return `${hours}:${minutes}`;
};

// /* Explanation
//   console.log(time1.split(" ")) // ['5:00', 'PM']
//   let str = '5:00'
//   console.log(str.split(":")) // ['5', '00'] */

// CONVERT 24HOURS TO 12HOURS
exports.convertTwentyFourHoursToTwelveHours = function (timeStr) {
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
exports.daysBetweenDates = function (date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let difference = (date1 - date2) / (1000 * 3600 * 24); // milliseconds

  return Math.abs(difference);
};

// SUBTRACT DAYS
exports.subtractDays = function (date, days) {
  date = new Date(date);
  date.setDate(date.getDate() - days); // add + 1 if date format is: 12/31/2022 or 12-31-2022
  return date;
};

// ------------------------------------------------------------------------------------ //

/* ROTATE MATRIX LEFT

// Rotate Matrix Left -> Anti-Clockwise
exports.rotateMatrixLeft = function (matrix) {
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
// // invoke the function
// // var matrix = [
// //   [5, 1, 9, 11],
// //   [2, 4, 8, 10],
// //   [13, 3, 6, 7],
// //   [15, 14, 12, 16],
// // ];
// rotateMatrixLeft(matrix);

// ROTATE STRING
exports.rotateString = function (string, k, direction) {
  // Rotate Clockwise (right)
  if (direction === "right") {
    k = string.length - k;
    let str1 = string.slice(k, string.length);
    let str2 = string.slice(0, k);
    let merge_string = str1 + str2;
    return merge_string;
  }

  // Rotate Anti-Clockwise (left)
  if (direction === "left") {
    let str1 = string.slice(k, string.length);
    let str2 = string.slice(0, k);
    let merge_string = str1 + str2;
    return merge_string;
  }
};

// ROTATE ARRAY
// Return an array that holds the indices of a searched element in the rotated array.
exports.rotateArray = function (array, k, direction, element) {
  // Rotate Clockwise (right)
  if (direction === "right") {
    var merge_array = null;
    k = array.length - k;
    let arr1 = array.slice(k, array.length);
    let arr2 = array.slice(0, k);
    merge_array = arr1.concat(arr2);

    // get indices of a searched element in the merge_array (rotated array)
    let indices = [];
    for (let [idx, ele] of merge_array.entries()) {
      if (ele === element) {
        indices.push(idx);
      }
    }

    return [merge_array, indices];
  }

  // Rotate Anti-Clockwise (left)
  if (direction === "left") {
    var merge_array = null;
    let arr1 = array.slice(k, array.length);
    let arr2 = array.slice(0, k);
    merge_array = arr1.concat(arr2);

    // get indices of a searched element in the merge_array (rotated array)
    let indices = [];
    for (let [idx, ele] of merge_array.entries()) {
      if (ele === element) {
        indices.push(idx);
      }
    }

    return { merge_array, indices };
  }
};

// COUNT SUBARRAYS EQUAL TO SUM
exports.countSubArraysEqualToSum = function (nums, k) {
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

// // ------------------------------------------------------------------------------------ //
/* LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS -> USING POINTERS
To Solve this problem we need to have two pointers that both start at 0 index, or the first char of the given
string, and an empty set also a var for the longestSubstringLength We start looping over the string chars and
check if the char is not in our set we add it to the set then we move the right pointer, increasing the sliding window, get
the max between longestSubstringLength, which is intialized as 0 and our chars set size or length, and so on untill
we find a char existed in the list, if so we delete the first char in our set then we increase the left pointer to start
from the next Letter */
exports.lengthOfLongestSubstring = function (s) {
  // initialize variables
  let i = 0;
  let j = 0;
  let longestSubstr = 0;
  let uniquechars = [];

  while (i < s.length) {
    // The char is not found in the array
    if (!uniquechars.includes(s[i])) {
      uniquechars.push(s[i]);
      longestSubstr = Math.max(longestSubstr, uniquechars.length);
      i++;
    } else {
      // The char is found in the array
      uniquechars.shift(s[j]);
      j++;
    }
  }
  return longestSubstr;
};

// LONGEST COMMON SUBSEQUENCE
exports.longestCommonSubsequence = function (s1, s2) {
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

// ------------------------------------------------------------------------------------ //
// PALINDROMES AND PERMUTATIONS

/* IS PALINDROME / IS REVERSE
Given a string, write a method to decide if it is a palindrome. */
exports.isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^A-Za-z0-9]/gi, "");
  // reverse the input and return the result of the comparison
  return s === s.split("").reverse().join("");
};

// Given two strings, write a method to decide if one is a palindrome of the other. */
exports.isPalindromes = function (str1, str2) {
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

/* IS PERMUTATION / IS ANAGRAM
Given two strings, write a method to decide if one is a permutation of the other. */
exports.isPermutation = function (s1, s2) {
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

// // PERMUTATIONS -> ANAGRAMS
// exports.generatePermutation = function (arr) {
//   let resultArr = [];
//   if (arr.length === 0) return resultArr;
//   if (arr.length === 1) resultArr.push(arr);

//   for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[i];

//     const otherElements = arr.slice(0, i).concat(arr.slice(i + 1));
//     const swappedPermutation = generatePermutation(otherElements);

//     for (let j = 0; j < swappedPermutation.length; j++) {
//       const finalSwappedPermutation = [currentElement].concat(
//         swappedPermutation[j]
//       );

//       resultArr.push(finalSwappedPermutation.join("")); // for strings
//       // resultArr.push(finalSwappedPermutation); // for arrays
//     }
//   }

//   return resultArr;
// };
// // invoke the function
// console.log(generatePermutation("aabc"));
// console.log(generatePermutation(["S", "t", "e", "p", "h", "e", "n"]));
// console.log(generatePermutation([1, 2, 3]));

// ------------------------------------------------------------------------------------ //

// SORT THE ARRAY IN A WAY THAT NUMBERS COME FIRST AND STRINGS SECOND
exports.firstNumsSecondAlps = function (arr) {
  let [nums, alps] = [[], []];

  nums = arr.filter((el) => typeof el === "number");
  alps = arr.filter((el) => typeof el === "string");

  nums.sort(function (e1, e2) {
    if (e1 > e2) return 1;
    if (e1 < e2) return -1;
  });
  alps.sort(function (e1, e2) {
    e1 = e1.toLowerCase();
    e2 = e2.toLowerCase();
    if (e1 > e2) return 1;
    if (e1 < e2) return -1;
  });

  return nums.concat(alps);
};

// SORT PRODUCTS
exports.sortProducts = function (a) {
  let res = [];
  a.forEach((el) => {
    // square element and append product to res array
    res.push(el * el);
    // then sort res array
    res.sort(function (e1, e2) {
      if (e1 > e2) return 1;
      if (e1 < e2) return -1;
    });
  });
  return res;
};

/* REGULAR EXPRESSION -> RegExp
Return a sorted string without symbols and numbers. */
exports.regExp = function (s) {
  // transform string then sort
  s = s
    .replace(/[^A-Za-z]/g, "")
    .split("")
    .sort(function (e1, e2) {
      // Alphabet Case-Insensitive Sort
      e1 = e1.toLowerCase();
      e2 = e2.toLowerCase();
      if (e1 > e2) return 1;
      if (e1 < e2) return -1;
    });
  return s.join("");
};

// ------------------------------------------------------------------------------------ //
/* OBJECT STORE -> Dictionary Sorting Objects */
// var employees = [
//   { name: "John", salary: 90000, hireDate: "July 1, 2010" },
//   { name: "David", salary: 75000, hireDate: "August 15, 2009" },
//   { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
//   { name: "John", salary: 90000, hireDate: "July 1, 2010" },
//   { name: "David", salary: 75000, hireDate: "August 15, 2009" },
//   { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
// ];

// SORT THE OBJECT BY SALARY
exports.sortEmployeesBySalary = function (employees) {
  employees.sort((obj1, obj2) => {
    if (obj1.salary > obj2.salary) return 1;
    if (obj1.salary < obj2.salary) return -1;
  });
  return employees;
};
// invoke the function
//console.table(sortEmployeesBySalary(employees));
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

// // EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS
// // extract (names, salaries) from employees array
// exports.extractValues = (arr, prop1, prop2) => {
//   let output = [];

//   arr.forEach((item) => {
//     output.push(item[prop1], item[prop2]);
//   });

//   return output;
// };
// // invoke the function
// //console.log(extractValues(employees, "name", "salary"));
// /*
// [
//   'John', 90000, 'David',
//   75000,  'Ana', 80000,
//   'John', 90000, 'David',
//   75000,  'Ana', 80000
// ] */

// ------------------------------------------------------------------------------------ //
// CHECK IF A STRING CONTAINS ANOTHER STRING
// console.log("Programming language".includes("programming")); // false
// console.log("Programming language".includes("Programming")); // true
// console.log("Programming".includes("Programming language")); // false
// console.log(["Programming", "language"].includes("Programming")); // true

// COMMON CHARACTERS
exports.commonCharacters = function (s1, s2) {
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
exports.notCommonCharacters = function (s1, s2) {
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
exports.commonElements = function (a1, a2) {
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

// ------------------------------------------------------------------------------------ //
// THE OCCURRENCE OF A WORD IN STRING
exports.wordCount = function (s, word) {
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

// THE OCCURRENCE OF A LETTER IN STRING
exports.letterCount = function (s, letter) {
  let indices = [];
  let a = s.toLowerCase().split("");

  for (let [idx, el] of a.entries()) {
    if (el.includes(letter.toLowerCase())) {
      indices.push(idx);
    }
  }

  return [letter, indices.length];
};

// THE OCCURRENCE OF SUBSTRING IN STRING
exports.countSubstrings = function (s, substr) {
  let regexp = new RegExp(substr, "gi");
  let count = s.match(regexp).length;
  return count;
};

// THE WORDS / NUMBER OF WORDS WITH SUBSTRING
exports.wordHasSubstring = function (string, substring) {
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

// WORD WEIGHT
exports.wordWeight = function (s, n) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let weight = "";
  let sum1 = 0;
  let sum2 = 0;
  s = s.toLowerCase();

  for (var i = 0; i < s.length; i++) {
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
    sum1 = sum1
      .toString()
      .split("")
      .forEach((item) => {
        sum2 += +item;
      });
    return sum2;
  }

  return -1;
};

// APPLY SPELLING RULE TO FILTER() STRINGS -> cie
// // method 1:
// var spellingRule = function (words_array) {
//   function misspelled(word) {
//     if (word.indexOf("cie") > -1) {
//       return true;
//     }
//     return false;
//   }

//   return words_array.filter(misspelled);
// };

// method 2:
exports.spellingRule = function (words_array, str) {
  filtered_array = [];

  words_array.filter((item) => {
    if (item.includes(str)) {
      filtered_array.push(item);
    }
  });

  return filtered_array;
};

// SWAP UPPERCASE AND LOWERCASE LETTERS DURING TRAVERSING
exports.swapCase = function (str) {
  let new_array = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i].includes(str.toLowerCase()[i]))
      new_array.push(str[i].toUpperCase());
    else new_array.push(str[i].toLowerCase());
  }

  return new_array.join("");
};

// SWITCH REVERSER
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

// PIG LATIN CONVERTER
exports.pigLatinConverter = function (str) {
  str = str.toLowerCase();
  let start = str.match(/[aeiou]/gi);
  let end = str.indexOf(start[0]);

  if ("aeiou".includes(str[0])) return str + "way";
  else return str.substring(end) + str.substring(0, end) + "ay";
};

// // COUNT VOWELS AND CONSONANTS
// var countVowelsConsonants = function (string) {
//   let vowels = [];
//   let consonants = [];

//   // transform string and transverse
//   string = string.replace(/[^A-Za-z]/g, "").toLowerCase();

//   for (var char of string) {
//     if ("aeiou".includes(char)) vowels.push(char);
//     else consonants.push(char);
//   }

//   let vowelCount = vowels.length;
//   let consonantCount = consonants.length;
//   if (vowels.length > 0 || consonants.length > 0) {
//     return { vowelCount, consonantCount };
//   }
//   return -1;
// };
// // invoke the function
// console.log(
//   countVowelsConsonants("The quick brown fox jumps over the lazy dog")
// ); // { vowelCount: 11, consonantCount: 24 }

// // WORDS WITH MORE THAN ONE VOWEL

// ------------------------------------------------------------------------------------ //
// RETURN AN ARRAY OF EVEN SQUARE IN THE RANGE
exports.even_squares = function (start, end) {
  let evensq = [];

  for (start; start <= end; start++) {
    if (start % 2 === 0) evensq.push(start * start);
  }
  return evensq;
};

// RETURN AN ARRAY OF FIRST AND LAST CHARACTER OF EACH WORD
exports.firstLastCharacter = function (words_array) {
  let res = [];
  words_array.filter((item) => {
    res.push(item[0] + item[item.length - 1]);
  });

  return res;
};

// IS MULTIPLE
exports.fizzBuzz = function (num) {
  // check if the number is a multiple of 3 and 5
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";

  // check if the number is a multiple of 3
  if (num % 3 === 0) return "fizz";

  // check if the number is a multiple of 5
  if (num % 5 === 0) return "buzz";

  return num;
};

// IS PRIME NUMBER
exports.isPrimeNumber = function (num) {
  if (num < 2) return false;
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

//........................................................................................
/*
ARRAYS (typeof el === "string" || type of el === "number")
 -> sorting elements (ascend & descend)
 -> reversing elements
 -> searching element (e.g find index or indices of searched element, find duplicates)
 -> counting element (based on condition)
 -> return object representing character count
 -> RegExp
 -> swap character
*/

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

// OBJECT REPRESENTING CHARACTER COUNT OF A STRING
var characterCount = function (s) {
  let obj = {};
  s.toLowerCase()
    .replace(/[^A-Za-z]/g, "")
    .split("")

    // // FOR WORD COUNT ...
    // .replaceAll(" ", ",")
    // .split(",")

    .forEach((el) => {
      if (obj[el]) {
        obj[el]++;
        return;
      }
      obj[el] = 1;
    });
  //return obj; // {m: 1, w: 1, a: 2, n: 1, i: 1, k: 1}

  //return Math.max(...Object.values(obj)); // count most frequent character -> 2

  // CHECK IF IS DUPLICATE ...
  if (Math.max(...Object.values(obj)) > 1) return [true, "is duplicate"];
  return [false, "not duplicate"];

  // return Object.keys(obj)
  //   .filter((x) => {
  //     return obj[x] === Math.max(...Object.values(obj));
  //   })
  //   .join(""); // most frequent character -> a
};
// invoke the function
console.log(characterCount("mwanika")); // a

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

// //.........................................................
// function hasThreeVowels(value) {
//   const vowels = 'aeiou';
//   return [...value].filter(e => vowels.indexOf(e.toLowerCase()) > -1)//.length >= 3;
// }
// // invoke the function
// console.log( hasThreeVowels("The quick brown fox jumps over the lazy dog")); //
// //........
// var mostVowels = function(words) {
//   var wordToReturn;
//   var highestVowelCount = -1;

//   for(var i = 0; i < words.length; i++) {
//     var vowelCount = words[i].match(/[aeiouAEIOU]/g).length;
//     if(vowelCount > highestVowelCount) {
//       highestVowelCount = vowelCount;
//       wordToReturn = words[i];
//     }
//   }
//   return wordToReturn;
// }
// // invoke the function
// console.log( mostVowels(["meow", "aeiou", "FOUR"])); //

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

// LONGEST PREFIX
var longestPrefix = function (a) {
  let characters = [];
  let lens = [];
  let minlens;
  let shortests;
  //
  a.filter((el) => {
    lens.push(el.length);
    minlens = Math.min(...lens);
    // Get string with minimum length
    if (el.length === minlens) shortests = el;
  });
  //
  a.every((el) => {
    for (let i = 0, j = 0; i < el.length, j < shortests.length; i++, j++) {
      if (el[i] === shortests[j]) characters.push(el[i]);
    }
  });
  return characters;
};
// invoke the function
console.log(longestPrefix(["flower", "flow", "flight"])); // ["f", "l"] -> 2
console.log(longestPrefix(["flower", "floor", "flood"])); // ["f", "l", "o"] -> 3
console.log(longestPrefix(["Mwanika", "Stephen", "Crispin"])); // [] -> 0
console.log(longestPrefix([])); // [] -> 0

/* CHECK PALINDROME
Given two strings, write a method to decide if one is a palindrome
of the other. */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
  // reverse the input and return the result of the comparison
  return s === s.split("").reverse().join("");
};
// invoke the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true

// PALINDROME NUMBER
var isPalindrome = function (x) {
  x = String(x);
  // reverse the input string and return the result of the comparison
  return x === x.split("").reverse().join("");
};
// invoke the function
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false

// ANOTHER VERSION OF STRING COMPRESSION -> NOT RELATED TO ABOVE
var strCompressions = (s) => {
  let obj = {};
  s.toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "")
    .split("")
    .forEach((el) => {
      if (obj[el]) {
        obj[el]++;
        return;
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

// COUNT SUBARRAYS EQUAL TO SUM
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
console.log(subarraySum([2, 2, -4, 1, 1, 2], -3)); // 1
console.log(subarraySum([2, 2, 2], 4)); // 2
console.log(subarraySum([3, 2, 1], 3)); // 2

// PAIRING
var pairing = function (nums) {
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
      return;
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

// BALANCED DIGIT
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

// ------------------------------------------------------------------------------------ //
// PERMUTATIONS -> ANAGRAMS ...................
var generatePermutation = function (arr) {
  let resultArr = [];
  if (arr.length === 0) return resultArr;
  if (arr.length === 1) resultArr.push(arr);

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    const otherElements = arr.slice(0, i).concat(arr.slice(i + 1));
    const swappedPermutation = generatePermutation(otherElements);

    for (let j = 0; j < swappedPermutation.length; j++) {
      const finalSwappedPermutation = [currentElement].concat(
        swappedPermutation[j]
      );

      resultArr.push(finalSwappedPermutation.join("")); // for strings
      // resultArr.push(finalSwappedPermutation); // for arrays
    }
  }

  return resultArr;
};
// invoke the function
console.log(generatePermutation("aabc"));
console.log(generatePermutation(["a", "a", "b", "c"]));
console.log(generatePermutation(["S", "t", "e", "p", "h", "e", "n"]));
console.log(generatePermutation("123"));
console.log(generatePermutation(["1", "2", "3"]));
console.log(generatePermutation([1, 2, 3]));

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
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

// SWAP UPPERCASE AND LOWERCASE LETTERS DURING TRAVERSING -> method1
var swapCase = function (str) {
  let new_array = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i].includes(str.toLowerCase()[i]))
      new_array = new_array + str[i].toUpperCase();
    else new_array = new_array + str[i].toLowerCase();
  }

  return new_array;
};
// invoke the function
console.log(swapCase("heLLo")); // HEllO

// SWAP UPPERCASE AND LOWERCASE LETTERS DURING TRAVERSING -> method2
var swapCase2 = function (str) {
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
// invoke the function
console.log(pigLatinConverter("Andela")); // andelaway
console.log(pigLatinConverter("WILL")); // illway

// RETURN AN ARRAY OF FIRST AND LAST CHARACTER OF EACH WORD
var firstLastCharacter = function (words_array) {
  let res = [];
  words_array.filter((item) => {
    res.push(item[0] + item[item.length - 1]);
  });

  return res;
};

// // LONGEST COMMON SUBSEQUENCE
// var solution = function (s1, s2) {
//   if (s1.length === 0 || s2.length === 0) return "";
//   if (s1.slice(-1) === s2.slice(-1))
//     return solution(s1.slice(0, -1), s2.slice(0, -1)) + s1.slice(-1);

//   let subseq1 = solution(s1.slice(0, -1), s2);
//   let subseq2 = solution(s1, s2.slice(0, -1));
//   if (subseq1.length > subseq2.length) return subseq1;
//   else return subseq2;
// };
// // invoke the function
// console.log(solution("ABCD", "ACBAD")); // ACD
// console.log(solution("ABCD", "ABCAD")); // ABCD
// console.log(solution("RAVEN", "HAVOC")); // AV
// console.log(solution("ABBCC", "DBBCC")); // BBCC
