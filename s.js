// TWO SUM:
var twoSum = function (nums, target) {
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
    if (el.length === 2 && el.reduce(sum) === target)
      subseq.push([unique.indexOf(el[0]), unique.indexOf(el[1])]);
  });

  if (subseq.length > 0) return subseq;
  return -1;
};
// invoke the function
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12));
// [ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]
console.log(twoSum([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 3, 5 ], [ 2, 6 ], [ 0, 8 ] ]
console.log(twoSum([5, 6, 7, 8, 9], 10)); // -1
console.log(twoSum([4, 5, 6, 6, 7], 11)); // [ [ 1, 2 ], [ 0, 4 ] ]

// WORD WEIGHT:
var wordWeight = function (string, n) {
  string = string.toLowerCase();
  //let strwgt = [];
  let sum1 = 0;
  let sum2 = 0;
  let strwgt = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < string.length; i++) {
    //if(alphabet.includes(string[i])) strwgt.push(alphabet.indexOf(string[i])+1)
    if (alphabet.includes(string[i])) strwgt += alphabet.indexOf(string[i]) + 1;
  }
  for (i = 0; i < strwgt.length; i++) {
    sum1 = sum1 + +strwgt[i];
  }
  sum1
    .toString()
    .split("")
    .forEach((el) => {
      sum2 = sum2 + +el;
    });

  if (n === 1) return sum1;
  if (n === 2) return sum2;
};
// invoke the function
console.log(wordWeight("Turing", 2)); // 8

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestCommonSubsequence = function (text1, text2) {
  let subseqs1 = [];
  let subseqs2 = [];
  let comsubseq = null;
  let dict = [];

  // define helper function
  function subsequences(e1, e2) {
    let arr = e1.map((set) => [...set, e2]);
    return e1.concat(arr);
  }

  text1
    .split("")
    .reduce(subsequences, [subseqs1])
    .filter((el) => {
      subseqs1.push(el.join(""));
    });

  text2
    .split("")
    .reduce(subsequences, [subseqs2])
    .filter((el) => {
      // Common unique subsequence
      if (subseqs1.includes(el.join(""))) {
        comsubseq = [...new Set(el)].join("");
        dict.push({ comsubseq: comsubseq, len: comsubseq.length });
        // descending sort by len
        dict.sort(function (prop1, prop2) {
          return prop2.len - prop1.len;
        });
      }
    });
  return Object.values(dict[0])[0];
};
// invoke the function
console.log(longestCommonSubsequence("raven", "havoc")); // av
console.log(longestCommonSubsequence("abbcc", "dbbcc")); // bc
console.log(longestCommonSubsequence("ABCD", "ACBAD")); // ACD
console.log(longestCommonSubsequence("ABCD", "ABCAD")); // ABCD
