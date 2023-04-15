// The most frequent character in a string:
// The most frequent element in an array:
function isMostFrequentChar(str) {
  str = str
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  //return Object.keys(str).reduce((a, b) => str[a] > str[b] ? a : b)
  return Object.keys(str).filter((x) => {
    return str[x] == Math.max.apply(null, Object.values(str));
  });
}
// invoke the function
console.log(isMostFrequentChar("Mwanika")); // ['a']
console.log(isMostFrequentChar("Mwanika Stephen Crispin")); // ['n', 'i']

// The least frequent character in a string:
// The least frequent element in an array:
function isLeastFrequentChar(str) {
  str = str
    .toLowerCase()
    .split("")
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  //return Object.keys(str).reduce((a, b) => str[a] > str[b] ? a : b)
  return Object.keys(str).filter((x) => {
    return str[x] == Math.min.apply(null, Object.values(str));
  });
}
// invoke the function
console.log(isLeastFrequentChar("Mwanika")); // [ 'm', 'w', 'n', 'i', 'k' ]
console.log(isLeastFrequentChar("Mwanika Stephen Crispin")); // ['m', 'w', 'k', 't', 'h', 'c', 'r']

// Find duplicates in the string:
// Find duplicates in the array:
function isDuplicate(str) {
  let [count, duplicate, regrex] = [{}, [], /[^A-Za-z0-9]/gi];

  str
    .toLowerCase()
    .replace(regrex, "")
    .split("")
    .forEach((item) => {
      if (count[item]) {
        count[item] += 1;
        return;
      }
      count[item] = 1;
    });

  for (let prop in count) {
    if (count[prop] >= 2) {
      duplicate.push(prop);
    }
  }
  //console.log(count);
  return duplicate;
}
// invoke the function
console.log(isDuplicate("Mwanika Stephen Crispin")); //
//console.log(isDuplicate(["cat", "book", "pencil", "book", "cat", "cat"])); // ['cat', 'book']

// Find unique character in the string: ----------------------------- no duplicates
// Find unique element in the array: -------------------------------- no duplicates
function isNotDuplicate(str) {
  let [count, unique, regrex] = [{}, [], /[^A-Za-z0-9]/gi];

  str
    .toLowerCase()
    .replace(regrex, "")
    .split("")
    .forEach((item) => {
      if (count[item]) {
        count[item] += 1;
        return;
      }
      count[item] = 1;
    });

  for (let prop in count) {
    if (count[prop] === 1) {
      unique.push(prop);
    }
  }
  //console.log(count);
  return unique;
}
// invoke the function
console.log(isNotDuplicate("Mwanika Stephen Crispin")); //
//console.log(isNotDuplicate(["cat", "book", "pencil", "book", "cat", "cat"])); // ['pencil']

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
console.log(numbersFirstAlphabetsSecond(arr)); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']

// Given an object:
let person = {
  name: "Mwanika Stephen Crispin",
  dob: 1982,
  age: 40,
  career: "software engineering",
};
let myKeys = Object.keys(person);
console.log(myKeys); // [ 'name', 'dob', 'age', 'career' ]

let myValues = Object.values(person);
console.log(myValues); // [ 'Mwanika Stephen Crispin', 1982, 40, 'software engineering' ]

let myEntries = Object.entries(person);
console.log(myEntries);
/* 
[
  [ 'name', 'Mwanika Stephen Crispin' ],
  [ 'dob', 1982 ],
  [ 'age', 40 ],
  [ 'career', 'software engineering' ]
] 
*/

// Object.entries + Destructuring
let myObjArr = [];

myEntries.forEach(([key, val]) => {
  myObjArr.push(key);
  myObjArr.push(val);
});
console.log(myObjArr); //

// Converting an array to an object:
let newObj = Object.fromEntries(myEntries);
console.log(newObj);
/* 
{
  name: 'Mwanika Stephen Crispin',
  dob: 1982,
  age: 40,
  career: 'software engineering'
}
*/

// Invert Key Value of an Object:
const flip = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
console.log(flip({ x: 1, y: 2 })); // { 1: 'x', 2: 'y' }

// Object transformations:
let object1 = { a: 1, b: 2, c: 3 };

let object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2])
);
console.log(object2); // { a: 2, b: 4, c: 6 }

// Given an object:
let obj = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};

let output1 = Object.keys(obj).map((key) => [String(key), obj[key]]);
console.log(output1);
// same as
let output2 = Object.entries(obj);
console.log(output2);

// Check if a string contains another string:
console.log("Programming language".includes("programming")); // false
console.log(["Programming", "language"].includes("Programming")); // true

var a = [33, 4, 1111, 222];
var b = ["33", "4", "1111", "222"];
// invoke the function
console.log(a.sort()); // Alphabetical order: [1111, 222, 33, 4]
console.log(a.reverse()); // same as Numerical order: [4, 33, 222, 1111]
console.log(b.sort()); // Alphabetical order: [ '1111', '222', '33', '4' ]
console.log(b.reverse()); // same as Numerical order: [ '4', '33', '222', '1111' ]

var arr = ["ant", "33", "Bug", "4", "cat", "1111", "Dog", "222"];
//invoke the function
console.log(arr.sort()); // Case-sensitive sort: ['1111','222','33','4','Bug','Dog','ant','cat']

const sortArray1 = (arr) => {
  return arr.sort(function (s, t) {
    // Case-insensitive sort
    s = s.toLowerCase();
    t = t.toLowerCase();
    if (s > t) return 1;
    if (s < t) return -1;
    return 0;
  });
};
// invoke the function
console.log(sortArray1(arr)); // ['1111','222','33','4','ant','Bug','cat','Dog']

var arr = ["ant", 33, "Bug", 4, "cat", 1111, "Dog", 222];
//invoke the function
console.log(arr.sort()); // Case-sensitive sort: ['1111','222','33','4','Bug','Dog','ant','cat']

// Restructure the array in a way that numbers come first and strings second in a sorted order:
const sortArray2 = (arr) => {
  let [nums, alps, sortedArr] = [[], [], []];

  nums = arr.filter((val) => typeof val === "number");

  alps = arr.filter((val) => typeof val === "string");

  sortedArr = [
    ...nums.sort(function (s, t) {
      if (s > t) return 1;
      if (s < t) return -1;
      return 0;
    }),
    ...alps.sort(function (s, t) {
      s = s.toLowerCase();
      t = t.toLowerCase();
      if (s > t) return 1;
      if (s < t) return -1;
      return 0;
    }),
  ];

  return sortedArr;
};
// invoke the function
console.log(sortArray2(arr)); // [4, 33, 222, 1111, 'ant', 'Bug', 'cat', 'Dog']

// Rotate Matrix Right by 90 degrees
const rotateMatrixClockWise = (matrix) => {
  let len = matrix.length;
  for (let row = 0; row < len / 2; row++) {
    for (let col = row; col < len - row - 1; col++) {
      //Store the left value and start the rotation from here
      let temp = matrix[row][col];

      // Move values from left to top
      matrix[row][col] = matrix[len - 1 - col][row];

      // Move values from top to right
      matrix[len - 1 - col][row] = matrix[len - 1 - row][len - 1 - col];

      // Move values from right to bottom
      matrix[len - 1 - row][len - 1 - col] = matrix[col][len - 1 - row];

      // Move values from bottom to left
      matrix[col][len - 1 - row] = temp;
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
console.log(rotateMatrixClockWise(matrix)); // [ [ 6, 3, 0 ], [ 7, 4, 1 ], [ 8, 5, 2 ] ]

// Rotate Matrix left by 90 degrees
const rotateMatrixAntiClockWise = (matrix) => {
  let len = matrix.length;
  for (let row = 0; row < len / 2; row++) {
    for (let col = row; col < len - row - 1; col++) {
      //Store the right value and start the rotation from here
      let temp = matrix[row][col];

      // Move values from right to top
      matrix[row][col] = matrix[col][len - 1 - row];

      // Move values from bottom to right
      matrix[col][len - 1 - row] = matrix[len - 1 - row][len - 1 - col];

      // Move values from left to bottom
      matrix[len - 1 - row][len - 1 - col] = matrix[len - 1 - col][row];

      // Assign temp to left
      matrix[len - 1 - col][row] = temp;
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
console.log(rotateMatrixAntiClockWise(matrix)); // [ [ 2, 5, 8 ], [ 1, 4, 7 ], [ 0, 3, 6 ] ]

// Longest Common Subsequence:
function solution(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return "";
  } else if (s1.slice(-1) === s2.slice(-1)) {
    return solution(s1.slice(0, -1), s2.slice(0, -1)) + s1.slice(-1);
  } else {
    const sub1 = solution(s1.slice(0, -1), s2);
    const sub2 = solution(s1, s2.slice(0, -1));
    return sub1.length > sub2.length ? sub1 : sub2;
  }
}
// invoke the function
console.log(solution("ABCD", "ACBAD")); // ACD

// Convert Time to 24Hours:
const convertTime = (timeStr) => {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};
// invoke the function
let time1 = "05:00 PM";
let time2 = "11:42 PM";
console.log(convertTime(time1));
console.log(convertTime(time2));

// Reverse words in a string:
function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
// invoke the function
console.log(reverseWords("JavaScript is awesome")); // tpircSavaJ si emosewa

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

// Find unique character in the string:
// Find unique element in the array:
function isUnique(str) {
  let [count, duplicate, regrex] = [{}, [], /[^A-Za-z0-9]/gi];

  str
    .toLowerCase()
    .replace(regrex, "")
    .split("")
    .forEach((item) => {
      if (count[item]) {
        count[item] += 1;
        return;
      }
      count[item] = 1;
    });

  for (let prop in count) {
    if (count[prop] >= 2) {
      duplicate.push(prop);
      return false;
    }
  }
  return true;
}
// invoke the function
let str = "Mwanika Stephen Crispin";
if (isUnique(str)) console.log("unique");
else console.log("not unique");

//console.log(isUnique("Mwanika Stephen Crispin")); // false
//console.log(isUnique(["cat", "book", "pencil", "book", "cat", "cat"])); // false

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

// Rotate the array clockwise(right) or anti-clockwise(left)
function rotateString(array, K, direction, ele) {
  if (direction === "right") {
    // rotate clockwise(right)
    K = array.length - K;
    let arr1 = array.slice(K, array.length);
    let arr2 = array.slice(0, K);
    merge_array = arr1.concat(arr2);
    //
    var [indexes, len, idx] = [[], merge_array.length, 0];
    while (idx < len) {
      // While more indexes to find...
      idx = merge_array.indexOf(ele, idx); // Find
      if (idx === -1) break; // if nothing found, break.
      indexes.push(idx); // else, store the idx in indexes
      idx++; // and continue to the next idx
    }
    return indexes; // Return an array of indexes
  }

  if (direction === "left") {
    // rotate anti-clockwise(left)
    let arr1 = array.slice(K, array.length);
    let arr2 = array.slice(0, K);
    merge_array = arr1.concat(arr2);
    //
    var [indexes, len, idx] = [[], merge_array.length, 0];
    while (idx < len) {
      // While more indexes to find...
      idx = merge_array.indexOf(ele, idx); // Find
      if (idx === -1) break; // if nothing found, break.
      indexes.push(idx); // else, store the idx in indexes
      idx++; // and continue to the next idx
    }
    return indexes; // Return an array of indexes
  }
}
// invoke the function
console.log(rotateString([1, 2, 3, 4, 5], 2, "right", 2)); // ['3']

// TURING CODING CHALLENGES HERE:
console.log("------THE TURING CODING CHALLENGE BEGINS HERE------");

// PROBLEM 1:


// PROBLEM 2:
// Rotate the array clockwise(right) or anti-clockwise(left)
function rotateString(array, K, direction, ele) {
  if (direction === "right") {
    // rotate clockwise(right)
    K = array.length - K;
    let arr1 = array.slice(K, array.length);
    let arr2 = array.slice(0, K);
    merge_array = arr1.concat(arr2);
    //
    var [indexes, len, idx] = [[], merge_array.length, 0];
    while (idx < len) {
      // While more indexes to find...
      idx = merge_array.indexOf(ele, idx); // Find
      if (idx === -1) break; // if nothing found, break.
      indexes.push(idx); // else, store the idx in indexes
      idx++; // and continue to the next idx
    }
    return indexes; // Return an array of indexes
  }

  if (direction === "left") {
    // rotate anti-clockwise(left)
    let arr1 = array.slice(K, array.length);
    let arr2 = array.slice(0, K);
    merge_array = arr1.concat(arr2);
    //
    var [indexes, len, idx] = [[], merge_array.length, 0];
    while (idx < len) {
      // While more indexes to find...
      idx = merge_array.indexOf(ele, idx); // Find
      if (idx === -1) break; // if nothing found, break.
      indexes.push(idx); // else, store the idx in indexes
      idx++; // and continue to the next idx
    }
    return indexes; // Return an array of indexes
  }
}
// invoke the function
console.log(rotateString([1, 2, 3, 4, 5], 2, "right", 2)); // ['3']
