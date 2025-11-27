/**
 * Problem statement:
 *
 * Complete the function that takes two integers (a, b, where a < b) and return an array of all integers 
 * between the input parameters, including them.
 *
 * @param { a } number - The first number to be provided (will always be less than b)
 * @param { b } number - The second number to be provided (will always be higher than a)
 * @returns { array } - Returns an array of numbers with all integers between the input a and b, including them
 *
 * @example
 * between(1, 4); // Returns: [1, 2, 3, 4];
 */

export function between(a, b) {
    let arrayRange = [];
    for (let i = a; i <= b; i++) {
        arrayRange.push(i)
    }
    return arrayRange;
}