/* STRING COMPRESSION: Implement a method to perform basic string compression using the
counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3.
If the "compressed" string would not become smaller than the original string, your method
should return the original string.
You can assume the string has only uppercase and lowercase letters (a - z). */
var compressString = (str) => {
  let regexp = /[^A-Za-z]/g;
  str = str.replace(regexp, "").toLowerCase();
  let [compStr, count] = ["", 1];

  for (let i = 0; i < str.length; i++) {
    let [char1, char2] = [str.charAt(i), str.charAt(i + 1)];

    if (char1 === char2) {
      count++;
    } else {
      compStr += char1 + count;
      count = 1;
    }
  }

  if (compStr.length < str.length) {
    return compStr;
  }
  return str;
};
// invoke the function
console.log(compressString("aabCccccaaa")); // a2blc5a3
console.log(compressString("wwwaabbbb")); // w3a2b4
console.log(compressString("kkkkj")); // k4j1
console.log(compressString("aab")); // aab

// ROTATE MATRIX (2D Array)
// Rotate Matrix Right
var rotateMatrixRight = function (matrix) {
  let n = matrix.length;

  for (let row = 0; row < n; row++) {
    for (let col = row; col < n - 1 - row; col++) {
      let x_axis = n - 1;
      let y_axis = col;

      // implement the swap index by index:
      let top = matrix[row][col];

      // left edge -> top edge
      matrix[row][col] = matrix[x_axis - y_axis][row];

      // bottom edge -> left edge
      matrix[x_axis - y_axis][row] = matrix[x_axis][x_axis - y_axis];

      // right edge -> bottom edge
      matrix[x_axis][x_axis - y_axis] = matrix[col][x_axis];

      // top edge -> right edge
      matrix[col][x_axis] = top;
    }
  }

  return matrix;
};
// invoke the function
var matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(rotateMatrixRight(matrix)); // [[6, 3, 0], [7, 4, 1], [8, 5, 2]]

// TIME (convert 12hours to 24hours)
var convertTime = function (timeStr) {
  let [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = +hours + 12;
    //same as
    //hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
  //return parseInt(`${hours}${minutes}`);
};
// invoke the function
var time1 = "5:00 PM";
var time2 = "11:42 PM";
var time3 = "12:00 PM";
var time4 = "12:00 AM";
console.log(convertTime(time1)); // 17:00
console.log(convertTime(time2)); // 23:42
console.log(convertTime(time3)); // 12:00
console.log(convertTime(time4)); // 00:00

/* Explanation
  console.log(time1.split(" ")) // ['5:00', 'PM']
  let str = '5:00'
  console.log(str.split(":")) // ['5', '00'] */

// TIME (convert 24hours to 12hours)
var convertTime = function (timeStr) {
  let [hours, minutes] = timeStr.split(":");
  if (hours === "12") {
    hours = "12";
    return `${hours}:${minutes} PM`;
  }
  if (hours > "12") {
    hours = +hours - 12;
    return `${hours}:${minutes} PM`;
  }
  if (hours < "12") {
    return `${hours}:${minutes} AM`;
  }
};
// invoke the function
var time1 = "17:00";
var time2 = "23:42";
var time3 = "12:00";
var time4 = "11:00";
console.log(convertTime(time1)); // 5:00 PM
console.log(convertTime(time2)); // 11:42 PM
console.log(convertTime(time3)); // 12:00 PM
console.log(convertTime(time4)); // 11:00 AM

// DATES (number of days between two dates)
const daysBetweenDates = function (date1, date2) {
  date1 = new Date(date1);
  date2 = new Date(date2);
  let difference = (date1 - date2) / (1000 * 3600 * 24); // milliseconds

  return Math.abs(difference);
};
// invoke the function
var date1 = "12/25/2022";
var date2 = "12/31/2022";
console.log(daysBetweenDates(date1, date2)); // 6

// SUBTRACT DAYS
var subtractDays = function (date, days) {
  date = new Date(date);

  date.setDate(date.getDate() - days); // add + 1 if date format is: 12/31/2022 or 12-31-2022

  return date;
};
// invoke the function
const date = new Date("2022-12-31");
console.log(subtractDays(date, 6)); // 2022-12-25T00:00:00.000Z

// OBJECT STORE (Dictionary)
// Sorting Objects:
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// SORT THE OBJECT BY SALARY
const sortEmployeesBySalary = (employees) => {
  return employees.sort((obj1, obj2) => obj1.salary - obj2.salary);
  // same as
  // return employees.sort((obj1, obj2) => (obj1.salary > obj2.salary ? 1 : -1));
};
// invoke the function
console.table(sortEmployeesBySalary(employees));
/*
┌─────────┬─────────┬────────┬─────────────────────┐
│ (index) │  name   │ salary │      hireDate       │
├─────────┼─────────┼────────┼─────────────────────┤
│    0    │ 'David' │ 75000  │  'August 15, 2009'  │
│    1    │ 'David' │ 75000  │  'August 15, 2009'  │
│    2    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    3    │  'Ana'  │ 80000  │ 'December 12, 2011' │
│    4    │ 'John'  │ 90000  │   'July 1, 2010'    │
│    5    │ 'John'  │ 90000  │   'July 1, 2010'    │
└─────────┴─────────┴────────┴─────────────────────┘
*/

// UNIQUE OBJECT ARRAY
var uniqueObjectArray = function (array) {
  const result = [];
  const map = new Map();
  array.filter((item) => {
    if (!map.has(item.name)) {
      map.set(item.name); // set any value to Map
      result.push({
        name: item.name,
        salary: item.salary,
        hireDate: item.hireDate,
      });
    }
  });
  //
  var res = [];
  result.forEach((item) => {
    res.push(item.name, item.salary);
  });

  return result;
  //return res;
};
// invoke the function
console.log(uniqueObjectArray(employees));

// EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS
// extract (names, salaries) from employees array
const extractValues = (arr, prop1, prop2) => {
  let output = [];

  arr.forEach((item) => {
    output.push(item[prop1], item[prop2]);
  });

  return output;
};
// invoke the function
console.log(extractValues(employees, "name", "salary"));
/*
[
  'John', 90000, 'David',
  75000,  'Ana', 80000,
  'John', 90000, 'David',
  75000,  'Ana', 80000
] */

// LINEAR SEARCH
var linearSearch = function (array, element) {
  let indices = [];
  for (let [idx, ele] of array.entries()) {
    if (ele === element) {
      indices.push(idx);
    }
  }
  return indices;
};
// invoke the function
console.log(
  linearSearch(
    ["ball", "at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
    "ball"
  )
); // [0, 5]
console.log(linearSearch(["a", "b", "d", "c", "d"], "d")); // [2, 4]

// TEST ISDUPLICATE
var isDuplicate = (array, element) => {
  let indices = [];
  for (let [idx, ele] of array.entries()) {
    if (ele === element) {
      indices.push(idx);
    }
  }

  if (indices.length > 1) {
    return [true, indices];
  }

  return -1;
};
// invoke the function
console.log(isDuplicate([1, 2, 3, 4, 5], 1)); // -1
console.log(isDuplicate([1, 2, 5, 4, 5], 5)); // [true, [2, 4]]
console.log(isDuplicate([1, 2, 3, 4, 5], 6)); // -1

// WORD COUNT
var wordCount = function (string, word) {
  let indices = [];
  word = word.toLowerCase();
  let arr = string.toLowerCase().replaceAll(" ", ",").split(",");

  for (let [idx, el] of arr.entries()) {
    if (el === word) {
      indices.push(idx);
    }
  }

  return [word, indices.length];
};
// invoke the function
console.log(wordCount("The quick brown fox jumps over the lazy dog", "the")); // ['the', 2]

// Return the words with substring:
// Count the Number of words with Substring:
var wordHasSubstring = function (string, substring) {
  let words = [];
  substring = substring.toLowerCase();
  let arr = string.toLowerCase().replaceAll(" ", ",").split(",");

  arr.filter((item) => {
    if (item.includes(substring)) {
      words.push(item);
    }
  });

  return words;
};
// invoke the function
console.log(
  wordHasSubstring("The quick brown fox jumps over the lazy dog", "o")
);
// ['brown', 'fox', 'over', 'dog'] -> 4
var str =
  "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
  gave Mike 1 of her orange so she is now left with only 1 Orange.";
console.log(wordHasSubstring(str, "ORaNGe"));
// ['oranges', 'oranges', 'orange', 'orange.'] -> 4

// APPLY SPELLING RULE TO FILTER() STRINGS -> cie
var spellingRule = function (words_array, str) {
  filtered_array = [];

  words_array.filter((item) => {
    if (item.includes(str)) {
      filtered_array.push(item);
    }
  });

  return filtered_array;
};
// invoke the function
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
console.log(spellingRule(words, "cie")); // ['recieve', 'percieve', 'concieve']

// RETURN AN ARRAY OF EVEN SQUARE IN THE RANGE
var even_squares = function (start, end) {
  let new_array = [];

  for (start; start <= end; start++) {
    if (start % 2 === 0) new_array.push(start * start);
  }
  return new_array;
};
// invoke the function
console.log(even_squares(0, 10)); // [0, 4, 16, 36, 64, 100]

// FIND THE SUM OF COMMON ELEMENTS IN TWO ARRAYS
var commonElements = function (arr1, arr2) {
  let comElements = [];
  let sum = 0;

  arr1.filter((el) => {
    arr2.filter((item) => {
      if (item == el) {
        comElements.push(el);
      }
    });
  });

  return comElements.reduce((e1, e2) => {
    return +e1 + +e2;
  }, sum);
};
// invoke the function
console.log(commonElements([1, "2", 3], [2, "3", 4])); // [2, 3] // 5

// FIND THE COMMON CHARACTERS IN TWO STRINGS
var commonCharacters = function (str1, str2) {
  let comCha = [];

  str1
    .toLowerCase()
    .split("")
    .filter((el) => {
      str2
        .toLowerCase()
        .split("")
        .filter((item) => {
          if (item.includes(el)) {
            comCha.push(el);
          }
        });
    });

  return comCha.join("");
};
// invoke the function
console.log(commonCharacters("pale", "ple")); // ple
console.log(commonCharacters("pales", "pale")); // pale
console.log(commonCharacters("pale", "bale")); // ale
console.log(commonCharacters("pale", "bae")); // ae

// FIND THE NOT COMMON CHARACTERS IN TWO STRINGS
var notCommonCharacters = function (str1, str2) {
  let notComCha = [];
  // not common characters in str1
  str1.split("").filter((el) => {
    if (!str2.split("").includes(el)) {
      notComCha.push(el);
    }
  });
  // not common characters in str2
  str2.split("").filter((el) => {
    if (!str1.split("").includes(el)) {
      notComCha.push(el);
    }
  });

  return notComCha.join("");
};
// invoke the function
console.log(notCommonCharacters("pale", "ple")); // a
console.log(notCommonCharacters("pales", "pale")); // s
console.log(notCommonCharacters("pale", "bale")); // pb
console.log(notCommonCharacters("pale", "bae")); // plb

/* ONE AWAY: There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. Given two 
strings, write a function to check if they are one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bae -> false */

// FIND THE NOT COMMON CHARACTERS IN STR1
var isOneAway = function (str1, str2) {
  let notComCha = [];
  str1.split("").filter((el) => {
    if (!str2.split("").includes(el)) {
      notComCha.push(el);
    }
  });

  if (notComCha.length === 1) {
    return [true, notComCha].flat();
  }

  return [false, notComCha].flat();
};
// invoke the function
console.log(isOneAway("pale", "ple")); // [true, 'a']
console.log(isOneAway("pales", "pale")); // [true, 's']
console.log(isOneAway("pale", "bale")); // [true, 'p']
console.log(isOneAway("pale", "bae")); // [false, 'p', 'l']
console.log(isOneAway("programming-CCC", "programming-ccc")); // [false, 'C', 'C', 'C']

// CHECK IF A STRING IS A SUBSTRING OF ANOTHER STRING
// CHECK IF AN ARRAY IS A SUBARRAY OF ANOTHER ARRAY
var issubStringArray = function (str, substr) {
  var result = [];
  var res = [];
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }

  result.filter((item) => {
    if (item.includes(substr.toLowerCase())) {
      res.push(item);
    }
  });

  if (res.length > 0) return "Valid Substring";
  return "Invalid";
};
// invoke the function
console.log(issubStringArray("stephen", "Hen")); // Valid Substring

// CHECK IF A STRING IS A SEQUENCE OF ANOTHER STRING
// CHECK IF AN ARRAY IS A SEQUENCE OF ANOTHER ARRAY
var subSequence = function (arr, subSeq) {
  let result = [];
  let res = [];
  var subs = (subsets, value) =>
    subsets.concat(subsets.map((set) => [...set, value]));
  result = arr.reduce(subs, [result]);

  result.filter((el) => {
    if (el.join("").includes(subSeq.join(""))) {
      res.push(el);
    }
  });

  if (res.length > 0) return true;
  return false;
};
// invoke the function
console.log(subSequence([1, 2, 3], [1, 3])); // true

// CHECK IF AN ARRAY IS A SUBSET OF ANOTHER ARRAY
var isSubset = function (arr, subset) {
  let state;
  subset.filter((el) => {
    if (arr.includes(el)) {
      state = true;
    } else state = false;
  });

  if (state === true) return "Valid Subset";
  return "Invalid";
};
// invoke the function
var arr1 = ["a", "b", "c"];
var arr2 = ["b", "c"];
var arr3 = ["c", "d"];
console.log(isSubset(arr1, arr2)); // Valid Subset
console.log(isSubset(arr1, arr3)); // Invalid

// COUNT THE LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
var longestSubstring = function (str) {
  let substrings = [];
  let uniqueSubStr = [];
  let lenUniqueSubStr = [];

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  substrings.filter((el) => {
    let set = [...new Set(el)];
    uniqueSubStr.push(set.join("")); // abcdef
  });

  uniqueSubStr.filter((el) => {
    if (str.includes(el)) {
      lenUniqueSubStr.push(el.length);
      maxlen = Math.max(...lenUniqueSubStr);

      // Output substring with maximum length
      if (str.includes(el) && el.length === maxlen) {
        result = el;
      }
    }
  });

  return result;
};
// invoke the function
var string = "abbbcabcdefef";
console.log(longestSubstring(string)); // abcdef

// COUNT THE OCCURRENCE OF SUBSTRING IN STRING
var countSubstring = function (string, substring) {
  let result = [];
  let res1 = [];
  let res2 = [];
  for (i = 0; i < string.length; i++) {
    for (j = i + 1; j < string.length + 1; j++) {
      result.push(string.slice(i, j));
    }
  }

  // count all substrings including "an"
  result.filter((item) => {
    if (item.includes(substring)) {
      res1.push(item); // outputs 19
    }
  });

  // strictly count substring "an"
  result.filter((item) => {
    if (item === substring) {
      res2.push(item); // outputs 2
    }
  });

  return `${res2.length} of ${res1.length}`;
};
// invoke the function
console.log(countSubstring("Mwanikan", "an")); // 2 of 19

// RETURN ANAGRAMS or PERMUTATIONS OF STRING WITHOUT REPEATING CHARACTERS
var solution = (string) => {
  let anagrams_permutations = [];
  if (string.length === 0) return anagrams_permutations;
  if (string.length === 1) {
    anagrams_permutations.push(string);
  }

  for (let i = 0; i < string.length; i++) {
    let cha1 = string.charAt(i);
    let cha2 = string.slice(0, i) + string.slice(i + 1, string.length);

    solution(cha2).filter((item) => {
      anagrams_permutations.push(cha1 + item);
    });
  }

  return [...new Set(anagrams_permutations)];
};
// invoke the function
console.log(solution("aabc"));

// RETURN AN OBJECT REPRESENTING THE CHARACTER / WORD COUNT OF A STRING
// OR
// The most frequent character/word of a string:
// The most frequent element of an array:
// OR
// The least frequent character/word of a string:
// The least frequent element of an array:
// OR
// Check for duplicates in the string:
// Check for duplicates in the array:
function isDuplicates(str) {
  let regexp = /[^A-Za-z0-9]/g;
  let obj = {};
  let dup = [];

  str
    .toLowerCase()
    // .replace(regexp, "")
    // .split("")

    // BE OBSERVANT .....
    .replaceAll(" ", ",")
    .split(",")
    .forEach((el) => {
      if (obj[el]) {
        obj[el]++;
        return;
      }
      obj[el] = 1;
    });
  // return obj; // object representing the word count
  // return Math.max(...Object.values(obj)); // most frequent word count -> 2

  return Object.keys(obj).filter((x) => {
    return obj[x] === Math.max(...Object.values(obj));
    // the most frequent word or item: ['the'] OR ['cat']

    //return obj[x] === Math.min(...Object.values(obj));
    // the least frequent character or element
  });

  // for (let prop in obj) {
  //   if (obj[prop] > 1) {
  //     // if isDuplicate
  //     dup.push(prop);
  //   }
  // }
  // //
  // if (dup.length > 0) {
  //   return [true, dup];
  // }
  // return [false, "no duplicates"];
}

// invoke the function
console.log(isDuplicates("The quick brown fox jumps over the lazy dog")); // ['the'] -> 2

//console.log(isDuplicates(["cat", "book", "pencil", "book", "cat", "cat"])); // ['cat'] -> 3

// VOWELS AND CONSONANTS
var countVowels = function (string) {
  let vowelWords = [];
  let consonantWords = [];

  string = string.replaceAll(" ", ",").split(",");
  string.filter((el) => {
    if (
      el.includes("a") ||
      el.includes("e") ||
      el.includes("i") ||
      el.includes("o") ||
      el.includes("u")
    ) {
      vowelWords.push(el);
    } else consonantWords.push(el);
  });

  return consonantWords;
};
// invoke the function
console.log(countVowels("The quick pqzx brown fox jumps over the lazy dog")); // 11
