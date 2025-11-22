# The Supermarket Queue - `queueTime(customers, n)`
The challenge: 
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

Input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

Output
The function should return an integer, the total time required.

Clarifications
There is only ONE queue serving many tills, and the order of the queue NEVER changes, and the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

N.B. You should assume that all the test input will be valid, as specified above.

**Problem source:** [Codewars - The Supermarket Queue](https://www.codewars.com/kata/57b06f90e298a7b53d000a86)

## Examples

```
queueTime([5,3,4], 1); // Returns: 12
queueTime([10,2,3,3], 2) // Returns: 10
```

## Approach

A good way to think about this challenge is to simulate how real supermarket tills work.
Each till accumulates time based on the customers assigned to it, and the goal is always to give the next customer to the till that becomes free first.

Represent the tills
Create an array of length n, where each element tracks how much time that till is currently busy for.

Assign customers one by one
For every time value in customers, always choose the till with the smallest accumulated time.
This ensures the queue moves efficiently and reflects how the real system works.

Update the selected till
Add the current customer's checkout time to that till’s running total.

Final result
The total time is the maximum value in the tills array—because the supermarket only finishes when the slowest till completes its final customer.

This approach builds the solution step by step and mirrors the real-world logic, making the math behind the scheduling easy to follow.


## Final Solution

```
function queueTime(customers, n) {
    const tills = new Array(n).fill(0);
    for (let time of customers) {
        const minValue = Math.min(...tills);
        const indexOfNextFreeTill = tills.indexOf(minValue);
        tills[indexOfNextFreeTill] += time;
    }
    return Math.max(...tills);
}
```

## Edge Cases & Validation

- When n is greater than or equal to the number of customers, the answer is simply the time of the slowest customer.
- When customers is empty, the total checkout time is 0.
- Customers with small values (like 1) are assigned quickly and shift the load evenly across tills.
- Larger values naturally take longer and help test whether the till-selection logic works correctly.
- Performance is stable for long queues because each step only requires checking for the smallest till value.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
