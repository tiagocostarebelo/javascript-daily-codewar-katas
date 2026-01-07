# if...else and ternary operator - `saleHotdogs(n)`
The challenge: 
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90

You can use if..else or ternary operator to complete it.

**Problem source:** [Codewars - if...else and ternary operator](https://www.codewars.com/kata/57202aefe8d6c514300001fd)

## Examples

```
saleHotdogs(5) // -> Result: 475
```

## Approach

This challenge is a simple conditional pricing problem.
The total cost depends on how many hotdogs are purchased, with three possible pricing tiers.

To solve it cleanly and concisely, I used a nested ternary operator:
- If n < 5, each hotdog costs 100 cents.
- If n >= 5 and n < 10, each hotdog costs 95 cents.
- If n >= 10, each hotdog costs 90 cents.

The ternary operator allows all conditions to be expressed in a single return statement, keeping the function short while still readable for a small number of conditions.


## Final Solution

```
function saleHotdogs(n){
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
```

## Edge Cases & Validation

- Works correctly when n is 0 (returns 0).
- Correctly applies the pricing thresholds at 5 and 10.
- Handles large values of n without issue since the calculation is linear.
- Assumes n is a non-negative integer, as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
