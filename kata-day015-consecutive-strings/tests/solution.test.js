import { longestConsec } from "../src/solution";

describe("longestConsec()", () => {
    it("returns an empty string when strarr is empty", () => {
        expect(longestConsec([], 2)).toBe("");
    });

    it("returns an empty string when k is 0", () => {
        expect(longestConsec(["a", "b"], 0)).toBe("");
    });

    it("returns an empty string when k is negative", () => {
        expect(longestConsec(["a", "b"], -3)).toBe("");
    });

    it("returns an empty string when k is larger than strarr length", () => {
        expect(longestConsec(["a", "b"], 3)).toBe("");
    });

    it("returns the correct concatenated longest string (example 1)", () => {
        expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
            .toBe("abigailtheta");
    });

    it("returns the correct longest string (example 2)", () => {
        expect(
            longestConsec(
                ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"],
                1
            )
        ).toBe("oocccffuucccjjjkkkjyyyeehh");
    });
});
