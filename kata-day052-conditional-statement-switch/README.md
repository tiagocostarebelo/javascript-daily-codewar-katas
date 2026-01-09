# Conditional Statements - Switch - `howManyDays(month)`
The challenge: 
Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. 
Different months have a different number of days as shown in the table below. Return the number of days that are in month. 
There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

**Problem source:** [Codewars - Conditional Statements - Switch](https://www.codewars.com/kata/572059afc2f4612825000d8a)

## Examples

```
howManyDays(9) // -> Result: 30
```

## Approach

This challenge is a straightforward use case for a switch statement.
Each month maps to a fixed number of days, and grouping cases together helps avoid repetition.

The logic works as follows:

- Use a switch on the month value.
- February (2) is handled separately, returning 28 days.
- Months with 30 days (4, 6, 9, 11) are grouped into a single case.
- All remaining months default to 31 days.

Using switch here makes the intent very clear and keeps the logic easy to read and maintain.


## Final Solution

```
function howManydays(month){
  var days;
  switch (month){
    case 2: 
      days = 28;
      break;
    case 4: case 6: case 9: case 11:
      days = 30;
      break;
    default:
      days = 31
  }
  return days;
}
```

## Edge Cases & Validation

- Handles all valid months from 1 to 12.
- February always returns 28 days (leap years are intentionally ignored per kata scope).
- Assumes valid input, as guaranteed by the challenge (no need for defensive checks).
- Defaults safely to 31 days for all remaining months.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
