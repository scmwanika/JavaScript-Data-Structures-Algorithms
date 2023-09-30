const program = require("./program");

console.log("TESTING FUNCTIONALITY OF THE PROGRAM");

// TEST A STRING
describe("Basic Jest String Test", () => {
  test("should return number of charachters in a string", () => {
    expect("Hello".length).toBe(5);
  });
  test("should return first charachter of the string", () => {
    expect("Hello".charAt(0)).toBe("H");
  });
});

// TEST FACTORIAL OF A NUMBER
describe("Test the factorial of a number N:", () => {
  test("should return factorial of -1", () => {
    expect(program.factorial(-1)).toBe("error");
  });
  test("should return factorial of 0", () => {
    expect(program.factorial(0)).toBe(1);
  });
  test("should return factorial of 1", () => {
    expect(program.factorial(1)).toBe(1);
  });
  test("should return factorial of 3", () => {
    expect(program.factorial(3)).toBe(6);
  });
  test("should return factorial of 4", () => {
    expect(program.factorial(4)).toBe(24);
  });
});

// TEST FIBONACCI SERIES
describe("Test the fibonacci series of a number N:", () => {
  test("should return fibonacci series of 1", () => {
    expect(program.fibonacci(1)).toBe(1);
  });
  test("should return fibonacci series of 2", () => {
    expect(program.fibonacci(2)).toBe(1, 1);
  });
  test("should return fibonacci series of 3", () => {
    expect(program.fibonacci(3)).toBe(1, 1, 2);
  });
  test("should return fibonacci series of 6", () => {
    expect(program.fibonacci(6)).toBe(1, 1, 2, 3, 5, 8);
  });
});

// TEST VALIDATOR
describe("Test the validity of a number N:", () => {
  test("should return true for a number in between 10 and 70", () => {
    expect(program.validator(39)).toBe(true);
  });
  test("should return false when the number is less than or equal to 10", () => {
    expect(program.validator(10)).toBe(false);
  });
  test("should return false when the number is greater than or equal to 70", () => {
    expect(program.validator(79)).toBe(false);
  });
});
