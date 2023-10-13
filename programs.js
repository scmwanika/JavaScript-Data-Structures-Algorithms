// CHECK IF A STRING CONTAINS ANOTHER STRING
console.log("Programming language".includes("programming")); // false
console.log(["Programming", "language"].includes("Programming")); // true
console.log("Programming language".includes("Programming")); // true
console.log("Programming".includes("Programming language")); // false

// FIND THE COMMON CHARACTERS IN TWO STRINGS
function commonCharacters(str1, str2) {
  let comCha = [];

  str1
    .toLowerCase()
    .split("")
    .filter((el) => {
      str2
        .toLowerCase()
        .split("")
        .filter((item) => {
          if (item.includes(el)) {
            comCha.push(el);
          }
        });
    });

  return comCha.join("");
}
// invoke the function
console.log(commonCharacters("pale", "ple")); // ple
console.log(commonCharacters("pales", "pale")); // pale
console.log(commonCharacters("pale", "bale")); // ale
console.log(commonCharacters("pale", "bae")); // ae

// FIND THE NOT COMMON CHARACTERS IN TWO STRINGS
var notCommonCharacters = function (str1, str2) {
  let notComCha = [];
  // not common characters in str1
  str1.split("").filter((el) => {
    if (!str2.split("").includes(el)) {
      notComCha.push(el);
    }
  });
  // not common characters in str2
  str2.split("").filter((el) => {
    if (!str1.split("").includes(el)) {
      notComCha.push(el);
    }
  });

  return notComCha.join("");
};
// invoke the function
console.log(notCommonCharacters("pale", "ple")); // a
console.log(notCommonCharacters("pales", "pale")); // s
console.log(notCommonCharacters("pale", "bale")); // pb
console.log(notCommonCharacters("pale", "bae")); // plb

/* ONE AWAY: There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. Given two 
strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bae -> false */

// FIND THE NOT COMMON CHARACTERS IN STR1
var isOneAway = function (str1, str2) {
  let notComCha = [];
  str1.split("").filter((el) => {
    if (!str2.split("").includes(el)) {
      notComCha.push(el);
    }
  });

  if (notComCha.length === 1) {
    return [true, notComCha].flat();
  }

  return [false, notComCha].flat();
};
// invoke the function
console.log(isOneAway("pale", "ple")); // [true, 'a']
console.log(isOneAway("pales", "pale")); // [true, 's']
console.log(isOneAway("pale", "bale")); // [true, 'p']
console.log(isOneAway("pale", "bae")); // [false, 'p', 'l']
console.log(isOneAway("programming-CCC", "programming-ccc")); // [false, 'C', 'C', 'C']

// FIND THE SUM OF COMMON ELEMENTS IN TWO ARRAYS
function commonElements(arr1, arr2) {
  let comElements = [];
  let sum = 0;

  arr1.filter((el) => {
    arr2.filter((item) => {
      if (item == el) {
        comElements.push(el);
      }
    });
  });

  return comElements.reduce((e1, e2) => {
    return +e1 + +e2;
  }, sum);
}
// invoke the function
console.log(commonElements([1, "2", 3], [2, "3", 4])); // [2, 3] // 5

// COUNT THE OCCURRENCE OF SUBSTRING IN STRING
var countSubstring = function (string, substring) {
  let result = [];
  let res1 = [];
  let res2 = [];
  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length + 1; j++) {
      result.push(string.slice(i, j));
    }
  }

  // count all substrings including "an"
  result.filter((item) => {
    if (item.includes(substring)) {
      res1.push(item); // outputs 19
    }
  });

  // strictly count substring "an"
  result.filter((item) => {
    if (item === substring) {
      res2.push(item); // outputs 2
    }
  });

  return `${res2.length} of ${res1.length}`;
};
// invoke the function
console.log(countSubstring("Mwanikan", "an")); // 2 of 19

// REMOVE THE FIRST TWO ELEMENTS OF AN ARRAY USING ARRAY DESTRUCTURING
function removeFirstTwoElements(arr) {
  const [, , ...list] = arr;
  return list;
}
// invoke the function
var arr = [8, 9, 10, 11, 12];
console.log(removeFirstTwoElements(arr)); // [10, 11, 12]

// METHODS TO REMOVE DUPLICATES FROM AN ARRAY
var arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

// 1 - Use of Set()
console.log([...new Set(arr)]); // ['scale', 'happy', 'strength', 'peace']

// 2 - Use of forEach() or map()
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

// Application of Set()
// Return count of duplicates in array:
function countDuplicates(arr) {
  // remove duplicates
  let set = [...new Set(arr)];

  // count = length of superset - length of subset ()
  return arr.length - set.length;
}
// invoke the function
var arr = ["cat", "book", "pencil", "book", "cat", "cat"];
console.log(countDuplicates(arr)); // 3

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
console.log(solution(numbers)); // prints elments array [1, 2]

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

// Return an array of Even Square in the range...
var even_squares = function (start, end) {
  let new_array = [];

  for (start; start <= end; start++) {
    if (start % 2 === 0) new_array.push(start * start);
  }
  return new_array;
};
// invoke the function
console.log(even_squares(0, 10)); // [0, 4, 16, 36, 64, 100]

// Return an array of first and last character of each word
var solution = function (words_array) {
  let res = [];
  words_array.filter((item) => {
    res.push(item[0] + item[item.length - 1]);
  });

  return res;
};
// invoke the function
var words = ["for", "your", "information"];
console.log(solution(words)); // ['fr', 'yr', 'in']

// CHECK IF A STRING IS A SUBSTRING OF ANOTHER STRING
var issubStringArray = function (str, substr) {
  var result = [];
  var res = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }

  result.filter((item) => {
    if (item.includes(substr.toLowerCase())) {
      res.push(item);
    }
  });

  if (res.length > 0) return "Valid Substring";
  return "Invalid Substring";
};
// invoke the function
console.log(issubStringArray("stephen", "Hen")); // Valid Substring

// CHECK IF AN ARRAY IS A SUBARRAY OF ANOTHER ARRAY
var issubStringArray = function (str, substr) {
  var result = [];
  var res = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }

  result.filter((item) => {
    if (item.join("") === substr.join("")) {
      res.push(item);
    }
  });

  if (res.length > 0) return "Valid Subarray";
  return "Invalid Subarray";
};
// invoke the function
console.log(issubStringArray([1, 2, 3, 4, 5, 6, 7], [5, 6, 7])); // Valid Array

// CHECK IF A STRING IS A SUBSEQUENCE OF ANOTHER STRING
var subSequence = function (arr, subSeq) {
  let result = [];
  let res = [];
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  result = arr.split("").reduce(subs, [result]);

  result.filter((el) => {
    if (el.join("").includes(subSeq)) {
      res.push(el);
    }
  });

  if (res.length > 0) return "Valid Subsequence";
  return "Invalid Subsequence";
};
// invoke the function
console.log(subSequence("123", "13")); // true

// CHECK IF AN ARRAY IS A SUBSEQUENCE OF ANOTHER ARRAY
var subSequence = function (arr, subSeq) {
  let result = [];
  let res = [];
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  result = arr.reduce(subs, [result]);

  result.filter((el) => {
    if (el.join("").includes(subSeq.join(""))) {
      res.push(el);
    }
  });

  if (res.length > 0) return true;
  return false;
};
// invoke the function
console.log(subSequence([1, 2, 3], [1, 3])); // true

// CHECK IF AN ARRAY IS A SUBSET OF ANOTHER ARRAY
var isSubset = function (arr, subset) {
  let asc = [];
  let des = [];
  let merge_arr = [];

  // ascending sort
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  asc = arr.reduce(subs, [asc]);
  // descending sort
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [value, ...set]));
  des = arr.reduce(subs, [des]);
  // merge arrays then flatten
  let merge = asc.concat(des);
  merge.filter((el) => {
    merge_arr.push(el.join(""));
  });

  //
  let res;

  merge_arr.filter((el) => {
    if (el.includes(subset.join(""))) {
      res = "valid subset";
    }
  });

  if (res === "valid subset") return true;
  return false;
};
// invoke the function
var arr1 = ["a", "b", "c"];
var arr2 = ["b", "c"];
var arr3 = ["c", "d"];
// var arr1 = [1, 2, 3];
// var arr2 = [2, 3];
// var arr3 = [3, 4];
console.log(isSubset(arr1, arr2)); // true
console.log(isSubset(arr1, arr3)); // false

/* Sorted Matrix Search:
Given an M x N matrix in which each row and each column is sorted in ascending order, 
write a method to find an element.
If the element is found, prints its position and returns true, otherwise prints 
"element not found" and returns false */
const findElement = (matrix, el) => {
  for (
    let row = 0, col = matrix.length - 1;
    row < matrix.length && col >= 0;

  ) {
    if (matrix[row][col] === el) {
      return [[row, col], true];
    }

    if (matrix[row][col] > el) {
      col--;
    } else {
      row++;
    }
  }

  return ["element not found", false];

  //return -1;
};
// invoke the function
var matrix = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50],
];
console.log(findElement(matrix, 29)); // [[ 2, 1 ], true]

// SUBSTRINGS, SUBARRAYS, SUBSEQUENCES, SUBSETS

/* SUBSTRINGS & SUBARRAYS
a substring is a string that occurs in another string.
a subarray is a slice from a contiguous array.
both substrings and subarrays occupy consective positions and inherently maintain
the order of characters and elements respectively. */
var subStringsArrays = function (str) {
  var result = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};
// invoke the function
var string = "apple";
var array1 = [1, 2, 3];
var array2 = ["a", "p", "p", "l", "e"];
console.log(subStringsArrays(string));
console.log(subStringsArrays(array1));
console.log(subStringsArrays(array2));

/* SUBSEQUENCES
a subsequence of an array is a new array that is formed from the original array
by deleting some (or none) of the elements without disturbing the relative
positions and order of the remaining elements. 
a subsequence may be continuous or non-continuous: for example;
[1,3,5] is a non-continuous subsequence of [1,2,3,4,5] while
[1,2,3] is a continuous subsequence of [1,2,3,4,5]

[1,3,2] is not a subsequence of [1,2,3,4,5] because the array is non-continuous
and does not maintain relative position and order of elements. however,
[1,3,2] is a subset of [1,2,3,4,5]. a subset may not maintain relative position
and order of elements. */
var subSequence = function (arr) {
  var new_array = [];
  var even_subsequence = [];
  var old_subsequence = [];

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length + 1; j++) {
      new_array.push(arr.slice(i, j));
    }
  }

  // filter subsequences from new_array
  new_array.filter((item) => {
    if (item.length % 2 === 0) {
      even_subsequence.push(item);
    } else {
      old_subsequence.push(item);
    }
  });

  // sum even subsequences
  function sum(e1, e2) {
    return +e1 + +e2;
  }
  if (even_subsequence.length > 0) {
    // then compute total sum
    return even_subsequence.flat().reduce(sum);
  }
  // else
  return -1;

  // return { even_subsequence, old_subsequence };

  // return {
  //   even_sum: even_subsequence.flat().reduce(sum),
  //   old_sum: old_subsequence.flat().reduce(sum),
  // };

  // return { Total: new_array.flat().reduce(sum) };
};
// invoke the function
var array = [1, 4, 2, 5];
console.log(subSequence(array));
/*
{
  even_subsequence: [[1, 4], [1, 4, 2, 5], [4, 2], [2, 5]],
  old_subsequence: [[1], [1, 4, 2], [4], [4, 2, 5], [2], [5]]
}

{ even_sum: 30, old_sum: 30 }

{ Total: 60 }
*/

/* SUBSETS
a subset is any possible combination of the original set. for example;
[1,3,2] is a subset of [1,2,3,4,5]. a subset may not maintain relative position
and order of elements. */
var subSets = function (arr) {
  let result = [];
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  return arr.reduce(subs, [result]);
};
// invoke the function
console.log(subSets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// ROTATE STRING
function rotateString(string, k, direction) {
  // rotate clockwise(right)
  if (direction === "right") {
    k = string.length - k;
    let str1 = string.slice(k, string.length);
    let str2 = string.slice(0, k);
    let merge_string = str1 + str2;
    return merge_string;
  }

  // rotate anti-clockwise(left)
  if (direction === "left") {
    let str1 = string.slice(k, string.length);
    let str2 = string.slice(0, k);
    let merge_string = str1 + str2;
    return merge_string;
  }
}
// invoke the function
console.log(rotateString("JavaScript", 2, "right")); // ptjavaScri

// ROTATE ARRAY
// Return an array that holds the indices of a searched element in the rotated array.
function rotateArray(array, k, direction, element) {
  // rotate clockwise(right)
  if (direction === "right") {
    var merge_array = null;
    k = array.length - k;
    let arr1 = array.slice(k, array.length);
    let arr2 = array.slice(0, k);
    merge_array = arr1.concat(arr2);

    // get indices of a searched element in the rotated array
    let indices = [];
    for (let [idx, ele] of merge_array.entries()) {
      if (ele === element) {
        indices.push(idx);
      }
    }

    return { merge_array, indices };
  }

  // rotate anti-clockwise(left)
  if (direction === "left") {
    var merge_array = null;
    let arr1 = array.slice(k, array.length);
    let arr2 = array.slice(0, k);
    merge_array = arr1.concat(arr2);

    // get indices of a searched element in the rotated array
    let indices = [];
    for (let [idx, ele] of merge_array.entries()) {
      if (ele === element) {
        indices.push(idx);
      }
    }

    return { merge_array, indices };
  }
}
// invoke the function
console.log(rotateArray([1, 2, 3, 4, 5], 2, "right", 2));
// { merge_array: [ 4, 5, 1, 2, 3 ], indices: [3] }

// ROTATE MATRIX (2D Array)
// Rotate Matrix Right
var rotateMatrixRight = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      let last = n - 1;
      let offset = col;

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
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(rotateMatrixRight(matrix)); // [[6, 3, 0], [7, 4, 1], [8, 5, 2]]

// Rotate Matrix Left
var rotateMatrixLeft = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      let last = n - 1;
      let offset = col;

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
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(rotateMatrixLeft(matrix)); // [[2, 5, 8], [1, 4, 7], [0, 3, 6]]

// WORD WEIGHT
var wordWeight = function (s, n) {
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
// invoke the function
var s = "turing";
var n = 2;
console.log(wordWeight(s, n)); // 8

// APPLY SPELLING RULE TO FILTER() STRINGS -> cie
// method 1
var spellingRule = function (words_array) {
  function misspelled(word) {
    if (word.indexOf("cie") > -1) {
      return true;
    }
    return false;
  }

  return words_array.filter(misspelled);
};
// invoke the function
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
console.log(spellingRule(words)); // ['recieve', 'percieve', 'concieve']

// method 2
// APPLY SPELLING RULE TO FILTER() STRINGS -> cie
var spellingRule = function (words_array, str) {
  filtered_array = [];

  words_array.filter((item) => {
    if (item.includes(str)) {
      filtered_array.push(item);
    }
  });

  return filtered_array;
};
// invoke the function
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
console.log(spellingRule(words, "cie")); // ['recieve', 'percieve', 'concieve']

// UPPERCASE AND LOWERCASE LETTERS TRANSFORMED, AND SWAPED DURING TRAVERSING
var swapCase = function (str) {
  let low_case = str.toLowerCase();
  let upp_case = str.toUpperCase();
  let old_array = str.split("");
  let new_array = [];

  for (var i = 0; i < old_array.length; i++) {
    if (old_array[i].includes(low_case.charAt(i))) {
      new_array.push(old_array[i].toUpperCase());
    }

    if (old_array[i].includes(upp_case.charAt(i))) {
      new_array.push(old_array[i].toLowerCase());
    }
  }

  return new_array.join("");
};
// invoke the function
console.log(swapCase("heLLo")); // HEllO

// TIME (convert 12hours to 24hours)
var convertTime = function (timeStr) {
  let [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = +hours + 12;
    //same as
    //hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
  //return parseInt(`${hours}${minutes}`);
};
// invoke the function
var time1 = "5:00 PM";
var time2 = "11:42 PM";
var time3 = "12:00 PM";
var time4 = "12:00 AM";
console.log(convertTime(time1)); // 17:00
console.log(convertTime(time2)); // 23:42
console.log(convertTime(time3)); // 12:00
console.log(convertTime(time4)); // 00:00

/* Explanation
  console.log(time1.split(" ")) // ['5:00', 'PM']
  let str = '5:00'
  console.log(str.split(":")) // ['5', '00'] */

// TIME (convert 24hours to 12hours)
var convertTime = function (timeStr) {
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
// invoke the function
var time1 = "17:00";
var time2 = "23:42";
var time3 = "12:00";
var time4 = "11:00";
console.log(convertTime(time1)); // 5:00 PM
console.log(convertTime(time2)); // 11:42 PM
console.log(convertTime(time3)); // 12:00 PM
console.log(convertTime(time4)); // 11:00 AM

// DATES (number of days between two dates)
const daysBetweenDates = function (date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let difference = (date1 - date2) / (1000 * 3600 * 24); // milliseconds

  return Math.abs(difference);
};
// invoke the function
var date1 = "12/25/2022";
var date2 = "12/31/2022";
console.log(daysBetweenDates(date1, date2)); // 6

// SUBTRACT DAYS
var subtractDays = function (date, days) {
  date = new Date(date);

  date.setDate(date.getDate() - days); // add + 1 if date format is: 12/31/2022 or 12-31-2022

  return date;
};
// invoke the function
const date = new Date("2022-12-31");
console.log(subtractDays(date, 6)); // 2022-12-25T00:00:00.000Z

// SORTING ALPHABET AND NUMBERS THE RIGHT WAY
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
var array1 = ["a", "B", "A", "c", "b"];
var array2 = [2, 3, 10, 4, 100];
var array3 = ["ant", "33", "Bug", "4", "cat", "1111", "Dog", "222"];
console.log(sortAlpsNums(array1)); // ['a', 'A', 'B', 'b', 'c']
console.log(sortAlpsNums(array2)); // [2, 3, 4, 10, 100]
console.log(sortAlpsNums(array3));
// ['1111','222','33','4','ant','Bug','cat','Dog']

// SORT PRODUCTS
var sortProducts = function (a) {
  let res = [];

  a.forEach((el) => {
    res.push(el * el);

    res.sort(function (e1, e2) {
      if (e1 > e2) return 1;
      if (e1 < e2) return -1;
    });
  });

  return res;
};
// invoke the function
console.log(sortProducts([-5, -1, 0, 3, 10])); // [0, 1, 9, 25, 100]

// REGULAR EXPRESSION (REGEXP)
// Return a sorted string without symbols and numbers.
var solution = function (str) {
  let regexp = /[^A-Za-z]/g; // regular expression

  // transform string then sort
  str = str.replace(regexp, "").split("");
  str.sort(function (e1, e2) {
    // alphabet case-insensitive sort
    e1 = e1.toLowerCase();
    e2 = e2.toLowerCase();
    if (e1 > e2) return 1;
    if (e1 < e2) return -1;
    return 0;
  });
  return str.join("");
};
// invoke the function
var str = " M@wa'n'ik$a 'Step&&hen' #3-|Crisp|in ";
console.log(solution(str)); // aaCeehiiikMnnnpprSstw

// Sort the array in a way that numbers come first and strings second
const firstNumsSecondAlps = (arr) => {
  let [nums, alps, sortedArr] = [[], [], []];

  nums = arr.filter((val) => typeof val === "number");

  alps = arr.filter((val) => typeof val === "string");

  sortedArr = [
    ...nums.sort(function (s, t) {
      if (s > t) return 1;
      if (s < t) return -1;
    }),
    ...alps.sort(function (s, t) {
      s = s.toLowerCase();
      t = t.toLowerCase();
      if (s > t) return 1;
      if (s < t) return -1;
    }),
  ];

  return sortedArr;
};
// invoke the function
var arr = ["ant", 33, "Bug", 4, "cat", 1111, "Dog", 222];
console.log(firstNumsSecondAlps(arr)); // [4, 33, 222, 1111, 'ant', 'Bug', 'cat', 'Dog']

// OBJECT STORE (Dictionary)
// Sorting Objects:
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// SORT THE OBJECT BY SALARY
const sortEmployeesBySalary = (employees) => {
  return employees.sort((obj1, obj2) => obj1.salary - obj2.salary);
  // same as
  // return employees.sort((obj1, obj2) => (obj1.salary > obj2.salary ? 1 : -1));
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
var uniqueObjectArray = function (array) {
  const result = [];
  const map = new Map();
  array.filter((item) => {
    if (!map.has(item.name)) {
      map.set(item.name); // set any value to Map
      result.push({
        name: item.name,
        salary: item.salary,
        hireDate: item.hireDate,
      });
    }
  });
  //
  var res = [];
  result.forEach((item) => {
    res.push(item.name, item.salary);
  });

  return result;
  //return res;
};
// invoke the function
console.log(uniqueObjectArray(employees));

// EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS
// extract (names, salaries) from employees array
const extractValues = (arr, prop1, prop2) => {
  let output = [];

  arr.forEach((item) => {
    output.push(item[prop1], item[prop2]);
  });

  return output;
};
// invoke the function
console.log(extractValues(employees, "name", "salary"));
/*
[
  'John', 90000, 'David',
  75000,  'Ana', 80000,
  'John', 90000, 'David',
  75000,  'Ana', 80000
] */

// ------------------------------------------------------------------------------------ //

/* Is Unique: Implement an algorithm to determine if a string has all unique characters. 
   What if you cannot use additional data structures? 

   Method 1:
If all characters are unique, the size of the set will be the same length as the string. 
If we have duplicate characters, the set will be smaller. This is because the set 
completely ignores duplicate insertions. */
function isUnique(str) {
  return new Set(str).size === str.length;
}
// invoke the function
console.log(isUnique("mwanika")); // false

/* Check Permutation: Given two strings, write a method to decide if one is a permutation 
of the other. */
function isPermutation(str1, str2) {
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    return "the strings are permutations of each other";
  }
  return "the strings are not permutations of each other";
}
// invoke the function
console.log(isPermutation("amadm", "madam"));
// the strings are permutations of each other

/* URLify: Write a method to replace all spaces in a string with '%20'. You may assume 
that the string has sufficient space at the end to hold the additional characters, and 
that you are given the "true" length of the string.
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith" */
function URLify(string) {
  return string.trim().replace(/\s/g, "%20");
}
// invoke the function
console.log(URLify("Mr John Smith ", 13)); // "Mr%20John%20Smith"

// Separate a string with a special character sequence into an array of substrings:
var str = " John <----> Smith ";
var regexp = /\s*<---->\s*/g;
var separate_string = str.trim().split(regexp);
console.log(separate_string); // ['John', 'Smith']
console.log(separate_string.join(" ")); // John Smith

/* Palindrome Permutation: Given a string, write a function to check if it is a 
permutation of a palindrome. */
function isPalindromePermutation(string) {
  let regexp = /[^A-Za-z0-9]/g;
  arr = string
    .replace(regexp, "")
    .toLowerCase()
    .split("")
    .reduce((e1, e2) => {
      if (e2 !== "") {
        (e1.has(e2) && e1.delete(e2)) || e1.add(e2);
      }
      return e1;
    }, new Set());

  return arr.size <= 1;
}
// invoke the function
console.log(isPalindromePermutation("refer")); // true
console.log(isPalindromePermutation("rrfee")); // true
console.log(isPalindromePermutation("taco cat")); // true
console.log(isPalindromePermutation("atco cta")); // true

// RETURN ANAGRAMS or PERMUTATIONS OF STRING WITHOUT REPEATING CHARACTERS
var solution = function (string) {
  let anagrams_permutations = [];
  if (string.length === 0) return anagrams_permutations;
  if (string.length === 1) {
    anagrams_permutations.push(string);
  }

  for (let i = 0; i < string.length; i++) {
    let cha1 = string.charAt(i);
    let cha2 = string.slice(0, i) + string.slice(i + 1, string.length);

    solution(cha2).filter((item) => {
      anagrams_permutations.push(cha1 + item);
    });
  }

  return [...new Set(anagrams_permutations)];
};
// invoke the function
console.log(solution("aabc"));

// CHECK IF TWO STRINGS ARE ANAGRAM PALINDROME, PERMUTATION OF EACH OTHER
var isPermutation = function (str1, str2) {
  let arr1 = [];
  let arr2 = [];

  // string1
  str1.split("").filter((el) => {
    arr1.push(el);
  });
  // string2
  str2.split("").filter((el) => {
    arr2.push(el);
  });

  return arr1.sort().join() === arr2.sort().join();
};
// invoke the function
console.log(isPermutation("pots", "stop"));

/* STRING COMPRESSION: Implement a method to perform basic string compression using the 
counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. 
If the "compressed" string would not become smaller than the original string, your method 
should return the original string. 
You can assume the string has only uppercase and lowercase letters (a - z). */
var compressString = (str) => {
  let regexp = /[^A-Za-z]/g;
  str = str.replace(regexp, "").toLowerCase();
  let [compStr, count] = ["", 1];

  for (let i = 0; i < str.length; i++) {
    let [char1, char2] = [str.charAt(i), str.charAt(i + 1)];

    if (char1 === char2) {
      count++;
    } else {
      compStr += char1 + count;
      count = 1;
    }
  }

  if (compStr.length < str.length) {
    return compStr;
  }
  return str;
};
// invoke the function
console.log(compressString("aabCccccaaa")); // a2blc5a3
console.log(compressString("wwwaabbbb")); // w3a2b4
console.log(compressString("kkkkj")); // k4j1
console.log(compressString("aab")); // aab

/* Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the 
image is 4 bytes, write a method to rotate the image by 90 degrees. 
Can you do this in place? */

/* Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its 
entire row and column are set to 0. */

/* STRING ROTATION: Assume you have a method isSubstring which checks if one word is 
a substring of another. Given two strings, supstr and substr, 
write code to check if substr is a rotation of supstr using only one call to isSubstring 
(e.g., "waterbottle" is a rotation of" erbottlewat"). */
function isSubstring(supstr, substr) {
  sup = supstr.toLowerCase().split("").sort().join("");
  sub = substr.toLowerCase().split("").sort().join("");

  if (sup === sub) {
    return true;
  } else return false;
}
// invoke the function
console.log(isSubstring("waterbottle", "erbottlewat"));
// true: substring isRotation of superstring

/* Sorted Search, No Size: You are given an array-like data structure Listy which lacks a 
size method. It does, however, have an elementAt (i) method that returns the element at 
index i in 0(1) time. If i is beyond the bounds of the data structure, it returns -1. 
(For this reason, the data structure only supports positive integers.) Given a Listy which 
contains sorted, positive integers, find the index at which an element x occurs. 
If x occurs multiple times, you may return any index. */

/* Missing Int: Given an input file with four billion non-negative integers, provide an 
algorithm to generate an integer that is not contained in the file. Assume you have 1 GB 
of memory available for this task.
FOLLOW UP:
What if you have only 1O MB of memory? Assume that all the values are distinct and we now 
have no more than one billion non-negative integers. */

// GROUP ANAGRAMS
// Method to sort an array of strings so that all the anagrams are next to each other
var groupAnagrams = function (arr) {
  let obj = {};
  let anagrams = [];

  arr.forEach((el) => {
    let chars = el.split("").sort();
    //
    if (obj[chars]) {
      return obj[chars].push(el);
    } else return (obj[chars] = [el]);
  });

  obj = Object.values(obj);

  for (var item of obj) {
    anagrams.push(item.sort());
  }

  return anagrams.sort();
};
// invoke the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]

/* Peaks and Valleys: In an array of integers, a "peak" is an element which is greater 
than or equal to the adjacent integers and a "valley" is an element which is less than 
or equal to the adjacent integers. 
For example, in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys. 
Given an array of integers, sort the array into an alternating sequence of peaks and 
valleys. EXAMPLE
Input: {5, 3, 1, 2, 3}
Output: {5, 1, 3, 2, 3} 

ALTERNATING SEQUENCE */
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
console.log(peaksValleys([1, 12, 4, 6, 7, 10])); // [12, 1, 10, 4, 7, 6]
console.log(peaksValleys([])); // -1
console.log(peaksValleys([7, 1, 2, 3, 4, 5, 6])); // [7, 1, 6, 2, 5, 3, 4]
console.log(peaksValleys([1, 6, 9, 4, 3, 7, 8, 2])); // [9, 1, 8, 2, 7, 3, 6, 4]

// COUNT VOWELS AND CONSONANTS
var countVowelsConsonants = function (string) {
  let vowels = [];
  let consonants = [];
  let regexp = /[^A-Za-z]/g;

  // transform string and transverse
  string = string.replace(regexp, "").toLowerCase();

  for (var char of string) {
    if ("aeiou".includes(char)) {
      vowels.push(char);
    } else {
      consonants.push(char);
    }
  }

  let = vowelCount = vowels.length;
  let = consonantCount = consonants.length;
  if (vowels.length > 0 || consonants.length > 0) {
    return { vowelCount, consonantCount };
  }
  return -1;
};
// invoke the function
console.log(
  countVowelsConsonants("The quick brown fox jumps over the lazy dog")
); // { vowelCount: 11, consonantCount: 24 }

// VOWELS AND CONSONANTS
var countVowels = function (string) {
  let vowelWords = [];
  let consonantWords = [];

  string = string.replaceAll(" ", ",").split(",");
  string.filter((el) => {
    if (
      el.includes("a") ||
      el.includes("e") ||
      el.includes("i") ||
      el.includes("o") ||
      el.includes("u")
    ) {
      vowelWords.push(el);
    } else consonantWords.push(el);
  });

  return consonantWords;
};
// invoke the function
console.log(countVowels("The quick pqzx brown fox jumps over the lazy dog")); // pqzx

// THREE SUM:
var threeSum = function (nums, target) {
  for (
    let i = 0, j = i + 1, k = j + 1;
    i < nums.length, j < nums.length, k < nums.length;
    i++, j++, k++
  ) {
    if (nums[i] + nums[j] + nums[k] === target) {
      return [i, j, k];
    }
  }

  return -1;
};
// invoke the function
console.log(threeSum([2, 7, 11, 15], 9)); // -1
console.log(threeSum([2, 7, 11, 15], 18)); // -1
console.log(threeSum([2, 7, 11, 15], 33)); // [1, 2, 3]

// RETURN THE INDEX OF AN ELEMENT: -> (ELEMENT * 3 = TARGET)
var threeSum = function (nums, target) {
  for (
    let i = 0, j = 0, k = 0;
    i < nums.length, j < nums.length, k < nums.length;
    i++, j++, k++
  ) {
    if (nums[i] + nums[j] + nums[k] === target) {
      return i;
    }
  }

  return -1;
};
// invoke the function
console.log(threeSum([2, 7, 11, 15], 9)); // -1
console.log(threeSum([2, 7, 11, 15], 18)); // -1
console.log(threeSum([2, 7, 11, 15], 33)); // 2

// COUNT SUBARRAYS OR SUBSEQUENCES EQUAL TO SUM K
var subSequences = function (arr, k) {
  var new_array = [];
  var result = [];

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
console.log(subSequences([2, 2, -4, 1, 1, 2], -3)); // 1
console.log(subSequences([2, 2, 2], 4)); // 2
console.log(subSequences([3, 2, 1], 3)); // 2

// SUM OF LARGEST SUBARRAY OR SUBSEQUENCE
var largestSubarraySum = function (arr) {
  var new_array = [];
  var result = [];

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
    let k = item.reduce(sum);
    result.push(k);
  });

  // then filter and return the max sum
  if (result.length > 0) return Math.max(...result);
  return -1;
};
// invoke the function
console.log(largestSubarraySum([1, 100, 4, 15, 9, 30])); // 159
console.log(largestSubarraySum([1, 100, 4, 15, 9, 30, -1])); // 159
console.log(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30])); // 159
console.log(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1])); // 159
console.log(largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(largestSubarraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4])); // -1
console.log(largestSubarraySum([2, -8, 3, -2, 4, -10])); // 5

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming)
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

// LONGEST COMMON SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming)
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

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS (Dynamic Programming)
var subSequences = function (str1, str2) {
  let subseq1 = [];
  let subseq2 = [];
  let ressubseq1 = [];
  let ressubseq2 = [];

  // subsequence1
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  subseq1 = str1.split("").reduce(subs, [subseq1]);
  // .....
  subseq1.filter((el) => {
    ressubseq1.push(el.join(""));
  });

  // subsequence2
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  subseq2 = str2.split("").reduce(subs, [subseq2]);
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
console.log(subSequences("abc", "adcc")); // ac
console.log(subSequences("raven", "havoc")); // av
console.log(subSequences("abbcc", "dbbcc")); // bc
console.log(subSequences("step", "hen")); // e
console.log(subSequences("Stephen", "tep")); // tep
console.log(subSequences("ABCD", "ACBAD")); // ACD
console.log(subSequences("ABCD", "ABCAD")); // ABCD

// SWITCH REVERSER
var switchReverser = function (a) {
  let alps = [];
  let nums = [];

  for (let el of a) {
    if (typeof el === "string") {
      alps.push(el.toUpperCase());
    } else nums.push(el);
  }

  if (alps.length === a.length) {
    return alps;
  }
  if (nums.length === a.length) {
    return nums.reverse();
  }
  return a;
};
// invoke the function
console.log(switchReverser(["m", "s", "c"])); // ['M', 'S', 'C']
console.log(switchReverser([4, 2, 6, 5, 9])); // [9, 5, 6, 2, 4]
console.log(switchReverser(["c", 4, 2, "m", 6, "s", 5, 9]));
// ['c', 4, 2, 'm', 6, 's', 5, 9]

// PIG LATIN CONVERTER
var pigLatinConverter = function (str) {
  str = str.toLowerCase();
  if ("aeiou".includes(str.charAt(0))) {
    return str + "way";
  } else {
    //if (!"aeiou".includes(str.toLowerCase().charAt(0))) {
    //return str.charAt(0) + "ay";
    //
    let start = str.match(/[aeiou]/gi);
    let end = str.indexOf(start[0]);
    return str.substring(end) + str.substring(0, end) + "ay";
  }
};
// invoke the function
console.log(pigLatinConverter("Andela")); // andelaway
console.log(pigLatinConverter("WILL")); // illway
console.log(pigLatinConverter("Electrician")); // electricianway
console.log(pigLatinConverter("dog")); // ogday
console.log(pigLatinConverter("category")); // ategorycay
console.log(pigLatinConverter("chatter")); // atterchay
console.log(pigLatinConverter("trash")); // ashtray

// RETURN AN OBJECT REPRESENTING THE CHARACTER / WORD COUNT OF A STRING
// OR
// The most frequent character/word of a string:
// The most frequent element of an array:
// OR
// The least frequent character/word of a string:
// The least frequent element of an array:
// OR
// Check for duplicates in the string:
// Check for duplicates in the array:
function isDuplicates(str) {
  let regexp = /[^A-Za-z0-9]/g;
  let obj = {};
  let dup = [];

  str
    .toLowerCase()
    // .replace(regexp, "")
    // .split("")

    // BE OBSERVANT .....
    .replaceAll(" ", ",")
    .split(",")
    .forEach((el) => {
      if (obj[el]) {
        obj[el]++;
        return;
      }
      obj[el] = 1;
    });
  // return obj; // object representing the word count
  // return Math.max(...Object.values(obj)); // most frequent word count -> 2

  return Object.keys(obj).filter((x) => {
    return obj[x] === Math.max(...Object.values(obj));
    // the most frequent word or item: ['the'] OR ['cat']

    //return obj[x] === Math.min(...Object.values(obj));
    // the least frequent character or element
  });

  // for (let prop in obj) {
  //   if (obj[prop] > 1) {
  //     // if isDuplicate
  //     dup.push(prop);
  //   }
  // }
  // //
  // if (dup.length > 0) {
  //   return [true, dup];
  // }
  // return [false, "no duplicates"];
}

// invoke the function
console.log(isDuplicates("The quick brown fox jumps over the lazy dog")); // ['the'] -> 2

//console.log(isDuplicates(["cat", "book", "pencil", "book", "cat", "cat"])); // ['cat'] -> 3

// REVERSE STRING -> method1
var reverseString = function (str) {
  var reversed_string = [];

  for (el of str.split("")) {
    reversed_string.unshift(el);
  }
  return reversed_string.join("");
};
// invoke the function
console.log(reverseString("Mwanika")); // akinawM
console.log(reverseString("JavaScript is awesome")); // emosewa si tpircSavaJ

// REVERSE STRING -> method2
var reverseString = function (str) {
  var reversed_string = "";
  for (var i = str.length; i > -1; i--) {
    reversed_string = reversed_string + str.charAt(i);
  }
  return reversed_string;
};
// invoke the function
console.log(reverseString("Mwanika")); // akinawM
console.log(reverseString("JavaScript is awesome")); // emosewa si tpircSavaJ

// REVERSE ARRAY
var reverseArray = function (arr) {
  var reversed_array = [];
  while (arr.length) {
    reversed_array.push(arr.pop());
  }

  return reversed_array;
};
// invoke the function
console.log(reverseArray([4, 2, 6, 5, 9])); // [9, 5, 6, 2, 4]

// SORT IN DESCENDING ORDER
var solution = function (a) {
  a.sort(function (e1, e2) {
    // numerical sort
    return e2 - e1;
  });
  return a;
};
// invoke the function
console.log(solution([4, 2, 6, 5, 9])); // [9, 6, 5, 4, 2]

// CHECK MULTIPLE
var fizzBuzz = function (num) {
  // check if the number is a multiple of 3 and 5
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  // check if the number is a multiple of 3
  if (num % 3 === 0) {
    return "fizz";
  }
  // check if the number is a multiple of 5
  if (num % 5 === 0) {
    return "buzz";
  }
  return num;
};
// invoke the function
console.log(fizzBuzz(5)); // buzz

// TEST IF THE ELEMENTS OF AN ARRAY FORM AN ADDITIVE SEQUENCE/FIBONACCI SERIES
var isFibonacci = function (arr) {
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
console.log(isFibonacci([8, 3, 5, 13])); // true
console.log(isFibonacci([4, 4, 8, 12, 20, 32])); // true
console.log(isFibonacci([-4, -4, -8, -12, -20, -32])); // false
console.log(isFibonacci([-4, 0, -4, -4, -8, -12])); // false

// CHECK IF A NUMBER IS PRIME
var isPrime = function (num) {
  if (num < 2) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};
// invoke the function
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(7)); // true

// FLATTEN AN ARRAY
var flattenArray = function (arr) {
  let new_arr = [];
  for (let el of arr) {
    new_arr.push(el.join());
  }
  return new_arr.join().replaceAll(" ", ",").split(",");
};
// invoke the function
var arr = [
  ["Mwanika", "Stephen", "Crispin"],
  ["Akoth", "Justine"],
  ["Olweny", "John"],
];
console.log(flattenArray(arr));

// Return an array of all characters of a string:
var listCharacters = function (string) {
  let char_array = string.split("");

  return char_array;
};
// invoke the function
console.log(listCharacters("John Doe"));

// Return an array of strings that contain prefix and suffix:
var prefix_suffix = function (prefixes, suffix) {
  prefixes = prefixes.split("");
  let strings = [];

  for (var item of prefixes) {
    strings.push(item + suffix);
  }

  return strings;
};
// invoke the function
console.log(prefix_suffix("JKLMNOPQ", "ack"));

// LINEAR SEARCH
// Return indices of searched element
var linearSearch = (array, element) => {
  let indices = [];
  for (let [idx, ele] of array.entries()) {
    if (ele.includes(element)) {
      indices.push(idx);
    }
  }
  return indices;
};
// invoke the function
console.log(
  linearSearch(
    ["ball", "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // [0, 5]
console.log(linearSearch(["a", "b", "d", "c", "d"], "d")); // [2, 4]

// TEST ISDUPLICATE
var isDuplicate = (array, element) => {
  let indices = [];
  for (let [idx, ele] of array.entries()) {
    if (ele.includes(element)) {
      indices.push(idx);
    }
  }

  if (indices.length > 1) {
    return [true, indices];
  }

  return -1;
};
// invoke the function
console.log(isDuplicate([1, 2, 3, 4, 5], 1)); // -1
console.log(isDuplicate([1, 2, 5, 4, 5], 5)); // [true, [2, 4]]
console.log(isDuplicate([1, 2, 3, 4, 5], 6)); // -1

// Print the occurrence of a word in the string:
var wordCount = function (string, word) {
  let indices = [];
  word = word.toLowerCase();
  let arr = string.toLowerCase().replaceAll(" ", ",").split(",");

  for (let [idx, el] of arr.entries()) {
    if (el.includes(word)) {
      indices.push(idx);
    }
  }

  return [word, indices.length];
};
// invoke the function
console.log(wordCount("The quick brown fox jumps over the lazy dog", "the")); // ['the', 2]

// Print the occurrence of a letter in the string:
var letterCount = function (string, letter) {
  let indices = [];
  letter = letter.toLowerCase();
  let arr = string.toLowerCase().split("");

  for (let [idx, el] of arr.entries()) {
    if (el.includes(letter)) {
      indices.push(idx);
    }
  }

  return [letter, indices.length];
};
// invoke the function
console.log(letterCount("Olweny John", "o")); // ['o', 2]

// Return the words with substring:
// Count the Number of words with Substring:
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
// invoke the function
console.log(
  wordHasSubstring("The quick brown fox jumps over the lazy dog", "o")
);
// ['brown', 'fox', 'over', 'dog'] -> 4
var str =
  "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
  gave Mike 1 of her orange so she is now left with only 1 Orange.";
console.log(wordHasSubstring(str, "ORaNGe"));
// ['oranges', 'oranges', 'orange', 'orange.'] -> 4

// OR
// Count the Number of words with Substring:
var countSubstrings = function (str, word) {
  let regexp = new RegExp(word, "gi");
  let count = str.match(regexp).length;
  return count;
};
// invoke the function
var str =
  "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
  gave Mike 1 of her orange so she is now left with only 1 Orange.";
console.log(countSubstrings(str, "ORaNGe")); // 4
