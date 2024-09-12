const programs = require("./programs");

console.log("TESTING FUNCTIONALITY OF JAVASCRIPT PROGRAMS WITH JEST");

// SUBSTRINGS AND SUBARRAYS:
describe("SUBSTRINGS AND SUBARRAYS", () => {
  test("should return ['d', 'do', 'dog', 'o', 'og', 'g']", () => {
    expect(programs.subStringsArrays("dog")).toStrictEqual([
      "d",
      "do",
      "dog",
      "o",
      "og",
      "g",
    ]);
  });
  test("should return [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]", () => {
    expect(programs.subStringsArrays([1, 2, 3])).toStrictEqual([
      [1],
      [1, 2],
      [1, 2, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });
});

// SUBSEQUENCES AND SUBSETS:
describe("SUBSEQUENCES AND SUBSETS", () => {
  test("should return [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]", () => {
    expect(programs.subSequencesSubsets([1, 2, 3])).toStrictEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });
});

// IS SUBSTRING / COMBINATION OF ANOTHER STRING:
describe("IS SUBSTRING / COMBINATION OF ANOTHER STRING", () => {
  test("should return true", () => {
    expect(programs.isSubString("Stephen", "Hen")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isSubString("Stephen", "Hn")).toBe(false);
  });
  test("should return false", () => {
    expect(programs.isSubString("Stephen", "nH")).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isSubString("123", "23")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isSubString("123", "32")).toBe(false);
  });
});

// IS SUBSEQUENCE OF ANOTHER STRING:
describe("IS SUBSEQUENCE OF ANOTHER STRING", () => {
  test("should return true", () => {
    expect(programs.isSubStringSequence("Stephen", "Hen")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubStringSequence("Stephen", "Hn")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isSubStringSequence("Stephen", "nH")).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isSubStringSequence("123", "23")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isSubStringSequence("123", "32")).toBe(false);
  });
});

// IS SUBSET OF ANOTHER STRING:
describe("IS SUBSET OF ANOTHER STRING", () => {
  test("should return true", () => {
    expect(programs.isSubSetStr("Stephen", "Hen")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubSetStr("Stephen", "Hn")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubSetStr("Stephen", "nH")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubSetStr("123", "23")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubSetStr("123", "32")).toBe(true);
  });
});

// IS SUBARRAY / COMBINATION OF ANOTHER ARRAY:
describe("IS SUBARRAY / COMBINATION OF ANOTHER ARRAY", () => {
  test("should return true", () => {
    expect(
      programs.isSubArray(["S", "t", "e", "p", "h", "e", "n"], ["H", "e", "n"])
    ).toBe(true);
  });
  test("should return false", () => {
    expect(
      programs.isSubArray(["S", "t", "e", "p", "h", "e", "n"], ["H", "n"])
    ).toBe(false);
  });
  test("should return false", () => {
    expect(
      programs.isSubArray(["S", "t", "e", "p", "h", "e", "n"], ["n", "H"])
    ).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isSubArray([1, 2, 3], [2, 3])).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isSubArray([1, 2, 3], [3, 2])).toBe(false);
  });
});

// IS SUBSEQUENCE OF ANOTHER ARRAY:
describe("IS SUBSEQUENCE OF ANOTHER ARRAY", () => {
  test("should return true", () => {
    expect(
      programs.isSubArraySequence(
        ["S", "t", "e", "p", "h", "e", "n"],
        ["H", "e", "n"]
      )
    ).toBe(true);
  });
  test("should return true", () => {
    expect(
      programs.isSubArraySequence(
        ["S", "t", "e", "p", "h", "e", "n"],
        ["H", "n"]
      )
    ).toBe(true);
  });
  test("should return false", () => {
    expect(
      programs.isSubArraySequence(
        ["S", "t", "e", "p", "h", "e", "n"],
        ["n", "H"]
      )
    ).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isSubArraySequence([1, 2, 3], [2, 3])).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isSubArraySequence([1, 2, 3], [3, 2])).toBe(false);
  });
});

// IS SUBSET OF ANOTHER ARRAY:
describe("IS SUBSET OF ANOTHER ARRAY", () => {
  test("should return true", () => {
    expect(
      programs.isSubSetArr(["S", "t", "e", "p", "h", "e", "n"], ["H", "e", "n"])
    ).toBe(true);
  });
  test("should return true", () => {
    expect(
      programs.isSubSetArr(["S", "t", "e", "p", "h", "e", "n"], ["H", "n"])
    ).toBe(true);
  });
  test("should return true", () => {
    expect(
      programs.isSubSetArr(["S", "t", "e", "p", "h", "e", "n"], ["n", "H"])
    ).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubSetArr([1, 2, 3], [2, 3])).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isSubSetArr([1, 2, 3], [3, 2])).toBe(true);
  });
});

// IS UNIQUE:
describe("IS UNIQUE", () => {
  test("should return false", () => {
    expect(programs.isUnique([2, 2, 1])).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isUnique([1])).toBe(true);
  });
});

// CHECK PALINDROME:
describe("CHECK PALINDROME", () => {
  test("should return true", () => {
    expect(programs.isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isPalindrome("race a car")).toBe(false);
  });
});

// IS PALINDROME NUMBER:
describe("IS PALINDROME NUMBER", () => {
  test("should return true", () => {
    expect(programs.isPalindromeNumber(121)).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isPalindromeNumber(-121)).toBe(false);
  });
});

// CHECK PERMUTATION:
describe("CHECK PERMUTATION", () => {
  test("should return true", () => {
    expect(programs.checkPermutation("amadm", "madam")).toBe(true);
  });
});

// IS PALINDROME PERMUTATION:
describe("IS PALINDROME PERMUTATION", () => {
  test("should return true", () => {
    expect(programs.isPalindromePermutation("Tact Coa")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isPalindromePermutation("Tact Coai")).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isPalindromePermutation("rrfee")).toBe(true);
  });
});

// IS ONE AWAY:
describe("IS ONE AWAY", () => {
  test("should return true", () => {
    expect(programs.isOneAway("pale", "ple")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isOneAway("pale", "bake")).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isOneAway("pale", "bale")).toBe(true);
  });
});

// STRING COMPRESSION:
describe("STRING COMPRESSION", () => {
  test("should return a2b1c5a3", () => {
    expect(programs.stringCompression("aabCccccaaa")).toBe("a2b1c5a3");
  });
  test("should return w3a2b4", () => {
    expect(programs.stringCompression("wwwaabbbb")).toBe("w3a2b4");
  });
  test("should return aab", () => {
    expect(programs.stringCompression("aab")).toBe("aab");
  });
});

// ROTATE MATRIX RIGHT (CLOCKWISE):
describe("ROTATE MATRIX RIGHT (CLOCKWISE)", () => {
  test("should return [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]", () => {
    expect(
      programs.rotateMatrixRight([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toStrictEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});

// ROTATE MATRIX LEFT (ANTI-CLOCKWISE):
describe("ROTATE MATRIX LEFT (ANTI-CLOCKWISE)", () => {
  test("should return [[11, 10, 7, 16], [9, 8, 6, 12], [1, 4, 3, 14], [5, 2, 13, 15]]", () => {
    expect(
      programs.rotateMatrixLeft([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toStrictEqual([
      [11, 10, 7, 16],
      [9, 8, 6, 12],
      [1, 4, 3, 14],
      [5, 2, 13, 15],
    ]);
  });
});

// IS STRING ROTATION:
describe("IS STRING ROTATION", () => {
  test("should return true", () => {
    expect(programs.isSubstring("waterbottle", "erbottlewat")).toBe(true);
  });
});

// GROUP ANAGRAMS:
describe("GROUP ANAGRAMS", () => {
  test("should return [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]", () => {
    expect(
      programs.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    ).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
  });
  test("should return [['321', '213'], ['897', '987', '798'], ['456']]", () => {
    expect(
      programs.groupAnagrams(["321", "213", "897", "456", "987", "798"])
    ).toStrictEqual([["321", "213"], ["897", "987", "798"], ["456"]]);
  });
  test("should return [['']]", () => {
    expect(programs.groupAnagrams([""])).toStrictEqual([[""]]);
  });
  test("should return [['a']]", () => {
    expect(programs.groupAnagrams(["a"])).toStrictEqual([["a"]]);
  });
});

// SEARCH IN ROTATED ARRAY:
describe("SEARCH IN ROTATED ARRAY", () => {
  test("should return [3, 4]", () => {
    expect(programs.searchRotatedArray([2, 5, 6, 0, 0, 1, 2], 0)).toStrictEqual(
      [3, 4]
    );
  });
});

// SPARSE SEARCH:
describe("SPARSE SEARCH", () => {
  test("should return 4", () => {
    expect(
      programs.sparseSearch(
        ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
        "ball"
      )
    ).toStrictEqual(4);
  });
});

// MISSING INT:
describe("MISSING INT", () => {
  test("should return 2", () => {
    expect(programs.missingInt([3, 0, 1])).toStrictEqual(2);
  });
  test("should return 2", () => {
    expect(programs.missingInt([0, 1])).toStrictEqual(2);
  });
  test("should return 8", () => {
    expect(programs.missingInt([9, 6, 4, 2, 3, 5, 7, 0, 1])).toStrictEqual(8);
  });
});

// FIND DUPLICATES:
describe("FIND DUPLICATES", () => {
  test("should return 2", () => {
    expect(programs.findDuplicate([2, 2, 1])).toStrictEqual(2);
  });
  test("should return [1, 2]", () => {
    expect(programs.findDuplicate([-4, 1, 2, 1, 2])).toStrictEqual([1, 2]);
  });
});

// SORTED MATRIX SEARCH:
describe("SORTED MATRIX SEARCH", () => {
  test("should return true]", () => {
    expect(
      programs.searchSortedMatrix(
        [
          [10, 20, 30, 40],
          [15, 25, 35, 45],
          [27, 29, 37, 48],
          [32, 33, 39, 50],
        ],
        29
      )
    ).toStrictEqual(true);
  });
});

// PEAKS AND VALLEYS:
describe("PEAKS AND VALLEYS", () => {
  test("should return [5, 1, 3, 2, 3]", () => {
    expect(programs.peaksValleys([5, 3, 1, 2, 3])).toStrictEqual([
      5, 1, 3, 2, 3,
    ]);
  });
});

// MAXIMUM SUM SUBARRAY:
describe("MAXIMUM SUM SUBARRAY", () => {
  test("should return 6", () => {
    expect(programs.maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
  });
  test("should return -1", () => {
    expect(programs.maxSum([-2, -1, -3])).toStrictEqual(-1);
  });
  test("should return -2", () => {
    expect(programs.maxSum([-2])).toStrictEqual(-2);
  });
});

// NUMBER OF SUBARRAYS EQUAL TO SUM
describe("NUMBER OF SUBARRAYS EQUAL TO SUM", () => {
  test("should return 1", () => {
    expect(programs.subarraySum([-2], -2)).toStrictEqual(1);
  });
  test("should return 1", () => {
    expect(programs.subarraySum([-2, -1], -1)).toStrictEqual(1);
  });
  test("should return 2", () => {
    expect(programs.subarraySum([-2, -1, -1], -1)).toStrictEqual(2);
  });
  test("should return 2", () => {
    expect(programs.subarraySum([-1, -2, -1], -1)).toStrictEqual(2);
  });
});

// IS ADDITIVE SEQUENCE:
describe("IS ADDITIVE SEQUENCE", () => {
  test("should return true", () => {
    expect(programs.isAdditiveSeries([8, 3, 5, 13])).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isAdditiveSeries([1, 1, 2, 3, 5, 8])).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isAdditiveSeries([-4, -4, -8, -12, -20, -32])).toBe(false);
  });
  test("should return false", () => {
    expect(programs.isAdditiveSeries([-4, 0, -4, -4, -8, -12])).toBe(false);
  });
});

// SWAP UPPERCASE AND LOWERCASE LETTERS DURING TRAVERSING
describe("SWAP UPPERCASE AND LOWERCASE LETTERS DURING TRAVERSING", () => {
  test("should return HEllO", () => {
    expect(programs.swapCase("heLLo")).toBe("HEllO");
  });
  test("should return heLLo", () => {
    expect(programs.swapCase("HEllO")).toBe("heLLo");
  });
});

// SWITCH REVERSER
describe("SWITCH REVERSER", () => {
  test("should return ['M', 'S', 'C']", () => {
    expect(programs.switchReverser(["m", "s", "c"])).toStrictEqual([
      "M",
      "S",
      "C",
    ]);
  });
  test("should return [9, 5, 6, 2, 4]", () => {
    expect(programs.switchReverser([4, 2, 6, 5, 9])).toStrictEqual([
      9, 5, 6, 2, 4,
    ]);
  });
  test("should return ['c', 4, 2, 'm', 6, 's', 5, 9]", () => {
    expect(
      programs.switchReverser(["c", 4, 2, "m", 6, "s", 5, 9])
    ).toStrictEqual(["c", 4, 2, "m", 6, "s", 5, 9]);
  });
});

// PIG LATIN CONVERTER
describe("PIG LATIN CONVERTER", () => {
  test("should return andelaway", () => {
    expect(programs.pigLatinConverter("Andela")).toBe("andelaway");
  });
  test("should return illway", () => {
    expect(programs.pigLatinConverter("WILL")).toBe("illway");
  });
  test("should return electricianway", () => {
    expect(programs.pigLatinConverter("Electrician")).toBe("electricianway");
  });
  test("should return ogday", () => {
    expect(programs.pigLatinConverter("dog")).toBe("ogday");
  });
  test("should return ategorycay", () => {
    expect(programs.pigLatinConverter("category")).toBe("ategorycay");
  });
  test("should return atterchay", () => {
    expect(programs.pigLatinConverter("chatter")).toBe("atterchay");
  });
  test("should return ashtray", () => {
    expect(programs.pigLatinConverter("trash")).toBe("ashtray");
  });
});

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS:
describe("LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS", () => {
  test("should return 0", () => {
    expect(programs.longestSubstring("")).toBe(0);
  });
  test("should return 3", () => {
    expect(programs.longestSubstring("dvdf")).toBe(3);
  });
  test("should return 6", () => {
    expect(programs.longestSubstring("abbbcabcdefef")).toBe(6);
  });
  test("should return 3", () => {
    expect(programs.longestSubstring("pwwkew")).toBe(3);
  });
});

// LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS:
describe("LONGEST COMMON SUBSEQUENCE WITHOUT REPEATING CHARACTERS", () => {
  test("should return ACD", () => {
    expect(programs.longestCommonSubsequence("ABCD", "ACBAD")).toBe("ACD");
  });
  test("should return ABCD", () => {
    expect(programs.longestCommonSubsequence("ABCD", "ABCAD")).toBe("ABCD");
  });
  test("should return AV", () => {
    expect(programs.longestCommonSubsequence("RAVEN", "HAVOC")).toBe("AV");
  });
  test("should return BC", () => {
    expect(programs.longestCommonSubsequence("ABBCC", "DBBCC")).toBe("BC");
  });
});

// // ROTATE STRING
// describe("ROTATE STRING", () => {
//   test("should return ptJavaScri", () => {
//     expect(programs.rotateString("JavaScript", 2, "right")).toBe("ptJavaScri");
//   });
// });

// // ROTATE ARRAY
// describe("ROTATE ARRAY", () => {
//   test("should return [[4, 5, 1, 2, 3], [3]]", () => {
//     expect(programs.rotateArray([1, 2, 3, 4, 5], 2, "right", 2)).toStrictEqual([
//       [4, 5, 1, 2, 3],
//       [3],
//     ]);
//   });
// });

// // APPLY SPELLING RULE TO FILTER() STRINGS -> cie
// describe("APPLY SPELLING RULE TO FILTER() STRINGS -> cie", () => {
//   test("should return ['recieve', 'percieve', 'concieve']", () => {
//     expect(
//       programs.spellingRule(
//         ["recieve", "deceive", "percieve", "deceit", "concieve"],
//         "cie"
//       )
//     ).toStrictEqual(["recieve", "percieve", "concieve"]);
//   });
// });

// // AN ARRAY OF EVEN SQUARE IN THE RANGE
// describe("AN ARRAY OF EVEN SQUARE IN THE RANGE", () => {
//   test("should return [0, 4, 16, 36, 64, 100]", () => {
//     expect(programs.even_squares(0, 10)).toStrictEqual([0, 4, 16, 36, 64, 100]);
//   });
// });

// // FIRST AND LAST CHARACTER OF EACH WORD
// describe("FIRST AND LAST CHARACTER OF EACH WORD", () => {
//   test("should return ['fr', 'yr', 'in']", () => {
//     expect(
//       programs.firstLastCharacter(["for", "your", "information"])
//     ).toStrictEqual(["fr", "yr", "in"]);
//   });
// });

// // SORTING ALPHABET AND NUMBERS THE RIGHT WAY
// describe("SORTING ALPHABET AND NUMBERS THE RIGHT WAY", () => {
//   test("should return ['a', 'A', 'B', 'b', 'c']", () => {
//     expect(programs.sortAlpsNums(["a", "B", "A", "c", "b"])).toStrictEqual([
//       "a",
//       "A",
//       "B",
//       "b",
//       "c",
//     ]);
//   });
//   test("should return [2, 3, 4, 10, 100]", () => {
//     expect(programs.sortAlpsNums([2, 3, 10, 4, 100])).toStrictEqual([
//       2, 3, 4, 10, 100,
//     ]);
//   });
//   test("should return ['1111','222','33','4','ant','Bug','cat','Dog']", () => {
//     expect(
//       programs.sortAlpsNums([
//         "ant",
//         "33",
//         "Bug",
//         "4",
//         "cat",
//         "1111",
//         "Dog",
//         "222",
//       ])
//     ).toStrictEqual(["1111", "222", "33", "4", "ant", "Bug", "cat", "Dog"]);
//   });
// });

// // SORT THE ARRAY IN A WAY THAT NUMBERS COME FIRST AND STRINGS SECOND
// describe("SORT THE ARRAY IN A WAY THAT NUMBERS COME FIRST AND STRINGS SECOND", () => {
//   test("should return [4, 33, 222, 1111, 'ant', 'Bug', 'cat', 'Dog']", () => {
//     expect(
//       programs.firstNumsSecondAlps([
//         "ant",
//         33,
//         "Bug",
//         4,
//         "cat",
//         1111,
//         "Dog",
//         222,
//       ])
//     ).toStrictEqual([4, 33, 222, 1111, "ant", "Bug", "cat", "Dog"]);
//   });
// });

// // SORT PRODUCTS
// describe("SORT PRODUCTS", () => {
//   test("should return [0, 1, 9, 25, 100]", () => {
//     expect(programs.sortProducts([-5, -1, 0, 3, 10])).toStrictEqual([
//       0, 1, 9, 25, 100,
//     ]);
//   });
// });

// // SORT THE OBJECT BY SALARY
// var employees = [
//   { name: "John", salary: 90000, hireDate: "July 1, 2010" },
//   { name: "David", salary: 75000, hireDate: "August 15, 2009" },
//   { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
//   { name: "John", salary: 90000, hireDate: "July 1, 2010" },
//   { name: "David", salary: 75000, hireDate: "August 15, 2009" },
//   { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
// ];
// describe("SORT THE OBJECT BY SALARY", () => {
//   test(`should return [
//     { hireDate: "August 15, 2009", name: "David", salary: 75000 },
//     { hireDate: "August 15, 2009", name: "David", salary: 75000 },
//     { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
//     { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
//     { hireDate: "July 1, 2010", name: "John", salary: 90000 },
//     { hireDate: "July 1, 2010", name: "John", salary: 90000 },
//   ]`, () => {
//     expect(programs.sortEmployeesBySalary(employees)).toStrictEqual([
//       { hireDate: "August 15, 2009", name: "David", salary: 75000 },
//       { hireDate: "August 15, 2009", name: "David", salary: 75000 },
//       { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
//       { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
//       { hireDate: "July 1, 2010", name: "John", salary: 90000 },
//       { hireDate: "July 1, 2010", name: "John", salary: 90000 },
//     ]);
//   });
// });
