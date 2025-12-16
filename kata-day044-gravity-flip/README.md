# Gravity Flip - `flip(d, a)`
The challenge: 
Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

**Problem source:** [Codewars - Gravity Flip](https://www.codewars.com/kata/5f70c883e10f9e0001c89673)

## Examples

```
flip('R', [3, 2, 1, 2]) // -> Result [1, 2, 2, 3]
flip('L', [1, 4, 5, 3, 5 ]) // -> Result [5, 5, 4, 3, 1]
```

## Approach

This challenge boils down to sorting the array of column heights based on the direction of gravity.

If gravity is switched to the right ('R'), the cubes will settle from smallest to largest, so the array needs to be sorted in ascending order.

If gravity is switched to the left ('L'), the cubes will settle from largest to smallest, so the array needs to be sorted in descending order.

JavaScript’s sort() method makes this straightforward by providing a custom comparator function depending on the direction.


## Final Solution

```
const flip=(d, a)=>{
  return d === 'R' ? a.sort((a,b) => a - b) : a.sort((a,b) => b-a);
}
```

## Edge Cases & Validation

- Works with arrays of any length (including a single column).
- Handles repeated values correctly.
- Preserves all values — only their order changes.
- Assumes valid inputs ('L' or 'R') as guaranteed by the kata.
- Sorting is done in-place, which is acceptable given the challenge constraints.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
