# Regex Validate Pin Code - `validatePIN(pin)`
The challenge: 
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

**Problem source:** [Codewars - Regex Validate Pin Code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

## Examples

```
validatePIN("a123") // -> Result: False
validatePIN("1234") // -> Result: True
```

## Approach

This challenge is about validating both the length and content of a string.

A valid PIN must:
- Be exactly 4 or 6 characters long
- Contain only numeric digits

The solution follows these steps:
- First, check the length of the string. If it’s not 4 or 6, it can immediately be rejected.
- If the length is valid, iterate over each character in the string.
- Ensure every character falls within the numeric range '0' to '9'.
- If any non-digit character is found, return false.
- If all checks pass, return true.

This approach avoids regular expressions while still enforcing strict validation rules in a clear and readable way.

## Final Solution

```
function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  
  for (let char of pin) {
    if(char < '0' || char > '9') {
      return false;
    }
  }
  
  return true;
}
```

## Edge Cases & Validation

- Rejects strings with letters or special characters ("a123", "12-4").
- Rejects strings with spaces ("123 4").
- Rejects strings with incorrect lengths ("123", "12345").
- Accepts valid numeric strings of length 4 or 6 only.
- Handles leading zeros correctly ("0000" is valid).

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
