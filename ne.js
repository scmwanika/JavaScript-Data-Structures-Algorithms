// // slice
// console.log([1, 2, 3, 4].slice(1, 3)); // [ 2, 3 ]

// // splice
// console.log([1, 2, 3, 4].splice(1, 3)); // [ 2, 3, 4 ]
// console.log([1, 2, 3].splice(1, 1, 4, 5)); // [ 2 ]

// // x typeof x
// // undefined "undefined"
// // null "object"
// // true or false "boolean"
// // any number or NaN "number"
// // any string "string"
// // any function "function"
// // any nonfunction native object "object"
// // any host object An implementation-defined string, but not “undefined”, “boolean”, “number”, or “string”.

// var o = { x: 1, y: 2 }; // Start with an object
// delete o.x; // Delete one of its properties
// "x" in o; // => false: the property does not exist anymore

// var a = [1, 2, 3]; // Start with an array
// delete a[1]; // Delete the last element of the array
// console.log(a);

// // break
// for (var i = 0; i < a.length; i++) {
//   if (a[i] == target) break;
// }

// // continue
// for (i = 0; i < data.length; i++) {
//   if (!data[i]) continue; // Can't proceed with undefined data
//   total += data[i];
// }
// // Querying and Setting Properties
// //To obtain the value of a property, use the dot (.) or square bracket ([]) operators
// book.edition = 6; // Create an "edition" property of book.
// book["main title"] = "ECMAScript"; // Set the "main title" property.
// /*
//     Objects As Associative Arrays
// As explained above, the following two JavaScript expressions have the same value:
// object.property
// object["property"]

// Deleting Properties
// The delete operator (§4.13.3) removes a property from an object. Its single operand
// should be a property access expression. Surprisingly, delete does not operate on the
// value of the property but on the property itself:
// delete book.author; // The book object now has no author property.
// delete book["main title"]; // Now it doesn't have "main title", either.

// var o = { x: 1 }
// "x" in o; // true: o has an own property "x"
// "y" in o; // false: o doesn't have a property "y"
// "toString" in o; // true: o inherits a toString property
// */

// /*
// 7.8.5 slice()
// The Array.slice() method returns a slice, or subarray, of the specified array. Its two
// arguments specify the start and end of the slice to be returned. The returned array
// contains the element specified by the first argument and all subsequent elements up
// to, but not including, the element specified by the second argument. If only one argument
// is specified, the returned array contains all elements from the start position to the
// end of the array. If either argument is negative, it specifies an array element relative to
// the last element in the array. An argument of -1, for example, specifies the last element
// in the array, and an argument of -3 specifies the third from last element of the array.
// Note that slice() does not modify the array on which it is invoked. Here are some
// examples:
// var a = [1,2,3,4,5];
// a.slice(0,3); // Returns [1,2,3]
// a.slice(3); // Returns [4,5]
// a.slice(1,-1); // Returns [2,3,4]
// a.slice(-3,-2); // Returns [3]

// 7.8.6 splice()
// The Array.splice() method is a general-purpose method for inserting or removing
// elements from an array. Unlike slice() and concat(), splice() modifies the array on
// which it is invoked. Note that splice() and slice() have very similar names but perform
// substantially different operations.
// splice() can delete elements from an array, insert new elements into an array, or perform
// both operations at the same time. Elements of the array that come after the insertion
// or deletion point have their indexes increased or decreased as necessary so that
// they remain contiguous with the rest of the array. The first argument to splice() specifies
// the array position at which the insertion and/or deletion is to begin. The second
// argument specifies the number of elements that should be deleted from (spliced out of)
// the array. If this second argument is omitted, all array elements from the start element
// to the end of the array are removed. splice() returns an array of the deleted elements,
// or an empty array if no elements were deleted. For example:
// var a = [1,2,3,4,5,6,7,8];
// a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
// a.splice(1,2); // Returns [2,3]; a is [1,4]
// a.splice(1,1); // Returns [4]; a is [1]
// The first two arguments to splice() specify which array elements are to be deleted.
// These arguments may be followed by any number of additional arguments that specify
// elements to be inserted into the array, starting at the position specified by the first
// argument. For example:
// var a = [1,2,3,4,5];
// a.splice(2,0,'a','b'); // Returns []; a is [1,2,'a','b',3,4,5]
// a.splice(2,2,[1,2],3); // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5]
// Note that, unlike concat(), splice() inserts arrays themselves, not the elements of those
// arrays. */

// var numbers = [3, 7, 12, 22, 100];
// var sum = 0;
// for (var i = 0; i < numbers.length; ++i) {
//   sum += numbers[i];
// }
// print(sum); // displays 144

// /*
// Adding and Removing Elements from the Middle of an Array
// Trying to add or remove elements at the end of an array leads to the same problems we
// find when trying to add or remove elements from the beginning of an array—both
// operations require shifting array elements either toward the beginning or toward the
// end of the array. However, there is one mutator function we can use to perform both
// operations—splice().
// To add elements to an array using splice(), you have to provide the following arguments:
// • The starting index (where you want to begin adding elements)
// • The number of elements to remove (0 when you are adding elements)
// • The elements you want to add to the array
// Let’s look at a simple example. The following program adds elements to the middle of
// an array:
// var nums = [1,2,3,7,8,9];
// var newElements = [4,5,6];
// nums.splice(3,0,newElements);
// print(nums); // 1,2,3,4,5,6,7,8,9
// The elements spliced into an array can be any list of items passed to the function, not
// necessarily a named array of items. For example:
// var nums = [1,2,3,7,8,9];
// nums.splice(3,0,4,5,6);
// print(nums);
// In the preceding example, the arguments 4, 5, and 6 represent the list of elements we
// want to insert into nums.
// Here is an example of using splice() to remove elements from an array:

// var nums = [1,2,3,100,200,300,400,4,5];
// nums.splice(3,4);
// print(nums); // 1,2,3,4,5
// */

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
