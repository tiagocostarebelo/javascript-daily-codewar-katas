# Final Grade Calculation - `finalGrade(exam, projects)`
The challenge: 
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases


**Problem source:** [Codewars - Final Grade Calculation](https://www.codewars.com/kata/5ad0d8356165e63c140014d4/)

## Examples

```
finalGrade(100, 12) // ➞ 100
finalGrade(85, 5)   // ➞ 90
finalGrade(55, 3)   // ➞ 75
finalGrade(20, 1)   // ➞ 0

```


## Approach

This challenge was straightforward — the solution only required using if / else if statements, combined with comparison and logical operators (&&, ||) to evaluate the grading conditions.



## Final Solution

```
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
```


## Edge Cases & Validation

- Handles all possible input ranges (0–100 for exam, 0+ for projects)
- Covers overlapping conditions correctly (evaluates in descending priority)
- Returns consistent numeric output across all valid inputs

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
