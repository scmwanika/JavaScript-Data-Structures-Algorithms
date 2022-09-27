const mathOperations = require("./calculator");
// // Method 1
// describe("Calculator tests", () => {
//   test("adding 1 + 2 should return 3", () => {
//     expect(mathOperations.sum(1, 2)).toBe(3);
//   });
// });

// // Method 2
// describe("Calculator tests", () => {
//   test("adding 1 + 2 should return 3", () => {
//     // arrange and act
//     var result = mathOperations.sum(1, 2);

//     // assert
//     expect(result).toBe(3);
//   });
// });

// // Failing Test
// describe("Calculator tests", () => {
//   test("adding 1 + 2 should return 10", () => {
//     // arrange and act
//     var result = mathOperations.sum(1, 2);

//     // assert
//     expect(result).toBe(10);
//   });
// });

// // All Tests
// describe("Calculator tests", () => {
//   test("adding 1 + 2 should return 3", () => {
//     // arrange and act
//     var result = mathOperations.sum(1, 2);

//     // assert
//     expect(result).toBe(3);
//   });

//   test("subtracting 2 from 10 should return 8", () => {
//     // arrange and act
//     var result = mathOperations.diff(10, 2);

//     // assert
//     expect(result).toBe(8);
//   });

//   test("multiplying 2 and 8 should return 16", () => {
//     // arrange and act
//     var result = mathOperations.product(2, 8);

//     // assert
//     expect(result).toBe(16);
//   });
// });

// // JEST MATCHERS
// // Equality
// test("equality matchers", () => {
//   expect(2 * 2).toBe(4);
//   expect(4 - 2).not.toBe(1);
// });

// // Truthiness
// test("truthy operators", () => {
//   var name = "Software testing help";
//   var n = null;
//   expect(n).toBeNull();
//   expect(name).not.toBeNull;

//   // name has a valid value
//   expect(name).toBeTruthy();

//   //fail - as null is non success
//   expect(n).toBeTruthy();

//   // pass - null treated as false or negative
//   expect(n).toBeFalsy();

//   // 0 - treated as false
//   expect(0).toBeFalsy();
// });

// // Number Matchers
// test("numeric operators", () => {
//   var num1 = 100;
//   var num2 = -20;
//   var num3 = 0;

//   // greater than
//   expect(num1).toBeGreaterThan(10);

//   // less than or equal
//   expect(num2).toBeLessThanOrEqual(0);

//   // greater than or equal
//   expect(num3).toBeGreaterThanOrEqual(0);
// });

// // String Matchers
// test("string matchers", () => {
//   var string1 = "software testing help - a great resource for testers";

//   // test for success match
//   expect(string1).toMatch(/test/);

//   // test for failure match
//   expect(string1).not.toMatch(/abc/);
// });

// Jest Hooks – Setup And Teardown
/* Totally there are 4 hooks that are available to use.
   - beforeEach and afterEach: These hooks are executed before and after each test in the test suite.
   - beforeAll and afterAll: These hooks are executed just once for each test suite. i.e. if a test suite has 10 tests, 
     then these hooks will just be executed once for every test execution. */

describe("Calculator tests", () => {
  var input1 = 0;
  var input2 = 0;

  beforeAll(() => {
    console.log("beforeAll called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });
  beforeEach(() => {
    console.log("beforeEach called");
    input1 = 1;
    input2 = 2;
  });
  afterEach(() => {
    console.log("afterEach called");
  });

  // adding
  test("adding input1 to input2 should return 3", () => {
    // arrange and act
    var result = mathOperations.sum(input1, input2);

    // assert
    expect(result).toBe(3);
  });

  // subtracting
  test("subtracting input2 from input1 should return -1", () => {
    // arrange and act
    var result = mathOperations.diff(input1, input2);

    // assert
    expect(result).toBe(-1);
  });

  // multiplying
  test("multiplying input1 by input2 should return 2", () => {
    // arrange and act
    var result = mathOperations.product(input1, input2);

    // assert
    expect(result).toBe(2);
  });
});
