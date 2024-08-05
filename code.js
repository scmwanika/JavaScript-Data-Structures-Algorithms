var count_email_domains = function (emails, urls) {
  /* Approach:
        - search for domain in emails array that exactly match domain in urls array
        - extract only the matching domain from emails array and append to urls array
        - add the prefix www. while appending to urls array

        Assumption:
        urls array is large enough to hold email domains

        Data structures:
        Array, Dictionary
        */

  // Traverse emails and remove characters before the domain
  // Append the remaining characters to urls array and prefix with www.
  emails.filter((el) => {
    if (urls.includes("www." + el.split("@")[1]))
      urls.push("www." + el.split("@")[1]);
  });

  // Get urls count with a dictionary
  let obj = {};
  urls.forEach((domain) => {
    if (obj[domain]) return obj[domain]++;
    return (obj[domain] = 1);
  });

  // Reduce key count by 1
  let domain_count = [];
  Object.entries(obj).forEach(([k, v]) => {
    domain_count.push(k, v - 1);
  });

  return domain_count;
};
// invoke the function
console.log(
  count_email_domains(
    ["foo@a.com", "bar@a.com", "baz@b.com", "qux@d.com"],
    ["www.a.com", "www.b.com", "www.c.com"]
  )
); // [ 'www.a.com': 2, 'www.b.com': 1, 'www.c.com': 0 ]

/* ------------------------------------------------------------------------------------ */

// Split Array into chunks:
var splitArray = function (nums, chunksize) {
  return new Array(Math.ceil(nums.length / chunksize))
    .fill()
    .map(() => nums.splice(0, chunksize));
};
// invoke the function
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// 3Sum and more........................to be improved for unsorted
var threeSum = function (nums, target) {
  let res = [];
  let subseq = [];

  // sum subsequences
  function sum(e1, e2) {
    return e1 + e2;
  }

  // don't use the element twice............................
  let unique = [];
  nums.filter((el) => {
    if (unique.includes(el)) unique.push("x");
    else unique.push(el);
  });
  //

  let subsequences = (subset, value) =>
    subset.concat(subset.map((set) => [...set, value]));
  //
  unique.reduce(subsequences, [res]).forEach((el) => {
    if (el.length === 3 && el.reduce(sum) === target) subseq.push(el);
  });

  // return indices instead...
  let indices = [];
  subseq.filter((arr) => {
    for (let i = 0; i < unique.length; i++) {
      if (arr.includes(unique[i])) indices.push(i);
    }
  });
  // chunks of 3
  let result = new Array(Math.ceil(indices.length / 3))
    .fill()
    .map(() => indices.splice(0, 3));

  if (result.length > 0) return result;
  return -1;

  // if (subseq.length > 0) return subseq;
  // return -1;
};
// invoke the function
console.log(threeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
// [ [ 2, 3, 4 ], [ 1, 3, 5 ], [ 0, 4, 5 ], [ 1, 2, 6 ], [ 0, 3, 6 ], [ 0, 2, 7 ], [ 0, 1, 8 ] ]
console.log(threeSum([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 0, 3, 4 ], [ 0, 2, 5 ] ]
console.log(threeSum([5, 6, 7, 8, 9], 10)); // -1
console.log(threeSum([4, 5, 6, 6, 7], 11)); // -1

/* 2Sum (Pairs Sum):
Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target. You may assume that each input would have exactly one
solution, and you may not use the same element twice.You can return the answer in any order. 
*/
var twoSum = function (nums, target) {
  let pair = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pair.push([nums[i], nums[j]]);
        //pair.push([i, j]);
      }
    }
  }
  if (pair.length > 0) return pair;
  return -1;
};
// invoke the function
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 1, 9 ], [ 2, 8 ], [ 3, 7 ], [ 4, 6 ] ]
console.log(twoSum([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 1, 9 ], [ 1, 9 ], [ 3, 7 ], [ 4, 6 ] ]
console.log(twoSum([5, 6, 7, 8, 9], 10)); // -1
console.log(twoSum([4, 5, 6, 6, 7], 11)); // [ [ 4, 7 ], [ 5, 6 ], [ 5, 6 ] ]

// Count Two's:
var count_twos = function (nums) {
  nums = nums.join("").replace(/[^2]/g, "");

  return nums.length;
};
// invoke the function
console.log(count_twos([2, 12, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])); // 13

// Majority Element -> Is an element which takes up more than half of the items in the array:
var majority_element = function (nums) {
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    return (obj[el] = 1);
  });

  if (Math.max(...Object.values(obj)) > nums.length / 2) {
    return Number(
      Object.keys(obj).filter((k) => {
        return obj[k] === Math.max(...Object.values(obj));
      })
    );
  }
  return -1;
};
// invoke the function
console.log(majority_element([1, 2, 5, 9, 5, 9, 5, 5, 5])); // 5
console.log(majority_element([3, 1, 7, 1, 3, 7, 3, 7, 1, 7, 7])); // -1

// Multi Search:
var multi_search = function (str, substr) {
  let idx = [];

  substr.forEach((el) => {
    if (str.includes(el)) idx.push(str.indexOf(el));
    else idx.push(-1);
  });

  return idx;
};
// invoke the function
console.log(
  multi_search("mississippi", ["is", "ppi", "hi", "sis", "i", "ssippi"])
); // [ 1, 8, -1, 3, 1, 5 ]

// Word frequencies:
var word_frequencies = function (book, word) {
  let obj = {};
  book
    .toLowerCase()
    .replace(/ /gi, ",")
    .split(",")
    .forEach((el) => {
      if (obj[el]) return obj[el]++;
      return (obj[el] = 1);
    });

  let freq;
  Object.entries(obj).filter((el) => {
    if (el.includes(word)) freq = el;
  });

  if (!Object.keys(obj).includes(word)) return -1;
  return freq[1];
};
// invoke the function
console.log(
  word_frequencies("The quick brown fox jumps over fox the lazy dog", "the")
); // 2
console.log(
  word_frequencies("The quick brown fox jumps over fox the lazy dog", "th")
); // -1
console.log(
  word_frequencies("The quick brown fox jumps over fox the lazy dog", "they")
); // -1

// Contiguous sequence with the largest sum:
var largest_sequence = function (nums) {
  let res = null;
  let total = [];
  let largest_total = [];

  // sum subsequences
  function sum(e1, e2) {
    return e1 + e2;
  }

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      total.push(nums.slice(i, j).reduce(sum));
      largest_total = Math.max(...total);

      if (nums.slice(i, j).reduce(sum) === largest_total)
        res = nums.slice(i, j);
    }
  }
  return res;
};
// invoke the function
console.log(largest_sequence([2, -8, 3, -2, 4, -10])); // [ 3, -2, 4 ] -> 5

// Contiguous subsequence with the largest sum:
var subSequencesSubsets = function (nums) {
  let res = [];

  nums.filter((el) => {
    if (el > 0) res.push(el);
  });

  if (res.length > 0) return res;
  if (nums.length === 0) return -1;
  return Math.max(...nums);
};
// invoke the function
console.log(subSequencesSubsets([2, -8, 3, -2, 4, -10])); // [ 2, 3, 4 ] -> 9
console.log(subSequencesSubsets([-2, -8, -3, -2, -4, -10])); // [ -2 ] -> -2
console.log(subSequencesSubsets([])); // [ ] -> -1

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestSubstring = function (str) {
  let res = null;
  let unique_substr = null;
  let len = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      unique_substr = [...new Set(str.slice(i, j))].join("");

      // Length of each substr
      if (str.includes(unique_substr)) len.push(unique_substr.length);

      // Substring with maximum length
      if (
        str.includes(unique_substr) &&
        unique_substr.length === Math.max(...len)
      )
        res = unique_substr;
    }
  }
  return res;
};
// invoke the function
console.log(longestSubstring("abbbcabcdefef")); // abcdef
console.log(longestSubstring("dvdf")); // vdf
console.log(longestSubstring("pwwkew")); // kew
console.log(longestSubstring("")); // null

// LONGEST COMMON SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestCommonSubstring = function (str1, str2) {
  let res = null;
  let substrs1 = [];
  let substrs2 = [];
  let comsubstr = null;
  let len = [];

  // String 1 and String 2
  for (i = 0; i < str1.length, i < str2.length; i++) {
    for (j = i + 1; j < str1.length + 1, j < str2.length + 1; j++) {
      substrs1.push(str1.slice(i, j));
      substrs2.push(str2.slice(i, j));
    }
  }

  // Common unique substring
  for (let substr1 of substrs1) {
    for (let substr2 of substrs2) {
      if (substr2.includes(substr1)) {
        comsubstr = [...new Set(substr1)].join("");

        // Length of each substr
        len.push(comsubstr.length);

        // Substring with maximum length
        if (comsubstr.length === Math.max(...len)) res = comsubstr;
      }
    }
  }

  return res;
};
// invoke the function
console.log(longestCommonSubstring("raven", "havoc")); // av
console.log(longestCommonSubstring("abbcc", "dbbcc")); // bc
console.log(longestCommonSubstring("ABCD", "ACBAD")); // D
console.log(longestCommonSubstring("ABCD", "ABCAD")); // ABC

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestCommonSubsequence = function (str1, str2) {
  let res = null;
  let subseqs1 = [];
  let subseqs2 = [];
  let comsubseq = null;
  let len = [];

  // Subsequence 1
  let subs1 = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  str1
    .split("")
    .reduce(subs1, [subseqs1])
    .filter((el) => {
      subseqs1.push(el.join(""));
    });

  // Subsequence 2
  let subs2 = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  str2
    .split("")
    .reduce(subs2, [subseqs2])
    .filter((el) => {
      subseqs2.push(el.join(""));
    });

  // Common unique subsequence
  for (let subseq1 of subseqs1) {
    for (let subseq2 of subseqs2) {
      if (subseq2.includes(subseq1)) {
        comsubseq = [...new Set(subseq1)].join("");

        // Length of each subseq
        len.push(comsubseq.length);

        // Subsequence with maximum length
        if (comsubseq.length === Math.max(...len)) res = comsubseq;
      }
    }
  }

  return res;
};
// invoke the function
console.log(longestCommonSubsequence("raven", "havoc")); // av
console.log(longestCommonSubsequence("abbcc", "dbbcc")); // bc
console.log(longestCommonSubsequence("ABCD", "ACBAD")); // ACD
console.log(longestCommonSubsequence("ABCD", "ABCAD")); // ABCD

/* ------------------------------------------------------------------------------------ */

// Length of Longest Consective Sequence:
var longestConsective = function (nums) {
  count = 1;
  longestCount = 1;
  nums.sort(function (e1, e2) {
    return e1 - e2;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      count++;
      longestCount = Math.max(longestCount, count);
    } else if (nums[i] === nums[i - 1]) continue;
    else count = 1;
  }
  if (nums.length === 0) return 0;
  return longestCount;
};

// invoke the function
console.log(longestConsective([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsective([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsective([])); // 0
console.log(longestConsective([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // 7

// Implement a function to find the missing element in an array:
// Given an array nums of N integers,
// return the smallest positive integer (greater than 0) that does not occur in nums.
// First Missing Postive:
var firstMissingPositive = function (nums) {
  let i = 1;
  while (i <= nums.length) {
    if (!nums.includes(i)) return i;
    i++;
  }
  return i;
};
// invoke the function
console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
console.log(firstMissingPositive([0])); // 1
console.log(firstMissingPositive([1])); // 2
console.log(firstMissingPositive([2, 1])); // 3

/* Missing Two: You are given an array with all the numbers from 1 to N appearing exactly once,
   except for one number that is missing. How can you find the missing number in O(N) time and
   0(1) space? What if there were two numbers missing? */
// Missing Numbers:
var missingNumbers = function (nums) {
  let missing = [];

  for (let start = 1; start <= nums.length; start++) {
    if (!nums.includes(start)) {
      missing.push(start);
    }
  }
  return missing;
};
// invoke the function
console.log(missingNumbers([3, 0, 1])); // [ 2 ]
console.log(missingNumbers([0, 1])); // [ 2 ]
console.log(missingNumbers([0, 1, 3, 5])); // [ 2, 4 ]

// Maximum subarray sum:
var maxSum = function (nums) {
  let total = [];
  function sum(e1, e2) {
    return e1 + e2;
  }

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      total.push(nums.slice(i, j).reduce(sum));
    }
  }

  return Math.max(...total);
};
// invoke the function
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [ 4, -1, 2, 1 ] -> 6

// Maximum subarray product:
var maxProduct = function (nums) {
  let total = [];
  function product(e1, e2) {
    return e1 * e2;
  }

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      total.push(nums.slice(i, j).reduce(product));
    }
  }

  return Math.max(...total);
};
// invoke the function
console.log(maxProduct([2, 3, -2, 4])); // [ 2, 3 ] -> 6
console.log(maxProduct([-2, 0, -1])); // [ 0 ] -> 0

// Count subarrays with score less than k:
var countSubarrays = function (nums, k) {
  let lessThan = 0;
  function sum(e1, e2) {
    return e1 + e2;
  }

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      if (nums.slice(i, j).reduce(sum) * nums.slice(i, j).length < k)
        lessThan++;
    }
  }

  return lessThan;
};
// invoke the function
console.log(countSubarrays([2, 1, 4, 3, 5], 10)); // 6

/* ------------------------------------------------------------------------------------ */

// Delete and sort:
var deleteAndSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) delete nums[i];
  }
  return Object.values(nums).sort(function (e1, e2) {
    return e1 - e2;
  });
};
// invoke the function
console.log(deleteAndSort([11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [ 1, 3, 5, 7, 9, 11 ]

// Sort people:
var sortPeople = function (names, heights) {
  let obj = [];
  for (let i = 0; i < names.length, i < heights.length; i++) {
    obj.push({ name: names[i], height: heights[i] });
  }
  obj.sort(function (prop1, prop2) {
    return prop2.height - prop1.height;
  });
  //
  let sorted_names = [];
  obj.forEach((row) => {
    sorted_names.push(row.name);
  });
  return sorted_names;
};
// invoke the function
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // [ 'Mary', 'Emma', 'John' ]
/*
[
  { name: 'Mary', height: 180 },
  { name: 'Emma', height: 170 },
  { name: 'John', height: 165 }
] */

// Count word and sort:
var countWord = function (str) {
  let nums = str
    .toLowerCase()
    .replace(/[^A-Za-z ]/g, "")
    .replace(/ /gi, ",")
    .split(",");

  // Get object
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    return (obj[el] = 1);
  });

  // Implement Dictionary
  let dict = [];
  for (
    let i = 0;
    i < Object.keys(obj).length, i < Object.values(obj).length;
    i++
  ) {
    dict.push({ word: Object.keys(obj)[i], count: Object.values(obj)[i] });
  }
  dict.sort(function (prop1, prop2) {
    return prop1.count - prop2.count;
  });

  //
  let sorted_words = [];
  dict.forEach((row) => {
    sorted_words.push(row.word);
  });

  //
  let x = [];
  sorted_words.filter((el) => {
    if (el.length > 0) x.push(el);
  });

  return x;
};
// invoke the function
console.log(
  countWord("This is the TEXT. Text, text, text - THIS TEXT! Is this the text?")
); // [ 'is', 'the', 'this', 'text' ]

/* ------------------------------------------------------------------------------------ */

/* REMOVE DUPLICATES FROM SORTED ARRAY
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
such that each unique element appears only once. The relative order of the elements should
be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the
following things:

Change the array nums such that the first k elements of nums contain the unique elements in
the order they were present in nums initially. The remaining elements of nums
are not important as well as the size of nums.

Return k. */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return k;
};
// invoke the function
console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

/* REMOVE ELEMENT FROM UNSORTED ARRAY
Given an integer array nums unsorted, remove val in-place.
Then return the number of elements in nums. */
var removeElement = function (nums, val) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 0; // Initialize the count of unique elements to 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }

  return nums;
};
// invoke the function
console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5

/* ------------------------------------------------------------------------------------ */

// BALANCED BRACKETS

// method 1:
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

// method 2:
var balancedBrackets2 = function (s) {
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
console.log(balancedBrackets2("{[]()}")); // true
console.log(balancedBrackets2("{[(])}")); // false
console.log(balancedBrackets2("{[}")); // false

// // CHECK IF s2 CONTAINS A PERMUTATION OF s1:
// var checkInclusion = function (s1, s2) {
//   if (s2 === s1) return true;
//   if (s2.includes(s1.split("").reverse().join(""))) return true;
//   if ([...new Set(s2)].sort().join("") === [...new Set(s1)].sort().join(""))
//     return true;
//   return false;
// };
// // invoke the function
// console.log(checkInclusion("ab", "eidbaooo")); // true
// console.log(checkInclusion("ab", "eidboaoo")); // false
// console.log(checkInclusion("ab", "ab")); // true
// console.log(checkInclusion("abc", "bbbca")); // true
// console.log(checkInclusion("hello", "ooolleoooleh")); // false

// var removeDuplicatess = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) delete nums[i];
//   }
//   return Object.entries(nums).length;
// };
// // invoke the function
// console.log(removeDuplicatess([1, 1, 2])); // 2
// console.log(removeDuplicatess([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

// Given two strings, write a method to decide if one is a palindrome of the other. */
var isPalindromes = function (str1, str2) {
  let merge_str = str1 + str2;
  // Then make the string case-insensitive by converting to lowercase
  merge_str = merge_str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0, j = merge_str.length - 1; i < j; i++, j--) {
    if (merge_str[i] != merge_str[j]) return false;
  }
  return true;
};
// invoke the function
console.log(isPalindromes("stop", "pots")); // true

// Is Reverse
var isReverse = function (str) {
  // Then make the string case-insensitive by converting to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) return false;
  }
  return true;
};
// invoke the function
console.log(isReverse("refer")); // true

// Object Oriented Programming (checking balance):
class Checking_Balance {
  // Encapsulate class methods
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
    if (amount > this.balance) {
      console.log("Insufficient funds");
    }
  }
  toString() {
    return "Balance: " + this.balance;
  }
}
// invoke the function
var account = new Checking_Balance(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // "Insufficient funds"
console.log(account.toString()); // Balance: 750
