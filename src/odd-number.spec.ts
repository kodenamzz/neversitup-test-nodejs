import { findOddNumber } from "./odd-number";

describe("findOddNumber", () => {
  test(`Test Example 1  input [7] should return 7`, () => {
    expect(findOddNumber([7])).toEqual(7);
  });
  test(`Test Example 2 input [0] should return 0`, () => {
    expect(findOddNumber([0])).toEqual(0);
  });
  test(`Test Example 3 input [1,1,2] should return 2`, () => {
    expect(findOddNumber([1, 1, 2])).toEqual(2);
  });
  test(`Test Example 4 input [0,1,0,1,0] should return 0`, () => {
    expect(findOddNumber([0, 1, 0, 1, 0])).toEqual(0);
  });
  test(`Test Example 5 input [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4`, () => {
    expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4);
  });
  test(`Test Not found odd number input [1,1,2,2] should return -99.9`, () => {
    expect(findOddNumber([1, 1, 2, 2])).toEqual(-99.9);
  });
});
