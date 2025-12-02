import { strCount } from "../src/solution";

describe("strCount()", () => {
    it("counts occurrences of a character in a string", () => {
        expect(strCount("Hello", "o")).toBe(1);
        expect(strCount("Hello", "l")).toBe(2);
    });

    it("returns 0 when the string is empty", () => {
        expect(strCount("", "i")).toBe(0);
    });

    it("returns 0 when character does not appear", () => {
        expect(strCount("Hello", "x")).toBe(0);
    });

    it("is case-sensitive", () => {
        expect(strCount("Hello", "h")).toBe(0);
        expect(strCount("Hello", "H")).toBe(1);
    });
});
