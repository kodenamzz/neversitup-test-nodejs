import { countSmilyFace } from "./smily";

describe("countSmilyFace", () => {
  test(`Test Example 1 input [':)', ';(', ';}', ':-D'] should return 2`, () => {
    expect(countSmilyFace([":)", ";(", ";}", ":-D"])).toEqual(2);
  });
  test(`Test Example 2 input [';D', ':-(', ':-)', ';~)'] should return 3`, () => {
    expect(countSmilyFace([";D", ":-(", ":-)", ";~)"])).toEqual(3);
  });
  test(`Test Example 3 input [';]', ':[', ';*', ':$', ';-D'] should return 1`, () => {
    expect(countSmilyFace([";]", ":[", ";*", ":$", ";-D"])).toEqual(1);
  });
});
