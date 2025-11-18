import { high } from "../src/solution";

describe("high()", () => {
    it("returns an empty string when the input is empty", () => {
        expect(high("")).toBe("");
    });

    it("returns the highest scoring string", () => {
        expect(high("I need a taxi")).toBe("taxi");
    });
});
