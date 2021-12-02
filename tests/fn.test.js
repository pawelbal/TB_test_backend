const { findMedian } = require("../calcFunction");

describe("Calculation tests", () => {
  test("calculate median of prime number lesser then 10", () => {
    expect(findMedian(10)).toEqual([3, 5]);
  });
  test('Should show msg "no median found" for 1', () => {
    expect(findMedian(1)).toEqual("no median found");
  });
});
