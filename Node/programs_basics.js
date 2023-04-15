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
let array = [5, 4, 3, 2, 1];

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

// HOW TO APPLY THE BASICS TO CODING CHALLENGES

// Test string if Palindrome: USING WHILE LOOP
function isPalindrome(str) {
  var regrex = /[^A-Za-z0-9]/gi;
  // make the string case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the string
  str = str.toLowerCase().replace(regrex, "");
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
  var regrex = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  str1 = str1.toLowerCase().replace(regrex, "");
  str2 = str2.toLowerCase().replace(regrex, "");

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

// SORTING
// Given these variables:
var a = [33, 4, 1111, 222];
var b = ["33", "4", "1111", "222"];
// invoke the function
console.log(a.sort()); // Alphabetical order: [1111, 222, 33, 4]
console.log(a.reverse()); // same as Numerical order: [4, 33, 222, 1111]
console.log(b.reverse()); // ['222', '1111', '4', '33']

a.sort(function (x, y) {
  return x - y;
});
// invoke the function
console.log(a); // Numerical order: [4, 33, 222, 1111]

a.sort(function (x, y) {
  return y - x;
});
// invoke the function
console.log(a); // Reverse numerical order: [1111, 222, 33, 4]

var arr = ["ant", "33", "Bug", "4", "cat", "1111", "Dog", "222"];
//invoke the function
console.log(arr.sort()); // Case-sensitive sort: ['1111','222','33','4','Bug','Dog','ant','cat']

arr.sort(function (s, t) {
  // Case-insensitive sort
  var a = s.toLowerCase();
  var b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
// invoke the function
console.log(arr); // ['1111','222','33','4','ant','Bug','cat','Dog']

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
