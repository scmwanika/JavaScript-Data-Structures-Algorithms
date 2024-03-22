# Testing Functionality of Javascript Programs With Jest

ARRAYS AND STRINGS

<b>Is Unique:</b>
Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?

<b>Check Permutation:</b>
Given two strings, write a method to decide if one is a permutation of the other.

<b>URLify:</b>
Write a method to replace all spaces in a string with '%20'. You may assume that the
string has sufficient space at the end to hold the additional characters, and that you are
given the "true" length of the string.<br />
EXAMPLE<br />
Input: "Mr John Smith ", 13<br />
Output: "Mr%20John%20Smith"

<b>Palindrome Permutation:</b>
Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just
dictionary words.<br />
EXAMPLE<br />
Input: Tact Coa<br />
Output: True (permutations: "taco cat", "atco cta", etc.)

<b>One Away:</b>
There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check
if they are one edit (or zero edits) away.<br />
EXAMPLE<br />
pale, ple -> true<br />
pales, pale -> true<br />
pale, bale -> true<br />
pale, bake -> false

<b>String Compression:</b>
Implement a method to perform basic string compression using the counts of repeated
characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed"
string would not become smaller than the original string, your method should return the
original string. You can assume the string has only uppercase and lowercase letters.

<b>Rotate Matrix:</b>
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees. Can you do this in place?

<b>Zero Matrix:</b>
Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to 0.

<b>String Rotation:</b>
Assume you have a method isSubstring which checks if one word is a substring of another.
Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g "waterbottle" is a rotation of "erbottlewat").

SORTING AND SEARCHING

<b>Sorted Merge:</b>
You are given two sorted arrays, A and B, where A has a large enough buffer at the end to
hold B. Write a method to merge B into A in sorted order.

<b>Group Anagrams:</b>
Write a method to sort an array of strings so that all the anagrams are next to each other.

<b>Search in Rotated Array:</b>
Given a sorted array of n integers that has been rotated an unknown number of times, write
code to find an element in the array. You may assume that the array was originally sorted
in increasing order.

<b>Sorted Search, No Size:</b>
You are given an array-like data structure Listy which lacks a size method. It does,
however, have an elementAt (i) method that returns the element at index i in 0(1) time.
If i is beyond the bounds of the data structure, it returns -1. (For this reason, the data
structure only supports positive integers.) Given a Listy which contains sorted, positive
integers, find the index at which an element x occurs. If x occurs multiple times, you may
return any index.

<b>Sparse Search:</b>
Given a sorted array of strings that is interspersed with empty strings, write a method to
find the location of a given string.<br />
EXAMPLE<br />
Input: ball, ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]<br />
Output: 4

<b>Sort Big File:</b>
Imagine you have a 20 GB file with one string per line. Explain how you would sort the file.

<b>Missing Int:</b>
Given an input file with four billion non-negative integers, provide an algorithm to
generate an integer that is not contained in the file. Assume you have 1 GB of memory
available for this task.<br />
FOLLOW UP<br />
What if you have only 10 MB of memory? Assume that all the values are distinct and we now
have no more than one billion non-negative integers.

<b>Find Duplicates:</b>
You have an array with all the numbers from 1 to N, where N is at most 32,000. The array
may have duplicate entries and you do not know what N is. With only 4 kilobytes of memory
available, how would you print all duplicate elements in the array?

<b>Sorted Matrix Search:</b>
Given an M x N matrix in which each row and each column is sorted in ascending order,
write a method to find an element.

<b>Rank from Stream:</b>
Imagine you are reading in a stream of integers. Periodically, you wish to be able to look
up the rank of a number x (the number of values less than or equal to x). lmplement the
data structures and algorithms to support these operations. That is, implement the method
track (int x), which is called when each number is generated, and the method
getRankOfNumber(int x), which returns the number of values less than or equal to x
(not including x itself).<br />
EXAMPLE<br />
Stream (in order of appearance): 5, 1, 4, 4, 5, 9, 7, 13, 3<br />
getRankOfNumber(l) = 0<br />
getRankOfNumber(3) = 1<br />
getRankOfNumber(4) = 3

<b>Peaks and Valleys:</b>
In an array of integers, a "peak" is an element which is greater than or equal to the
adjacent integers and a "valley" is an element which is less than or equal to the adjacent
integers.
For example, in the array [5, 1, 3, 2, 3], [5, 3, 3] are peaks and [1, 2] are valleys.
Given an array of integers, sort the array into an alternating sequence of peaks and valleys.<br />
EXAMPLE<br />
Input: [5, 3, 1, 2, 3]<br />
Output: [5, 1, 3, 2, 3]
