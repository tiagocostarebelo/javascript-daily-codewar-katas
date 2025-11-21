# Find the next perfect square - `findNextSquare(sq)`
The challenge: 
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

**Problem source:** [Codewars - Find the next perfect square](https://www.codewars.com/kata/56269eb78ad2e4ced1000013)

## Examples

```
findNextSquare(121); // Returns: 144
findNextSquare(625); // Returns: 676
```

## Approach

Solid challenge for practicing mathematical operations and validating numeric conditions.
The first step is checking whether the provided number is a perfect square, which can be done by taking its square root and confirming it's an integer. If the number is not a perfect square, the function returns -1 as required by the kata.

If it is a perfect square, the next step is simply applying the math:
take the integer square root, add 1, and square the result to obtain the next perfect square.


## Final Solution

```
function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    const isInteger = Number.isInteger(sqrt);
    let nextPerfectSq;
    if (!isInteger) return -1;
    nextPerfectSq = sqrt + 1;
    return nextPerfectSq * nextPerfectSq;
}
```

## Edge Cases & Validation

- If the given number is not a perfect square, return -1.
- If the input is 0, the next perfect square is 1.
- Handles very large perfect squares, limited only by JavaScript's Number precision.
- Negative numbers are not considered — kata guarantees non-negative input.
- The logic remains consistent even with 1 (smallest non-zero perfect square → next is 4).

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
