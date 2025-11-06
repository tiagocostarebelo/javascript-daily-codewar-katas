/**
 * Problem statement:
 * 
 * Given a list of integers, determine whether the sum of its elements is odd or even.
 * Give your answer as a string matching "odd" or "even".
 * 
 * If the input array is empty consider it as: [0] (array with a zero).
 * 
 * Examples
 * Input: [0]
 * Output: "even"
 * 
 * Input: [0, 1, 4]
 * Output: "odd"
 * 
 * Input: [0, -1, -5]
 * Output: "even"
 * 
 * @param { array } array - The array to check
 * @returns { str } - Returns a string with "even" or "odd", depending on the sum of the array elements 
 * 
 * @example
 * oddOrEven([0, 1, 4]); // Returns: "odd"
 * oddOrEven([]);        // Returns: "even"
 */

export function oddOrEven(array) {
    // Use reduce to get the sum of all the array elements
    const initialValue = 0;
    const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    // Using the remainder operator and conditional(ternary) operator to return odd or even depending on the sum of the array elements
    return arraySum % 2 === 0 ? "even" : "odd";
}