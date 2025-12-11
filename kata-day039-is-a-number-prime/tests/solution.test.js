import { isPrime } from "../src/solution";

describe("isPrime", () => {
    it("Should return true if the number is prime", () => {
        expect(isPrime(2)).toBe(true);
    });
    it("Should return false if the number is not prime", () => {
        expect(isPrime(75)).toBe(false);
    })
})