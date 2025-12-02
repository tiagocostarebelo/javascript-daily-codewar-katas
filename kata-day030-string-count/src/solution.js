/**
 * Problem statement:
 *
 * Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
 * If no occurrences can be found, a count of 0 should be returned.
 * 
 * Notes
 * The first argument can be an empty string
 * In languages with no distinct character data type, the second argument will be a string of length 1
 *
 * @param { str } string - The provided string to evaluate if it contains the given letter or not
 * @param { letter } character - The provided character to check if it exists in the given string
 * @returns { count } Returns the number of times the letter is present in the string
 *
 * @example
 * strCount("Hello", 'o') ; // Returns: 1
 */

export function strCount(str, letter) {
    //code here
    let count = 0;

    for (let char of str) {
        if (char === letter) count++
    }
    return count
}