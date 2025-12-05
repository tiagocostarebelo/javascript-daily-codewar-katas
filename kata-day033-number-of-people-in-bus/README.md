# Number of People in the Bus - `number(busStops)`
The challenge: 
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

**Problem source:** [Codewars - Number of People in the Bus](https://www.codewars.com/kata/5648b12ce68d9daa6b000099)

## Examples

```
number([[10, 0], [3, 5], [5, 8]]) // -> Result: 5
```

## Approach

This is a straightforward accumulation problem: at each bus stop, people get on and people get off. The goal is to track the running total of passengers across all stops and return the final count.

There are multiple ways to implement it (reduce, for…of, forEach). For this solution, I chose forEach for readability.
At each stop:

- Add both entering people to an assigned variable and also the exiting people to another variable
- In the end, the difference between total entries and exits gives the number of people still on the bus.

This keeps the logic simple, explicit, and easy to follow.


## Final Solution

```
var number = function (busStops) {
    let totalEnter = 0;
    let totalExit = 0;

    busStops.forEach((stop) => {
        totalEnter += stop[0];
        totalExit += stop[1]
    })
    return totalEnter - totalExit;
}
```

## Edge Cases & Validation

- Handles any number of bus stops (including 1).
- Guaranteed by the kata that passenger count never goes below zero.
- Works correctly for large numbers due to simple arithmetic.
- First stop always starts with exit = 0 — no special case needed.
- Final value may be zero if the bus empties by the end.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
