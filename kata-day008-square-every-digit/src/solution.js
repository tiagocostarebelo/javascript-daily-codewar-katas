/**
 * Problem statement:
 * In this kata, you are asked to square every digit of a number and concatenate them.
 * For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81).
 * Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
 * 
 * Note: The function accepts an integer and returns an integer.
 * 
 * @param { number } num - The integer number provided
 * @returns { number } The exponential and contatenated number
 * 
 * @example
 * squareDigits(3212); // Returns: 9414
 * squareDigits(2112); // Returns: 4114
 * 
 */

export function squareDigits(num) {
    const arrayString = num.toString().split("").map((item) => Number(item) * Number(item))
    return Number(arrayString.join(""))
}