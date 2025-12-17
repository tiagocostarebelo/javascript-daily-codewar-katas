/**
 * Problem statement:
 *
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 *
 * @param { pin } string - The given input string to check if its a valid pin or not
 * @returns { boolean } Returns true of false if pin is valid or not
 *
 * @example
 * validatePIN("a123"); // Returns: false
 * validatePIN("1234"); // Returns: true
 */

export function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    for (let char of pin) {
        if (char < '0' || char > '9') {
            return false;
        }
    }

    return true;
}