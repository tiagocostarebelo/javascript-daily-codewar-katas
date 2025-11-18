# Highest Scoring Word - `high(x)`
The challenge: 
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

**Problem source:** [Codewars - Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272)

## Examples

```
high("i need a taxi") // -> Result: "taxi"
```

## Approach

My approach to this challenge started by breaking into smaller pieces.
Firstly, being the input X always a string, I knew I had to use split(), to create an array with each word and remove the spaces or other symbols.
Next step would want me to loop through the array of words and using a forEach loop, I would then split each word to individual characters, lowercase them to avoid any surprises, filter each char and check if alphabet variable I created initial included that char, then map through each char and assign it a value according to the index + 1 of alphabet, then use reduce to give me the final score of each word.

Once this was done, I needed to keep track of the scores and which word scores the highest.
I created two variables, one highestScore, the other highestWord. 

When looping, if the score of each word we were looping through would be highest, I would save it to the highestScore variable and save the word to the highestWord variable.




```
code here
```


## Final Solution

```
function high(x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const soloWords = x.split(" ");
    let highestScore = 0;
    let highestWord = "";

    soloWords.forEach((word) => {
        const score = word.toLowerCase().split("").filter(char => alphabet.includes(char)).map(char => alphabet.indexOf(char) + 1).reduce((acc, curr) => acc + curr, 0)

        if (score > highestScore) {
            highestScore = score;
            highestWord = word;
        }
    })

    return highestWord;
}
```

## Edge Cases & Validation

- Transforms all characters into lowercase characters
- Handles empty string inputs

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
