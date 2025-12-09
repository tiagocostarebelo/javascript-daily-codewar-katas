# Training on Basic Mathematical Operations - `basicOp("operation", value1, value2 )`
The challenge: 
Challenge description here

**Problem source:** [Codewars - Training on Basic Mathematical Operations](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

## Examples

```
basicOp("+", 10, 2) // -> Result: 12
```

## Approach

A simple arithmetic challenge designed to mimic a basic calculator.
The function receives three inputs:

an operation symbol ("+", "-", "*", "/")

two numerical values

Using a switch statement keeps the logic clean and makes each operation easy to read. For each case, we directly perform the corresponding arithmetic and return the result. The structure also allows for easy extension in the future if more operations were ever added.

## Final Solution

```
function basicOp(operation, value1, value2)
{
  let result = 0;
  switch(operation){
    case '+':
    result = value1 + value2;
    break;
      
    case '-':
    result = value1 - value2;
    break;
      
    case '*':
    result = value1 * value2;
    break; 
      
    case '/':
    result = value1 / value2;
    break; 
      
    default: return;
  }
    return result;
}
```

## Edge Cases & Validation

- Handles negative results correctly.
- Division by zero is not explicitly tested in the kata, but JavaScript will return Infinity or -Infinity.
- Assumes valid inputs, as guaranteed by the problem (operation will always be one of the four defined).
- Works with integer and floating-point values.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
