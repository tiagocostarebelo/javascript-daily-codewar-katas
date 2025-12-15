/**
 * Problem statement:
 *
 * Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
 * Let's assume that all numbers in the input will be integer values.
 * 
 * @param { number } number - The given number parameter
 * @returns { integer } The sum of the given numbers
 *
 * @example
 * sumDigits(10); // Returns: 1
 * sumDigits(99); // Returns: 18
 */

export function sumDigits(number) {
    return number.toString().split("").filter((ele) => ele !== "-").reduce((acc, curr) => acc + Number(curr),
        0)
}
