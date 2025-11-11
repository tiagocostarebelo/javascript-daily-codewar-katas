# Array.diff- `arrayDiff(a, b)`
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.


**Problem source:** [Codewars - Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009/)

## Examples

```
arrayDiff([1, 2],[1]); // Returns: [2]
arrayDiff([1, 2, 2, 2, 3],[2]); // Returns: [1, 3]

```


## Approach

This challenge was slightly trickier at first, but I remembered solving something similar while working on my utility functions library — which helped a lot.

The key idea is to filter out elements from the first array that are present in the second.
I used the .filter() method, which iterates over every element in a and includes it in the new array only if it’s not found in b.
To check if b contains the current element, I used the .includes() method.

```
return a.filter((item) => !b.includes(item));
```


## Final Solution

```
function arrayDiff(a, b) {

 return a.filter((item)=>!b.includes(item))
}
```

## Edge Cases & Validation

- Duplicates: All matching duplicates are correctly removed.
- Negative numbers or mixed values: Works fine (arrayDiff([1,-1,2], [-1]) → [1,2]).
- Immutability: Neither input array is modified.


## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
