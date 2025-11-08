/**
 * Problem statement:
 * You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
 * The returned value must be a string, and have "***" between each of its letters.
 * You should not remove or add elements from/to the array.
 * 
 * @param { string[] } s - The array of strings to process.
 * @returns { string } - The returned string with "***" inserted between each letter of the first sorted word.
 * 
 * @example
 * twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]); // Returns 'b***i***t***c***o***i***n' 
 * twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);// Returns 'a***r***e' 
 * 
 */

export function twoSort(s) {
    const sortedArray = [...s].sort();
    return sortedArray[0].split("").join("***");
}