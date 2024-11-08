/* Given a list of emails and URLs, return a dictionary, where each key is a URL and the
   value is how many emails have the same domain.
   Note that the domains begin with "www", whereas the emails do not, and that emails with
   domains not in the list of URLs should be ignored. */

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
    if (!obj[domain]) return (obj[domain] = 1);
    return obj[domain]++;
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

// 3Sum and more
var threeSum = function (nums, target) {
  let res = [];
  let subseq = [];

  // sum subsequences
  function sum(e1, e2) {
    return e1 + e2;
  }
  // don't use the element twice
  let unique = [];
  nums.filter((el) => {
    if (unique.includes(el)) unique.push("x");
    else unique.push(el);
  });
  // define helper function
  function subsequences(e1, e2) {
    let arr = e1.map((set) => [...set, e2]);
    return e1.concat(arr);
  }
  //
  unique.reduce(subsequences, [res]).forEach((el) => {
    if (el.length === 3 && el.reduce(sum) === target)
      subseq.push([
        unique.indexOf(el[0]),
        unique.indexOf(el[1]),
        unique.indexOf(el[2]),
      ]);
  });

  if (subseq.length > 0) return subseq;
  return -1;
};
// invoke the function
console.log(threeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
// [ [ 2, 3, 4 ], [ 1, 3, 5 ], [ 0, 4, 5 ], [ 1, 2, 6 ], [ 0, 3, 6 ], [ 0, 2, 7 ], [ 0, 1, 8 ] ]
console.log(threeSum([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 0, 3, 4 ], [ 0, 2, 5 ] ]
console.log(threeSum([5, 6, 7, 8, 9], 10)); // -1
console.log(threeSum([4, 5, 6, 6, 7], 11)); // -1

// Count Two's:
var count_twos = function (nums, target) {
  let pattern = new RegExp(target.toString(), "gi");
  let arr = nums.join("").match(pattern);
  if (arr !== null) return arr.length;
  return -1;
};
// invoke the function
console.log(
  count_twos([2, 3, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 2)
); // 13

// Count Two's and Three's:
var count_twos = function (nums, target) {
  let pattern1 = new RegExp(target.toString()[0], "gi");
  let pattern2 = new RegExp(target.toString()[1], "gi");
  let arr1 = nums.join("").match(pattern1);
  let arr2 = nums.join("").match(pattern2);
  if (arr1 !== null && arr2 !== null) return arr1.length + arr2.length;
  return -1;
};
// invoke the function
console.log(
  count_twos([2, 3, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 23)
); // 17

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
    if (str.includes(el))
      idx.push([...new Set([str.indexOf(el), str.lastIndexOf(el)])]);
    else idx.push(-1);
  });
  return idx;
};
// invoke the function
console.log(
  multi_search("mississippi", ["is", "ppi", "hi", "sis", "i", "ssippi"])
); // [ [ 1, 4 ], [ 8 ], -1, [ 3 ], [ 1, 10 ], [ 5 ] ]

// Word frequencies:
var word_frequencies = function (book, word) {
  let obj = {};
  book
    .toLowerCase()
    .split(" ")
    .forEach((el) => {
      if (obj[el]) return obj[el]++;
      return (obj[el] = 1);
    });

  let freq = null;
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

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS:
var longestSubstring = function (str) {
  let uniquesubstr,
    count = 0,
    res = null;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      let substr = str.slice(i, j);
      uniquesubstr = [...new Set(substr.split(""))].join("");
      // Common unique substring
      if (str.includes(uniquesubstr)) {
        count = Math.max(count, uniquesubstr.length);
        if (count === uniquesubstr.length) res = [uniquesubstr, count];
      }
    }
  }
  if (str.length <= 1) return [str, str.length];
  return res;
};
// invoke the function
console.log(longestSubstring("abbbcabcdefef")); // [ 'abcdef', 6 ]
console.log(longestSubstring("dvdf")); // [ 'vdf', 3 ]
console.log(longestSubstring("pwwkew")); // [ 'kew', 3 ]
console.log(longestSubstring("")); // [ '', 0 ]

// LONGEST COMMON SUBSTRING WITHOUT REPEATING CHARACTERS:
var longestCommonSubstring = function (string1, string2) {
  let count = 0,
    res = null;
  for (let i = 0; i < string1.length; i++) {
    for (let j = i + 1; j < string1.length + 1; j++) {
      let substr1 = [...new Set(string1.slice(i, j).split(""))].join("");
      // Common unique substring
      if (string2.includes(substr1)) {
        count = Math.max(count, substr1.length);
        if (count === substr1.length) res = [substr1, count];
      }
    }
  }
  return res;
};
// invoke the function
console.log(longestCommonSubstring("raven", "havoc")); // [ 'av', 2 ]
console.log(longestCommonSubstring("abbcc", "dbbcc")); // [ 'bc', 2 ]
console.log(longestCommonSubstring("ABCD", "ACBAD")); // [ 'D', 1 ]
console.log(longestCommonSubstring("ABCD", "ABCAD")); // [ 'ABC', 3 ]

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS:
var longestCommonSubsequence = function (text1, text2) {
  let res = [],
    count = 0,
    result = null;

  // define helper function
  function subsequences(e1, e2) {
    let arr = e1.map((set) => [...set, e2]);
    return e1.concat(arr);
  }
  //
  text1
    .split("")
    .reduce(subsequences, [res])
    .filter((el) => {
      let subseq1 = [...new Set(el)].join("");
      //
      text2
        .split("")
        .reduce(subsequences, [res])
        .filter((el) => {
          // Common unique subsequence
          if (el.join("").includes(subseq1)) {
            count = Math.max(count, subseq1.length);
            if (count === subseq1.length) result = [subseq1, count];
          }
        });
    });
  return result;
};
// invoke the function
console.log(longestCommonSubsequence("raven", "havoc")); // [ 'av', 2 ]
console.log(longestCommonSubsequence("abbcc", "dbbcc")); // [ 'bc', 2 ]
console.log(longestCommonSubsequence("ABCD", "ACBAD")); // [ 'ACD', 3 ]
console.log(longestCommonSubsequence("ABCD", "ABCAD")); // [ 'ABCD', 4 ]

/* ------------------------------------------------------------------------------------ */

// Length of Longest Consective Sequence:
var longestConsective = function (nums) {
  let count = 1;
  let longestCount = 1;
  nums.sort(function (e1, e2) {
    return e1 - e2;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] - 1) {
      count++;
      longestCount = Math.max(longestCount, count);
    } else if (nums[i] === nums[i + 1]) continue;
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

// Contiguous sequence with the largest sum:
// Maximum subarray sum:
var maxSum = function (nums) {
  let dict = [];

  function sum(e1, e2) {
    return e1 + e2;
  }
  //
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      dict.push({
        subarray: nums.slice(i, j),
        total: nums.slice(i, j).reduce(sum),
      });
      dict.sort(function (prop1, prop2) {
        return prop2.total - prop1.total;
      });
    }
  }
  return Object.values(dict[0])[0];
};
// invoke the function
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // [ 4, -1, 2, 1 ] -> 6
console.log(maxSum([-2, 0, -1])); // [ 0 ] -> 0
console.log(maxSum([-2, -3, -1])); // [ -1 ] -> -1
console.log(maxSum([2, -8, 3, -2, 4, -10])); // [ 3, -2, 4 ] -> 5

// Maximum subarray product:
var maxProduct = function (nums) {
  let dict = [];

  function product(e1, e2) {
    return e1 * e2;
  }
  //
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length + 1; j++) {
      dict.push({
        subarray: nums.slice(i, j),
        total: nums.slice(i, j).reduce(product),
      });
      dict.sort(function (prop1, prop2) {
        return prop2.total - prop1.total;
      });
    }
  }
  return Object.values(dict[0])[0];
};
// invoke the function
console.log(maxProduct([2, 3, -2, 4])); // [ 2, 3 ] -> 6
console.log(maxProduct([-2, -3, -1])); // [ -2, -3 ] -> 6
console.log(maxProduct([-2, 0, -1])); // [ -2, 0 ] -> 0

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

// Sort people by height (Descending Sort):
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

// Ascending Multilevel Sorting -> sort by grade then by age
var multiLevelSorting = function (students) {
  return students.sort(function (prop1, prop2) {
    return prop1.grade > prop2.grade || prop1.age - prop2.age;
  });
};
// invoke the function
console.log(
  multiLevelSorting([
    { name: "John", grade: "A", age: 15 },
    { name: "Jane", grade: "B", age: 12 },
    { name: "Dave", grade: "B", age: 10 },
  ])
);
/*[
  { name: 'John', grade: 'A', age: 15 },
  { name: 'Dave', grade: 'B', age: 10 },
  { name: 'Jane', grade: 'B', age: 12 }
]*/

// Sort Words By Count (Ascending Sort):
var sortWordsByCount = function (str) {
  let nums = str
    .toLowerCase()
    .replace(/[^a-z ]/g, "")
    .split(" ");

  // Get object
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    return (obj[el] = 1);
  });

  // sort entries by values
  let res = Object.entries(obj);
  res.sort(function (arr1, arr2) {
    return arr1[1] - arr2[1];
  });
  // retrieve entries by keys
  let sorted_words = [];
  res.forEach((el) => {
    if (el[0].length > 0) sorted_words.push(el[0]);
  });

  return sorted_words;
};
// invoke the function
console.log(
  sortWordsByCount(
    "This is the TEXT. Text, text, text - THIS TEXT! Is this the text?"
  )
); // [ 'is', 'the', 'this', 'text' ]
console.log(sortWordsByCount("The quick brown fox jumps over the lazy dog"));
// [ 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog', 'the' ]

// Given two strings, write a method to decide if one is a palindrome of the other. */
var isPalindromes = function (str1, str2) {
  let merge_str = str1 + str2;
  // Then make the string case-insensitive by converting to lowercase
  merge_str = merge_str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  if (str1.length !== str2.length) return false;
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

// Shopping Cart:
class ShoppingCart {
  // Encapsulate class methods
  constructor(total, items) {
    this.total = total;
    this.items = items;
  }
  add_item(item_name, quantity, price) {
    this.total += quantity * price;
    this.items += quantity;
  }
  remove_item(item_name, quantity, price) {
    this.total -= quantity * price;
    this.items -= quantity;
  }
  checkout(cash_paid) {
    const balance = cash_paid - this.total;
    if (cash_paid < this.total) console.log("Cash paid not enough");
    console.log(balance);
  }
  toString() {
    return { Total: this.total, Items: this.items };
  }
}
// class Shop inherits class ShoppingCart:
class Shop extends ShoppingCart {
  constructor(quantity) {
    super();
    this.quantity = quantity;
  }
  // Polymorphism
  // Override the method "remove_item"
  remove_item() {
    this.quantity -= 1;
  }
  toString() {
    return this.quantity;
  }
}
// invoke the function
var products = new ShoppingCart(0, 0);
products.add_item("rice", 5, 2500);
console.log(products.toString());
products.remove_item("rice", 3, 2500);
console.log(products.toString());
products.checkout(4000);

var products = new Shop(100);
products.remove_item();
console.log(products.toString());

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
var balancedBrackets2 = function (s) {
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
