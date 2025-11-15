import { disemvowel } from "../src/solution";

describe("Disemvowel", () => {
    describe("disemvowel()", () => {
        it("Should return an empty string for an empty input", () => {
            expect(disemvowel("")).toBe("");
        });
        it("Should return a new string with no vowels", () => {
            expect(disemvowel("hello")).toBe("hll");
        });

    });
});