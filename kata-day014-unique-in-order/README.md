# Unique in Order - `uniqueInOrder(iterable)`
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


**Problem source:** [Codewars - Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667/)

## Examples

```
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```


## Approach

A good challenge for a Sunday, and one that made me struggle... maybe because it was Sunday.

I knew I had to loop through the input, compare the last element to the current one being iterated, and add them or not to the array.
My initial setback was the iterable input could be a string or an array, so my initial results were skewed because I was not taking this small but important part into account.
Once I got this out of the way, I was able to flow through the challenge.


## Final Solution

```
var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    //Make sure that the iterable is always an array
    let newIterable = Array.isArray(iterable) ? iterable : iterable.split("");
    //create the variable to store the result
    let finalResult = [];
    for (let i = 0; i < newIterable.length; i++) {
        const last = finalResult[finalResult.length - 1]

        if (newIterable[i] !== last) {
            finalResult.push(newIterable[i]);
        }
    }
    return finalResult;
}
```

## Edge Cases & Validation

- Handles empty strings or empty arrays
- Handles arrays or strings of one single element/char

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
