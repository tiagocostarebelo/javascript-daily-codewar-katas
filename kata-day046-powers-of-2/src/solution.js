/**
 * Problem statement:
 *
 * Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
 *
 * @param { n } number - The given number to be the exponent
 * @returns { array } The array of numbers that list the powers of 2 with the exponent n
 *
 * @example
 * powersOfTwo(4); // Returns: [1, 2, 4, 8, 16]
 */

export function powersOfTwo(n) {
    let powers = []
    for (let i = 0; i <= n; i++) {
        powers.push(Math.pow(2, i))
    }
    return powers
}