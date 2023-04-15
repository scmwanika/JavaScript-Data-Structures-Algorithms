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
  var regrex = /[^A-Za-z0-9]/gi;
  let [vowels, consonants] = [[], []];
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  for (var char of string.toLowerCase().replace(regrex, "")) {
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

// Return an object representing the character count of a string:
function charCount(str) {
  var regrex = /[^A-Za-z0-9]/gi;
  // make the string case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  // finally, convert to an array
  var arr = str.toLowerCase().replace(regrex, "").split("");
  return arr.reduce(function (cur, nex) {
    cur[nex] = cur[nex] + 1 || 1;
    return cur;
  }, {});
}
// invoke the function
console.log(charCount("Mwanika Stephen Crispin"));

// Test strings if Anagram:
function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var regrex = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  str1 = str1.toLowerCase().replace(regrex, "").split("").sort().join("");
  str2 = str2.toLowerCase().replace(regrex, "").split("").sort().join("");
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

// Test string if Palindrome:
const isPalindrome = (str) => {
  var regrex = /[^A-Za-z0-9]/gi;
  // make the string case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the string
  str = str.toLowerCase().replace(regrex, "");
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
  var regrex = /[^A-Za-z0-9]/gi;
  // make the strings case insensitive by converting to the same case
  // then remove whitespace, and any unwanted characters from the strings
  // also reverse the second string, and comapare to the first string
  str1 = str1.toLowerCase().replace(regrex, "");
  str2 = str2.toLowerCase().replace(regrex, "").split("").reverse().join("");
  if (str1 === str2) {
    return true;
  }
  return false;
}
// invoke the function
console.log(isReverse("Pots", "Stop"));

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

// Implement quick sort algorithm:
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

// Implement merge sort algorithm:
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

// Implement linear search algorithm:
const linearSearch = (array, element) => {
  for (const [idx, ele] of array.entries()) {
    if (ele === element) {
      return idx;
    }
  }
};
// invoke the function
console.log(linearSearch(["a", "b", "c", "d"], "d")); // 3

// Implement binary search algorithm:
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

// Implement breadth-first search algorithm:
function breadthFirstSearch(root, target) {
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.value === target) {
      return node;
    }
    for (let i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
}

// Implement depth-first search algorithm:
function depthFirstSearch(root, target) {
  if (root.value === target) {
    return root;
  }
  for (let i = 0; i < root.children.length; i++) {
    let result = depthFirstSearch(root.children[i], target);
    if (result !== null) {
      return result;
    }
  }
  return null;
}

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

// Rotate the string K times in the left direction:
function rotateLeft(string, K) {
  let str1 = string.slice(K, string.length);
  let str2 = string.slice(0, K);
  let merge_string = str1 + str2;
  return merge_string;
}
// invoke the function
console.log(rotateLeft("JavaScript", 2)); // vaScriptja

// Rotate the array K times in the left direction:
function rotateArrayLeft(array, K) {
  let arr1 = array.slice(K, array.length);
  let arr2 = array.slice(0, K);
  merge_array = arr1.concat(arr2);
  return merge_array;
}
// invoke the function
console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]

// Rotate the string clockwise(right) or anti-clockwise(left)
function rotateString(string, K, direction) {
  if (direction === "right") {
    // rotate clockwise(right)
    K = string.length - K;
    let str1 = string.slice(K, string.length);
    let str2 = string.slice(0, K);
    let merge_string = str1 + str2;
    return merge_string;
  }
  if (direction === "left") {
    // rotate anti-clockwise(left)
    let str1 = string.slice(K, string.length);
    let str2 = string.slice(0, K);
    let merge_string = str1 + str2;
    return merge_string;
  }
}
// invoke the function
console.log(rotateString("JavaScript", 2, "right")); // ptjavaScri

// Rotate the array clockwise(right) or anti-clockwise(left)
function rotateString(array, K, direction) {
  if (direction === "right") {
    // rotate clockwise(right)
    K = array.length - K;
    let arr1 = array.slice(K, array.length);
    let arr2 = array.slice(0, K);
    merge_array = arr1.concat(arr2);
    return merge_array;
  }
  if (direction === "left") {
    // rotate anti-clockwise(left)
    let arr1 = array.slice(K, array.length);
    let arr2 = array.slice(0, K);
    merge_array = arr1.concat(arr2);
    return merge_array;
  }
}
// invoke the function
console.log(rotateString([1, 2, 3, 4, 5], 2, "right")); // [4, 5, 1, 2, 3]

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

