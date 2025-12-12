# Create a Phone Number - `phoneNumber(numbers)`
The challenge: 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

**Problem source:** [Codewars - Create a Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

## Examples

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

## Approach

There's several ways to solve this challenge.
My first approach to it was array slicing and string formatting.
Since the input is guaranteed to be an array of exactly 10 digits, the problem becomes a matter of grouping those digits correctly and assembling them into the required phone number format.

I broke the solution into three clear parts:

Area code
Extract the first three numbers, join them into a string, and wrap them in parentheses.

Middle section
Extract the next three digits and join them.

Final section
Extract the remaining four digits and join them.

Finally, I combined all parts together using string concatenation, making sure to include the required space and hyphen in the correct positions.

## Final Solution

```
function createPhoneNumber(numbers){
  const startNum = "(" + numbers.slice(0, 3).join("") + ")";
  const midNum = numbers.slice(3, 6).join("");
  const endNum = numbers.slice(6, numbers.length).join("");
  const newNumber = startNum + " " + midNum + "-" + endNum;
  return newNumber;
}
```

## Edge Cases & Validation

- Assumes the input array always contains exactly 10 integers (guaranteed by the kata).
- Handles digits from 0 to 9, including leading zeros.
- Preserves the correct formatting even when zeros appear in any position.
- Works consistently because all array slicing is index-based and deterministic.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
