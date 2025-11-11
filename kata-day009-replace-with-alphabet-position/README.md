# Replace with Alphabet Position- `alphabetPosition(text)`
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

**Problem source:** [Codewars - Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da/)

## Examples

```
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

```


## Approach

Another good challenge that made me think and rethink, which is the purpose of me doing these.
I started with creating an object of the alphabet, with key value for each letter, however, I've been using split() a lot recently, and a string of characters is easily looped, so I decided to create a variable of the alphabet as a string only.
Next step, handle the input text. 
First, I definitely need to normalise the case. I decided to lower case the text. Then I need to split it into individual characters, so I can easily loop through them individually.
Next, filter any character that is included in the alphabet variable. This returns only the characters, no spaces, special symbols, etc.
Then I map over and I replace every character with the alphabet's variable index of.
Then we just need to join it back including the spaces.

Not straightforward, but a great challenge to push my problem solving skills.


## Final Solution

```
function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return text
        .toLowerCase()
        .split("")
        .filter(char => alphabet.includes(char))
        .map(char => alphabet.indexOf(char) + 1)
        .join(" ");
}
```

## Edge Cases & Validation

- Numbers and punctuation are ignored (alphabetPosition("123!") → "")
- Empty string input returns an empty string.
- Case-insensitive processing ensures consistent output (alphabetPosition("ABC") → "1 2 3")
- Works correctly for any length of input.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
