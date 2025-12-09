/**
 * Problem statement:
 *
 * Your task is to create a function that does four basic mathematical operations.
 * The function should take three arguments - operation(string/char), value1(number), value2(number).
 * The function should return result of numbers after applying the chosen operation.
 *
 * @param { operation } string - The operation parameter is a string with the mathematical operation "+", "-". "*", "/"
 * @param { value1 } integer - The first value to the provided as an input
 * @param { value2 } integer - The second value to be provided as an input
 * @returns { integer } - The result of the mathematical operation
 *
 * @example
 * basicOp("+", 10, 2); // Returns: 12
 * basicOp("*", 10, 2); // Returns: 20
 */

export function basicOp(operation, value1, value2) {
    let result = 0;
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2
            break;
        case "*":
            result = value1 * value2
            break;
        case "/":
            result = value1 / value2
            break;
        default:
            return;
    }
    return result;
}