import { manipulate } from "./manipulate";

describe("manipulate", () => {
  test(`Test Example 1 input "a" should return ['a']`, () => {
    expect(manipulate("a")).toEqual(["a"]);
  });
  test(`Test Example 2 input 'ab' should return ['ab', 'ba']`, () => {
    expect(manipulate("ab")).toEqual(["ab", "ba"]);
  });
  test(`Test Example 3 input 'abc' should return ['abc','acb','bac','bca','cab','cba']`, () => {
    expect(manipulate("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
  test(`Test Example 4  input 'aabb' should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']`, () => {
    expect(manipulate("aabb")).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
