import { minMax } from "../src/solution";

describe("minMax()", () => {
    it("returns an array with the min and max value from the given array", () => {
        expect(minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
    });
    it("works with negative numbers", () => {
        expect(minMax([-10, 0, 10])).toStrictEqual([-10, 10]);
    });
    it("works when the array contains only one number", () => {
        expect(minMax([7])).toStrictEqual([7, 7]);
    });
    it("works with unsorted arrays", () => {
        expect(minMax([9, 1, 4, 7, 3])).toStrictEqual([1, 9]);
    });
});
