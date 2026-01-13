# Enough is Enough - `deleteNth(arr,n)`
The challenge: 
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

**Problem source:** [Codewars - Enough is Enough](https://www.codewars.com/kata/554ca54ffa7d91b236000023)

## Examples

```
deleteNth([20,37,20,21]) // -> Result: [20,37,21]
```

## Approach

This challenge is about controlling frequency while preserving order.

The key constraints are:
- Each number can appear at most n times
- The original order must be preserved
- We cannot mutate or reorder the input list

To solve this, the idea is to track how many times each number has already appeared while iterating through the array:
1. Create an empty array to store the result.
2. Create an object (counts) to keep track of how many times each number has been seen.
3. Loop through the original array:
    - Increment the count for the current number.
    - If the count is less than or equal to n, push the number into the result array.
    - Otherwise, skip it.
4. Return the resulting array.

This ensures we never exceed the allowed number of occurrences, while maintaining the original order of elements.


## Final Solution

```
function deleteNth(arr, n) {
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
```

## Edge Cases & Validation

- Works when n is 0 (returns an empty array).
- Preserves the original order of elements.
- Handles arrays with all unique values.
- Handles arrays where all values are the same.
- Works with negative numbers and zero.
- Handles large arrays efficiently with linear time complexity O(n).
- Assumes valid inputs, as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
