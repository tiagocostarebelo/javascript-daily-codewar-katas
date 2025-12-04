import { findNb } from "../src/solution";

describe("findNb()", () => {
    it("returns correct n for a valid m", () => {
        expect(findNb(1071225)).toBe(45);
    });

    it("returns -1 for values with no valid n", () => {
        expect(findNb(91716553919377)).toBe(-1);
    });
});