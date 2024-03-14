/*
ARRAYS
 - typeof el === "string"
 - type of el === "number"

 -> sorting elements (ascend & descend)
 -> reversing elements
 -> searching element (e.g find index or indices of searched element, find duplicates)
 -> counting element (based on condition)
 -> return object representing character count
 -> RegExp
 -> swap character
 */

// SORT ASCENDING
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
console.log(sortAlpsNums(["a", "B", "A", "c", "b"])); // ["a", "A", "B", "b", "c"]
console.log(sortAlpsNums([2, 3, 10, 4, 100])); // [2, 3, 4, 10, 100]
console.log(
  sortAlpsNums(["ant", "33", "Bug", "4", "cat", "1111", "Dog", "222"])
); // ['1111','222','33','4','ant','Bug','cat','Dog']

// SORT DESCENDING
var solution = function (a) {
  a.sort(function (e1, e2) {
    // numerical sort
    return e2 - e1;
  });
  return a;
};
// invoke the function
console.log(solution([4, 2, 6, 5, 9])); // [9, 6, 5, 4, 2]

// REVERSE ELEMENTS BASED ON CONDITION
var reverseInteger = function (num) {
  arr = String(num).split("");

  let reverseArr = [];
  arr.forEach((el) => {
    if ("0123456789".includes(el)) reverseArr.unshift(el);
  });
  // integer range
  if (
    Number(reverseArr.join("")) < (-2) ** 31 ||
    Number(reverseArr.join("")) > 2 ** 31
  )
    return 0;
  //
  if (arr[0] === "-") return Number(arr[0] + reverseArr.join(""));
  else return Number(reverseArr.join(""));
};
// invoke the function
console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321
console.log(reverseInteger(120)); // 21
console.log(reverseInteger(-1234567890)); // -987654321

// SEARCH BASED ON CONDITION
var linearSearch = function (array, element) {
  let indices = [];
  for (let [idx, el] of array.entries()) {
    if (el.includes(element)) {
      indices.push(idx);
    }
  }
  // index / indices of searched element
  return indices; // if indices.length > 1, then element is Duplicate
};
// invoke the function
console.log(
  linearSearch(
    ["ball", "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // [0, 5]

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

// LENGTH OF LAST WORD
var lengthOfLastWord = function (s) {
  let unfiltered_words = s.replaceAll(" ", ",").split(",");
  let filtered_words = [];
  let result = [];

  unfiltered_words.filter((word) => {
    if (word.length > 0) filtered_words.push(word);
    result = filtered_words[filtered_words.length - 1];
  });

  return result.length;
};
// invoke the function
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6

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

/* CHECK PERMUTATION
Given two strings, write a method to decide if one is a permutation
of the other. */
var isPermutation = function (s1, s2) {
  let regexp = /[^A-Za-z0-9]/gi;
  // sort the input and return the result of the comparison
  return (
    s1.toLowerCase().replace(regexp, "").split("").sort().join("") ===
    s2.toLowerCase().replace(regexp, "").split("").sort().join("")
  );
};
// invoke the function
console.log(isPermutation("amadm", "madam")); // true

// CHECK IF STRING IS PERMUTATION OF A PALINDROME
var isPalindromePermutation = function (s) {
  let regexp = /[^A-Za-z0-9]/gi;
  let res = new Set();
  return (
    s
      .toLowerCase()
      .replace(regexp, "")
      .split("")
      .reduce((set, item) => {
        (set.has(item) && set.delete(item)) || set.add(item);
        return set;
      }, res).size <= 1
  );
};
// invoke the function
console.log(isPalindromePermutation("refer")); // true
console.log(isPalindromePermutation("rrfee")); // true
console.log(isPalindromePermutation("taco cat")); // true
console.log(isPalindromePermutation("atco cta")); // true

/* STRING COMPRESSION: Implement a method to perform basic string compression using the
counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3.
If the "compressed" string would not become smaller than the original string, your method
should return the original string.
You can assume the string has only uppercase and lowercase letters (a - z). */
var strCompression = (s) => {
  s = s.toLowerCase().replace(/[^A-Za-z]/g, "");
  let [compstr, count] = ["", 1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      compstr = compstr + s[i] + count;
      count = 1;
    }
  }
  if (compstr.length < s.length) return compstr;
  return s;
};
// invoke the function
console.log(strCompression("aabCccccaaa")); // a2b1c5a3
console.log(strCompression("wwwaabbbb")); // w3a2b4
console.log(strCompression("kkkkj")); // k4j1
console.log(strCompression("aab")); // aab

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

// LARGEST SUBARRAY SUM
var largestSubarraySum = function (array) {
  let presum = 0;
  let cursum = 0;
  let accumulator = [];
  array.forEach((el) => {
    cursum = Math.max(presum, cursum + el);
    accumulator.push(cursum);
  });
  return Math.max(...accumulator);
};
// invoke the function
console.log(largestSubarraySum([1, 100, 4, 15, 9, 30])); // 159
console.log(largestSubarraySum([1, 100, 4, 15, 9, 30, -1])); // 159
console.log(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30])); // 159
console.log(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1])); // 159
console.log(largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(largestSubarraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4])); // 0
console.log(largestSubarraySum([2, -8, 3, -2, 4, -10])); // 5

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

// GROUP ANAGRAMS
// sort an array of strings so that all the anagrams are next to each other
var groupAnagrams = function (nums) {
  let obj = [];
  nums.forEach((el) => {
    let chars = el.split("").sort();
    //
    if (obj[chars]) {
      return obj[chars].push(el);
    } else return (obj[chars] = [el]);
  });

  obj = Object.values(obj);

  return obj;

  // let anagrams = []; // for sorting anagrams
  // obj.filter((item) => {
  //   anagrams.push(item.sort());
  // });

  // return anagrams.sort();
};
// invoke the function
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(groupAnagrams(["321", "213", "897", "456", "987", "798"]));
// [['321', '213'], ['897', '987', '798'], ['456']]
console.log(groupAnagrams([""])); // [['']]
console.log(groupAnagrams(["a"])); // [['a']]

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

// LONGEST COMMON PREFIX
var longestCommonPrefix = function (a) {
  let characters = [];

  a.every((el) => {
    //for (let i = 0; i < el.length; i++) {
    if (el[0] === "f") characters.push(el[0]);
    if (el[1] === "l") characters.push(el[1]);
    if (el[2] === "o") characters.push(el[2]);
    if (el[3] === "w") characters.push(el[3]);
    //}
  });
  return characters;
};
// invoke the function
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // ["f", "l"] -> 2
console.log(longestCommonPrefix(["flower", "floor", "flood"])); // ["f", "l", "o"] -> 3
console.log(longestCommonPrefix(["Mwanika", "Stephen", "Crispin"])); // [] -> 0
console.log(longestCommonPrefix([])); // [] -> 0

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
