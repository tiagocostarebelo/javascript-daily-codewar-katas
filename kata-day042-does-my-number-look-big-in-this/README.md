# Does my number look big in this? - `narcissistic(value)`
The challenge: 
Challenge description here

**Problem source:** [Codewars - Does my number look big in this?](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

## Examples

```
narcissistic(153) // -> Result: true
```

## Approach

This challenge revolves around identifying a narcissistic number (also known as an Armstrong number).

A number is narcissistic if the sum of its digits, each raised to the power of the total number of digits, equals the original number.

To break it down:

- Convert the number to a string so each digit can be accessed individually.
- Determine how many digits the number has — this will be the exponent.
- Loop through each digit:
  -Convert it back to a number.
  -Raise it to the power of the digit count.
  -Accumulate the result.
- Compare the final sum with the original value.

If they match, the number is narcissistic.

This approach keeps the logic explicit and readable, while reinforcing number–string conversions and array iteration.


## Final Solution

```
function narcissistic(value) {
    let length = value.toString().length;
    let total = 0;
    value.toString().split("").forEach((element) =>
        total += Math.pow(Number(element), length))

    return total === value ? true : false;
}
```

## Edge Cases & Validation

- Single-digit numbers always return true (e.g., 7), as they trivially satisfy the condition.
- Works correctly for large numbers with multiple digits.
- Handles numbers with repeated digits.
- Relies only on integer math — no floating-point precision issues.
- Assumes valid, non-negative integer input as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
