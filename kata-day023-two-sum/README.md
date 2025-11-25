# Two Sum - `twoSum(numbers, target)`
The challenge: 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

**Problem source:** [Codewars - Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082)

## Examples

```
twoSum([1, 2, 3], 4); // Returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // Returns [1, 2] or [2, 1]
```

## Approach

This is a classic problem where you need to find two different values in an array that add up to a given target. 
The key point is that you must return their index, not the values themselves.

My approach was to use a double loop and compare every pair. This is not the most efficient solution, as we're nesting a loop inside a loop, but this time I decided to submit it, and then look for a better solution aside.

I'm using a for loop nested in a for loop, if the values summed together equals the target, we push the indexes to a new array.


## Final Solution

```
function twoSum(numbers, target) {
    let indexes = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                indexes.push(i, j)
            }
        }
    }
    return indexes;
}
```

## Edge Cases & Validation

- Arrays will always have at least two numbers (given by the kata).
- The challenge guarantees that a valid pair always exists.
- Duplicate numbers are allowed (e.g., [3,3] with target 6).
- The pair must use two different indices, even if the numeric values are the same.
- The order of the returned indices doesn’t matter — both [i, j] and [j, i] are accepted.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
