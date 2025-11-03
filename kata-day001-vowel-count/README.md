# Vowel Count Kata - `getCount(str)`
The challenge: 
Return the number (count) of vowels in a given string, considering a, e, i, o, u as the vowels (not y).
The input string will only consist of lower case letters and/or spaces.

**Problem source:** [Codewards - Vowel Count Kata](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

## Examples

```
getCount("abracadabra") // -> 5
getCount("hello world") // -> 3
getCount("")            // -> 0
```

## Approach

**Assumption:** Input is lowercase letters so no case normalization required.
**Vowels set:** Store vowels as a string for easy check

```
const vowels = "aeiou";
```

**Counter:** Keep a count variable 

```
let count = 0;
```

**Iteration:** Iterate each character of the input string and check if vowels includes it. Add to count.
 
```
for (let char of str) {
    if(vowels.includes(char)){
        count++
    }
}
```

## Final Solution

```
function getCount(str) {
  const vowels = "aeiou";
  let count = 0;

  for(let char of str) {
    if(vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
```

## Edge Cases & Validation

Empty strings return 0;
Strings with only spaces will return 0;
The Kata promises lowercase letters and spaces. If later we want to accept mixed case, we can add ```str = str.toLowerCase()``` before processing

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
