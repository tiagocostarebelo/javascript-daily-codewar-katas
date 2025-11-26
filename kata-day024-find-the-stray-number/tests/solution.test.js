import { stray } from "../src/solution";

describe("stray()", () => {
    it("returns the stray element of the array", () => {
        expect(stray([1, 1, 3])).toBe(3);
    });
    it("works with negative numbers", () => {
        expect(stray([-5, -5, 10])).toBe(10);
    });

});
