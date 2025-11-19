# Detect Pangram - `isPangram(string)`
The challenge: 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

**Problem source:** [Codewars - Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

## Examples

```
isPangram("The quick brown fox jumps over the lazy dog"); // Returns: true
```

## Approach

A fun string-processing challenge that reinforces character inspection and uniqueness checks.
The main goal was to verify whether every letter from a–z appears at least once in the input, regardless of case or punctuation.

To approach this cleanly, I used a Set() to store unique letters found in the string. Since a Set automatically removes duplicates, it works perfectly for tracking the distinct alphabet characters encountered. The process was:

- Convert the string to lowercase to avoid case issues.
- Iterate through each character and check if it’s part of the alphabet.
- Add valid characters to the Set.
- At the end, if the Set contains all 26 letters, the string is a pangram.

This kept the solution readable and avoided unnecessary extra data structures.


## Final Solution

```
function isPangram(string) {
    const pangram = new Set();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const newStr = string.toLowerCase();
    for (let char of newStr) {
        if (alphabet.includes(char)) {
            pangram.add(char);
        }
    }

    return pangram.size === 26 ? true : false;
}
```

## Edge Cases & Validation

- Returns false for empty strings.
- Ignores numbers, punctuation, and whitespace by design.
- Handles mixed casing correctly.
- Works even when the alphabet characters appear in any order or frequency.
- Returns false when any letter of the alphabet is missing.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
