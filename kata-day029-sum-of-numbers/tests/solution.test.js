import { getSum } from "../src/solution";

describe("getSum()", () => {
    it("returns the sum of a range when a < b", () => {
        expect(getSum(-1, 0)).toBe(-1);
        expect(getSum(1, 3)).toBe(6);  // 1 + 2 + 3
    });

    it("returns the sum of a range when a > b", () => {
        expect(getSum(3, 1)).toBe(6);  // 1 + 2 + 3
        expect(getSum(5, -1)).toBe(14); // -1+0+1+2+3+4+5
    });

    it("returns the number itself when a === b", () => {
        expect(getSum(5, 5)).toBe(5);
        expect(getSum(-7, -7)).toBe(-7);
    });

    it("works with large positive ranges", () => {
        expect(getSum(1, 100)).toBe(5050);
    });

    it("works with negative ranges", () => {
        expect(getSum(-3, -1)).toBe(-6); // -3 + -2 + -1
    });
});
