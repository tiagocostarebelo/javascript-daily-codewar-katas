import { incrementString } from "../src/solution";

describe("incrementString()", () => {
    it("increments a normal number at the end", () => {
        expect(incrementString("foo23")).toBe("foo24");
    });

    it("appends 1 if no number exists", () => {
        expect(incrementString("foo")).toBe("foo1");
    });

    it("keeps leading zeros the same length", () => {
        expect(incrementString("bar009")).toBe("bar010");
        expect(incrementString("baz000")).toBe("baz001");
    });

    it("handles carry-over increase in digit length", () => {
        expect(incrementString("foo9")).toBe("foo10");
        expect(incrementString("foo0999")).toBe("foo1000");
    });

    it("handles strings that are only numbers", () => {
        expect(incrementString("1")).toBe("2");
        expect(incrementString("009")).toBe("010");
    });

    it("handles empty string", () => {
        expect(incrementString("")).toBe("1");
    });
});