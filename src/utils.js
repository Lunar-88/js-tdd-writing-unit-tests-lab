// Your code here
export function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  }
  