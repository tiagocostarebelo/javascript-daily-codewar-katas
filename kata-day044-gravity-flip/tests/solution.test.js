import { flip } from "../src/solution";

describe("flip", () => {
    it("should return the array of numbers correctly sorted according to 'R' or 'L'", () => {
        expect(flip("R", [3, 2, 1, 2])).toStrictEqual([1, 2, 2, 3]);
        expect(flip("L", [1, 4, 5, 3, 5])).toStrictEqual([5, 5, 4, 3, 1]);
    })
})