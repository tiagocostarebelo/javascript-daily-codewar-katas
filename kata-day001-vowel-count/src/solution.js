/**
 * Problem statement:
 * 
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels for this Kata (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 * 
 * @param { str } string - The string to count the occurrences from
 * @returns { integer } Returns an integer with the total of vowels found in the string provided
 * 
 * @example
 * getCount("abracadabra"); // Returns: 5
 */

export function getCount(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}