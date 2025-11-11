# Odd or Even? - `oddOrEven(array)`
The challenge: 
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).


**Problem source:** [Codewars - Odd or Even](https://www.codewars.com/kata/5949481f86420f59480000e7/)

## Examples

```
Input: [0]
Output: "even"
```
```
Input: [0, 1, 4]
Output: "odd"
```
```
Input: [0, -1, -5]
Output: "even"
```


## Approach

My first thought for this challenge was to use the reduce() method to calculate the sum of all elements in the array.
After that I needed to determine if the result was even or odd - and that's where the remainder operator comes in.

1. Sum all elements using reduce() (following the MDN documentation's example):

```
const initialValue = 0;
const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
```

2. Check if the sum is even or odd using the remainder and ternary operators:

```
return arraySum % 2 === 0 ? "even" : "odd";
```

This approach is clean, readable, and solves the problem in just a few lines.


## Final Solution

```
function oddOrEven(array) {
    const initialValue = 0;
    const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
    return arraySum % 2 === 0 ? "even" : "odd";
}
```


## Edge Cases & Validation

- Handles empty arrays (treated as [0])
- Works with negative numbers
- Produces consistent results for large arrays

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
