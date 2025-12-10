/**
 * Problem statement:
 *
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 * Note: input will never be an empty string
 *
 * @param { x } string - a String composed of numbers to be converted into fake binary
 * @returns { string } Returns a string with the converted numbers into fake binary
 *
 * @example
 * fakeBin('45385593107843568'); // Returns: '01011110001100111'
 */

export function fakeBin(x) {
    return x.split("").map(digit => digit >= 5 ? "1" : "0").join("")
}