# DNAtoRNA Conversion - `DNAtoRNA(str)`
The challenge: 
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
```
"GCAT"  =>  "GCAU"
```

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

**Problem source:** [Codewars - DNA to RNA conversion](https://www.codewars.com/kata/5556282156230d0e5e000089/)

## Examples

```
"GCAT"  =>  "GCAU"
"TTTT"  =>  "UUUU"
```

## Approach

Although this challenge is straightforward and could be solved quickly using the .replace() method, I decided to explore a slightly different approach using **array methods** for better clarity and function style.

Even though the problem guarantees that the input will contain only valid uppercase letters, I chose to normalize the input by converting it to lowercase first - this ensures the function is case-sensitive and more robust.

I then:

1. Split the string into an array of characters
2. Map through the array, replacing "t" with "u"


```
const newDNA = dna.toLowerCase().split("").map((char) => (
  char === "t" ? "u" : char
  ));
```

3. Join the array back into a string
4. Converted it back to uppercase

```
const rna = newDNA.join("").toUpperCase();
```


## Final Solution

```
function DNAtoRNA(dna) {
  const newDNA = dna.toLowerCase().split("").map((char) => (
  char === "t" ? "u" : char
  ));
  const rna = newDNA.join("").toUpperCase();
  return rna;
}
```

## Edge Cases & Validation

-Handles empty strings ("")
-Ignores capitalization inconsistencies
-Ensures non-destructive transformation of the original string

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
