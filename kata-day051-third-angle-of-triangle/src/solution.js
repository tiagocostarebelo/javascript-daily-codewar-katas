/**
 * Problem statement:
 *
 * You are given two interior angles (in degrees) of a triangle.
 * Write a function to return the 3rd.
 * 
 * Note: only positive integers will be tested.
 *
 * @param { a } integer - The first inferior angle provided
 * @param { b } integer - The second inferior angle provided
 * @returns { integer } Return the third angle of the triangle
 *
 * @example
 * otherAngle(30, 90); // Returns: 60
 */

export function otherAngle(a, b) {
    return 180 - (a + b);
}