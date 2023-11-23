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
