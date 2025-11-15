# Disemvowel Trolls - `disemvowel(str)`
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.


**Problem source:** [Codewars - Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e/)

## Examples

```
disemvowel("Hello") // Returns "hll"
```


## Approach

The challenge is straightforward and a good opportunity to practice basic string manipulation.
I used replace() with a regular expression to match all vowels (both lowercase and uppercase via the i flag). 
Everything matched by the regex gets replaced with an empty string, leaving only the consonants and other characters.

This reinforces how useful regex can be when transforming strings, even in simple scenarios.


## Final Solution

```
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

## Edge Cases & Validation

- Works with empty strings (returns an empty string).
- Preserves punctuation, spacing, symbols, and numbers.
- Case-insensitive vowel removal (A and a both removed).
- Handles long inputs efficiently since regex scans linearly.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
