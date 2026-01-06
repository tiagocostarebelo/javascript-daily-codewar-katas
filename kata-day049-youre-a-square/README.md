# You're a Square - `isSquare(n)`
The challenge: 
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

**Problem source:** [Codewars - You're a Square](https://www.codewars.com/kata/54c27a33fb7da0db0100040e)

## Examples

```
isSquare(-1) // -> Result: false
isSquare(4)  // -> Result: true
isSquare(25) // -> Result: true
```

## Approach

The goal of this challenge is to determine whether a given integer is a perfect square.

A number is a perfect square if:
- Its square root is an integer.

JavaScript provides everything needed to solve this cleanly:
- Math.sqrt(n) computes the square root.
- Number.isInteger() checks whether the result is an integer.

So the logic becomes very simple:
- Take the square root of the input number.
- Check if that square root is an integer.
- Return true if it is, otherwise return false.

This avoids loops entirely and makes the solution both readable and efficient.


## Final Solution

```
var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}
```

## Edge Cases & Validation

- Returns false for negative numbers, since square roots of negatives are not real integers.
- Returns true for 0 (0 × 0 = 0).
- Correctly identifies large perfect squares.
- Returns false for non-square integers (e.g. 2, 3, 8).
- Assumes integer input, as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
