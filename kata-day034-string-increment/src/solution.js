/**
 * Problem statement:
 *
 * Your job is to write a function which increments a string, to create a new string.
 * 
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 * 
 * Attention: If the number has leading zeros the amount of digits should be considered.
 *
 * @param { str } string - The provided string that may or may not have numbers in it
 * @returns { string } Returns an incremented string
 *
 * @example
 * incrementString("test"); // Returns: test1
 * incrementString("foo23"); // Returns: foo24
 */

export function incrementString(strng) {
    const match = strng.match(/(\d+)$/);

    if (!match) {
        return strng + "1";
    }

    const numStr = match[0];
    const preString = strng.slice(0, -numStr.length);
    const incremented = (Number(numStr) + 1).toString().padStart(numStr.length, "0");

    return preString + incremented
}