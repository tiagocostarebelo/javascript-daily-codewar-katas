import { number } from "../src/solution";

describe("number()", () => {
    it("returns the remaining passengers", () => {
        expect(number([[10, 0], [3, 5], [5, 8]])).toBe(5);
    });

    it("returns 0 when everyone exits", () => {
        expect(number([[10, 0], [0, 10]])).toBe(0);
    });

    it("works when nobody gets off", () => {
        expect(number([[3, 0], [5, 0], [2, 0]])).toBe(10);
    });

    it("works when net passenger count returns to zero", () => {
        expect(number([[5, 0], [3, 3], [2, 7]])).toBe(0);
    });

    it("handles a longer list of stops", () => {
        expect(number([[5, 0], [7, 4], [3, 5], [6, 2]])).toBe(10);
    });
});