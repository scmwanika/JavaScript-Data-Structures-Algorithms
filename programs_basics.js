// THE BASICS
// Hoisting:
function Add() {
  console.log(answer);
  var answer = 2;
}
// invoke the function
Add(); // undefined

// Converting a for loop to forEach:
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before -- mtd 1
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }
// console.log(copyItems);

// after -- mtd 2
items.forEach((item) => {
  copyItems.push(item);
});
console.log(copyItems);

// Call a function on each element in an array forEach:
const fruits1 = ["Apple", "Mango", "Cherry"];
fruits1.forEach((item, index) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2

// Iterate over an array for...of loop:
const fruits2 = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits2) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry

// Iterate over an array for...in loop:
const fruits3 = ["Apple", "Mango", "Cherry"];
for (const fruit in fruits3) {
  console.log(fruit);
}
// 0
// 1
// 2

// Swapping values:
let [x, y] = [1, 2]; // Same as var x=1, y=2
[x, y] = [x + 1, y + 1]; // Same as x=x+1, y=y+1
console.log([x, y]); // Prints [2,3]
[x, y] = [y, x]; // Swap the value of the two variables
console.log([x, y]); // Prints [3,2]

// Swapping two strings:
function stringSwap(str1, str2) {
  [str1, str2] = [str2, str1];
  return str1 + " " + str2;
}
// invoke the function
console.log(stringSwap("Mwanika", "Stephen")); // Stephen Mwanika

// Given an array:
var array = [5, 4, 3, 2, 1];

// map()
var squareElement = array.map(function (ele) {
  return ele * ele;
});
console.log(squareElement); // [25, 16, 9, 4, 1]

// filter()
var lessThanThree = array.filter(function (ele) {
  return ele < 3;
});
console.log(lessThanThree); // [2, 1]

// filter()
var everyother = array.filter(function (ele1, ele2) {
  return ele2 % 2 == 0;
});
console.log(everyother); // [5, 3, 1]

// reduce()
var sumElements = array.reduce(function (cur, nex) {
  return cur + nex;
}, 0);
console.log(sumElements); // 15

// reduce()
var multiplyElements = array.reduce(function (cur, nex) {
  return cur * nex;
}, 1);
console.log(multiplyElements); // 120

// reduce()
var maxElement = array.reduce(function (cur, nex) {
  return cur > nex ? cur : nex;
});
console.log(maxElement); // 5

// reduce()
var minElement = array.reduce(function (cur, nex) {
  return cur < nex ? cur : nex;
});
console.log(minElement); // 1

//reduceRight() works just like reduce(), except that it processes the array from highest
//index to lowest (right-to-left), rather than from lowest to highest. You might want to
//do this if the reduction operation has right-to-left precedence, for example:
var a = [2, 3, 4];
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function (accumulator, value) {
  return Math.pow(value, accumulator);
});
console.log(big);

// forEach()
let data = [1, 2, 3, 4, 5];
// Compute the sum of the array elements
let sum = 0; // Start at 0
data.forEach(function (value) {
  sum += value;
}); // Add each value to sum
console.log(sum); // => 15

// every(), some()
a = [1, 2, 3, 4, 5];
console.log(
  a.every(function (x) {
    return x < 10;
  })
); // true: all values < 10.
console.log(
  a.every(function (x) {
    return x % 2 === 0;
  })
); // false: not all values even.

// Strings as Arrays -> chartAt()
var str = "test";
console.log(str.charAt(0)); // same as console.log(str[0]) => "t"
console.log(str[1]); // "e"

// Arrays -> indexOf(), lastIndexOf()
var arr = [0, 1, 2, 1, 0];
console.log(arr.indexOf[1]); // undefined
console.log(arr.indexOf(1)); // 1
console.log(arr.lastIndexOf(1)); // 3
console.log(arr.indexOf(3)); // -1
console.log(arr.includes(1)); // true
arr.forEach(console.log);

// An application of map() and filter()
const evenSquares = (arr) => {
  var squares = [];
  arr.forEach((ele) => {
    if (ele % 2 === 0) squares.push(ele * ele);
  });
  return squares;
};
// invoke the function
console.log(evenSquares([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Return an array of Even Squares in the range...
const even_squares = (start, end) => {
  var squares = [];
  for (start; start <= end; start++) {
    if (start % 2 === 0) squares.push(start * start);
  }
  return squares;
};
// invoke the function
console.log(even_squares(0, 10));

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
const distance = (x1, y1, x2, y2) => {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};
// define the points
let [x1, y1, x2, y2] = [0, 0, 3, 4]; // Same as let x1=0, y1=0, x2=3, y2=4
// invoke the function
console.log(distance(x1, y1, x2, y2));

// A recursive function (one that calls itself) that computes factorials
// x! is the product of x and all positive integers less than it.
const factorial = (x) => {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
};
// invoke the function
console.log(factorial(4));

// Function defined and immediately invoked:
const tenSquared = (function (x) {
  return x * x;
})(10);
console.log(tenSquared); // 100

// Function to calculate the hypotenuse of a Triangle.
const hypotenuse = (a, b) => {
  const square = (x) => {
    return x * x;
  };
  return Math.sqrt(square(a) + square(b));
};
// invoke the function
console.log(hypotenuse(3, 4));

// Given these variables:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let integers = [1, 2, 3, 4, 5];
// invoke the function
console.log(fruits.toString());
console.log(integers.toString());

// Merge Array:
let arr1 = [1, 2, [3, 4]];
let arr2 = [[5, 6], 7, 8];
let arr3 = arr1.concat(arr2);
// invoke the function
console.log(arr3);

// Remove the first two elements of an array using array destructuring:
function removeFirstTwoElements(arr) {
  const [, , ...list] = arr;
  return list;
}
// invoke the function
let arr = [8, 9, 10, 11, 12];
console.log("new array: " + removeFirstTwoElements(arr)); // [10, 11, 12]

// Reverse the string:
function reverseString(str) {
  var reversed_string = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed_string += str.charAt(i);
  }
  return reversed_string;
}
// invoke the function
console.log(reverseString("Mwanika")); // akinawM

// Reverse words in a string:
function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
// invoke the function
console.log(reverseWords("JavaScript is awesome")); // tpircSavaJ si emosewa

// Reverse an array:
function reverseArray(arr) {
  var reversed_array = [];
  while (arr.length) {
    reversed_array.push(arr.pop());
  }

  return reversed_array;
}
// invoke the function
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]

// Remove even number:
function removeEvenNumber(arr) {
  var odds = [];
  for (let ele of arr) {
    if (ele % 2 != 0)
      // Check if the item in the list is NOT even ('%' is the modulus symbol!)
      odds.push(ele); //If it isn't even append it to the empty list
  }
  return odds; // Return the new list
}
// invoke the function
console.log(removeEvenNumber([3, 2, 41, 3, 34])); // [3, 41, 3]

// Shallow copying:
var girl = {
  name: "Anna",
  info: { age: 20, number: 123 },
};
let newGirl = { ...girl };
newGirl.info.age = 30;
// invoke the function
console.log(girl.info.age, newGirl.info.age); // 30 30

// Methods to remove duplicates from an array:
let arr = ["scale", "happy", "strength", "peace", "happy", "happy"];

// 1- Use of filter() Method
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// 2- Use of Set() Method
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// 3- Use of forEach() Method
function removeDuplicates(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}
console.log(removeDuplicates(arr));

// 4- Use of Reduce() Method
function removeDuplicates(arr) {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr));

// 5- Use of indexOf() Method
function removeDuplicates(arr) {
  let unique = [];
  for (i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates(arr));

// SUBSTRINGS, SUBARRAYS, SUBSEQUENCES, SUBSETS

// SUBSTRINGS
function getAllSubStrings(str) {
  var result = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
// invoke the function
var str = "apple";
console.log(getAllSubStrings(str));

// SUBARRAYS
function getAllSubArrays(arr) {
  for (i = 0; i < arr.length; i++) {
    var a = [];
    for (j = i; j < arr.length; j++) {
      a.push(arr[j]);
      console.log(a);
    }
  }
  return a;
}
// invoke the function
//let arr = ['a', 'p', 'p', 'l', 'e'];
var arr = [1, 2, 3];
getAllSubArrays(arr);

// SUBSEQUENCES
// Return sum of individual even SubArrays:
function getAllSubSequences(arr) {
  for (i = 0; i < arr.length; i++) {
    var a = [];

    for (j = i; j < arr.length; j++) {
      a.push(arr[j]);

      if (a.length % 2 === 0) {
        result = a.reduce((cur, nex) => {
          return cur + nex;
        }, 0);
        console.log(result);
        //console.log(a);
      }
    }
  }
  return a;
}
// invoke the function
var arr = [1, 4, 2, 5];
//var arr = [1, 2, 3];
getAllSubSequences(arr);

// SUBSETS
const getAllSubSets = (theArray) =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );
// invoke the function
console.log(getAllSubSets([1, 2, 3]));

// Check if a string contains another string:
console.log("Programming language".includes("programming")); // false
console.log(["Programming", "language"].includes("Programming")); // true

/* ---------------------------------------------------------------------------------------------------------- */
// LIVE CODING CHALLENGES

// Test string if Palindrome: USING WHILE LOOP
function isPalindrome(str) {
  var regexp = /[^A-Za-z0-9]/gi;
  // make the string case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the string
  str = str.toLowerCase().replace(regexp, "");
  var [i, j] = [0, str.length - 1];
  while (j > 0) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    --j;
  }
  return true;
}
// invoke the function
console.log(isPalindrome("1221"));
console.log(isPalindrome("12121"));
console.log(isPalindrome("book"));
console.log(isPalindrome("leveL"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Refer"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("0_0 (: /- :) 0–0"));

// Test string if Palindrome: USING FOR LOOP
const isPalindrome = (str) => {
  // Remove whitespace, and unwanted characters from the string
  var re = /[^A-Za-z0-9]/gi; // Remove any one character not between the brackets.
  // Then make the string case-insensitive by converting to lowercase
  str = str.toLowerCase().replace(re, "");
  var i, j;
  for (i = 0, j = str.length - 1; i < j; i++, --j) {
    if (str[i] != str[j]) {
      return false;
    }
    return true;
  }
};
// invoke the function
console.log(isPalindrome("1221"));
console.log(isPalindrome("12121"));
console.log(isPalindrome("book"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Refer"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("0_0 (: /- :) 0–0"));

// Test strings if Reverse:
function isReverse(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regexp = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  str1 = str1.toLowerCase().replace(regexp, "");
  str2 = str2.toLowerCase().replace(regexp, "");

  if (str1.length != str2.length) {
    return false;
  }
  var [i, j] = [0, str2.length - 1];
  while (j > 0) {
    if (str1[i] != str2[j]) {
      return false;
    }
    i++;
    --j;
  }
  return true;
}
// invoke the function
console.log(isReverse("Pots", "Stop"));

// Test string if Palindrome:
const isPalindrome = (str) => {
  var regexp = /[^A-Za-z0-9]/gi;
  // make the string case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the string
  str = str.toLowerCase().replace(regexp, "");
  // reverse the input string and return the result of the comparison
  return str === str.split("").reverse().join("");
};
// invoke the function
console.log(isPalindrome("1221"));
console.log(isPalindrome("12121"));
console.log(isPalindrome("book"));
console.log(isPalindrome("leveL"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Refer"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("0_0 (: /- :) 0–0"));

// Test strings if Reverse:
function isReverse(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regexp = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  // also reverse the second string, and comapare to the first string
  str1 = str1.toLowerCase().replace(regexp, "");
  str2 = str2.toLowerCase().replace(regexp, "").split("").reverse().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}
// invoke the function
console.log(isReverse("Pots", "Stop"));

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
  let [count, duplicate, regexp] = [{}, [], /[^A-Za-z0-9]/gi];

  str
    .toLowerCase()
    .replace(regexp, "")
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
      return true;
    }
  }
  return false;
}
// invoke the function
let str = "Mwanika Stephen Crispin";
if (isUnique(str) === true) console.log("not unique");
else console.log("unique");

//console.log(isUnique("Mwanika Stephen Crispin")); // false
//console.log(isUnique(["cat", "book", "pencil", "book", "cat", "cat"])); // false

// SORTING OBJECTS:
// Given
var a = [33, 4, 1111, 222];
var b = ["33", "4", "1111", "222"];
// invoke the function
console.log(a.sort()); // Alphabetical order: [1111, 222, 33, 4]
console.log(a.reverse()); // same as Numerical order: [4, 33, 222, 1111]
console.log(b.sort()); // Alphabetical order: [ '1111', '222', '33', '4' ]
console.log(b.reverse()); // same as Numerical order: [ '4', '33', '222', '1111' ]

// Given
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
var arr = ["ant", 33, "Bug", 4, "cat", 1111, "Dog", 222];
console.log(sortArray2(arr)); // [4, 33, 222, 1111, 'ant', 'Bug', 'cat', 'Dog']

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

// Sorting Objects:
let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];
// sort by salary
const sortObjects = (employees) => {
  return employees.sort((a, b) => a.salary - b.salary);
  // same as
  // return employees.sort((a, b) => (a.salary > b.salary ? 1 : -1));
};
// invoke the function
console.table(sortObjects(employees));

// Extract the values of a given property from an array of objects:
// extract names from the array employees

// const extractValues = (arr, property) => {
//   let output = [];

//   // ES5 -- mtd 1
//   // for (let i = 0; i < arr.length; i++) {
//   //   output.push(arr[i][property]);
//   // }

//   // ES6 -- mtd 2
//   arr.forEach((item) => {
//     output.push(item[property]);
//   });

//   return output;
// };
// invoke the function
// console.log(extractValues(employees, "name"));

// ES6 -- mtd 3
const extractValues = (arr, property) => {
  let output = arr.map((element) => element[property]);

  return output;
};
// invoke the function
console.log(extractValues(employees, "name"));

// Lists as Objects -> push()
var obj = { name: "Mwanika", dob: 1982, age: "Adult" };
// Return an array that holds the indexes of the enumerable properties of an obj.
const propIndexes = (obj) => {
  if (typeof obj !== "object") throw TypeError(); // Object argument required
  var [props, indexes] = [[], []]; // Return these arrays
  for (var prop in obj) {
    // For all enumerable properties
    //if (obj.hasOwnProperty(prop))
    // If it is an own property
    props.push(prop); // add it to the array.
    // console.log(props)
  }
  for (var prop in props) {
    // For all enumerable properties
    //if (names.hasOwnProperty(prop))
    // If it is an own property
    indexes.push(prop); // add it to the array.
  }
  return indexes; // Return indexes.
};
// invoke the function
console.log(propIndexes(obj));

// Object utility functions that enumerate properties:
o = { name: "Stephen", age: "40", dob: "1982", career: "software engineering" };
p = { name: "Jerome", age: "15", dob: "2007", school: "St. Maria Goreti S.S" };

/* Copy the enumerable properties of p to o, and return o.
   If o and p have a property by the same name, o's property is overwritten. */
function extend(o, p) {
  for (prop in p) {
    // For all props in p.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// invoke the function
console.log(extend(o, p));

/* Copy the enumerable properties of p to o, and return o.
   If o and p have a property by the same name, o's property is left alone. */
function merge(o, p) {
  for (prop in p) {
    // For all props in p.
    if (o.hasOwnProperty[prop]) continue; // Except those already in o.
    o[prop] = p[prop]; // Add the property to o.
  }
  return o;
}
// invoke the function
console.log(merge(o, p));

/* Remove properties from o if there is not a property with the same name in p.
   Return o. */
function restrict(o, p) {
  for (prop in o) {
    // For all props in o
    if (!(prop in p)) delete o[prop]; // Delete if not in p
  }
  return o;
}
// invoke the function
console.log(restrict(o, p));

/* For each property of p, delete the property with the same name from o.
   Return o. */
function subtract(o, p) {
  for (prop in p) {
    // For all props in p
    delete o[prop]; // Delete from o (deleting a
    // nonexistent prop is harmless)
  }
  return o;
}
// invoke the function
console.log(subtract(o, p));

/* Return a new object that holds the properties of both o and p.
   If o and p have properties by the same name, the values from o are used. */
function union(o, p) {
  return extend(extend({}, o), p);
}
// invoke the function
console.log(union(o, p));

/* Return a new object that holds only the properties of o that also appear
   in p. This is something like the intersection of o and p, but the values of
   the properties in p are discarded */
function intersection(o, p) {
  return restrict(extend({}, o), p);
}
// invoke the function
console.log(intersection(o, p));

// GIVEN AN OBJECT:
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

/* ---------------------------------------------------------------------------------------------------------- */

// Return an array of all characters of a string.
const listCharacters = (string) => {
  /* The array of characters to return
   * The length of the string to be traversed
   * The traverse starts at index 0
   */
  var [characters, len, idx] = [[], string.length, 0];
  while (idx < len) {
    // While more indexes to traverse...
    var output = string.charAt(idx); // Traverse
    characters.push(output); // store the output in characters
    idx++; // and continue to the next idx
  }
  return characters; // Return an array of characters
};
// invoke the function
console.log(listCharacters("John Doe"));

// Return an array of strings that contain prefix and suffix.
const prefix_suffix = (prefixes, suffix) => {
  /* The array of strings to return
   * The length of the string to be traversed
   * The traverse starts at index 0
   */
  var [strings, len, idx] = [[], prefixes.length, 0];
  while (idx < len) {
    // While more indexes to traverse...
    var output = prefixes.charAt(idx) + suffix; // Traverse
    strings.push(output); // store the output in strings
    idx++; // and continue to the next idx
  }
  console.log(strings.reverse().join(" ")); // experimenting
  return strings; // Return an array of strings
};
// invoke the function
console.log(prefix_suffix("JKLMNOPQ", "ack"));

// Return an array that holds the indexes of a searched element in an array:
const foundIndexes = (arr, ele) => {
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
  return indexes; // Return an array of indexes
};
// invoke the function
console.log(foundIndexes([1, 2, 3, 4, 5], 1));
console.log(foundIndexes([1, 2, 3, 4, 5], 5));
console.log(foundIndexes([1, 2, 3, 4, 5], 6));

// Find letter in the string:
function letterFound(string, letter) {
  // make "letter" and "string" same case
  // then create an array of letters
  // also create an array of indexes of the searched letter
  // return the length of the array with indexes as letterCount
  letter = letter.toLowerCase();
  var arr = string.toLowerCase().replaceAll("", ",").split(",");
  var [len, idx] = [arr.length, 0];

  while (idx < len) {
    // While more indexes to find...
    idx = arr.indexOf(letter, idx); // Find
    if (idx === -1) break; // if nothing found, break
    return true; // else, true letter found
  }
  return false; // otherwise, false letter not found
}
// invoke the function
console.log(letterFound("Olweny John", "o"));

// Print the occurrence of a letter in the string:
function letterCount(string, letter) {
  // make "letter" and "string" same case
  // then create an array of letters
  // also create an array of indexes of the searched letter
  // return the length of the array with indexes as letterCount
  letter = letter.toLowerCase();
  var arr = string.toLowerCase().replaceAll("", ",").split(",");
  var [indexes, len, idx] = [[], arr.length, 0];

  while (idx < len) {
    // While more indexes to find...
    idx = arr.indexOf(letter, idx); // Find
    if (idx === -1) break; // if nothing found, break
    indexes.push(idx); // else, store the idx in indexes
    idx++; // and continue to the next idx
  }
  return letter + " : " + indexes.length;
}
// invoke the function
console.log(letterCount("Olweny John", "o"));

// Print the occurrence of a word in the string:
function wordCount(string, word) {
  // make "word" and "string" same case
  // then create an array of words
  // also create an array of indexes of the searched word
  // return the length of the array with indexes as wordCount
  word = word.toLowerCase();
  var arr = string.toLowerCase().replaceAll(" ", ",").split(",");
  var [indexes, len, idx] = [[], arr.length, 0];

  while (idx < len) {
    // While more indexes to find...
    idx = arr.indexOf(word, idx); // Find
    if (idx === -1) break; // if nothing found, break
    indexes.push(idx); // else, store the idx in indexes
    idx++; // and continue to the next idx
  }
  return word + " : " + indexes.length;
}
// invoke the function
console.log(wordCount("The quick brown fox jumps over the lazy dog", "the"));

// Count vowels and consonants:
function countVowelsAndConsonants(string) {
  var regexp = /[^A-Za-z0-9]/gi;
  let [vowels, consonants] = [[], []];
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  for (var char of string.toLowerCase().replace(regexp, "")) {
    if ("aeiou".includes(char)) {
      vowels.push(char);
      vowelCount = vowels.length;
    } else {
      consonants.push(char);
      consonantCount = consonants.length;
    }
  }
  return { vowelCount, consonantCount };
}
// invoke the function
console.log(
  countVowelsAndConsonants("The quick brown fox jumps over the lazy dog")
);

// Test strings if Anagram:
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regexp = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  str1 = str1.toLowerCase().replace(regexp, "").split("").sort().join("");
  str2 = str2.toLowerCase().replace(regexp, "").split("").sort().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}
// invoke the function
console.log(isAnagram("123", "311"));
console.log(isAnagram("123", "321"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("they see", "the eyes"));
console.log(isAnagram("no.de", "deno./"));
console.log(isAnagram("stop", "p ots"));

// Return an array that holds N elements of the Fibonacci Series(Additive Sequence)
// Iterative function
const fibonacciSeries = (number_of_terms, firstTerm, secondTerm) => {
  var [fibonacciList, nextTerm] = [[]];
  // for first element; count=1 and index=0
  for (var count = 1; count <= number_of_terms; count++) {
    fibonacciList.push(firstTerm);
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
  }
  return fibonacciList;
};
// invoke the function
console.log(fibonacciSeries(20, 0, 1));

// Test if the elements of an array form an Additive Sequence/Fibonacci Series
function isFibonacci(arr) {
  // sort the array and check if every element is equal to the sum of the previous 2 elements
  arr.sort(function (x, y) {
    return x - y;
  });

  for (i = 2; i < arr.length; i++) {
    if (arr[i - 1] + arr[i - 2] != arr[i]) return false;
  }
  return true;
}
// invoke the function
console.log(isFibonacci([8, 3, 5, 13])); // true
console.log(isFibonacci([4, 4, 8, 12, 20, 32])); // true
console.log(isFibonacci([-4, -4, -8, -12, -20, -32])); // false
console.log(isFibonacci([-4, 0, -4, -4, -8, -12])); // false

// Reverse a string:
function reverseString(str) {
  return str.split("").reverse().join("");
}
// invoke the function
console.log(reverseString("hello")); // olleh

// Find the largest element in an array:
function findLargestElement(arr) {
  return Math.max(...arr);
}
// invoke the function
console.log(findLargestElement([1, 2, 3, 4, 5])); // 5
console.log(findLargestElement([5, 2, 3, 8, 1, 0])); // 8

// Find the smallest element in an array:
function findSmallestElement(arr) {
  return Math.min(...arr);
}
// invoke the function
console.log(findSmallestElement([1, 2, 3, 4, 5])); // 1
console.log(findSmallestElement([5, 2, 3, 8, 1, 0])); // 0

// Find the largest(max) element in the unsorted array:
function findMaxElement(arr) {
  let max_ele = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let ele of arr) {
    if (ele > max_ele) {
      max_ele = ele;
    }
  }
  return max_ele;
}
// invoke the function
console.log(findMaxElement([1, 2, 3, 4, 5])); // 5
console.log(findMaxElement([5, 2, 3, 8, 1, 0])); // 8

// Find the smallest(min) element in the unsorted array:
function findMinElement(arr) {
  let min_ele = Number.POSITIVE_INFINITY; // larger than all other numbers
  for (let ele of arr) {
    if (ele < min_ele) {
      min_ele = ele;
    }
  }
  return min_ele;
}
// invoke the function
console.log(findMinElement([5, 2, 3, 8, 1, 0])); // 0

// Implement a function to find the missing element in an array:
// Given an array A of N integers,
// return the smallest positive integer (greater than 0) that does not occur in A.
function solution(A) {
  var [len, i] = [A.length, 1];
  while (i <= len) {
    if (!A.includes(i)) return i;
    i++;
  }
  return i;
}
// invoke the function
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([1, 2, 4, 6, 3, 7, 8])); // 5

// Print primes in the range...
const getPrimes = (start, end) => {
  var primesList = [];
  for (start; start <= end; start++) {
    var [prime, numSqrt] = [true, Math.sqrt(start)];
    for (var div = 2; div <= numSqrt; div++) {
      if (start % div == 0) {
        prime = false;
        break;
      }
    }
    if (prime && start > 1) {
      primesList.push(start);
    }
  }
  return primesList;
};
// invoke the function
console.log(getPrimes(0, 100));

// Check if a number is prime:
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}
// invoke the function
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(7)); // true

// Check if a string contains another string:
console.log("Programming language".includes("programming")); // false
console.log("Programming language".includes("Programming")); // true

// Find the common elements in two arrays:
function commonElements(arr1, arr2) {
  return arr1.filter((ele) => arr2.includes(ele));
}
// invoke the function
console.log(commonElements([1, 2, 3], [2, 3, 4])); // [2, 3]

// Find the not common characters in string 1:
function commonElements(str1, str2) {
  return str1.split("-").filter((ele) => !str2.split("-").includes(ele));
}
// invoke the function
console.log(commonElements("programming-CCC", "programming-ccc")); // ['CCC']

// Implement a function to check if a given number is a fibonacci number:
function isFibonacci(num) {
  if (num === 0) {
    return true;
  }

  let [firstTerm, secondTerm, nextTerm] = [0, 1, 0];

  while (nextTerm < num) {
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;

    if (nextTerm === num) {
      return true;
    }
  }
  return false;
}
// invoke the function
console.log(isFibonacci(0)); // true
console.log(isFibonacci(1)); // true
console.log(isFibonacci(2)); // true

// SOLUTIONS TO SORTING AND SEARCHING:

// (i) Implement Quick Sort Algorithm:
const quickSort = (originalArr) => {
  if (originalArr.length <= 1) {
    return originalArr;
  }
  var [leftArr, rightArr, sortedArr, pivot, len] = [
    [],
    [],
    [],
    originalArr.pop(), // originalArr.shift() --- refer to Stack & Queue
    originalArr.length,
  ];
  for (var idx = 0; idx < len; idx++) {
    if (originalArr[idx] <= pivot) {
      // using pivot value start comparing
      leftArr.push(originalArr[idx]); // leftArr.unshift(originalArr[idx])
    } else {
      rightArr.push(originalArr[idx]); // rightArr.unshift(originalArr[idx])
    }
  }
  // array will be returned untill sorting occurs
  return sortedArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
};
// invoke the function
console.log(quickSort([1, 6, 3, 4, 5, 1, 0, 4, 8])); // [0, 1, 1, 3, 4, 4, 5, 6, 8]

// (ii) Implement Merge Sort Algorithm:
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

// (iii) Implement Linear Search Algorithm:
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
console.log(linearSearch(["a", "b", "c", "d"], "d")); // 3

// (iv) Implement Binary Search Algorithm:
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

// Output a Matrix:
// mtd 1
const values1 = [];
// for (let x = 0; x < 10; x++) {
//   values1.push([2 ** x, 2 * x ** 2]);
// }
// mtd 2
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((item) => {
  values1.push([2 ** item, 2 * item ** 2]);
});
// mtd 3
const values2 = arr.map((element) => [2 ** element, 2 * element ** 2]);
// invoke the function
console.table(values1);
console.table(values2);

// Armstrong numbers between a range...
var isArmstrongNumber = (num) => {
  let [strN, power, sum] = [String(num), String(num).length, 0];
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }
  return sum === num;
};

const armstrongRange = (lower, upper) => {
  const res = [];
  for (let i = lower; i <= upper; i++) {
    if (isArmstrongNumber(i)) {
      res.push(i);
    }
  }
  return res;
};
console.log(armstrongRange(1, 400));

// Test number if Armstrong:
var isArmstrongNumber = (num) => {
  let [strN, power, sum] = [String(num), String(num).length, 0];
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }
  return sum === num;
};
// invoke the function
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(370));
console.log(isArmstrongNumber(371));

// Sum elements of a mixed array:
const array = [67, 45, "34", "23", 4, 6, "6"];
const mixedSum = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum += +item;
  });
  return sum;
};
console.log(mixedSum(array)); // 185

// reduce()
var sumElements = array.reduce(function (prev, next) {
  return +prev + +next;
}, 0);
console.log(sumElements); // 185

// map()
var squareElement = array.map(function (ele) {
  return +ele + +ele;
});
console.log(squareElement); // [134, 90, 68, 46, 8, 12, 12]

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

// Calculate the number of days between two dates:
const daysBetweenDates = (date1, date2) => {
  let [d1, d2] = [new Date(date1), new Date(date2)];
  let difference = (d2 - d1) / (1000 * 3600 * 24); // (d2.getTime() - d1.getTime()) / (1000 * 3600 * 24); milliseconds

  return Math.floor(difference);
};
// invoke the function
let date1 = "11/01/2021";
let date2 = "11/03/2021";
console.log(daysBetweenDates(date1, date2)); // 2

/* Write a function that does the following:
console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
logs fizz instead of the number for multiples of 3
logs buzz instead of the number for multiples of 5
logs fizzbuzz instead of the number for multiples of both 3 and 5 */

const fizzBuzz = (num) => {
  for (let n = 1; n <= num; n++) {
    // check if the number is a multiple of 3
    if (n % 3 === 0) {
      console.log("fizz");
    } // check if the number is a multiple of 5
    else if (n % 5 === 0) {
      console.log("buzz");
    } // check if the number is a multiple of 3 and 5
    else if (n % 3 === 0 && n % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(n);
    }
  }
};
// invoke the function
fizzBuzz(5);
// 1
// 2
// fizz
// 4
// buzz

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

// URLify: Write a method to replace all spaces in a string with '%20'.
function URLify(string) {
  return string.trim().replace(/\s/g, "%20");
}
// invoke the function
console.log(URLify("Mr John Smith ", 13)); // "Mr%20John%20Smith"

// Separate a string with a special character sequence into an array of substrings in JavaScript:
var str = " John <----> Smith ";
var regexp = /\s*<---->\s*/g;
var separate_string = str.trim().split(regexp);
console.log(separate_string); // ["John", "Smith"]
console.log(separate_string.join(" ")); // John Smith

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

/* Sorted Search, No Size: You are given an array-like data structure Listy which lacks a size
method. It does, however, have an elementAt (i) method that returns the element at index i in
0(1) time. If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) Given a Listy which contains sorted, positive integers,
find the index at which an element x occurs. If x occurs multiple times, you may return any index. */

/* Missing Int: Given an input file with four billion non-negative integers, provide an algorithm to
generate an integer that is not contained in the file. Assume you have 1 GB of memory available for
this task.
FOLLOW UP:
What if you have only 1O MB of memory? Assume that all the values are distinct and we now have
no more than one billion non-negative integers. */

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

/* ---------------------------------------------------------------------------------------------------------- */

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
