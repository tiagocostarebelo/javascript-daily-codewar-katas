# Sum of Numbers - `getSum(a, b)`
The challenge: 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

**Problem source:** [Codewars - Sum of Numbers](https://www.codewars.com/kata/55f2b110f61eb01779000053)

## Examples

```
getSum(-1, 0) // -> Result: -1
```

## Approach

The goal is to compute the sum of all integers between two numbers (inclusive), regardless of whether a < b or b < a. The problem becomes a simple range-building exercise followed by a reduction.

I broke it down into:

- Check if both values are equal — if so, the sum is just that number.
- Determine the lower and upper bounds
  Since a and b may come in any order, we need to identify which one should be the start and which should be the end.
- Build the full range
- Loop from the smaller value to the larger value and push all integers into an array.
- Reduce the array
- Use .reduce() to sum up all numbers in the constructed range.

This keeps the logic explicit and easy to follow, while handling negatives, positives, and reverse-ordered inputs reliably.

## Final Solution

```
function getSum(a, b) {
    if (a === b) return a;
    let arrayRange = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arrayRange.push(i)
        }
    } else {
        for (let i = b; i <= a; i++) {
            arrayRange.push(i)
        }
    }
    return arrayRange.reduce((acc, curr) => acc + curr, 0);

}
```

## Edge Cases & Validation

- Handles cases where a < b
- Handles cases where b < a
- Handles cases where a === b
- Handles large positive ranges
- Works with negative ranges

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
