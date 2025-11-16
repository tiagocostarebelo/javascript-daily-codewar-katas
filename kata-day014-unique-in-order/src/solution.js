/**
 * Problem statement:
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original
 * order of elements.
 * 
 * @param { iterable } - The input can be a string or an array
 * @returns { finalResult } Returns an array with the unique values in order as they appear
 * 
 * @example
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 * 
 */

export var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    //Make sure that the iterable is always an array
    let newIterable = Array.isArray(iterable) ? iterable : iterable.split("");
    //create the variable to store the result
    let finalResult = [];
    for (let i = 0; i < newIterable.length; i++) {
        const last = finalResult[finalResult.length - 1]

        if (newIterable[i] !== last) {
            finalResult.push(newIterable[i]);
        }
    }
    return finalResult;
}