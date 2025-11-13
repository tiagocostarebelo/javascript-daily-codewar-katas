import { filter_list } from "../src/solution";

describe("Filter list", () => {
    describe("filter_list()", () => {
        it("Should return an empty array, if the given array is empty", () => {
            expect(filter_list([])).toStrictEqual([])
        });
        it("Should return a new array with the strings filtered out", () => {
            expect(filter_list([1, 2, "hello", "world"])).toStrictEqual([1, 2])
        });
    })
})