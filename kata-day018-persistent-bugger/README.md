# Persistent Bugger - `persistence(num)`
The challenge: 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

**Problem source:** [Codewars - Persistent Bugger](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)

## Examples

```
persistence(39) // -> Result: 3
```

## Approach

This was a great number-manipulation challenge focused on iteration and breaking a problem into repeatable steps. 
The goal was to repeatedly multiply all digits of a number until only one digit remains, counting how many rounds were needed.

The logic breaks down into a clear loop:

- Convert the current number into its individual digits using String(num).split("").
- Multiply those digits together to get a new number.
- Repeat the process while the number is greater than 9.
- Increment a counter each time a multiplication round is performed.

This reinforces:

- String-to-number conversion
- Looping until a condition becomes false
- Step-by-step state reduction


## Final Solution

```
function persistence(num) {
    let count = 0;
    while (num > 9) {
        const numbers = String(num).split("");
        let product = 1;
        for (let number of numbers) {
            product *= Number(number);
        }
        num = product;
        count++;

    }
    return count;
}
```

## Edge Cases & Validation

- num < 10 should return 0 immediately — already a single digit.
- Handles very large integers as long as they fit within JavaScript’s number limits.
- Works consistently for repeated digits (e.g., 999 → high persistence).
- Input is expected to be a positive integer — negative numbers or non-numeric types are out of scope for this kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
