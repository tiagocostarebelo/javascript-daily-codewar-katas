# Count the divisors of a number - `getDivisorsCnt(n)`
The challenge: 
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000, but fixed tests go higher.

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

**Problem source:** [Codewars - Count the divisors of a number](https://www.codewars.com/kata/542c0f198e077084c0000c2e)

## Examples

```
getDivisorsCnt(30) // -> Result: 8 because we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
```

## Approach

A divisor is any integer that divides n without leaving a remainder.

My first solution was to check every number from 1 to n, but that was inefficient for large inputs — especially since this kata includes values up to 500,000+, and that solution was timing out.

To optimize the process, I tried to understand what I could take advantage of in terms of mathematical insights:

- Divisors come in pairs.
- If ```i``` divides ```n```, then ```n / i``` is also a divisor.

Example for 30:

1 × 30

2 × 15

3 × 10

5 × 6

Because of this, you only need to loop up to √n (Squareroot of n). For every divisor found:

Count i

Count n / i (unless they are the same, which happens when i is the square root)

This reduces the complexity drastically while still ensuring accuracy.


## Final Solution

```
function getDivisorsCnt(n) {
    let count = 0;
    const limit = Math.sqrt(n);

    for (let i = 1; i <= limit; i++) {
        if (n % i === 0) { 
            count++;
            if (i !== n / i) { 
                count++;
            }
        }
    }

    return count;
}
```

## Edge Cases & Validation

- Works efficiently for very large numbers due to the √n optimization.
- Handles perfect squares correctly (ensures the square root is not double-counted).
- Works for n = 1 (returns 1 because 1 has exactly one divisor: itself).
- Only valid for positive integers, which is guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
