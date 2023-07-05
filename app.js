/* Summary
This chapter provided an overview of the way we use JavaScript throughout the rest of
the book. We try to follow a programming style that is common to many programmers
who are accustomed to using C-style languages such as C++ and Java. Of course, Java‐
Script has many conventions that do not follow the rules of those languages, and we
certainly point those out (such as the declaration and use of variables) and show you
the correct way to use the language. We also follow as many of the good JavaScript
programming practices outlined by authors such as John Resig, Douglas Crockford,
and others as we can. As responsible programmers, we need to keep in mind that it is
just as important that our programs be readable by humans as it is that they be correctly
executed by computers. */

// Declaring and Intializing Variables
var number;
var name;
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;

// Arithmetic and math functions
var x = 3;
var y = 1.1;
console.log(x + y); // 4.1
console.log(x * y); // 3.3000000000000003
console.log((x + y) * (x - y)); // 7.789999999999999
var z = 9;
console.log(Math.sqrt(z)); // 3
console.log(Math.abs(y / x)); // 0.3666666666666667
var z = x * y;
console.log(z.toFixed(2)); // 3.30

// Decision Constructs
// The if, else if, else statement
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
  mid = (current - low) / 2;
} else if (current > mid) {
  mid = (current + high) / 2;
} else {
  found = current;
}

// The switch statement
console.log("Enter a month number: ");
var monthNum; // var monthNum = readline();
var monthName;
switch (monthNum) {
  case "1":
    monthName = "January";
    break;
  case "2":
    monthName = "February";
    break;
  case "3":
    monthName = "March";
    break;
  case "4":
    monthName = "April";
    break;
  case "5":
    monthName = "May";
    break;
  case "6":
    monthName = "June";
    break;
  case "7":
    monthName = "July";
    break;
  case "8":
    monthName = "August";
    break;
  case "9":
    monthName = "September";
    break;
  case "10":
    monthName = "October";
    break;
  case "11":
    monthName = "November";
    break;
  case "12":
    monthName = "December";
    break;
  default:
    console.log("Bad input");
}

// Repetition Constructs
// The while loop
var number = 1;
var sum = 0;
while (number < 11) {
  sum += number;
  ++number;
}
console.log(sum); // 55

// for loop code fragment
for (var i = 1; i < 6; ++i) {
  console.log(i); // 1 2 3 4 5
}

// Summing integers using a for loop
var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
  sum += number;
}
console.log(sum); // 55

// Using a for loop with an array
var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
  sum += numbers[i];
}
console.log(sum); // 144

// Functions
// A value-returning function
function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800

// how to write a function that is used not for its return value, but for the operations it performs
// A subprocedure or void function in JavaScript
function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades); // 82,78,79,86,95

// Variable Scope
function showScope() {
  return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "global"

function showScope() {
  var scope = "local";
  return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "local"

// Recursion
function factorial(number) {
  if (number == 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5));

// Objects and Object-Oriented Programming
// Defining and using the Checking object
function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}
function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    console.log("Insufficient funds");
  }
}
function toString() {
  return "Balance: " + this.balance;
}
var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // "Insufficient funds"
console.log(account.toString()); // Balance: 750
