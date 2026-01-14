/**
 * Problem statement:
 *
 * Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.
 * 
 * If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.
 * roundIt(3.45) should return 4
 * If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.
 * roundIt(34.5) should return 34
 * If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.
 * roundIt(34.56) should return 35
 *
 * @param { n } decimal - Decimal number
 * @returns { integer } - Returns an integer based on the decimal point location
 *
 * @example
 * roundIt(3.45); // Returns: 4
 */

export function roundIt(n) {
    const left = n.toString().split(".")[0]
    const right = n.toString().split(".")[1]
    if (left.length < right.length) return Math.ceil(n)
    if (left.length > right.length) return Math.floor(n)
    return Math.round(n)
}