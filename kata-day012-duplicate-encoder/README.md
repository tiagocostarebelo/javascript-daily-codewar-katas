# Duplicate Encoder - `duplicateEncode(word)`
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


**Problem source:** [Codewars - Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/)

## Examples

```
duplicateEncode("din") // Returns "((("
duplicateEncode("recede") // Returns "()()()"
```


## Approach

The main idea behind this exercise is character frequency counting.
To generate the encoded output:

- Normalize the input by converting it to lowercase.
- For each character, determine how many times it appears in the string.
- If it appears once, append "(" — otherwise append ")".

This encourages thinking about:

- iteration patterns,
- string manipulation,


## Final Solution

```
function duplicateEncode(word) {
    let encoded = "";
    const convertedWord = word.toLowerCase();
    for (let i = 0; i < convertedWord.length; i++) {
        convertedWord.split(convertedWord[i]).length - 1 == 1 ? encoded += '(' : encoded += ')';
    }
    return encoded;
}
```

## Edge Cases & Validation

- Handles empty strings
- Ignores letter casing consistently.
- Works with symbols and numbers just as well as letters.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
