/**
 * Problem statement:
 *
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
 * The next words should be always capitalized.
 *
 * @param { str } string - The provided string to the modified
 * @returns { string } Returns a camelCased string
 *
 * @example
 * toCamelCase("the-stealth-warrior"); // Returns: "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior"); // Returns: "TheStealthWarrior"
 */

export function toCamelCase(str) {
    return str.trim().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}