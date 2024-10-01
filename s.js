// // TWO SUM:
// var twoSum = function (nums, target) {
//   let res = [];
//   let subseq = [];

//   // sum subsequences
//   function sum(e1, e2) {
//     return e1 + e2;
//   }
//   // don't use the element twice
//   let unique = [];
//   nums.filter((el) => {
//     if (unique.includes(el)) unique.push("x");
//     else unique.push(el);
//   });
//   // define helper function
//   function subsequences(e1, e2) {
//     let arr = e1.map((set) => [...set, e2]);
//     return e1.concat(arr);
//   }
//   //
//   unique.reduce(subsequences, [res]).forEach((el) => {
//     if (el.length === 2 && el.reduce(sum) === target)
//       subseq.push([unique.indexOf(el[0]), unique.indexOf(el[1])]);
//   });

//   if (subseq.length > 0) return subseq;
//   return -1;
// };
// // invoke the function
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
// // [ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]
// console.log(twoSum([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 3, 5 ], [ 2, 6 ], [ 0, 8 ] ]
// console.log(twoSum([5, 6, 7, 8, 9], 10)); // -1
// console.log(twoSum([4, 5, 6, 6, 7], 11)); // [ [ 1, 2 ], [ 0, 4 ] ]

// // WORD WEIGHT:
// var wordWeight = function (string, n) {
//   string = string.toLowerCase();
//   //let strwgt = [];
//   let sum1 = 0;
//   let sum2 = 0;
//   let strwgt = "";
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < string.length; i++) {
//     //if(alphabet.includes(string[i])) strwgt.push(alphabet.indexOf(string[i])+1)
//     if (alphabet.includes(string[i])) strwgt += alphabet.indexOf(string[i]) + 1;
//   }
//   for (i = 0; i < strwgt.length; i++) {
//     sum1 = sum1 + +strwgt[i];
//   }
//   sum1
//     .toString()
//     .split("")
//     .forEach((el) => {
//       sum2 = sum2 + +el;
//     });

//   if (n === 1) return sum1;
//   if (n === 2) return sum2;
// };
// // invoke the function
// console.log(wordWeight("Turing", 2)); // 8

// // PEAKS AND VALLEYS:
// var peaksAndValleys = function (nums) {
//   let new_arr = [];
//   nums.sort(function (e1, e2) {
//     return e1 - e2;
//   });
//   let start = 0,
//     stop = nums.length - 1;
//   while (start < stop) {
//     new_arr.push(nums[stop--], nums[start++]);
//   }
//   if (nums.length === 0) return -1;
//   if (nums.length % 2 === 0) return new_arr;
//   if (nums.length % 2 !== 0) return new_arr.concat(nums[start]);
// };
// // invoke the function
// console.log(peaksAndValleys([5, 3, 1, 2, 3])); //[ 5, 1, 3, 2, 3 ]

// //
// let email = "foo@a.com@hhh";
// console.log(email.split("@")[0]); // foo
// console.log(email.split("@")[1]); // a.com
// console.log(email.split("@")[2]); // hhh

// let string = "The quick brown fox jumps over the lazy dog";
// console.log(string.split(" "));
// // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// console.log(email.split("@")); // [ 'foo', 'a.com', 'hhh' ]

// var url = "www.a.com";
// console.log(url.split(".")[1] + "." + url.split(".")[2]); // a.com

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
