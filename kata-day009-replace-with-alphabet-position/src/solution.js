/**
 * Problem statement:
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * 
 * @param { text } string - The provided string to be replaced
 * @returns { string  } Returns a string of space separated numbers representing each letter's position
 * 
 * @example
 * Input = "The sunset sets at twelve o' clock."
 * Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 * 
 */

export function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return text
        .toLowerCase()
        .split("")
        .filter(char => alphabet.includes(char))
        .map(char => alphabet.indexOf(char) + 1)
        .join(" ");
}