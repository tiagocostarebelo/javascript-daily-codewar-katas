# Build a pile of cubes - `findNb(m)`
The challenge: 
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3+(n-1)^3+(n-2)^3+...+1^3=m if such a n exists or -1 if there is no such n.


**Problem source:** [Codewars - Build a pile of cubes](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

## Examples

```
findNb(1071225) // -> Result: 45
```

## Approach

This kata asks to reverse-engineer a sum of cubes:
1³ + 2³ + 3³ + … + n³ = m


The idea:

Start with n = 0 and a running total = 0.

Increment n by 1 each loop and add n³ to the total.

Stop when the running total meets or exceeds m.

If the total equals m, we’ve found the correct n.
If the total surpasses m, then no such n exists and the function must return -1.

This turns the problem into a controlled accumulation loop, making the solution intuitive and easy to verify step-by-step.

## Final Solution

```
function findNb(m) {
    let total = 0;
    let n = 0;

    while (total < m) {
        n++;
        total += n ** 3;
    }

    return total === m ? n : -1;
}
```

## Edge Cases & Validation

- If the running total exceeds m, return -1 (no valid n exists).
- Large values of m may require many loops, but the logic remains correct.
- Works correctly for small values like m = 1 → returns 1.
- Handles cases where no cube stack matches the target volume (e.g., findNb(4) → -1).
- Only valid for positive integer values of m per kata constraints.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
