# Money, Money, Money - `functionName(param)`
The challenge: 
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

**Problem source:** [Codewars - Money, Money, Money](https://www.codewars.com/kata/563f037412e5ada593000114)

## Examples

```
calculateYears(1000, 0.05, 0.18, 1100) // Returns: 3
```

## Approach

This challenge is a loop-based compound-interest simulation with taxation applied only to the interest earned, not the principal.

The logic breaks down into a few clear steps:

- Start with the initial principal (total = principal).

For each year:

- Calculate that year’s interest: interestYear = total * interest.
- Apply tax only to the interest: taxYear = interestYear * tax.
- Add the net interest (after tax) back into the total.
- Increment the year counter.
- Continue looping until the total meets or exceeds the desired amount.
- Return the number of years.

This approach uses a simple while loop since we don't know in advance how many years it will take — we repeat the process until a condition becomes true. 

## Final Solution

```
function calculateYears(principal, interest, tax, desired) {
    let total = principal;
    let count = 0;
    while (total < desired) {
        const interestYear = total * interest;
        const taxYear = interestYear * tax;
        total += interestYear - taxYear;
        count++;
    }
    return count;
}
```

## Edge Cases & Validation

- If principal >= desired, return 0 immediately (no investment time needed).
- Handles fractional interest and tax values correctly.
- Works for large desired targets (looping continues until threshold reached).
- Net yearly gain may be small if tax is high, but the loop still converges because the problem guarantees desired > principal.
- Correctly models cases where multiple years are needed for small interest rates.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
