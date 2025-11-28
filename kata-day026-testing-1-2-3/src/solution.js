/**
 * Problem statement:
 *
 * Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
 * Write a function which takes a list of strings and returns each line prepended by the correct number.
 * The numbering starts at 1. The format is n: string. Notice the colon and space in between.
 *
 * @param { array } array -  Array of strings to be modified
 * @returns { array } Returns a new array with the added numbering pre-pending the string
 *
 * @example
 * number(["a", "b", "c"]); // Returns: ["1: a", "2: b", "3: c"]
 */

export function number(array) {
    let newArray = array.map((element, index) => {
        return `${index + 1}: ${element}`;
    })
    return newArray
}