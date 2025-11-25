import { twoSum } from "../src/solution";

describe("twoSum()", () => {
    it("returns the indexes of the array that summed together equals the target value", () => {
        expect(twoSum([1, 2, 3], 4)).toStrictEqual([0, 2]);
    });
    it("works with negative numbers", () => {
        expect(twoSum([-2, 11, 15, -3], 13)).toStrictEqual([0, 2]);
    });

    it("works with duplicate values", () => {
        expect(twoSum([2, 2, 3], 4)).toStrictEqual([0, 1]);
    });
});
