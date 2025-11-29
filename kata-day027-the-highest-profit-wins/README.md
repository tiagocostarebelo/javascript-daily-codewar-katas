# The Highest Profit Wins - `minMax(arr)`
The challenge: 
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Write a function that returns both the minimum and maximum number of the given list/array.

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

**Problem source:** [Codewars - The Highest Profit Wins](https://www.codewars.com/kata/559590633066759614000063)

## Examples

```
minMax([1, 2, 3, 4, 5]) // -> Result: [1, 5]
```

## Approach

This kata is straightforward: find the smallest and largest values in an array. JavaScript already provides built-in helpers for this — Math.min() and Math.max(). Since both functions accept individual arguments rather than arrays, the spread operator (...arr) is used to expand the array into separate values.

This keeps the solution simple, readable, and efficient for typical Kata inputs without needing manual loops or condition checks.


## Final Solution

```
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
```

## Edge Cases & Validation

- Works with negative numbers.
- Works with arrays containing repeated values.
- Handles arrays with only one element (returns [value, value]).
- Assumes valid inputs as guaranteed by the kata (no empty arrays or non-numeric data).

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
