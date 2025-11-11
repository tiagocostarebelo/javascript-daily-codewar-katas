# Square Every Digit- `squareDigits(num)`
 In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.

**Problem source:** [Codewars - Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020/)

## Examples

```
squareDigits(3212); // Returns: 9414
squareDigits(2112); // Returns: 4114

```


## Approach

A great challenge to start the week — simple in concept but interesting in execution.

The key was realizing that numbers need to be treated as strings first, so we can work with individual digits.
Here’s the logical flow I followed:

- Convert the number to a string to access each digit individually.
- Split that string into an array of characters.
- Map through the array, squaring each digit (after converting it back to a number).
- Join the squared digits back into a single string.
- Convert the final string back into a number for the final output.

This sequence made the problem much clearer and cleaner to solve.


## Final Solution

```
function squareDigits(num){
  const arrayString = num.toString().split("").map((item) => Number(item) * Number(item))
  return Number(arrayString.join(""))
}
```

## Edge Cases & Validation

- Single-digit inputs: squareDigits(5) → 25
- Input 0: squareDigits(0) → 0
- Large numbers: Works with large integers as long as within JS number limits.
- Type safety: Assumes the input is a valid integer (no decimals, no strings).


## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
