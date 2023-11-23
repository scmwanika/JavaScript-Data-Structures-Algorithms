/* 3SUM
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */
// var threeSum = function (nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]].sort());
//         }
//       }
//     }
//   }
//   // Transform arrays to strings
//   let stringArray = result.map(JSON.stringify);
//   // Remove duplicates
//   let uniqueStringArray = new Set(stringArray);
//   // Transform back to array of arrays
//   let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

//   return uniqueArray;
// };
// // invoke the function
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
// console.log(threeSum([0, 1, 1])); // []
// console.log(threeSum([0, 0, 0])); // [0, 0, 0]

// /* 4SUM
//   Given an array nums of n integers, return an array of all the
//   unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that: 0 <= a, b, c, d < n
//   a, b, c, and d are distinct. nums[a] + nums[b] + nums[c] + nums[d] == target
//   You may return the answer in any order. */
// var fourSum = function (nums, target) {
//   let result = [];

//   for (let a = 0; a < nums.length; a++) {
//     for (let b = a + 1; b < nums.length; b++) {
//       for (let c = b + 1; c < nums.length; c++) {
//         for (let d = c + 1; d < nums.length; d++) {
//           if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
//             result.push([nums[a], nums[b], nums[c], nums[d]]);
//           }
//         }
//       }
//     }
//   }
//   // Transform arrays to strings
//   let stringArray = result.map(JSON.stringify);
//   // Remove duplicates
//   let uniqueStringArray = new Set(stringArray);
//   // Transform back to array of arrays
//   let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

//   return uniqueArray;
// };
// // invoke the function
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[1, 0, -1, 0], [1, -1, -2, 2], [0, 0, -2, 2]]
// console.log(fourSum([2, 2, 2, 2, 2], 8)); // [2, 2, 2, 2]

// DIVIDE TWO INTEGERS
// For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.
/*
Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.*/
var divide = function (dividend, divisor) {
  let quotient = Math.round(dividend / divisor);
  return quotient;
};
// invoke the function
console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
console.log(divide(1, 2)); // 0...

/* ROTATE LINKED LIST RIGHT
  Given the head of a linked list, rotate the list to the right by k places.
  Definition for singly-linked list.
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  } */
var rotateRight = function (head, k) {
  //......to follow up
  let merge_list;
  k = head.length - k;
  let list1 = head.slice(k, head.length);
  let list2 = head.slice(0, k);
  return (merge_list = list1.concat(list2));
};
// invoke the function
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateRight([0, 1, 2], 4)); // [2, 0, 1]

// searched element in the rotated array
// Return an array that holds the indices of a searched element in the rotated array.
var search = function (nums, target) {
  // get indices of a searched element in the rotated array
  let indices = [];
  for (let [idx, el] of nums.entries()) {
    if (el === target) {
      indices.push(idx);
    }
  }

  if (indices.length > 0) return parseInt(indices);
  return -1;
};
// invoke the function
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1

// SUBSETS 1
var subsets = function (nums) {
  let result = [];
  var subs = (sub_sets, value) =>
    sub_sets.concat(sub_sets.map((set) => [...set, value]));
  return nums.reduce(subs, [result]);
};
// invoke the function
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // [[], [0]]

/* SUBSETS 2
Given an integer array nums that may contain duplicates, return all possible subsets
(the power set).
The solution set must not contain duplicate subsets. Return the solution in any order. */
var subsetsWithDup = function (nums) {
  let result = [];
  let uniquesubsets;

  var subs = (sub_sets, value) =>
    sub_sets.concat(sub_sets.map((set) => [...set, value]));
  uniquesubsets = nums.sort().reduce(subs, [result]);

  // Transform arrays to strings
  let stringArray = uniquesubsets.sort().map(JSON.stringify);
  // Remove duplicates
  let uniqueStringArray = new Set(stringArray);
  // Transform back to array of arrays
  let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

  return uniqueArray;
};
// invoke the function
// console.log(subsetsWithDup([1, 2, 2])); // [[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]
// console.log(subsetsWithDup([0])); // [[], [0]]
// console.log(subsetsWithDup([4, 4, 4, 1, 4])); //
console.log(subsetsWithDup([1, 2, 1])); //

// /* REMOVE DUPLICATES FROM SORTED ARRAY
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// such that each unique element appears only once. The relative order of the elements should
// be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the
// following things:

// Change the array nums such that the first k elements of nums contain the unique elements in
// the order they were present in nums initially. The remaining elements of nums
// are not important as well as the size of nums.

// Return k. */
// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let k = 1; // Initialize the count of unique elements to 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i]; // Overwrite the next unique element
//       k++;
//     }
//   }

//   return k;
// };
// // invoke the function
// console.log(removeDuplicates([1, 1, 2])); // 2
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5

// // REMOVE ELEMENT FROM UNSORTED ARRAY
// var removeElement = function (nums, val) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let k = 0; // Initialize the count of unique elements to 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i]; // Overwrite the next unique element
//       k++;
//     }
//   }

//   return k;
// };
// // invoke the function
// console.log(removeElement([3, 2, 2, 3], 3)); // 2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5

// /* Given a string s, return true if the s can be palindrome after deleting at most one
// character from it.

// Example 1:
// Input: s = "aba"
// Output: true

// Example 2:
// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Example 3:
// Input: s = "abc"
// Output: false */




// /* ROMAN TO INTEGER
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */

// ------------------------------------------------------------------------------------ //

var intToRoman = function(num) {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const ths = ["", "M", "MM", "MMM"];
  return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
};

function intToRoman(num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  return Object.entries(map).reduce((result, [letter, n]) => {
      result += letter.repeat(Math.floor(num / n));
      num %= n;
      return result;
  }, '');
}

function intToRoman(num) {
  const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let result = '';
  Object.entries(map).forEach(([letter, n]) => {
      result += letter.repeat(Math.floor(num / n));
      num %= n;
  });
  return result;
}

function intToRoman(num: number): string {
  const rNums: Record<string,number> = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  };
  let result = '';
  for(let rN in rNums){
      let count = num / rNums[rN];
      if(count>0) {
          result+= rN.repeat(count);
          num = num % rNums[rN];
      }
  }
  return result;
};

const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

var intToRoman = function(N) {
    let ans = ""
    for (let i = 0; N; i++)
        while (N >= val[i]) ans += rom[i], N -= val[i]
    return ans
};

// ------------------------------------------------------------------------------------ //

var romanToInt = function(s) {
  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = 0;

for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
        result += next - cur;
        i++;
    } else {
        result += cur;
    }
}

return result;
};

var romanToInt = function(s) {
  const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };

  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
      const currValue = romanValues[s[i]];

      if (i < s.length - 1 && currValue < romanValues[s[i + 1]]) {
          result -= currValue;
      } else {
          result += currValue;
      }
  }

  return result;
};

symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function(s) {
  let value = 0;
  for(let i = 0; i < s.length; i+=1){
      symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
  }
  return value
};

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const integers = s.split('').map(c => roman[c]);
  
  return integers.reduce((acc, x, i) => x < integers[i+1] ? acc - x : acc + x, 0);
};

// ------------------------------------------------------------------------------------ //