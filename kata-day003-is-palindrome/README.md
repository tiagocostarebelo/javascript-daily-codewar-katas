# Is it Palindrome - `isPalindrome(str)`
The challenge: 
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

**Problem source:** [Codewards - Is it a Palindrome](https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/)

## Examples

```
"Madam"  =>  Returns true 
"Hello"  =>  Returns false
```


## Approach

My thoughts for this challenge was to compare the original string with its reversed version, using strict equality after normalizing the case.

1. Convert the given string to lowercase, then split it into an array of characters, reverse the array, and join it back into a string:

```
const reversed = x.toLowerCase().split("").reverse().join("");
```

2. Compare the original, lowercased, string with the reversed one:

```
return x.toLowerCase() === reversed ? true : false;
```

This approach is clean, easy to read, and efficient for the problem at hand.


## Final Solution

```
function isPalindrome(x) {
    const reversed = x.toLowerCase().split("").reverse().join("");
    return x.toLowerCase() === reversed ? true : false;
}
```


## Edge Cases & Validation

- Handles case-insensitive comparisions ("Madam" -> true)
- Works for single-character strings as well ("A" -> true)
- Handles empty strings ("" -> true)
- Ignores no characters - punctuation or spaces are considered part of the string (as per Kata definition)

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
