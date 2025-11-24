# Growth of a Population - `nbYear(p0, percent, aug, p)`
The challenge: 
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.


**Problem source:** [Codewars - Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6)

## Examples

```
nbYear(1500, 5, 100, 5000); // Returns: 15
nbYear(1500000, 2.5, 10000, 2000000); // Returns: 10
```

## Approach

Good challenge to start the week, with number manipulation.
I'm starting to approach the challenges in a more pratical and logical way than before.
Starting with pseudo-code as usual, after writting it, it was time to lay all the variables I had and I needed to have in order to complete this challenge.
Then set myself to undestand which loop was better for this situation, so considering we have an end goal to reach, a while loop seeemed the best option.
Following that it was just a case of making the Math look good and increase the total Year count by one every loop until the condition is met.


## Final Solution

```
function nbYear(p0, percent, aug, p) {
    let totalPop = p0;
    let yearCount = 0;
    while (totalPop < p) {
        totalPop += Math.floor(((totalPop * percent) / 100) + aug);
        yearCount++;
    }
    return yearCount;
}
```

## Edge Cases & Validation

- If p0 is already greater than or equal to p, the function should return 0 years.
- A percent value of 0 is valid — the town grows only through the aug value.
- The aug value can be negative (population loss), as long as the loop terminates (meaning the target must be reachable).
- Extremely large numbers for p may cause many iterations, but the loop logic remains consistent.
- Floating-point growth must always be rounded down at the end of each year.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
