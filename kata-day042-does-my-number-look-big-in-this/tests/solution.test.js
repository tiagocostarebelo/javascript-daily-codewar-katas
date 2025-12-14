import { narcissistic } from "../src/solution";

describe("narcissistic", () => {
    it("Should return true or false if the number is narcissistic or not", () => {
        expect(narcissistic(153)).toBe(true);
        expect(narcissistic(1652)).toBe(false);
    })
})