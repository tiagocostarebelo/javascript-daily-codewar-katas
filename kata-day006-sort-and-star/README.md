# Sort and Star- `twoSort(s)`
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.


**Problem source:** [Codewards - Sort and Star](https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/)

## Examples

```
twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' ;
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'; 

```


## Approach

This challenge took me a little more time to solve.

Sorting was straightforward, but I made sure not to mutate the original array.
To achieve that, I spread the array into a new one before sorting:

```
const sortedArray = [...s].sort();
```
This ensures immutability, which is a good habit in JavaScript — especially when working with state in React or similar contexts.

The next part was trickier: getting the first word of the sorted array and inserting "***" between each letter.
Initially, I tried using .map() and string concatenation, but I kept appending "***" to the last letter as well.
After some trial and error, I realised .join() could handle this cleanly:

```
return sortedArray[0].split("").join("***");
```

This splits the string into individual characters and rejoins them with "***" — perfectly matching the requirements.


## Final Solution

```
function twoSort(s) {
    const sortedArray = [...s].sort();
    return sortedArray[0].split("").join("***");
}
```

## Edge Cases & Validation

- Case sensitivity matters (uppercase letters are sorted before lowercase due to ASCII ordering).
- Single-word array: Returns the word unchanged (no "***" added unnecessarily).
- Immutability: Uses spread syntax to avoid mutating the input array.


## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
