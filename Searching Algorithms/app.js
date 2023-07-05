/* Searching for data is a fundamental computer programming task that has been studied
for many years. This chapter looks at just one aspect of the search problem—searching
for a specified value in a list.
There are two ways to search for data in a list: sequential search and binary search. A
sequential search is used when the items in a list are in random order; a binary search
is used when the items in a list are in sorted order. Binary search is the more efficient
algorithm, but you also have to take into account the extra time it takes to sort the data
set before being able to search it for a value.

Sequential Search
The most obvious way to search for data in a list is to begin at the first element and move
to each element in the list until you either find the data you are looking for or you reach
the end of the list. This is called a sequential search, sometimes also called a linear search.
It is an example of a brute-force search technique, where potentially every element in
the data structure is visited on the way to a solution.
A sequential search is very easy to implement. Simply start a loop at the beginning of
the list and compare each element to the data you are searching for. If you find a match,
the search is over. If you get to the end of the list without generating a match, then the
data searched for is not in the list.
The seqSearch() function: */
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

/* If the data argument is found in the array, the function returns true immediately. If the
function gets to the end of the array without finding a match, the function returns false.
Example 13-2 presents a program to test our sequential search function, including a
function to make it easy to display the array’s contents. As in Chapter 12, we use random
number generation to populate an array with random numbers in the range of 1 to 100.
We also use a function to display the contents of the array, just as we did in Chapter 12.
Executing the +seqSearch() function */
function dispArr(arr) {
  for (var i = 0; i < arr.length; ++i) {
    console.log(arr[i] + " ");
    if (i % 10 == 9) {
      console.log("\n");
    }
  }
  if (i % 10 != 0) {
    console.log("\n");
  }
}
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
console.log("Enter a number to search for: ");
var num = parseInt(23);
console.log();
if (seqSearch(nums, num)) {
  console.log(num + " is in the array.");
} else {
  console.log(num + " is not in the array.");
}
console.log();
dispArr(nums);

/* This program creates an array with random numbers in the range of 0 to 100. The user
enters a value, the value is searched for, and the result is displayed. Finally, the program
displays the complete array as proof of the validity of the function’s return value. Here
is a sample run of the program:
Enter a number to search for: 23
23 is in the array.

We can also write the sequential search function so that it returns the position where a
match is found. Modifying the seqSearch() function to return the position found (or -1) */
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

/* Notice that if the element searched for is not found, the function returns -1. This is the
best value to return for the function since an array element cannot be stored in position -1.
A program that uses this second definition of seqSearch().
Testing the modified seqSearch() function */
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
console.log("Enter a number to search for: ");
var num = 22;
console.log();
var position = seqSearch(nums, num);
if (position > -1) {
  console.log(num + " is in the array at position " + position);
} else {
  console.log(num + " is not in the array.");
}
console.log();
dispArr(nums);

/* Here is one run of the program:
Enter a number to search for: 22
22 is in the array at position 35

Keep in mind that the seqSearch() function is not as fast as the built-in Array.indexOf() function, 
but is shown here to demonstrate how search works.

Searching for Minimum and Maximum Values
Computer programming problems often involve searching for minimum and maximum
values. In a sorted data structure, searching for these values is a trivial task.
Searching an unsorted data structure, on the other hand, is a more challenging task.
Let’s start by determining how we should search an array for a minimum value. Here is
one algorithm:
1. Assign the first element of the array to a variable as the minimum value.
2. Begin looping through the array, starting with the second element, comparing each
element with the current minimum value.
3. If the current element has a lesser value than the current minimum value, assign
the current element as the new minimum value.
4. Move to the next element and repeat step 3.
5. The minimum value is stored in the variable when the program ends. */

// The findMin() function
function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/* The key thing to notice about this function is that it begins with the second array element,
since we are assigning the first array element as the current minimum value.
Let’s test the function in a program, shown in below.
Finding the minimum value of an array */
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
console.log();
console.log("The minimum value is: " + minValue);

/* Here is the output from running this program:

The minimum value is: 1 

The algorithm for finding the maximum value works in a similar fashion. We assign the
first element of the array as the maximum value and then loop through the rest of the
array, comparing each element to the current maximum value. If the current element is
greater than the current maximum value, that element’s value is stored in the variable.

The findMax() function */
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// A program that finds both the minimum value and the maximum value of an array.
// Using the findMax() function
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
console.log();
console.log();
console.log("The minimum value is: " + minValue);
var maxValue = findMax(nums);
console.log();
console.log("The maximum value is: " + maxValue);

/* The output from this program is:

The minimum value is: 2
The maximum value is: 99 

Using Self-Organizing Data
The fastest successful sequential searches on unordered data occur when the data being
searched for is located at the beginning of the data set. You can ensure that a successfully
found data item will be found quickly in the future by moving it to the beginning of a
data set after it has been found in a search.
The concept behind this strategy is that we can minimize search times by locating items
that are frequently searched for at the beginning of a data set. For example, if you are a
librarian and you are asked several times a day for the same reference book, you will
keep that book close to your desk for easy access. After many searches, the most frequently
searched-for items will have moved from wherever they were stored to the
beginning of the data set. This is an example of self-organized data: data that is organized
not by the programmer before the program is executed, but by the program itself while
the program is running.
It makes sense to allow your data to self-organize since the data being searched most
likely follow the “80-20 rule,” meaning that 80% of the searches made on a data set are
searching for just 20% of the data in the set. Self-organization will eventually put that
20% at the beginning of the data set, where a simple sequential search will find them
quickly. 
Probability distributions such as the 80-20 rule are called Pareto distributions, named
for Vilfredo Pareto, who discovered these distributions studying the spread of income
and wealth in the late 19th century. See The Art of Computer Programming: Volume 3,
Sorting and Searching by Donald Knuth (Addison-Wesley, 399-401) for more information
on probability distributions in data sets.
We can modify our seqSearch() function to include self-organization fairly easily. */

/* Another way we can write the seqSearch() function with self-organizing data is to
move a found item to the beginning of the data set, though we wouldn’t want to exchange
an element if it is already close to the beginning. To achieve this goal, we can swap found
elements only if they are located at least some specified distance away from the beginning
of the data set. We only have to determine what is considered to a be far enough away
from the beginning of the data set to warrant moving the element closer to the beginning.
Following the 80-20 rule again, we can make a rule that states that a data element is
relocated to the beginning of the data set only if its location lies outside the first 20% of
the items in the data set. */
// seqSearch() with better self-organization
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data && i > arr.length * 0.2) {
      swap(arr, i, 0);
      return true;
    } else if (arr[i] == data) {
      return true;
    }
  }
  return false;
}

// A program that tests this definition on a small data set of 10 elements.
// Searching with self-organization
var nums = [];
for (var i = 0; i < 10; ++i) {
  nums[i] = Math.floor(Math.random() * 11);
}
dispArr(nums);
console.log();
console.log("Enter a value to search for: ");
var val = parseInt(3);
if (seqSearch(nums, val)) {
  console.log("Found element: ");
  console.log();
  dispArr(nums);
} else {
  console.log(val + " is not in array.");
}

/* Here are the results of a sample run of this program:
4 5 1 8 10 1 3 10 0 1
Enter a value to search for: 3
Found element:
3 5 1 8 10 1 4 10 0 1
Let’s run the program again and search for an element closer to the front of the data set:
4 2 9 5 0 6 9 4 5 6
Enter a value to search for: 2
Found element:
4 2 9 5 0 6 9 4 5 6
Because the searched-for element is so close to the front of the data set, the function
does not change its position.
The searches we have discussed so far require that the data being searched be kept in
an unordered sequence. However, we can speed up searches on large data sets significantly
if we first sort the data set before performing a search. In the next section we
discuss an algorithm for searching ordered data—the binary search.

Binary Search
When the data you are searching for are sorted, a more efficient search than the sequential
search is the binary search. To understand how binary search works, imagine
you are playing a number-guessing game where the possible number is between 1 and
100, and you have to guess the number as chosen by a friend. According to the rules,
for every guess you make, your friend has three responses:
1. The guess is correct.
2. The guess is too high.
3. The guess is too low.
Following these rules, the best strategy is to choose the number 50 as your first guess.
If that guess is too high, choose 25. If 50 is too low, you should guess 75. For each guess,
you choose a midpoint by adjusting the lower range or the upper range of the numbers
(depending on whether your guess is too low or too high). This midpoint becomes your
new guess. As long as you follow this strategy, you will guess the correct number in the
minimum possible number of guesses. Figure 13-2 demonstrates how this strategy
works if the number to be guessed is 82.

We can implement this strategy as the binary search algorithm. This algorithm only
works on a sorted data set. Here is the algorithm:
1. Set a lower bound to the first position of the array (0).
2. Set an upper bound to the last element of the array (length of array minus 1).
3. While the lower bound is less than or equal to the upper bound, do the following
steps:
a. Set the midpoint as (upper bound minus lower bound) divided by 2.
b. If the midpoint element is less than the data being searched for, set a new lower
bound to the midpoint plus 1.
c. If the midpoint element is greater than the data being searched for, set a new
upper bound to the midpoint minus 1.
d. Otherwise, return the midpoint as the found element. */

// The binary search algorithm, along with a program to test the definition.
// Using the binary search algorithm
function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
console.log();
console.log("Enter a value to search for: ");
var val = parseInt(37);
var retVal = binSearch(nums, val);
if (retVal >= 0) {
  console.log("Found " + val + " at position " + retVal);
} else {
  console.log(val + " is not in array.");
}

/* Here is the output from one run of the program:

Enter a value to search for: 37
Found 37 at position 45

It will be interesting to watch the function as it works its way through the search space
looking for the value specified, so in Example 13-13, let’s add a statement to the bin
Search() function that displays the midpoint each time it is recalculated: */
// binSearch() displaying the midpoint value
function binSearch(arr, data) {
var upperBound = arr.length-1;
var lowerBound = 0;
while (lowerBound <= upperBound) {
var mid = Math.floor((upperBound + lowerBound) / 2);
console.log("Current midpoint: " + mid);
if (arr[mid] < data) {
lowerBound = mid + 1;
}
else if (arr[mid] > data) {
upperBound = mid - 1;
}
else {
return mid;
}
}
return -1;
}

/* Now let’s run the program again:

Enter a value to search for: 82
Current midpoint: 49
Current midpoint: 74
Current midpoint: 87
Found 82 at position 87

From this output, we see that the original midpoint value was 49. That’s too low since
we are searching for 82, so the next midpoint is calculated to be 74. That’s still too low,
so a new midpoint is calculated, 87, and that value holds the element we are searching
for, so the search is over.

Counting Occurrences
When the binSearch() function finds a value, if there are other occurrences of the same
value in the data set, the function will be positioned in the immediate vicinity of other
like values. In other words, other occurrences of the same value will either be to the
immediate left of the found value’s position or to the immediate right of the found value’s
position.
If this fact isn’t readily apparent to you, run the binSearch() function several times and
take note of the position of the found value returned by the function. Here’s an example
of a sample run from earlier in this chapter:

Enter a value to search for: 37
Found 37 at position 45

If you count the position of each element, the number 37 found by the function is the
one that is in the middle of the three occurrences of 37. This is just the nature of how
the binSearch() function works.
So what does a function that counts the occurrences of values in a data set need to do
to make sure that it counts all the occurrences? The easiest solution is to write two loops
that move both down, or to the left of, the data set, counting occurrences, and up, or
the right of, the data set, counting occurrences. Example 13-14 shows a definition of the
count() function.
The count() function */
function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if (position > -1) {
    ++count;
    for (var i = position - 1; i > 0; --i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
    for (var i = position + 1; i < arr.length; ++i) {
      if (arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }
  return count;
}

/* The function starts by calling the binSearch() function to search for the specified value.
If the value is found in the data set, the the function begins counting occurrences by
calling two for loops. The first loop works its way down the array, counting occurrences
of the found value, stopping when the next value in the array doesn’t match the found
value. The second for loop works its way up the array, counting occurrences and stopping
when the next value in the array doesn’t match the found value.
Example 13-15 shows how we can use count() in a program.
Example 13-15. Using the count() function
var nums = [];
for (var i = 0; i < 100; ++i) {
nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
console.log();
console.log("Enter a value to count: ");
var val = parseInt(readline());
var retVal = count(nums, val);
console.log("Found " + retVal + " occurrences of " + val + ".");

Here is a sample run of the program:

Enter a value to count: 45
Found 2 occurrences of 45.

Here is another sample run:

Enter a value to count: 56
Found 0 occurrences of 56.

Searching Textual Data
Up to this point, all of our searches have been conducted on numeric data. We can also
use the algorithms discussed in this chapter with textual data.
Searching a text file using seqSearch() */
function seqSearch(arr, data) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}
var words = 
`The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,
in the beginning, provincial. The historic mission of uniting nationalism and
democracy was in the course of time given to new leaders from a region beyond
the mountains, peopled by men and women from all sections and free from those
state traditions which ran back to the early days of colonization. The voice
of the democratic nationalism nourished in the West was heard when Clay of
Kentucky advocated his American system of protection for industries; when
Jackson of Tennessee condemned nullification in a ringing proclamation that
has taken its place among the great American state papers; and when Lincoln
of Illinois, in a fateful hour, called upon a bewildered people to meet the
supreme test whether this was a nation destined to survive or to perish. And
it will be remembered that Lincoln's party chose for its banner that earlier
device--Republican--which Jefferson had made a sign of power. The "rail splitter"
from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
and his appeal was clothed in the simple language of the people, not in the
sonorous rhetoric which Webster learned in the schools.`;

words = words.split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  console.log("Found " + word + " at position " + position + ".");
  console.log("Sequential search took " + elapsed + " milliseconds.");
} else {
  console.log(word + " is not in the file.");
}
/* The output from this program is:
Found rhetoric at position 175.
Sequential search took 0 milliseconds.
Even though binary search is faster, we won’t be able to measure any difference between
seqSearch() and binSearch(), but we will run the program using binary search anyway
to ensure that the binSearch() function works correctly with text.
Searching textual data with binSearch() */
function binSearch(arr, data) {
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else if (arr[mid] > data) {
      upperBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
function insertionsort(arr) {
  var temp, inner;
  for (var outer = 1; outer <= arr.length - 1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1];
      --inner;
    }
    arr[inner] = temp;
  }
}
var words = 
`The nationalism of Hamilton was undemocratic. The democracy of Jefferson was,
in the beginning, provincial. The historic mission of uniting nationalism and
democracy was in the course of time given to new leaders from a region beyond
the mountains, peopled by men and women from all sections and free from those
state traditions which ran back to the early days of colonization. The voice
of the democratic nationalism nourished in the West was heard when Clay of
Kentucky advocated his American system of protection for industries; when
Jackson of Tennessee condemned nullification in a ringing proclamation that
has taken its place among the great American state papers; and when Lincoln
of Illinois, in a fateful hour, called upon a bewildered people to meet the
supreme test whether this was a nation destined to survive or to perish. And
it will be remembered that Lincoln's party chose for its banner that earlier
device--Republican--which Jefferson had made a sign of power. The "rail splitter"
from Illinois united the nationalism of Hamilton with the democracy of Jefferson,
and his appeal was clothed in the simple language of the people, not in the
sonorous rhetoric which Webster learned in the schools.`;

words = words.split(" ");
insertionsort(words);
var word = "rhetoric";
var start = new Date().getTime();
var position = binSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if (position >= 0) {
  console.log("Found " + word + " at position " + position + ".");
  console.log("Binary search took " + elapsed + " milliseconds.");
} else {
  console.log(word + " is not in the file.");
}

/* Found rhetoric at position 125.
Binary search took 0 milliseconds.
In this age of superfast processors, it is harder and harder to measure the difference
between sequential search and binary search on anything but the largest data sets.
However, it has been proven mathematically that binary search is faster than sequential
search on large data sets just due to the fact that the binary search algorithm eliminates
half the search space (the elements of the array) with each iteration of the loop that
controls the algorithm. */
