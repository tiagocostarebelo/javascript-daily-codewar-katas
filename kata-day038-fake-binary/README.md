# Fake Binary - `fakeBin(x)`
The challenge: 
Challenge description here

**Problem source:** [Codewars - Fake Binary](https://www.codewars.com/kata/challengeIDNumberHere)

## Examples

```
fakeBin('45385593107843568') // -> Result '01011110001100111'
```

## Approach

This challenge is a simple digit-transformation problem:
Convert each digit in the input string to '0' if it is less than 5, or to '1' if it is 5 or greater.

Because the input is always a numeric string, the cleanest way to solve this is:

- Split the string into individual characters.
- Map over each character and check whether it is greater than or equal to '5'.
- Replace it with the appropriate binary character '0' or '1'.
- Join everything back into a single output string.

This avoids any unnecessary conversions and keeps the logic easy to read.

## Final Solution

```
function fakeBin(x){
  return x.split('').map(digit => digit >= '5' ? '1' : '0').join('');
}
```

## Edge Cases & Validation

- Works with long strings since the operation is purely linear.
- Handles strings containing only small digits ("000" → "000").
- Handles strings containing only large digits ("999" → "111").
- Leading zeros are preserved because the function works on characters, not numbers.
- Assumes valid input — numeric string only — as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
