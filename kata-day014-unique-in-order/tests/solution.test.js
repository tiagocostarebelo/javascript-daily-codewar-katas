import { uniqueInOrder } from "../src/solution";

describe("Unique in order", () => {
    describe("uniqueInOrder()", () => {
        it("Should return an empty array if the given input is an empty string or empty array", () => {
            expect(uniqueInOrder("")).toStrictEqual([]);
        });
        it("Should return the first element, if the given input string only has one character", () => {
            expect(uniqueInOrder("a")).toStrictEqual(["a"]);
        });
        it("Should return the first element, if the given input array only has one element", () => {
            expect(uniqueInOrder(["a"])).toStrictEqual(["a"]);
        });
        it("Should return a new array with the unique values in the same order", () => {
            expect(uniqueInOrder('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B']);
        });
    });
});