# Testing 1-2-3 - `number([array])`
The challenge: 
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

**Problem source:** [Codewars - Testing 1-2-3](https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9)

## Examples

```
number(["a", "b", "c"]) // -> Result: ["1: a", "2: b", "3: c"]
```

## Approach

This kata is essentially a formatting task.
Each string in the input array needs to be returned with a line number, starting at 1, using the format:

```
n: value
```

Mapping is the ideal tool here since you're transforming each element into a new one.
You don’t actually need an explicit empty-array check — map() already returns an empty array when given one. Keeping the function small and expressive is the better tradeoff.


## Final Solution

```
function number(array) {
    let newArray = array.map((element, index) => {
        return `${index + 1}: ${element}`;
    })
    return newArray
}
```

## Edge Cases & Validation

- Handles empty arrays
- Handles lengthy arrays

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
