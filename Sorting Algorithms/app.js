/* Two of the most common operations performed on data stored in a computer are sorting
and searching. This has been true since the beginning of the computer industry, so this
means that sorting and searching are two of the most studied operations in computer
science. Many of the data structures discussed in this book are designed primarily to
make sorting and/or searching the data stored in the data structure easier and more
efficient.
This chapter will introduce you to some of the basic and advanced algorithms for sorting
data. These algorithms depend only on the array as the means of storing data. In this
chapter we’ll also look at ways of timing our programs to determine which algorithm
is most efficient.

An Array Test Bed
We start this chapter by developing an array test bed to use in support of our study of
basic sorting algorithms. We’ll build a class for array data and functions that encapsulates
some of the normal array operations: inserting new data, displaying array data, and
calling the different sorting algorithms. Included in the class is a swap() function we
will use to exchange elements in the array. */
// Array test bed class:
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.gaps = [5, 3, 1];
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  // SORTING ALGORITHMS
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.setGaps = setGaps;
  this.shellsort = shellsort;
  // this.mergeSort = mergeSort;
  // this.mergeArrays = mergeArrays;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}
function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}
function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(element) {
  this.dataStore[this.pos++] = element;
}
function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr;
}
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// The bubbleSort() function:
function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
    //console.log(this.toString()); // can be omitted
  }
}
// The selectionSort() function:
function selectionSort() {
  var min, temp;
  for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer;
    for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min);
  }
}
// The insertionSort() function:
function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && this.dataStore[inner - 1] >= temp) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}
// Using the test bed class:
// Sorting 10 numbers with bubbleSort():
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
console.log(mynums.toString());
mynums.bubbleSort();
//console.log();
console.log(mynums.toString());

mynums.selectionSort();
//console.log();
console.log(mynums.toString());

mynums.insertionSort();
//console.log();
console.log(mynums.toString());

// The shellsort() function:
function shellsort() {
  for (var g = 0; g < this.gaps.length; ++g) {
    for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
      var temp = this.dataStore[i];
      for (
        var j = i;
        j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
        j -= this.gaps[g]
      ) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
  }
}
//
function setGaps(arr) {
  this.gaps = arr;
}
// Running shellsort() on a small data set of 10 random numbers with a gap sequence of 5, 3, 1.
var nums = new CArray(10);
nums.setData();
console.log("Before Shellsort: \n");
console.log(nums.toString());
console.log("\nDuring Shellsort: \n");
nums.shellsort();
console.log("\nAfter Shellsort: \n");
console.log(nums.toString());

// // The mergeSort() function: "Bottom-up Mergesort"
// function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
//   var rightArr = new Array(stopRight - startRight + 1);
//   var leftArr = new Array(stopLeft - startLeft + 1);
//   k = startRight;
//   for (var i = 0; i < rightArr.length - 1; ++i) {
//     rightArr[i] = arr[k];
//     ++k;
//   }
//   k = startLeft;
//   for (var i = 0; i < leftArr.length - 1; ++i) {
//     leftArr[i] = arr[k];
//     ++k;
//   }
//   rightArr[rightArr.length - 1] = Infinity; // a sentinel value
//   leftArr[leftArr.length - 1] = Infinity; // a sentinel value
//   var m = 0;
//   var n = 0;
//   for (var k = startLeft; k < stopRight; ++k) {
//     if (leftArr[m] <= rightArr[n]) {
//       arr[k] = leftArr[m];
//       m++;
//     } else {
//       arr[k] = rightArr[n];
//       n++;
//     }
//   }
//   console.log("left array - ", leftArr);
//   console.log("right array - ", rightArr);
// }
// function mergeSort() {
//   if (this.dataStore.length < 2) {
//     return;
//   }
//   var step = 1;
//   var left, right;
//   while (step < this.dataStore.length) {
//     left = 0;
//     right = step;
//     while (right + step <= this.dataStore.length) {
//       mergeArrays(this.dataStore, left, left + step, right, right + step);
//       left = right + step;
//       right = left + step;
//     }
//     if (right < this.dataStore.length) {
//       mergeArrays(
//         this.dataStore,
//         left,
//         left + step,
//         right,
//         this.dataStore.length
//       );
//     }
//     step *= 2;
//   }
// }
// var nums = new CArray(10);
// nums.setData();
// console.log(nums.toString());
// nums.mergeSort();
// console.log(nums.toString());

// // The quickSort() function:
// function quickSort(arr) {
//   if (arr.length == 0) {
//     return [];
//   }
//   var left = [];
//   var right = [];
//   var pivot = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }
// var a = [];
// for (var i = 0; i < 10; ++i) {
//   a[i] = Math.floor(Math.random() * 100 + 1);
// }
// console.log(a);
// console.log();
// console.log(quickSort(a));
