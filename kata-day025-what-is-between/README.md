# What's in Between? - `between(a, b)`
The challenge: 
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

**Problem source:** [Codewars - What's in Between?](https://www.codewars.com/kata/55ecd718f46fba02e5000029)

## Examples

```
between(1, 4); // Returns: [1, 2, 3, 4];
```

## Approach

This problem is essentially about building a numeric range.
Since the function guarantees a < b, the logic is straightforward:

- Create an empty array to store the result.
- Loop from a up to b, inclusive.
- Push each number into the array.
- Return the array.

A simple, linear loop gives you full control and keeps the implementation easy to read.


## Final Solution

```
function between(a, b) {
    let arrayRange = [];
    for (let i = a; i <= b; i++) {
        arrayRange.push(i)
    }
    return arrayRange;
}
```

## Edge Cases & Validation

- Works with negative numbers
- Handles equal value parameters
- Handles big return values

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
