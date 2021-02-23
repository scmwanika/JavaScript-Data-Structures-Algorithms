// FUNCTION FACTORIAL OF A NUMBER
exports.factorial = function(number) {
  var number

  // Checking if number is negative
  if (number < 0) {
    //console.log('Error! Factorial for negative number does not exist.');
    return "error"
  }

  // if number is 0
  else if (number === 0) {
    //console.log(`The factorial of ${number} is 1.`);
    return 1
  }

  // if number is positive
  else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    //console.log(`The factorial of ${number} is ${fact}.`);
    return fact
  }
}


// FUNCTION FIBONACCI SERIES
exports.fibonacci = function(number) {
  var number

  let n1 = 1, n2 = 1, nextTerm;

  // Listing the fibonacci series
  //console.log(`Printing Fibonacci Series of the first ${number} numbers.`);


  for (let i = 1; i <= number; i++) {
    console.log(n1);
    return n2
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}


// FUNCTION VALIDATOR
exports.validator = function(num) {
  if (num >= 70) {
    return false
  } else if (num <= 10) {
    return false
  } else {
    return true
  }
}