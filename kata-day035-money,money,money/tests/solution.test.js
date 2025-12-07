import { calculateYears } from "../src/solution";

describe("calculateYears()", () => {
    it("returns the years necessary to get to the desired goal", () => {
        expect(calculateYears(1000, 0.05, 0.18, 1100)).toBe(3);
    });
    it("returns 0 if the principal already meets the desired goal", () => {
        expect(calculateYears(1000, 0.05, 0.18, 1000)).toBe(0);
    });


});