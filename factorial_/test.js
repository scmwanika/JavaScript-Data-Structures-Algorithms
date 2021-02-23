/* eslint-disable no-undef */

const chai = require("chai");
const { assert } = chai;

var factorial = require("./factorial");

describe("This function should calculate the factorial of a number", function () {
	it("Factorial 1 = 1", function () {
		assert.Equal(factorial(1), 1);          // first failing test
	});
	it("Factorial 2 = 2", function () {
		assert.Equal(factorial(2), 2);          // second test
	});
	it("Factorial 3 = 3", function () {
		assert.Equal(factorial(3), 3);          // thrid test
	});
	it("Factorial 10 = 3,628,800", function () {
		assert.Equal(factorial(10), 3628800);   // fourth test
	});
});