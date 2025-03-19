const add = require("../stringCalculator");

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself if a single number is provided", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns sum of multiple numbers", () => {
  expect(add("1,2,3")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws error for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test("throws error with all negative numbers", () => {
  expect(() => add("1,-2,-3,4,-5")).toThrow("negative numbers not allowed: -2, -3, -5");
});
