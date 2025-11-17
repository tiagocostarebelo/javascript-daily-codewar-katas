# Consecutive strings - `longestConsec(strarr, k)`
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.


**Problem source:** [Codewars - Consecutive Strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e/)

## Examples

```
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) == "abigailtheta"
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) == "oocccffuucccjjjkkkjyyyeehh"
```


## Approach

The goal is to examine every valid sequence of k consecutive strings and determine which concatenation produces the longest result.

To achieve this:

- Validate inputs — return an empty string if k is invalid or the array is empty.
- Loop through the array while ensuring the slice window stays within bounds.
- For each index, create a concatenation of the next k strings using slice() + join().
- Keep track of the longest concatenated string encountered so far.

Because we update only when finding a strictly longer string, the first longest sequence is naturally preserved.

This approach reinforces array traversal, string manipulation, and thinking in sliding-window patterns.


## Final Solution

```
function longestConsec(strarr, k) {
    let longest = "";
    if(k <= 0 || k > strarr.length ) return "";
    if(!Array.isArray(strarr) || strarr.length === 0) return "";
    for(let i = 0; i <= strarr.length - k; i++) {
      let current = strarr.slice(i, i + k).join("");
      if(current.length > longest.length) {
        longest = current;  
      }
    }
  return longest;

}
```

## Edge Cases & Validation

- Returns an empty string when:
- k <= 0
- k > strarr.length
- strarr is empty
- strarr is not an array

- Handles arrays with only one element.
- Works with strings of varying lengths (including empty strings).
- Always returns the first longest match when multiple concatenations share the same length.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
