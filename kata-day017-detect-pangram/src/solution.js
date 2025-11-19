/**
 * Problem statement:
 *
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses
 *  the letters A-Z at least once (case is irrelevant). 
 * 
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 *
 * @param { string } string - The provided string to check if its a pangram
 * @returns { boolean } - Returns true if pangram, false otherwise
 *
 * @example
 * isPangram("The quick brown fox jumps over the lazy dog"); // Returns: true
 */

export function isPangram(string) {
    const pangram = new Set();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const newStr = string.toLowerCase();
    for (let char of newStr) {
        if (alphabet.includes(char)) {
            pangram.add(char);
        }
    }

    return pangram.size === 26 ? true : false;
}