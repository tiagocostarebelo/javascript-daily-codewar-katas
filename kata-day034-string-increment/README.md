# String incrementer - `incrementString(strng)`
The challenge: 
Challenge description here

**Problem source:** [Codewars - String incrementer](https://www.codewars.com/kata/54a91a4883a7de5d7800009c)

## Examples

```
incrementString("foo") // -> Result: "foo1"
incrementString("foo23") // -> Result: "foo24"
```

## Approach

The goal of this kata is to detect a number at the end of a string, increment it, and preserve any leading zeros. 
If no number exists, simply append "1".

To break the problem down:

Identify the ending number
A regex like /(\d+)$/ captures any digits at the end of the string.
If there is no match, the string ends in letters — so the answer is simply str + "1".

If there is a match, then the string ends in numbers, so we need to separate the string into two parts

- The prefix (letters / non-numeric part)
- The numeric tail (the matched number)

We need to Increment the number part while preserving formatting. In order to do that, we convert the number to an integer, add 1, and then convert it back to a string.
To keep the same number of digits (e.g., "0042" → "0043"), use .padStart() with the original length.

Recombine prefix + new number
The result is the updated incremented string.


## Final Solution

```
function incrementString(strng) {
    const match = strng.match(/(\d+)$/);

    if (!match) {
        return strng + "1";
    }

    const numStr = match[0];
    const preString = strng.slice(0, -numStr.length);
    const incremented = (Number(numStr) + 1).toString().padStart(numStr.length, "0");

    return preString + incremented
}
```

## Edge Cases & Validation

- Strings with no trailing number should append "1" (e.g., "foo" → "foo1").
- Numbers with leading zeros must keep their width ("foo009" → "foo010").
- Strings consisting only of numbers are valid ("99" → "100").
- Handles very large numbers because JavaScript manages arbitrary-length strings.
- Works with mixed alphanumeric segments ("bar007xyz" is unchanged because digits are not at the end).
- Empty string ("") returns "1".

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
