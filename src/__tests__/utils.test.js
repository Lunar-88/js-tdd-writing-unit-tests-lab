// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a valid palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });
});
