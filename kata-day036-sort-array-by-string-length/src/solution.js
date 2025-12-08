/**
 * Problem statement:
 *
 * Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
 * All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
 *
 * @param { array } array - The provided array of strings to be sorted
 * @returns { array } Returns the array of strings provided sorted by length
 *
 * @example
 * sortByLength(["Dog", "Food", "A", "Of"]); // Returns: ["A", "Of", "Dog", "Food"]
 */

export function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
};