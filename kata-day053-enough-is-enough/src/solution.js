/**
 * Problem statement:
 *
 * Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
 * For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
 * With list [20,37,20,21] and number 1, the result would be [20,37,21].
 *
 * @param { arr } array - The initial array with numbers
 * @param { n } integer - The number of times we want to check if the number repeats
 * @returns { array } Returns a new array with the repeated ocurrences matching n times
 *
 * @example
 * deleteNth([20,37,20,21], 1); // Returns: [20,37,21]
 */

export function deleteNth(arr, n) {
    let newArr = [];
    let counts = {};
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] <= n) {
            newArr.push(num)
        }
    }
    return newArr
}