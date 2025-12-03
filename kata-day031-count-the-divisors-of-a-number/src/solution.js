/**
 * Problem statement:
 *
 * Count the number of divisors of a positive integer n.
 * Random tests go up to n = 500000, but fixed tests go higher.
 * 
 * Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
 *
 * @param { n } number - The number to count the divisors of
 * @returns { integer } The total count of numbers that we can divide n
 *
 * @example
 * getDivisorsCnt(30); // Returns: 8 -> because we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
 */

export function getDivisorsCnt(n) {
    let count = 0;
    const limit = Math.sqrt(n);

    for (let i = 1; i <= limit; i++) {
        if (n % i === 0) {
            count++;
            if (i !== n / i) {
                count++;
            }
        }
    }

    return count;
}