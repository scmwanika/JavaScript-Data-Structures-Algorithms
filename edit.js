// var url = "www.a.com";
// console.log(url.split(".")[1] + "." + url.split(".")[2]); // a.com

// // The count of a substring in a string:
// var countSubstring = function (char, string) {
//   let pattern = new RegExp(char, "gi");
//   let arr = string.match(pattern);
//   //return arr
//   if (arr !== null) return arr.length;
//   return -1;
// };
// // invoke the function
// console.log(
//   countSubstring("the", "The quick brown fox jumps over the lazy dog")
// ); // 2
// console.log(
//   countSubstring("th", "The quick brown fox jumps over the lazy dog")
// ); // 2
// console.log(
//   countSubstring("they", "The quick brown fox jumps over the lazy dog")
// ); // -1

// // The count of a subarray in an array:
// var countSubArray = function (char, string) {
//   let pattern = new RegExp(char, "gi");
//   let arr = string.toString().match(pattern);
//   //return arr
//   if (arr !== null) return arr.length;
//   return -1;
// };
// // invoke the function
// console.log(
//   countSubArray([1, 2, 3], [[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]])
// ); // 2
// console.log(
//   countSubArray([1, 2, 3, 4], [[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]])
// ); // -1
// console.log(
//   countSubArray([1, 2], [[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]])
// ); // 2
// console.log(
//   countSubArray([1, 0], [[2, 3, 4], [1, 3, 0], [1, 2, 3], [2], [1, 2, 3]])
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

// 3Sum and more
var threeSum = function (nums, target) {
  let res = [];
  let subseq = [];

  // sum subsequences
  function sum(e1, e2) {
    return e1 + e2;
  }
  // define helper function
  function subsequences(e1, e2) {
    let arr = e1.map((set) => [...set, e2]);
    return e1.concat(arr);
  }
  //
  nums.reduce(subsequences, [res]).forEach((el) => {
    if (el.length === 3 && el.reduce(sum) === target) {
      el.sort(function (e1, e2) {
        return e1 - e2;
      });
      subseq.push(el);
    }
  });
  return subseq;
};
// invoke the function
console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); // [ [ -1, 0, 1 ], [ -1, 0, 1 ], [ -1, -1, 2 ] ]
console.log(threeSum([0, 1, 1], 0)); // [ ]
console.log(threeSum([0, 0, 0], 0)); // [ [ 0, 0, 0 ] ]
