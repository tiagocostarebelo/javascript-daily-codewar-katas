# Powers of 2 - `powersOfTwo(n)`
The challenge: 
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

**Problem source:** [Codewars - Powers of 2](https://www.codewars.com/kata/57a083a57cb1f31db7000028)

## Examples

```
powersOfTwo(4) // -> Result: [1, 2, 4, 8, 16]
```

## Approach

This challenge focuses on generating a simple numerical sequence.
For a given non-negative integer n, the goal is to return all powers of 2 from 2⁰ up to 2ⁿ.

The solution follows a clear pattern:

- Initialize an empty array to store the results.
- Loop from 0 to n (inclusive).
- For each iteration, compute 2 raised to the current index using Math.pow(2, i).
- Push each result into the array.
- Return the completed array.

This approach is explicit, easy to read, and clearly demonstrates how the sequence is built step by step.


## Final Solution

```
function powersOfTwo(n){
  let powers = []
  for ( let i = 0; i <= n; i++ ) {
    powers.push(Math.pow(2,i))
  }
  return powers
}
```

## Edge Cases & Validation

- When n is 0, the function correctly returns [1] (2⁰).
- Handles large values of n, producing a predictable exponential sequence.
- Always returns an array with exactly n + 1 elements.
- Assumes n is a non-negative integer, as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
