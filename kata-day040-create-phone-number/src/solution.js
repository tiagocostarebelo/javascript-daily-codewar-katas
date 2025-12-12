/**
 * Problem statement:
 *
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * Example
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 * The returned format must be correct in order to complete this challenge.
 * Don't forget the space after the closing parentheses!
 *
 * @param { numbers } array - The array of numbers given to be formatted into a phone number
 * @returns { string } Returns a string from the array of numbers in phone number format
 *
 * @example
 * createPhoneNumber([0,0,0,0,0,0,0,0,0,0]); // Returns: "(000) 000-0000"
 */

export function createPhoneNumber(numbers) {
    const startNum = "(" + numbers.slice(0, 3).join("") + ")";
    const midNum = numbers.slice(3, 6).join("");
    const endNum = numbers.slice(6, numbers.length).join("");
    const newNumber = startNum + " " + midNum + "-" + endNum;
    return newNumber;
}

