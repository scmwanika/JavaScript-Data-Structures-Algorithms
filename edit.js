// var url = "www.a.com";
// console.log(url.split(".")[1] + "." + url.split(".")[2]); // a.com

// // The count of a substring in a string:
// var countSubstring = function (string, substr) {
//   let pattern = new RegExp(substr, "gi");
//   let arr = string.match(pattern);
//   if (arr !== null) return arr.length;
//   return -1;
// };
// // invoke the function
// console.log(
//   countSubstring("The quick brown fox jumps over the lazy dog", "the")
// ); // 2
// console.log(
//   countSubstring("The quick brown fox jumps over the lazy dog", "th")
// ); // 2
// console.log(
//   countSubstring("The quick brown fox jumps over the lazy dog", "they")
// ); // -1

// // The count of a subarray in an array:
// var countSubArray = function (array, subarr) {
//   let pattern = new RegExp(subarr, "gi");
//   let arr = array.toString().match(pattern);
//   if (arr !== null) return arr.length;
//   return -1;
// };
// // invoke the function
// console.log(
//   countSubArray([[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]], [1, 2, 3])
// ); // 2
// console.log(
//   countSubArray([[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]], [1, 2, 3, 4])
// ); // -1
// console.log(
//   countSubArray([[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]], [1, 2])
// ); // 2
// console.log(
//   countSubArray([[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]], [1, 0])
// ); // -1

// // Multi Search:
// var multi_search = function (str, substr) {
//   let idx = [];
//   substr.forEach((el) => {
//     if (str.includes(el))
//       idx.push([...new Set([str.indexOf(el), str.lastIndexOf(el)])]);
//     else idx.push(-1);
//   });
//   return idx;
// };
// // invoke the function
// console.log(
//   multi_search("mississippi", ["is", "ppi", "hi", "sis", "i", "ssippi"])
// ); // [ [ 1, 4 ], [ 8 ], -1, [ 3 ], [ 1, 10 ], [ 5 ] ]

// var subs = function (str) {
//   let res = [];
//   function subsequences(e1, e2) {
//     let arr = e1.map((set) => [...set, e2]);
//     return e1.concat(arr);
//   }
//   // return str.split("").reduce(subsequences, [res]);
//   let u = [];
//   str
//     .split("")
//     .reduce(subsequences, [res])
//     .forEach((item) => {
//       u.push(item.join(""));
//     });
//   return u;
// };
// // invoke the function
// console.log(subs("dog"));
// // [ [], [ 'd' ], [ 'o' ], [ 'd', 'o' ], [ 'g' ], [ 'd', 'g' ], [ 'o', 'g' ], [ 'd', 'o', 'g' ] ]
// // [ '', 'd', 'o', 'do', 'g', 'dg', 'og', 'dog' ]

// // LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
// var longestSubstring = function (str) {
//   let unique_substr = null;
//   let dict = [];

//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length + 1; j++) {
//       unique_substr = [...new Set(str.slice(i, j))].join("");

//       // Length of each substr
//       if (str.includes(unique_substr))
//         dict.push({ unique_substr: unique_substr, len: unique_substr.length });
//       // descending sort by len
//       dict.sort(function (prop1, prop2) {
//         return prop2.len - prop1.len;
//       });
//     }
//   }
//   if (str.length === 0) return 0;
//   return Object.values(dict[0])[1];
//   // if (str.length === 0) return str;
//   // return Object.values(dict[0])[0];
// };
// // invoke the function
// console.log(longestSubstring("abbbcabcdefef")); // 6 -> abcdef
// console.log(longestSubstring("dvdf")); // 3 -> vdf
// console.log(longestSubstring("pwwkew")); // 3 -> wke
// console.log(longestSubstring("")); // 0 -> ""

// // 3Sum and more
// var threeSum = function (nums, target) {
//   let res = [];
//   let subseq = [];

//   // sum subsequences
//   function sum(e1, e2) {
//     return e1 + e2;
//   }
//   // define helper function
//   function subsequences(e1, e2) {
//     let arr = e1.map((set) => [...set, e2]);
//     return e1.concat(arr);
//   }
//   // sort nums
//   nums.sort(function (e1, e2) {
//     return e1 - e2;
//   });
//   //
//   nums.reduce(subsequences, [res]).forEach((el) => {
//     if (el.length === 3 && el.reduce(sum) === target) subseq.push(el);
//   });
//   //
//   let unique = [];
//   for (i = 0; i < subseq.length; i++) {
//     if ([...new Set(subseq[i].concat(subseq[i + 1]))].length === 3)
//       unique.push(subseq[i]);
//   }
//   if (nums.length === 3)
//     if (nums[0] === 0 && nums[1] === 0 && nums[2] === 0) return [[0, 0, 0]];
//   return unique.sort();
// };
// // invoke the function
// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // [ [ -1, 0, 1 ], [ -1, 0, 1 ], [ -1, -1, 2 ] ]
// console.log(threeSum([0, 1, 1], 0)); // [ ]
// console.log(threeSum([0, 0, 0], 0)); // [ [ 0, 0, 0 ] ]

// var test = function (nums) {
//     nums.sort(function(e1, e2){
//         return e1[1] - e2[1];
//     })
//     return nums
// }
// // invoke the function
// console.log(test([['y',10],['z',3],['x',6]]))

// let string = "House2@ s"
// console.log(string.replace(/[^a-zA-Z0-9]/g,"")) // House2s

// Sort Words By Count (Ascending Sort):
var sortWordsByCount = function (str) {
  let nums = str
    .toLowerCase()
    .replace(/[^a-z ]/g, "")
    .replace(/ /g, ",")
    .split(",");

  // Get object
  let obj = {};
  nums.forEach((el) => {
    if (obj[el]) return obj[el]++;
    return (obj[el] = 1);
  });

  // processing max, min, duplicates, unique
  return Object.entries(obj).filter(([k, v]) => {
    if (v === Math.max(...Object.values(obj))) return k;
  })[0][0];
};
// invoke the function
console.log(
  sortWordsByCount(
    "This is the TEXT. Text, text, text - THIS TEXT! Is this the text?"
  )
); // text
console.log(sortWordsByCount("The quick brown fox jumps over the lazy dog")); // the
