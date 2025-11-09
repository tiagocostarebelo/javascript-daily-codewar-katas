/**
 * Problem statement:
 * Implement a function that computes the difference between two lists. 
 * The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). 
 * The order of elements in the first list should be preserved in the result.
 * 
 * @param { Array } a - The first array being entered as an argument
 * @param { Array } b - The second array being entered as an argument
 * @returns { Array } An new array with the elements in array1 that are not present in array2.
 * 
 * @example
 * arrayDiff([1, 2],[1]); // Returns: [2]
 * arrayDiff([1, 2, 2, 2, 3],[2]); // Returns: [1, 3]
 * 
 */

export function arrayDiff(a, b) {

    return a.filter((item) => !b.includes(item))
}