import { isPalindrome } from "../src/solution.js";

describe('Palindrome check', () => {
    describe('isPalindrome()', () => {
        it('Should return false when the input string is not a Palindrome', () => {
            expect(isPalindrome("Hello")).toBe(false);
        });

        it('Should return true if the input string is a Palindrome', () => {
            expect(isPalindrome("Madam")).toBe(true);
            expect(isPalindrome("Bob")).toBe(true);
            expect(isPalindrome("racecar")).toBe(true)
        });
    })
})