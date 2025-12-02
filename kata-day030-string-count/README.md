# All Star Code Challenge #18 - String Count - `strCount(str, letter)`
The challenge: 
Challenge description here

**Problem source:** [Codewars - All Star Code Challenge #18 - String Count](https://www.codewars.com/kata/5865918c6b569962950002a1)

## Examples

```
strCount("Hello", "o") // -> Result: 1
```

## Approach

This is a straightforward character-counting challenge.
The goal is to loop through the given string and count how many times the target letter appears.

The simplest approach is:

- Initialize a counter at zero.
- Loop through each character in the string.
- Compare each character with the target letter.
- If they match, increment the counter.
- Return the final count.

Using a for…of loop keeps the logic clear and readable without needing additional string methods or nested conditions.


## Final Solution

```
function strCount(str, letter){  
  //code here
  let count = 0;
  
  for(let char of str){
  if(char === letter) count++
  }
  return count
}
```

## Edge Cases & Validation

- Returns 0 if the string is empty.
- Works with repeated characters.
- Case-sensitive matching (per kata rules).
- Handles symbols, numbers, and whitespace correctly (counted only if equal to letter).
- The letter input is always a single character per kata constraints.


## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
