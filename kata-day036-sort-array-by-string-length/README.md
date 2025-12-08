# Sort array by string length - `sortByLength(array)`
The challenge: 
Challenge description here

**Problem source:** [Codewars - Sort array by string length](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)

## Examples

```
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) // -> Result: ["Eyes", "Glasses", "Monocles", "Telescopes"]
```

## Approach

A clean and simple array manipulation challenge.
The goal is to reorder the strings based on their length, from shortest to longest.

JavaScript's sort() method is perfect for this, as it allows a custom comparator function.
By comparing the lengths of two strings (a.length - b.length), the array sorts in ascending order.


## Final Solution

```
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};
```

## Edge Cases & Validation

- Works when several strings share the same length (keeps valid ordering).
- Handles empty strings correctly ("" has length 0).
- Works with arrays containing only one element.
- Sorting is stable for most modern JS engines — strings of equal length preserve their original order.
- Assumes valid input (array of strings), as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
