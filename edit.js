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

// let a = ['q','w','e','r','t','y'];
// let b = ['e','r','t'];
// console.log(a.join("").includes(b.join("")))

// // Shopping Cart:
// class ShoppingCart {
//   // Encapsulate class methods
//   constructor(total, items) {
//     this.total = total;
//     this.items = items;
//   }
//   add_item(item_name, quantity, price) {
//     this.total += quantity * price;
//     this.items += quantity;
//   }
//   remove_item(item_name, quantity, price) {
//     this.total -= quantity * price;
//     this.items -= quantity;
//   }
//   checkout(cash_paid) {
//     const balance = cash_paid - this.total;
//     if (cash_paid < this.total) console.log("Cash paid not enough");
//     console.log(balance);
//   }
//   toString() {
//     return { Total: this.total, Items: this.items };
//   }
// }
// // class Shop inherits class ShoppingCart:
// class Shop extends ShoppingCart {
//   constructor(quantity) {
//     super();
//     this.quantity = quantity;
//   }
//   // Polymorphism
//   // Override the method "remove_item"
//   remove_item() {
//     this.quantity -= 1;
//   }
//   toString() {
//     return this.quantity;
//   }
// }
// // invoke the function
// var products = new ShoppingCart(0, 0);
// products.add_item("rice", 5, 2500);
// console.log(products.toString());
// products.remove_item("rice", 3, 2500);
// console.log(products.toString());
// products.checkout(4000);

// var products = new Shop(100);
// products.remove_item();
// console.log(products.toString());
