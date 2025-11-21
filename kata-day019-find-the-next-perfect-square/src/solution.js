/**
 * Problem statement:
 *
 * You might know some pretty large perfect squares. But what about the NEXT one?
 * Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
 * If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
 *
 * @param { sq } number - The input integer given
 * @returns { number } Returns the next perfect square 
 *
 * @example
 * findNextSquare(121); // Returns: 144
 * findNextSquare(625); // Returns: 676
 */

export function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    const isInteger = Number.isInteger(sqrt);
    let nextPerfectSq;
    if (!isInteger) return -1;
    nextPerfectSq = sqrt + 1;
    return nextPerfectSq * nextPerfectSq;
}