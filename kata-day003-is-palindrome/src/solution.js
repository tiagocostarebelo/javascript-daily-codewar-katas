/**
 * Problem statement:
 * 
 * Write a function that checks if a given string (case insensitive) is a palindrome.
 * 
 * A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
 * 
 * @param { str } string - The string to check
 * @returns { boolean } - Returns true if the string is a Palindrome, or false otherwise
 * 
 * @example
 * isPalindrome("madam"); // Returns: "true"
 * isPalindrome("joy"); // Returns: "false"
 */

export function isPalindrome(x) {
    const reversed = x.toLowerCase().split("").reverse().join("");
    return x.toLowerCase() === reversed ? true : false;
}