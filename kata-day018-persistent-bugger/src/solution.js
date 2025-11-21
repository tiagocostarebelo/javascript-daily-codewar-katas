/**
 * Problem statement:
 *
 * Write a function, persistence, that takes in a positive parameter num and returns its 
 * multiplicative persistence, which is the number of times you must multiply the digits 
 * in num until you  reach a single digit. 
 * 
 * For example (Input --> Output):
 *
 * @param { num } Number - The number input provided
 * @returns { number }
 *
 * @example
 * persistence(39); // Returns: 3
 */

export function persistence(num) {
    let count = 0;
    while (num > 9) {
        const numbers = String(num).split("");
        let product = 1;
        for (let number of numbers) {
            product *= Number(number);
        }
        num = product;
        count++;

    }
    return count;
}