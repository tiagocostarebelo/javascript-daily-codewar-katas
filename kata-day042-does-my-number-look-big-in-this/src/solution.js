/**
 * Problem statement:
 *
 * A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
 * In this Kata, we will restrict ourselves to decimal (base 10).
 * 
 * The Challenge:
 * Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
 * This may be True and False in your language, e.g. PHP.
 * Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
 *
 * @param { value } number - An integer that we will check if its a Nascissistic number of not
 * @returns { boolean } Returns true or false if Narcissistic or not
 *
 * @example
 * narcissistic(153); // Returns: true
 * narcissistic(1652 ); // Returns: false
 */

export function narcissistic(value) {
    let length = value.toString().length;
    let total = 0;
    value.toString().split("").forEach((element) =>
        total += Math.pow(Number(element), length))

    return total === value ? true : false;
}