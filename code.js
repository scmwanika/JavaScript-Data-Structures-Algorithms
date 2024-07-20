var count_email_domains = function (emails, urls) {
  /* Approach:
        - Initialize domains with empty array
        - Extract domain from emails and urls and append to domains array 
        */
  let domains = [];

  // Traverse emails and remove characters before the domain
  // Append the remaining characters to domains
  emails.filter((el) => {
    domains.push(el.split("@")[1]);
  });

  // Traverse urls and remove characters before the domain
  // Append the remaining characters to domains
  urls.filter((el) => {
    domains.push(el.split("www.")[1]);
  });

  // Traverse domains and add prefix to each domain
  let prefix_domain = [];
  domains.filter((domain) => {
    if (urls.includes("www." + domain)) prefix_domain.push("www." + domain);
  });

  // Get object key count
  let obj = [];
  prefix_domain.forEach((domain) => {
    if (obj[domain]) return obj[domain]++;
    return (obj[domain] = 1);
  });

  // Reduce key count by 1
  let domain_count = [];
  Object.entries(obj).forEach(([k, v]) => {
    domain_count.push(k, v - 1);
  });

  return domain_count; // [ 'www.a.com': 2, 'www.b.com': 1, 'www.c.com': 0 ]
};
// invoke the function
console.log(
  count_email_domains(
    ["foo@a.com", "bar@a.com", "baz@b.com", "qux@d.com"],
    ["www.a.com", "www.b.com", "www.c.com"]
  )
);

// Multi Search: Given a string b and an array of smaller strings T, design a method to search b for
// each small string in T.
// T = {"is", "ppi", "hi", "sis", "i", "ssippi"}
// b = "mississippi"

// Missing Two: You are given an array with all the numbers from 1 to N appearing exactly once,
// except for one number that is missing. How can you find the missing number in O(N) time and
// 0( 1) space? What if there were two numbers missing?

/* ------------------------------------------------------------------------------------ */

// Pairs Sum:
var pairs_sum = function (nums, k) {
  let res = [];
  let pair = [];

  // sum subsequences
  function sum(e1, e2) {
    return e1 + e2;
  }

  let subsequences = (subset, value) =>
    subset.concat(subset.map((set) => [...set, value]));
  //
  nums.reduce(subsequences, [res]).forEach((el) => {
    if (el.length === 2 && el.reduce(sum) === k) pair.push(el);
  });

  if (pair.length > 0) return pair;
  return -1;
};
// invoke the function
console.log(pairs_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 4, 6 ], [ 3, 7 ], [ 2, 8 ], [ 1, 9 ] ]
console.log(pairs_sum([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [ [ 4, 6 ], [ 3, 7 ], [ 1, 9 ], [ 1, 9 ] ]
console.log(pairs_sum([5, 6, 7, 8, 9], 10)); // -1

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
  });

  return idx;
};
// invoke the function
console.log(
  multi_search("mississippi", ["is", "ppi", "hi", "sis", "i", "ssippi"])
); // [ 1, 8, 3, 1, 5 ]

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
  let res;
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

// Contiguous subsequence with the largest sum:.................................................
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
  let res;
  let unique_substr = [];
  let len = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      unique_substr.push([...new Set(str.slice(i, j))].join(""));

      for (substr of unique_substr) {
        // Length of each substr
        if (str.includes(substr)) len.push(substr.length);

        // Substring with maximum length
        if (str.includes(substr) && substr.length === Math.max(...len))
          res = substr;
      }
    }
  }
  return res;
};
// invoke the function
console.log(longestSubstring("abbbcabcdefef")); // abcdef
console.log(longestSubstring("dvdf")); // vdf
console.log(longestSubstring("pwwkew")); // kew
console.log(longestSubstring("")); // undefined

// LONGEST COMMON SUBSTRING WITHOUT REPEATING CHARACTERS (Dynamic Programming):
var longestCommonSubstring = function (str1, str2) {
  let res;
  let substrs1 = [];
  let substrs2 = [];
  let comsubstr = [];
  let len = [];

  // String 1
  for (i = 0; i < str1.length; i++) {
    for (j = i + 1; j < str1.length + 1; j++) {
      substrs1.push(str1.slice(i, j));
    }
  }
  // String 2
  for (i = 0; i < str2.length; i++) {
    for (j = i + 1; j < str2.length + 1; j++) {
      substrs2.push(str2.slice(i, j));
    }
  }
  // Common unique substring
  for (substr1 of substrs1) {
    for (substr2 of substrs2) {
      if (substr2.includes(substr1)) {
        comsubstr.push([...new Set(substr1)].join(""));
      }
    }
  }

  for (substr of comsubstr) {
    // Length of each substr
    len.push(substr.length);

    // Substring with maximum length
    if (substr.length === Math.max(...len)) res = substr;
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
  let res;
  let subseqs1 = [];
  let subseqs2 = [];
  let comsubseq = [];
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
  for (subseq1 of subseqs1) {
    for (subseq2 of subseqs2) {
      if (subseq2.includes(subseq1)) {
        comsubseq.push([...new Set(subseq1)].join(""));
      }
    }
  }

  for (subseq of comsubseq) {
    // Length of each subseq
    len.push(subseq.length);

    // Subsequence with maximum length
    if (subseq.length === Math.max(...len)) res = subseq;
  }

  return res;
};
// invoke the function
console.log(longestCommonSubsequence("raven", "havoc")); // av
console.log(longestCommonSubsequence("abbcc", "dbbcc")); // bc
console.log(longestCommonSubsequence("ABCD", "ACBAD")); // ACD
console.log(longestCommonSubsequence("ABCD", "ABCAD")); // ABCD
