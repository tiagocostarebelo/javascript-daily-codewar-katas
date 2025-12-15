import { sumDigits } from "../src/solution";

describe("sumDigits", () => {
    it("should return the sum of each of the number's decimal digits", () => {
        expect(sumDigits(99)).toBe(18);
        expect(sumDigits(10)).toBe(1);
        expect(sumDigits(-32)).toBe(5);
        expect(sumDigits(0)).toBe(0);
    });

})