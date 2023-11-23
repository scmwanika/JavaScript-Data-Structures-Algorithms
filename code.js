// TRAVERSE A STRING
var traverseString = function (s) {
  let characters = [];
  for (let i = 0; i < s.length; i++) {
    characters.push(s[i]);
  }
  return characters;
};
// invoke the function
console.log(traverseString("Mwanika"));

// same as:
var listCharacters = function (s) {
  return s.split("");
};
// invoke the function
console.log(listCharacters("Mwanika"));

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

// // LENGTH OF LAST WORD
// var lengthOfLastWord = function (s) {
//   let unfiltered_words = s.replaceAll(" ", ",").split(",");
//   let filtered_words = [];
//   let result = [];

//   unfiltered_words.filter((word) => {
//     if (word.length > 0) filtered_words.push(word);
//     result = filtered_words[filtered_words.length - 1];
//   });

//   return result.length;
// };
// // invoke the function
// console.log(lengthOfLastWord("Hello World")); // 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
// console.log(lengthOfLastWord("luffy is still joyboy")); // 6

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

// // LONGEST PREFIX
// var longestPrefix = function (a) {
//   let characters = [];
//   let lens = [];
//   let minlens;
//   let shortests;
//   //
//   a.filter((el) => {
//     lens.push(el.length);
//     minlens = Math.min(...lens);
//     // Get string with minimum length
//     if (el.length === minlens) shortests = el;
//   });
//   //
//   a.every((el) => {
//     for (let i = 0, j = 0; i < el.length, j < shortests.length; i++, j++) {
//       if (el[i] === shortests[j]) characters.push(el[i]);
//     }
//   });
//   return characters;
// };
// // invoke the function
// console.log(longestPrefix(["flower", "floor", "flood"])); // ["f", "l", "o"] -> 3
// console.log(longestPrefix(["Mwanika", "Stephen", "Crispin"])); // [] -> 0
// console.log(longestPrefix([])); // [] -> 0

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

/* CHECK PALINDROME
Given two strings, write a method to decide if one is a palindrome 
of the other. */
var isPalindrome = function (s) {
  let regexp = /[^A-Za-z0-9]/gi;
  s = s.toLowerCase().replace(regexp, "");
  // reverse the input and return the result of the comparison
  return s === s.split("").reverse().join("");
};
// invoke the function
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("")); // true

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

/* STRING COMPRESSION: Implement a method to perform basic sing compression using the 
counts of repeated characters. For example, the sing aabcccccaaa would become a2blc5a3. 
If the "compressed" sing would not become smaller than the original sing, your method 
should return the original sing. 
You can assume the string has only uppercase and lowercase letters (a - z). */
var strCompression = (s) => {
  let regexp = /[^A-Za-z]/gi;
  s = s.toLowerCase().replace(regexp, "");
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
console.log(strCompression("aabCccccaaa")); // a2blc5a3
console.log(strCompression("wwwaabbbb")); // w3a2b4
console.log(strCompression("kkkkj")); // k4j1
console.log(strCompression("aab")); // aab

// ANOTHER VERSION OF STRING COMPRESSION -> NOT RELATED TO ABOVE
var strCompressions = (s) => {
  let regexp = /[^A-Za-z0-9]/gi;
  let obj = {};
  s.toLowerCase()
    .replace(regexp, "")
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

// LONGEST COMMON SUBSEQUENCE
var solution = function (s1, s2) {
  if (s1.length === 0 || s2.length === 0) return "";
  if (s1.slice(-1) === s2.slice(-1))
    return solution(s1.slice(0, -1), s2.slice(0, -1)) + s1.slice(-1);

  let subseq1 = solution(s1.slice(0, -1), s2);
  let subseq2 = solution(s1, s2.slice(0, -1));
  if (subseq1.length > subseq2.length) return subseq1;
  else return subseq2;
};
// invoke the function
console.log(solution("ABCD", "ACBAD")); // ACD
console.log(solution("ABCD", "ABCAD")); // ABCD
console.log(solution("RAVEN", "HAVOC")); // AV
console.log(solution("ABBCC", "DBBCC")); // BBCC

// LARGEST SUBARRAY SUM
var largestSubarraySum = function (array) {
  let presum = 0;
  let cursum = 0;
  //let nexsum = 0;
  let accumulator = [];
  array.forEach((el) => {
    cursum = Math.max(presum, cursum + el);
    //nexsum = Math.max(cursum, nexsum);
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
  obj = Object.values(obj);
  obj.filter((el) => {
    if (el % 2 === 0) pairs.push(el / 2);
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
//console.log(groupAnagrams([321, 213, 897, 456, 987, 798]));

// ------------------------------------------------------------------------------------ //

// REVERSE INTEGER
var reverse = function (x) {
  let reversed_arr = [];
  let result;
  x = String(x);
  x = x.split("");
  x.forEach((el) => {
    reversed_arr.unshift(el);
    result = reversed_arr.join("");
  });
  return result;
};
// invoke the function
console.log(reverse(-123));

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

//...............................................................

// REVERSE STRING -> method1
var reverseString = function (str) {
  var reversed_string = [];
  str.split("").forEach((el) => {
    reversed_string.unshift(el);
  });
  return reversed_string.join("");
};
// invoke the function
console.log(reverseString("Mwanika")); // akinawM
console.log(reverseString("JavaScript is awesome")); // emosewa si tpircSavaJ

// REVERSE STRING -> method2
var reverseString = function (str) {
  var reversed_string = "";
  for (var i = str.length; i > -1; i--) {
    reversed_string = reversed_string + str[i];
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

// FLATTEN AN ARRAY
var flattenArray = function (arr) {
  let new_arr = [];

  arr.forEach((el) => {
    new_arr.push(el.join());
  });
  return new_arr.join().replaceAll(" ", ",").split(",");
};
// invoke the function
var arr = [
  ["Mwanika", "Stephen", "Crispin"],
  ["Akoth", "Justine"],
  ["Olweny", "John"],
];
console.log(flattenArray(arr));

// REMOVE THE FIRST TWO ELEMENTS OF AN ARRAY USING ARRAY DESTRUCTURING
function removeFirstTwoElements(arr) {
  const [, , ...list] = arr;
  return list;
}
// invoke the function
var arr = [8, 9, 10, 11, 12];
console.log(removeFirstTwoElements(arr)); // [10, 11, 12]

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
