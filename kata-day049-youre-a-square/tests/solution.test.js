import { isSquare } from "../src/solution";

describe("isSquare", () => {
    it("Should return false if parameter provided is not a square number", () => {
        expect(isSquare(-1)).toBe(false);
    });
    it("Should return true if parameter provided is a square number", () => {
        expect(isSquare(4)).toBe(true);
        expect(isSquare(25)).toBe(true);
    });
})