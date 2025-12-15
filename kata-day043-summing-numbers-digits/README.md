# Summing a number's digits - `sumDigits(number)`
The challenge: 
Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
Let's assume that all numbers in the input will be integer values.

**Problem source:** [Codewars - Summing a number's digits](https://www.codewars.com/kata/52f3149496de55aded000410)

## Examples

```
sumDigits(99) // -> Result: 18
```

## Approach

The goal of this challenge is to sum the digits of a number regardless of its sign. Since the input can be negative, the key is to work with the absolute representation of the digits.

To achieve this:

- Convert the number to a string so each digit can be accessed individually.
- Split the string into an array of characters.
- Filter out the minus sign ("-") in case the number is negative.
- Convert each remaining character back to a number.
- Use reduce() to accumulate the total sum of the digits.

This approach keeps the logic simple and avoids manual arithmetic operations like repeated modulo/division.


## Final Solution

```
function sumDigits(number) {
  return number.toString().split("").filter((ele) => ele !== "-").reduce((acc, curr) => acc + Number(curr),
  0)
}
```

## Edge Cases & Validation

- Handles negative numbers by ignoring the minus sign.
- Works correctly with single-digit numbers.
- Returns 0 when the input is 0.
- Handles large integers safely since the operation is string-based.
- Assumes valid integer input, as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
