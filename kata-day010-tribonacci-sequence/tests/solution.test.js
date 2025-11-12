import { tribonacci } from "../src/solution";

describe("Tribonacci Sequence", () => {
    describe("tribonacci()", () => {
        it("Should return an empty array, if input n is equal to 0", () => {
            expect(tribonacci([1, 1, 1], 0)).toEqual([])
        });
        it("Should return the number of n elements in the initial array, if input n is less than 3", () => {
            expect(tribonacci([1, 1, 1], 1)).toEqual([1]);
            expect(tribonacci([2, 3, 4], 2)).toEqual([2, 3]);
        });
        it("Should return a new array with the tribonacci sequence with the number of elements given in n", () => {
            expect(tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
        });
    })
})