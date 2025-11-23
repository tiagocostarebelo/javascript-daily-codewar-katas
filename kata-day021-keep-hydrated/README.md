# Keep Hydrated - `litres(time)`
The challenge: 
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

**Problem source:** [Codewars - Keep Hydrated](https://www.codewars.com/kata/582cb0224e56e068d800003c)

## Examples

```
litres(3) // -> Result: 1
litres(11.8) // -> Result: 5
```

## Approach

Quite an easy and straightforward challenge for this Sunday.

The goal is to convert the total cycling time into the amount of water Nathan drinks. Since he drinks 0.5 litres per hour, you simply multiply the time by 0.5.
The only extra requirement is to round down, because even if Nathan drinks part of a litre, the function should return whole litres only.

Multiply the input time by 0.5 to calculate the raw litres consumed.

Use Math.floor() to round the result down to the nearest whole number.

Return the final integer value.


## Final Solution

```
function litres(time) {
    return Math.floor(time * 0.5)
}
```

## Edge Cases & Validation

- If time is a whole number, the calculation is straightforward (e.g., 4 → 2 litres).
- If time has decimals, only the full litres count (e.g., 11.8 → 5 litres).
- An input of 0 should return 0, since no cycling → no hydration needed.
- Very small positive decimals (e.g., 0.1) should still return 0 after rounding down.
- Extremely large values still behave consistently because the operation is simple multiplication + flooring

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
