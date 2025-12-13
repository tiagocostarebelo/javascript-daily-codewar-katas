# Convert String to Camel Case - `toCamelCase(str)`
The challenge: 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.

**Problem source:** [Codewars - Convert String to Camel Case](https://www.codewars.com/kata/challengeIDNumberHere)

## Examples

```
toCamelCase("the_stealth_warrior") // -> Result: "theStealthWarrior"
```

## Approach

The core of this challenge is identifying word boundaries created by dashes (-) or underscores (_) and transforming the following character into uppercase — while preserving the original capitalization of the first word.

Rather than splitting and manually reassembling the string, I used a regular expression to directly target the transformation points:

- The regex [^a-zA-Z0-9]+(.) matches:

  - One or more non-alphanumeric characters (the delimiters)
  - Followed by the next character (.), which is captured

- In the replace() callback, only the captured character is returned — converted to uppercase.

This effectively removes the delimiter and capitalizes the following character in one step, keeping the solution concise and expressive. 
Since the regex does not touch the first word, its original capitalization is preserved automatically.


## Final Solution

```
function toCamelCase(str){
    return str.trim().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());  
}
```

## Edge Cases & Validation

- Works with both dashes (-) and underscores (_) as delimiters.
- Preserves the capitalization of the first word (camelCase vs PascalCase).
- Handles mixed delimiters within the same string.
- Returns an empty string when given an empty input.
- Ignores leading/trailing whitespace safely due to .trim().
- Works with alphanumeric characters, not just letters.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
