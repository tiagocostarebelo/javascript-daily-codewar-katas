import { isPangram } from "../src/solution";

describe("isPangram()", () => {
    it("returns true if the input string is a pangram", () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true);
    });

    it("returns false if the input string is not a pangram", () => {
        expect(isPangram("I need a taxi")).toBe(false);
    });
});
