# Third Angle of a Triangle  - `otherAngle(a, b)`
The challenge: 
Challenge description here

**Problem source:** [Codewars - Third Angle of a Triangle ](https://www.codewars.com/kata/5a023c426975981341000014)

## Examples

```
otherAngle(30, 90) // -> Result: 60
```

## Approach

This challenge is based on a simple geometric rule:
The sum of the interior angles of any triangle is always 180 degrees.

Given two angles, the third angle can be calculated by subtracting their sum from 180.

So the logic is straightforward:

1. Add the two given angles.
2. Subtract that total from 180.
3. Return the result.

Since the problem guarantees valid positive integers as input, no additional validation or conditionals are required.

## Final Solution

```
function otherAngle(a, b) {
    return 180 - (a + b);
}
```

## Edge Cases & Validation

Works for any valid triangle angles where a + b < 180.
Handles small and large angle values correctly (e.g. 1, 179).
Returns the correct result when angles are equal or different.
Assumes valid triangle inputs, as guaranteed by the kata (no need to guard against invalid triangles).

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
