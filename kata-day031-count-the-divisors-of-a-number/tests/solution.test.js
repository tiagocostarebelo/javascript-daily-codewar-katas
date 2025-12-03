import { getDivisorsCnt } from "../src/solution";

describe("getDivisorsCnt()", () => {
    it("Should return the total count of the divisors of n", () => {
        expect(getDivisorsCnt(30)).toBe(8);
    });
    it("returns 1 for n = 1", () => {
        expect(getDivisorsCnt(1)).toBe(1);
    });

    it("works for a prime number", () => {
        expect(getDivisorsCnt(13)).toBe(2);
    });

    it("works for a perfect square", () => {
        expect(getDivisorsCnt(36)).toBe(9);
    });

});
