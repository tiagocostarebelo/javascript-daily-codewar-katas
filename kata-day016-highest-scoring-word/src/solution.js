/**
 * Problem statement:
 *
 * Given a string of words, you need to find the highest scoring word. 
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. 
 * For example, the score of abad is 8 (1 + 2 + 1 + 4). 
 * You need to return the highest scoring word as a string. 
 * If two words score the same, return the word that appears earliest in the original string. 
 * All letters will be lowercase and all inputs will be valid.
 *
 * @param { x } string - A string of words
 * @returns { string } - Returns the string with the highest score
 *
 * @example
 * high("I need a taxi"); // Returns: "taxi"
 */

export function high(x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const soloWords = x.split(" ");
    let highestScore = 0;
    let highestWord = "";

    soloWords.forEach((word) => {
        const score = word.toLowerCase().split("").filter(char => alphabet.includes(char)).map(char => alphabet.indexOf(char) + 1).reduce((acc, curr) => acc + curr, 0)

        if (score > highestScore) {
            highestScore = score;
            highestWord = word;
        }
    })

    return highestWord;
}