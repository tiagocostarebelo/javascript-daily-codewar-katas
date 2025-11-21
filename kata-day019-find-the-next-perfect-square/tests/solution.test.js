import { findNextSquare } from "../src/solution";

describe("findNextSquare()", () => {
    it("returns -1 when sq is not a perfect square", () => {
        expect(findNextSquare(114)).toBe(-1);
    });

    it("returns the next integral perfect square number", () => {
        expect(findNextSquare(121)).toBe(144);
    });
});
