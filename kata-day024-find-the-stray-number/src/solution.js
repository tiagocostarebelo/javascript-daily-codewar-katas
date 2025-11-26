/**
 * Problem statement:
 *
 * You are given an odd-length array of integers, in which all of them are the same, except for one single number.
 * Complete the method which accepts such an array, and returns that single different number.
 * The input array will always be valid! (odd-length >= 3)
 *
 * @param { numbers } array - Odd-length array of integers, where all of the numbers are the same except for one single number
 * @returns { number } Return the number that is the single stray element
 *
 * @example
 * stray([1, 1, 2]); // Returns: 2
 */

export function stray(numbers) {
    let count = {};
    for (let number of numbers) {
        count[number] = count[number] ? count[number] + 1 : 1;
    }
    return Number(Object.keys(count).find(key => count[key] === 1));
}