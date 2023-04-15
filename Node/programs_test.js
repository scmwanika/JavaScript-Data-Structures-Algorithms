// 1-SOLUTIONS TO STRINGS AND ARRAYS:
// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// function isUnique(str) {
//   const chars = {};

//   for (let i = 0; i < str.length; i++) {
//     const thisChar = str[i];

//     if (chars[thisChar]) {
//       return false;
//     }

//     chars[thisChar] = true;
//   }

//   return true;
// }

// Alternatively -- mtd 2
// function isUnique(str) {
//   const chars = new Set();

//   for (let i = 0; i < str.length; i++) {
//     const thisChar = str[i];

//     if (chars.has(thisChar)) {
//       return false;
//     }

//     chars.add(thisChar);
//   }

//   return true;
// }

// Alternatively -- mtd 3
/* If all characters are unique, the size of the set will be the same length as the string. If we have 
duplicate characters, the set will be smaller. This is because the set completely ignores duplicate insertions. */
function isUnique(str) {
  return new Set(str).size === str.length;
}
// invoke the function
console.log(isUnique("mwanika"));

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
function isPermutation(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    return true;
  }
  return false;
}
// invoke the function
if (isPermutation("amadm", "madam") === true) {
  console.log("the strings are permutations of each other");
} else {
  console.log("the strings are not permutations of each other");
}

// URLify: Write a method to replace all spaces in a string with '%20'.
function URLify(string) {
  return string.trim().replace(/\s/g, "%20");
}
// invoke the function
console.log(URLify("Mr John Smith ", 13)); // "Mr%20John%20Smith"

// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
function isPalindromePermutation(string) {
  let regrex = /[^A-Za-z0-9]/gi;
  string = string
    .toLowerCase()
    .replace(regrex, "")
    .split("")
    .reduce((curSet, nexChar) => {
      if (nexChar !== "") {
        (curSet.has(nexChar) && curSet.delete(nexChar)) || curSet.add(nexChar);
      }
      return curSet;
    }, new Set());

  return string.size <= 1;
}
// invoke the function
console.log(isPalindromePermutation("refer")); // true
console.log(isPalindromePermutation("rrfee")); // true
console.log(isPalindromePermutation("taco cat")); // true
console.log(isPalindromePermutation("atco cta")); // true

/* String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z). */
const stringCompression = (str) => {
  str = str.toLowerCase();
  let [compStr, count] = ["", 1];

  for (let i = 0; i < str.length; i++) {
    let [cur, nex] = [str.charAt(i), str.charAt(i + 1)];

    if (cur === nex) {
      count++;
    } else {
      compStr += cur + String(count);
      count = 1;
    }
  }
  return compStr.length < str.length ? compStr : str;
};
// invoke the function
console.log(stringCompression("aabCccccaaa")); // a2blc5a3
console.log(stringCompression("wwwaabbbb")); // w3a2b4
console.log(stringCompression("kkkkj")); // k4j1
console.log(stringCompression("aab")); // aab

/* String Rotation: Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of" erbottlewat"). */
function isRotation(s1, s2) {
  const s3 = s1 + s1;
  return (
    typeof s1 === "string" &&
    typeof s2 === "string" &&
    s1.length === s2.length &&
    isSubstring(s3, s2)
  );
}
function isSubstring(s1, s2) {
  return s1.indexOf(s2) !== -1;
}

// 2-SOLUTIONS TO SORTING AND SEARCHING:
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
let originalArr = [1, 6, 3, 4, 5, 1, 0, 4, 8];
console.log(mergeSort(originalArr)); // [0, 1, 1, 3, 4, 4, 5, 6, 8]

// Group Anagrams: Write a method to sort an array of strings so that all the anagrams are next to each other.
var groupAnagrams = function (arr) {
  let obj = {};

  arr.forEach((str) => {
    let letters = str.split("").sort();

    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  });

  const keys = Object.keys(obj);
  const values = keys.map(function (v) {
    return obj[v].sort();
  });
  return values.sort();
};
// invoke the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'ate', 'eat', 'tea' ], [ 'bat' ], [ 'nat', 'tan' ] ]

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

/* Sorted Search, No Size: You are given an array-like data structure Listy which lacks a size
method. It does, however, have an elementAt (i) method that returns the element at index i in
0(1) time. If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) Given a Listy which contains sorted, positive integers,
find the index at which an element x occurs. If x occurs multiple times, you may return any index. */

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

/* Missing Int: Given an input file with four billion non-negative integers, provide an algorithm to
generate an integer that is not contained in the file. Assume you have 1 GB of memory available for
this task.
FOLLOW UP:
What if you have only 1O MB of memory? Assume that all the values are distinct and we now have
no more than one billion non-negative integers. */

// Test isDuplicate: Return an array that holds the indexes of a searched duplicate element in an array:
const isDuplicate = (arr, ele) => {
  /* The array of indexes to return
   * The length of the array to be searched
   * The search starts at index 0
   */
  var [indexes, len, idx] = [[], arr.length, 0];
  while (idx < len) {
    // While more indexes to find...
    idx = arr.indexOf(ele, idx); // Find
    if (idx === -1) break; // if nothing found, break.
    indexes.push(idx); // else, store the idx in indexes
    idx++; // and continue to the next idx
  }
  if (indexes.length > 1) {
    console.log("duplicates found at indexes ", indexes);
    return true;
  } else return false;

  //return indexes; // Return an array of indexes
};
// invoke the function
console.log(isDuplicate([1, 2, 3, 4, 5], 1)); // false 1 is not duplicate
console.log(isDuplicate([1, 2, 5, 4, 5], 5)); // true 5 is duplicate
console.log(isDuplicate([1, 2, 3, 4, 5], 6)); // false 6 is not duplicate

/* Peaks and Valleys: In an array of integers, a "peak" is an element which is greater than or equal
to the adjacent integers and a "valley" is an element which is less than or equal to the adjacent
integers. For example, in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys. Given an
array of integers, sort the array into an alternating sequence of peaks and valleys.
EXAMPLE
Input: {5, 3, 1, 2, 3}
Output: {5, 1, 3, 2, 3} */

// JavaScript program to print an array in alternating sequence (alternating sorting):
function alternateSort(arr) {
  // sort the array
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr); // prints sorted array

  let finalArr = []; // added
  let [i, j] = [0, arr.length - 1];

  while (i < j) {
    finalArr.push(arr[j--], arr[i++]);
  }

  // If the total element in array is odd then print the last middle element.
  if (arr.length % 2 == 0) return finalArr;
  if (arr.length % 2 != 0) return finalArr.concat(arr[i]);
}
// invoke the function
//var arr = [1, 12, 4, 6, 7, 10];
//var arr = [7, 1, 2, 3, 4, 5, 6];
//var arr = [1, 6, 9, 4, 3, 7, 8, 2];
var arr = [5, 3, 1, 2, 3];
console.log(alternateSort(arr)); // [5, 1, 3, 2, 3]

// 3-SOLUTIONS TO OTHER CHALLENGES:
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

// Rotate 2D matrix clockwise by 90 degrees:
// transpose (flipping x and y coordinates) the matrix and then, using the reverse()
// functions in the map() function, the transposed matrix is being reversed.
const rotateMatrixClockwise = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  let rotatedMatrix = matrix.map((row) => row.reverse());

  return rotatedMatrix;
};
// invoke the function
var matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(rotateMatrixClockwise(matrix)); // [[6, 3, 0], [7, 4, 1], [8, 5, 2],]

/* Sorted Matrix Search: 
Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element.
If the element is found, prints its position and returns true, otherwise prints "element not found" and returns false */
const findElement = (matrix, elem) => {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] == elem) {
      console.log({ row, col });
      return true;
    } else if (matrix[row][col] > elem) {
      col--;
    } else {
      row++;
    }
  }
  console.log("element not found");
  return false;
};
// invoke the function
var matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
console.log(findElement(matrix, 29));

// The length of the longest substring without repeating characters: mtd -- 1
var longestSubstringLength = function (str) {
  let [currentString, finalLength] = [[], 0];

  for (let i = 0; i < str.length; i++) {
    const currentCharacterIndex = currentString.indexOf(str[i]);

    if (currentCharacterIndex !== -1) {
      currentString.splice(0, currentCharacterIndex + 1);
    }

    currentString.push(str[i]);

    finalLength = Math.max(finalLength, currentString.length);
  }

  return finalLength;
};
// invoke the function
var str = "abbbcabcdefef";
console.log(longestSubstringLength(str)); // 6

// The length of the longest substring without repeating characters: mtd -- 2
let getLength = function (str) {
  let finalLength = 0;

  for (let i = 0; i < str.length; i++) {
    let currentString = new Set();

    for (let j = i; j < str.length; j++) {
      if (currentString.has(str[j])) {
        break;
      } else {
        currentString.add(str[j]);
      }
    }

    finalLength = Math.max(finalLength, currentString.size);
  }

  return finalLength;
};
// invoke the function
var str = "abbbcabcdefef";
console.log(getLength(str));

// Restructure the array in a way that numbers come first and alphabets second in a sorted order:
var numbersFirstAlphabetsSecond = (arr) => {
  let [numbers, alphabets, finalArr] = [[], [], []];

  numbers = arr.filter((val) => typeof val === "number");

  alphabets = arr.filter((val) => typeof val === "string");

  finalArr = [...numbers.sort(), ...alphabets.sort()];

  return finalArr;
};
// invoke the function
var arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
console.log(numbersFirstAlphabetsSecond(arr));

// Test parentheses (balanced brackets): solution 1
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

// Test parentheses (balanced brackets): solution 2
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
function readline() {
  // test cases:
  let input = "{[]()}";
  // let input = "{[(])}";
  // let input = "{[}";
  return input;
}
let s = readline();

if (isValid(s)) console.log("valid");
else console.log("invalid");

// Implement a function to find the missing element in an array:
// Given an array A of N integers,
// return the smallest positive integer (greater than 0) that does not occur in A.
function solution(A) {
  for (i = 1; i <= A.length; i++) {
    if (!A.includes(i)) return i;
  }
  return i;
}
// invoke the function
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([1, 2, 4, 6, 3, 7, 8])); // 5
