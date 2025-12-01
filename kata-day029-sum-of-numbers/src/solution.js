/**
 * Problem statement:
 *
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal 
 * return a or b.
 * Note: a and b are not ordered!
 *
 * @param { a } number - A positive or negative number
 * @param { b } number - A positive or negative number
 * @returns { number } Returns the sum of all numbers between a to b or b to a, including them
 *
 * @example
 * getSum(-1, 0); // Returns: -1 
 */

export function getSum(a, b) {
    if (a === b) return a;
    let arrayRange = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arrayRange.push(i)
        }
    } else {
        for (let i = b; i <= a; i++) {
            arrayRange.push(i)
        }
    }
    return arrayRange.reduce((acc, curr) => acc + curr, 0);

}