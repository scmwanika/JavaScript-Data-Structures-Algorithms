var [x, y] = [1, 2]; // Same as var x=1, y=2
[x, y] = [x + 1, y + 1]; // Same as x=x+1, y=y+1
console.log([x, y]); // Prints [2,3]
[x, y] = [y, x]; // Swap the value of the two variables
console.log([x, y]); // Prints [3,2]

// map(), filter(), reduce(), reduceRight()
var a = [5, 4, 3, 2, 1];

var b = a.map(function (x) {
  return x * x;
}); // [25, 16, 9, 4, 1]

var smallvalues = a.filter(function (x) {
  return x < 3;
}); // [2, 1]
var everyother = a.filter(function (x, i) {
  return i % 2 == 0;
}); // [5, 3, 1]

var sum = a.reduce(function (x, y) {
  return x + y;
}, 0); // 15
var product = a.reduce(function (x, y) {
  return x * y;
}, 1); // 120
var max = a.reduce(function (x, y) {
  return x > y ? x : y;
}); // 5
var min = a.reduce(function (x, y) {
  return x < y ? x : y;
}); // 1

console.log(b);
console.log(smallvalues);
console.log(everyother);
console.log(sum);
console.log(product);
console.log(max);
console.log(min);

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
var data = [1, 2, 3, 4, 5];
// Compute the sum of the array elements
var sum = 0; // Start at 0
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

// Return an array of Even Squares in the range [start..end]
const even_squares = (start, end) => {
  var squares = [];
  for (start; start <= end; start++) {
    if (start % 2 === 0) squares.push(start * start);
  }
  return squares;
};
// invoke the function
console.log(even_squares(0, 10));

// Lists as Objects -> push()
var obj = { name: "Mwanika", dob: 1982, age: "Adult" };
// Return an array that holds the indexes of the enumerable properties of an obj.
const propIndexes = (obj) => {
  if (typeof obj !== "object") throw TypeError(); // Object argument required
  var [names, indexes] = [[], []]; // Return these arrays
  for (var prop in obj) {
    // For all enumerable properties
    //if (obj.hasOwnProperty(prop))
    // If it is an own property
    names.push(prop); // add it to the array.
  }
  for (var prop in names) {
    // For all enumerable properties
    //if (names.hasOwnProperty(prop))
    // If it is an own property
    indexes.push(prop); // add it to the array.
  }
  return indexes; // Return indexes.
};
// invoke the function
console.log(propIndexes(obj));

// Return an array that holds the indexes of a searched element in an array.
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
console.log(foundIndexes([1, 2, 3, 2, 1, 0], 2));

// Print the occurrence of a word in the string.
const wordCount = (string, word) => {
  word = word.toLowerCase();
  var arr = string.toLowerCase().replaceAll(" ", ",").split(","); // Case-insensitive search
  console.log(arr);
  /* The array of indexes to return
   * The length of the array to be searched
   * The search starts at index 0
   */
  var [indexes, len, idx] = [[], arr.length, 0];
  while (idx < len) {
    // While more indexes to find...
    idx = arr.indexOf(word, idx); // Find
    if (idx === -1) break; // if nothing found, break
    indexes.push(idx); // else, store the idx in indexes
    idx++; // and continue to the next idx
  }
  console.log(word + " : " + indexes.length);
};
// invoke the function
wordCount("The ball is on the table", "THE");

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

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
const distance = (x1, y1, x2, y2) => {
  var dx = x2 - x1;
  var dy = y2 - y1;
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

// Return an array that holds N elements of the Fibonacci Series/Additive Sequence
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

// Function defined and immediately invoked:
const tenSquared = (function (x) {
  return x * x;
})(10);
console.log(tenSquared);

// Function to calculate the hypotenuse of a Triangle.
const hypotenuse = (a, b) => {
  const square = (x) => {
    return x * x;
  };
  return Math.sqrt(square(a) + square(b));
};
// invoke the function
console.log(hypotenuse(3, 4));

var a = [33, 4, 1111, 222];
var b = ["33", "4", "1111", "222"];
// invoke the function
console.log(a.sort()); // Alphabetical order: [1111, 222, 33, 4]
console.log(a.reverse()); // same as Numerical order: [4, 33, 222, 1111]
console.log(b.reverse()); // same as Numerical order: ['222', '1111', '4', '33']

a.sort(function (x, y) {
  return x - y; // Numerical order: [4, 33, 222, 1111]
});
// invoke the function
console.log(a);

a.sort(function (x, y) {
  return y - x; // Reverse numerical order: [1111, 222, 33, 4]
});
// invoke the function
console.log(a);

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

// SORT DATASET
const employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];
// sort by salary
employees.sort(function (x, y) {
  return x.salary - y.salary;
});
// invoke the function
console.table(employees);

// QUICK SORT
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
console.log(quickSort([1, 6, 3, 4, 5, 1, 0, 4, 8]));

// MERGE SORT
const mergeSort = (originalArr) => {
  if (originalArr.length <= 1) {
    return originalArr;
  }
  var [middle] = [Math.floor(originalArr.length / 2)];
  var [left, right] = [originalArr.slice(0, middle), originalArr.slice(middle)];

  // compare the arrays element by element and return the concatenated result
  const merge = (left, right) => {
    var [sortedArr, leftIndex, rightIndex] = [[], 0, 0];
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArr.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArr.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return sortedArr
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  };
  return merge(mergeSort(left), mergeSort(right));
};
// invoke the function
let list = [1, 6, 3, 4, 5, 1, 0, 4, 8];
console.log(mergeSort(list));

// BINARY SEARCH
const binarySearch = (arr, ele) => {
  var [low, high] = [0, arr.length - 1];
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === ele) {
      return mid;
    }
    if (arr[mid] > ele) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null; // if not found: same as return -1
};
// invoke the function
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // null

// Test string if Palindrome
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

// Test strings if Anagram
const areAnagram = (str1, str2) =>
  str1.toLowerCase().split("").sort().join("") ===
  str2.toLowerCase().split("").sort().join("");
// invoke the function
console.log(areAnagram("listen", "silent"));
console.log(areAnagram("they see", "the eyes"));
console.log(areAnagram("node", "deno"));
console.log(areAnagram("stop", "pots"));

// Object utility functions that enumerate properties
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

// Given an array A of N integers,
// return the smallest positive integer (greater than 0) that does not occur in A.
const solution = (A) => {
  for (i = 1; i <= A.length; i++) {
    if (!A.includes(i)) return i;
  }
};
// invoke the function
var arr = [1, 3, 6, 4, 1, 2]; // 5
var arr = [1, 2, 3]; // 4
var arr = [-1, -3]; // 1
console.log(solution(arr));

// Return an array of Prime Numbers in the range [start..end]
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
    if (prime) {
      primesList.push(start);
    }
  }
  return primesList;
};
// invoke the function
console.log(getPrimes(200, 300));

// Return the max element in unsorted array
function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}
// invoke the function
console.log(find_max([5, 2, 3, 8, 1, 0])); // 8
