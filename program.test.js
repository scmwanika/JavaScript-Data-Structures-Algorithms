const programs = require("./programs");

console.log("TESTING FUNCTIONALITY OF JAVASCRIPT PROGRAMS WITH JEST");

// CONVERT 12HOURS TO 24HOURS
describe("CONVERT 12HOURS TO 24HOURS", () => {
  test("should return 17:00", () => {
    expect(programs.convertTwelveHoursToTwentyFourHours("5:00 PM")).toBe(
      "17:00"
    );
  });
  test("should return 23:42", () => {
    expect(programs.convertTwelveHoursToTwentyFourHours("11:42 PM")).toBe(
      "23:42"
    );
  });
  test("should return 12:00", () => {
    expect(programs.convertTwelveHoursToTwentyFourHours("12:00 PM")).toBe(
      "12:00"
    );
  });
  test("should return 00:00", () => {
    expect(programs.convertTwelveHoursToTwentyFourHours("12:00 AM")).toBe(
      "00:00"
    );
  });
});

// CONVERT 24HOURS TO 12HOURS
describe("CONVERT 24HOURS TO 12HOURS", () => {
  test("should return 5:00 PM", () => {
    expect(programs.convertTwentyFourHoursToTwelveHours("17:00")).toBe(
      "5:00 PM"
    );
  });
  test("should return 11:42 PM", () => {
    expect(programs.convertTwentyFourHoursToTwelveHours("23:42")).toBe(
      "11:42 PM"
    );
  });
  test("should return 12:00 PM", () => {
    expect(programs.convertTwentyFourHoursToTwelveHours("12:00")).toBe(
      "12:00 PM"
    );
  });
  test("should return 11:00 AM", () => {
    expect(programs.convertTwentyFourHoursToTwelveHours("11:00")).toBe(
      "11:00 AM"
    );
  });
});

// NUMBER OF DAYS BETWEEN TWO DATES
describe("NUMBER OF DAYS BETWEEN TWO DATES", () => {
  test("should return 6", () => {
    expect(programs.daysBetweenDates("12/25/2022", "12/31/2022")).toBe(6);
  });
});

// SUBTRACT DAYS
describe("SUBTRACT DAYS", () => {
  test("should return 2022-12-25T00:00:00.000Z", () => {
    expect(programs.subtractDays("2022-12-31", 6)).toBe(
      "2022-12-25T00:00:00.000Z"
    );
  });
});

// ROTATE MATRIX RIGHT (2D Array)
describe("ROTATE MATRIX RIGHT (2D Array)", () => {
  test("should return [[6, 3, 0], [7, 4, 1], [8, 5, 2]]", () => {
    expect(
      programs.rotateMatrixRight([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ])
    ).toStrictEqual([
      [6, 3, 0],
      [7, 4, 1],
      [8, 5, 2],
    ]);
  });
});

// ROTATE MATRIX LEFT (2D Array)
describe("ROTATE MATRIX LEFT (2D Array)", () => {
  test("should return [[2, 5, 8], [1, 4, 7], [0, 3, 6]]", () => {
    expect(
      programs.rotateMatrixLeft([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ])
    ).toStrictEqual([
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
    ]);
  });
});

// IS ROTATION
describe("IS ROTATION", () => {
  test("should return true", () => {
    expect(programs.isRotation("waterbottle", "erbottlewat")).toBe(true);
  });
});

// ROTATE STRING
describe("ROTATE STRING", () => {
  test("should return ptJavaScri", () => {
    expect(programs.rotateString("JavaScript", 2, "right")).toBe("ptJavaScri");
  });
});

// ROTATE ARRAY
describe("ROTATE ARRAY", () => {
  test("should return [[4, 5, 1, 2, 3], [3]]", () => {
    expect(programs.rotateArray([1, 2, 3, 4, 5], 2, "right", 2)).toStrictEqual([
      [4, 5, 1, 2, 3],
      [3],
    ]);
  });
});

// SUBSTRINGS AND SUBARRAYS
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

// SUBSEQUENCES AND SUBSETS
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

// IS SUBSTRING / COMBINATION OF ANOTHER STRING
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

// IS SUBSEQUENCE OF ANOTHER STRING
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

// IS SUBSET OF ANOTHER STRING
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

// IS SUBARRAY / COMBINATION OF ANOTHER ARRAY
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

// IS SUBSEQUENCE OF ANOTHER ARRAY
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

// IS SUBSET OF ANOTHER ARRAY
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

// LARGEST SUBARRAY SUM
describe("LARGEST SUBARRAY SUM", () => {
  test("should return 159", () => {
    expect(programs.largestSubarraySum([1, 100, 4, 15, 9, 30])).toBe(159);
  });
  test("should return 159", () => {
    expect(programs.largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1])).toBe(
      159
    );
  });
  test("should return 5", () => {
    expect(programs.largestSubarraySum([2, -8, 3, -2, 4, -10])).toBe(5);
  });
});

// COUNT SUBARRAYS EQUAL TO SUM
describe("COUNT SUBARRAYS EQUAL TO SUM", () => {
  test("should return 1", () => {
    expect(programs.countSubArraysEqualToSum([2, 2, -4, 1, 1, 2], -3)).toBe(1);
  });
  test("should return 2", () => {
    expect(programs.countSubArraysEqualToSum([2, 2, 2], 4)).toBe(2);
  });
  test("should return 2", () => {
    expect(programs.countSubArraysEqualToSum([3, 2, 1], 3)).toBe(2);
  });
});

// LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
describe("LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS", () => {
  test("should return 0", () => {
    expect(programs.lengthOfLongestSubstring("")).toBe(0);
  });
  test("should return 3", () => {
    expect(programs.lengthOfLongestSubstring("dvdf")).toBe(3);
  });
  test("should return 6", () => {
    expect(programs.lengthOfLongestSubstring("abbbcabcdefef")).toBe(6);
  });
  test("should return 3", () => {
    expect(programs.lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});

// LONGEST COMMON SUBSEQUENCE
describe("LONGEST COMMON SUBSEQUENCE", () => {
  test("should return ACD", () => {
    expect(programs.longestCommonSubsequence("ABCD", "ACBAD")).toBe("ACD");
  });
  test("should return ABCD", () => {
    expect(programs.longestCommonSubsequence("ABCD", "ABCAD")).toBe("ABCD");
  });
  test("should return AV", () => {
    expect(programs.longestCommonSubsequence("RAVEN", "HAVOC")).toBe("AV");
  });
  test("should return BBCC", () => {
    expect(programs.longestCommonSubsequence("ABBCC", "DBBCC")).toBe("BBCC");
  });
});

// IS PALINDROME / IS REVERSE
describe("IS PALINDROME / IS REVERSE", () => {
  test("should return true", () => {
    expect(programs.isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isPalindrome("race a car")).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isPalindrome("")).toBe(true);
  });
});

// IS PALINDROMES / IS REVERSE
describe("IS PALINDROMES / IS REVERSE", () => {
  test("should return true", () => {
    expect(programs.isPalindromes("pots", "stop")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isPalindromes("pots", "stops")).toBe(false);
  });
});

// IS PERMUTATION / IS ANAGRAM
describe("IS PERMUTATION / IS ANAGRAM", () => {
  test("should return true", () => {
    expect(programs.isPermutation("amadm", "madam")).toBe(true);
  });
});

// IS PERMUTATION OF A PALINDROME
describe("IS PERMUTATION OF A PALINDROME", () => {
  test("should return true", () => {
    expect(programs.isPalindromePermutation("refer")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isPalindromePermutation("rrfee")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isPalindromePermutation("taco cat")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isPalindromePermutation("atco cta")).toBe(true);
  });
});

// PERMUTATIONS -> ANAGRAMS

//....................................

// SORTING ALPHABET AND NUMBERS THE RIGHT WAY
describe("SORTING ALPHABET AND NUMBERS THE RIGHT WAY", () => {
  test("should return ['a', 'A', 'B', 'b', 'c']", () => {
    expect(programs.sortAlpsNums(["a", "B", "A", "c", "b"])).toStrictEqual([
      "a",
      "A",
      "B",
      "b",
      "c",
    ]);
  });
  test("should return [2, 3, 4, 10, 100]", () => {
    expect(programs.sortAlpsNums([2, 3, 10, 4, 100])).toStrictEqual([
      2, 3, 4, 10, 100,
    ]);
  });
  test("should return ['1111','222','33','4','ant','Bug','cat','Dog']", () => {
    expect(
      programs.sortAlpsNums([
        "ant",
        "33",
        "Bug",
        "4",
        "cat",
        "1111",
        "Dog",
        "222",
      ])
    ).toStrictEqual(["1111", "222", "33", "4", "ant", "Bug", "cat", "Dog"]);
  });
});

// SORT THE ARRAY IN A WAY THAT NUMBERS COME FIRST AND STRINGS SECOND
describe("SORT THE ARRAY IN A WAY THAT NUMBERS COME FIRST AND STRINGS SECOND", () => {
  test("should return [4, 33, 222, 1111, 'ant', 'Bug', 'cat', 'Dog']", () => {
    expect(
      programs.firstNumsSecondAlps([
        "ant",
        33,
        "Bug",
        4,
        "cat",
        1111,
        "Dog",
        222,
      ])
    ).toStrictEqual([4, 33, 222, 1111, "ant", "Bug", "cat", "Dog"]);
  });
});

// SORT PRODUCTS
describe("SORT PRODUCTS", () => {
  test("should return [0, 1, 9, 25, 100]", () => {
    expect(programs.sortProducts([-5, -1, 0, 3, 10])).toStrictEqual([
      0, 1, 9, 25, 100,
    ]);
  });
});

// REGULAR EXPRESSION -> RegExp
describe("REGULAR EXPRESSION -> RegExp", () => {
  test("should return aaCeehiiikMnnnpprSstw", () => {
    expect(programs.regExp(" M@wa'n'ik$a 'Step&&hen' #3-|Crisp|in ")).toBe(
      "aaCeehiiikMnnnpprSstw"
    );
  });
});

// SORT THE OBJECT BY SALARY
var employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];
describe("SORT THE OBJECT BY SALARY", () => {
  test(`should return [
    { hireDate: "August 15, 2009", name: "David", salary: 75000 },
    { hireDate: "August 15, 2009", name: "David", salary: 75000 },
    { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
    { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
    { hireDate: "July 1, 2010", name: "John", salary: 90000 },
    { hireDate: "July 1, 2010", name: "John", salary: 90000 },
  ]`, () => {
    expect(programs.sortEmployeesBySalary(employees)).toStrictEqual([
      { hireDate: "August 15, 2009", name: "David", salary: 75000 },
      { hireDate: "August 15, 2009", name: "David", salary: 75000 },
      { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
      { hireDate: "December 12, 2011", name: "Ana", salary: 80000 },
      { hireDate: "July 1, 2010", name: "John", salary: 90000 },
      { hireDate: "July 1, 2010", name: "John", salary: 90000 },
    ]);
  });
});

// EXTRACT THE VALUES OF A GIVEN PROPERTY FROM AN ARRAY OF OBJECTS

// COMMON CHARACTERS
describe("COMMON CHARACTERS", () => {
  test("should return ple", () => {
    expect(programs.commonCharacters("pale", "ple")).toBe("ple");
  });
  test("should return pale", () => {
    expect(programs.commonCharacters("pales", "pale")).toBe("pale");
  });
  test("should return ale", () => {
    expect(programs.commonCharacters("pale", "bale")).toBe("ale");
  });
  test("should return ae", () => {
    expect(programs.commonCharacters("pale", "bae")).toBe("ae");
  });
});

// NOT COMMON CHARACTERS
describe("NOT COMMON CHARACTERS", () => {
  test("should return a", () => {
    expect(programs.notCommonCharacters("pale", "ple")).toBe("a");
  });
  test("should return s", () => {
    expect(programs.notCommonCharacters("pales", "pale")).toBe("s");
  });
  test("should return pb", () => {
    expect(programs.notCommonCharacters("pale", "bale")).toBe("pb");
  });
  test("should return plb", () => {
    expect(programs.notCommonCharacters("pale", "bae")).toBe("plb");
  });
});

// IS ONEAWAY -> ZERO OR ONE EDIT AWAY
describe("IS ONEAWAY -> ZERO OR ONE EDIT AWAY", () => {
  test("should return true", () => {
    expect(programs.isOneAway("pale", "pale")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isOneAway("pale", "ple")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isOneAway("pales", "pale")).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isOneAway("pale", "bale")).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isOneAway("pale", "bae")).toBe(false);
  });
  test("should return false", () => {
    expect(programs.isOneAway("programming-CCC", "programming-ccc")).toBe(
      false
    );
  });
});

// COMMON ELEMENTS SUM -> type insensitive
describe("COMMON ELEMENTS SUM -> type insensitive", () => {
  test("should return 5", () => {
    expect(programs.commonElements([1, "2", 3], [2, "3", 4])).toBe(5);
  });
});

// THE OCCURRENCE OF A WORD IN STRING
describe("THE OCCURRENCE OF A WORD IN STRING", () => {
  test("should return ['the', 2]", () => {
    expect(
      programs.wordCount("The quick brown fox jumps over the lazy dog", "the")
    ).toStrictEqual(["the", 2]);
  });
});

// THE OCCURRENCE OF A LETTER IN STRING
describe("THE OCCURRENCE OF A LETTER IN STRING", () => {
  test("should return ['o', 2]", () => {
    expect(programs.letterCount("Olweny John", "o")).toStrictEqual(["o", 2]);
  });
});

// THE OCCURRENCE OF SUBSTRING IN STRING
describe("THE OCCURRENCE OF SUBSTRING IN STRING", () => {
  test("should return 2", () => {
    expect(programs.countSubstrings("Mwanikan", "an")).toBe(2);
  });
  test("should return 4", () => {
    expect(
      programs.countSubstrings(
        "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
    gave Mike 1 of her orange so she is now left with only 1 Orange.",
        "ORaNGe"
      )
    ).toBe(4);
  });
});

// THE WORDS / NUMBER OF WORDS WITH SUBSTRING
describe("THE WORDS / NUMBER OF WORDS WITH SUBSTRING", () => {
  test("should return ", () => {
    expect(
      programs.wordHasSubstring(
        "The quick brown fox jumps over the lazy dog",
        "o"
      )
    ).toStrictEqual(["brown", "fox", "over", "dog"]);
  });
  test("should return ", () => {
    expect(
      programs.wordHasSubstring(
        "John Doe has 5 oranges while Jane Doe has only 2 oranges, Jane \
    gave Mike 1 of her orange so she is now left with only 1 Orange.",
        "ORaNGe"
      )
    ).toStrictEqual(["oranges", "oranges", "orange", "orange."]);
  });
});

// SORTED MATRIX SEARCH
describe("SORTED MATRIX SEARCH", () => {
  test("should return [[ 2, 1 ], true]", () => {
    expect(
      programs.findElement(
        [
          [10, 20, 30, 40],
          [15, 25, 35, 45],
          [27, 29, 37, 48],
          [32, 33, 39, 50],
        ],
        29
      )
    ).toStrictEqual([[2, 1], true]);
  });
});

// WORD WEIGHT
describe("WORD WEIGHT", () => {
  test("should return 8", () => {
    expect(programs.wordWeight("turing", 2)).toBe(8);
  });
});

// APPLY SPELLING RULE TO FILTER() STRINGS -> cie
describe("APPLY SPELLING RULE TO FILTER() STRINGS -> cie", () => {
  test("should return ['recieve', 'percieve', 'concieve']", () => {
    expect(
      programs.spellingRule(
        ["recieve", "deceive", "percieve", "deceit", "concieve"],
        "cie"
      )
    ).toStrictEqual(["recieve", "percieve", "concieve"]);
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

// STRING COMPRESSION
describe("STRING COMPRESSION", () => {
  test("should return a2b1c5a3", () => {
    expect(programs.strCompression("aabCccccaaa")).toBe("a2b1c5a3");
  });
  test("should return w3a2b4", () => {
    expect(programs.strCompression("wwwaabbbb")).toBe("w3a2b4");
  });
  test("should return k4j1", () => {
    expect(programs.strCompression("kkkkj")).toBe("k4j1");
  });
  test("should return aab", () => {
    expect(programs.strCompression("aab")).toBe("aab");
  });
});

// GROUP ANAGRAMS -> SORT AN ARRAY OF STRINGS SO THAT ALL THE ANAGRAMS ARE NEXT TO EACH OTHER
describe("GROUP ANAGRAMS -> SORT AN ARRAY OF STRINGS SO THAT ALL THE ANAGRAMS ARE NEXT TO EACH OTHER", () => {
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

// ALTERNATING SEQUENCE -> Peaks and Valleys
describe("ALTERNATING SEQUENCE -> Peaks and Valleys", () => {
  test("should return [5, 1, 3, 2, 3]", () => {
    expect(programs.peaksValleys([5, 3, 1, 2, 3])).toStrictEqual([
      5, 1, 3, 2, 3,
    ]);
  });
  test("should return [12, 1, 10, 4, 7, 6]", () => {
    expect(programs.peaksValleys([1, 12, 4, 6, 7, 10])).toStrictEqual([
      12, 1, 10, 4, 7, 6,
    ]);
  });
  test("should return -1", () => {
    expect(programs.peaksValleys([])).toStrictEqual(-1);
  });
  test("should return [7, 1, 6, 2, 5, 3, 4]", () => {
    expect(programs.peaksValleys([7, 1, 2, 3, 4, 5, 6])).toStrictEqual([
      7, 1, 6, 2, 5, 3, 4,
    ]);
  });
  test("should return [9, 1, 8, 2, 7, 3, 6, 4]", () => {
    expect(programs.peaksValleys([1, 6, 9, 4, 3, 7, 8, 2])).toStrictEqual([
      9, 1, 8, 2, 7, 3, 6, 4,
    ]);
  });
});

// COUNT VOWELS AND CONSONANTS

// WORDS WITH MORE THAN ONE VOWEL

// AN ARRAY OF EVEN SQUARE IN THE RANGE
describe("AN ARRAY OF EVEN SQUARE IN THE RANGE", () => {
  test("should return [0, 4, 16, 36, 64, 100]", () => {
    expect(programs.even_squares(0, 10)).toStrictEqual([0, 4, 16, 36, 64, 100]);
  });
});

// FIRST AND LAST CHARACTER OF EACH WORD
describe("FIRST AND LAST CHARACTER OF EACH WORD", () => {
  test("should return ['fr', 'yr', 'in']", () => {
    expect(
      programs.firstLastCharacter(["for", "your", "information"])
    ).toStrictEqual(["fr", "yr", "in"]);
  });
});

// IS MULTIPLE
describe("IS MULTIPLE", () => {
  test("should return buzz", () => {
    expect(programs.fizzBuzz(5)).toBe("buzz");
  });
});

// IS ADDITIVE SEQUENCE / FIBONACCI SERIES
describe("IS ADDITIVE SEQUENCE / FIBONACCI SERIES", () => {
  test("should return true", () => {
    expect(programs.isFibonacciSeries([8, 3, 5, 13])).toBe(true);
  });
  test("should return true", () => {
    expect(programs.isFibonacciSeries([4, 4, 8, 12, 20, 32])).toBe(true);
  });
  test("should return false", () => {
    expect(programs.isFibonacciSeries([-4, -4, -8, -12, -20, -32])).toBe(false);
  });
  test("should return false", () => {
    expect(programs.isFibonacciSeries([-4, 0, -4, -4, -8, -12])).toBe(false);
  });
});

// IS PRIME NUMBER
describe("IS PRIME NUMBER", () => {
  test("should return false", () => {
    expect(programs.isPrimeNumber(0)).toBe(false);
  });
  test("should return false", () => {
    expect(programs.isPrimeNumber(1)).toBe(false);
  });
  test("should return true", () => {
    expect(programs.isPrimeNumber(7)).toBe(true);
  });
});