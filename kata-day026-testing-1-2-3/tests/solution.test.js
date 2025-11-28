import { number } from "../src/solution";

describe("number()", () => {
    it("returns an array with numbering prepending the strings", () => {
        expect(number(["a", "b", "c"])).toStrictEqual(["1: a", "2: b", "3: c"]);
    });
    it("returns an empty array if the input provided is empty", () => {
        expect(number([])).toStrictEqual([]);
    })

});
