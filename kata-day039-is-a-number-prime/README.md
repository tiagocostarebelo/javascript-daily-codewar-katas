# Is a Number Prime - `isPrime(num)`
The challenge: 
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
- You can assume you will be given an integer input.
- You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
- NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

**Problem source:** [Codewars - Is a Number Prime](https://www.codewars.com/kata/5262119038c0985a5b00029f)

## Examples

```
isPrime(75) // -> Result: false
isPrime(2) // -> Result: true
```

## Approach

This was a great challenge to practice both number theory and performance-aware thinking.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. So the goal is to:

Reject obvious non-primes early
Any number <= 1 can immediately be returned as false.

Check divisibility starting from 2
If a number is divisible by any integer other than 1 and itself, it’s not prime. A naïve approach would loop from 2 all the way up to num - 1, but that’s too slow for large inputs.

Optimize using the square root trick
Divisors come in pairs: if n = a * b, then one of a or b must be less than or equal to sqrt(n).
This means we only need to check possible divisors from 2 up to sqrt(num) – if none divide evenly, the number is prime.

That’s why the loop condition is written as i * i <= num: it’s an efficient way to stop once i exceeds sqrt(num) without computing the square root on every iteration. This keeps the solution fast even for large values.

## Final Solution

```
function isPrime(num) {
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return isPrime
}
```

## Edge Cases & Validation

- Returns false for numbers ≤ 1 (0, 1, and negative numbers are not prime).
- Correctly identifies the smallest prime number (2) as prime.
- Efficiently handles very large integers because the loop stops at sqrt(num) rather than iterating up to num.
- Works for both even and odd numbers — automatically dismissing all evens except 2.
- Handles edge cases like:
  - Large prime numbers
  - Large composite numbers
  - Perfect squares (e.g., 49 → false)

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
