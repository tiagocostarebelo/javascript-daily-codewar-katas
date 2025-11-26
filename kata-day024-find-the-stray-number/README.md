# Find the Stray Number - `stray(numbers)`
The challenge: 
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)


**Problem source:** [Codewars - Find the Stray Number](https://www.codewars.com/kata/57f609022f4d534f05000024)

## Examples

```
stray([1, 1, 2]) => Returns: 2
```

## Approach

A simple challenge although with several solutions.
As the challenge asked to find the stray element of an odd-length array of integers, and specifically said that all other elements would be the same, then I decided to use an object and store the numbers as keys and count the amount of times they appear in the array.
In the end, return the key which value is equal to 1.

Not only this solution works with small arrays, it also works with lengthy arrays, and if the array has more than two different elements.

## Final Solution

```
function stray(numbers) {
    let count = {};
    for (let number of numbers) {
        count[number] = count[number] ? count[number] + 1 : 1;
    }
    return Number(Object.keys(count).find(key => count[key] === 1));
}
```

## Edge Cases & Validation

- Handles negative numbers
- Handles long length arrays
- handles more than two different elements

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
