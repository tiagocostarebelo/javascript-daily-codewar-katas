import { between } from "../src/solution";

describe("between()", () => {
    it("returns an array with integers ranging between the provided input a and b, including them", () => {
        expect(between(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    });
    it("works with negative numbers", () => {
        expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2]);
    });
    it("handles the smallest valid range (two consecutive numbers)", () => {
        expect(between(4, 5)).toStrictEqual([4, 5]);
    });
    it("handles the edge case where a === b (not required by kata but useful in real apps)", () => {
        expect(between(7, 7)).toStrictEqual([7]);
    });

});
