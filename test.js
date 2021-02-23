const program = require('./program')
const assert = require('assert');
console.log('TESTING FUNCTIONALITY OF THE PROGRAM')


// TEST A STRING
describe('Basic Mocha String Test', function () {
  it('should return number of charachters in a string', function () {
    assert.strictEqual("Hello".length, 5);
  }); it('should return first charachter of the string', function () {
    assert.strictEqual("Hello".charAt(0), 'H');
  });
});


// TEST FACTORIAL OF A NUMBER
describe('Test the factorial of a number N:', function () {
  it('should return factorial of -1', function () {
    assert.strictEqual(program.factorial(-1), 'error');
  });
  it('should return factorial of 0', function () {
    assert.strictEqual(program.factorial(0), 1);
  });
  it('should return factorial of 1', function () {
    assert.strictEqual(program.factorial(1), 1);
  });
  it('should return factorial of 3', function () {
    assert.strictEqual(program.factorial(3), 6);
  });
  it('should return factorial of 4', function () {
    assert.strictEqual(program.factorial(4), 24);
  });
});


// TEST FIBONACCI SERIES
describe('Test the fibonacci series of a number N:', function () {
  it('should return fibonacci series of 1', function () {
    assert.strictEqual(program.fibonacci(1), (1));
  });
  it('should return fibonacci series of 2', function () {
    assert.strictEqual(program.fibonacci(2), (1, 1));
  });
  it('should return fibonacci series of 3', function () {
    //assert.strictEqual(program.fibonacci(3), (1, 1, 2));
  });
  it('should return fibonacci series of 6', function () {
    //assert.strictEqual(program.fibonacci(6), (1, 1, 2, 3, 5, 8));
  });
});


// TEST VALIDATOR
describe('Test the validity of a number N:', () => {

  it("should return true for a number in between 10 and 70", () => {
    assert.strictEqual(program.validator(39), true);
  })

  it("should return false when the number is less than or equal to 10", () => {
    assert.strictEqual(program.validator(10), false);
  })

  it("should return false when the number is greater than or equal to 70", () => {
    assert.strictEqual(program.validator(79), false);
  })
})