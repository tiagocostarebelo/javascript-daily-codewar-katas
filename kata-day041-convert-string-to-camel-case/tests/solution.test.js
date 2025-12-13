import { toCamelCase } from "../src/solution";

describe("toCamelCase", () => {
    it("Should return the provided string, correctly CamelCased as per instructions", () => {
        expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior")
    });
    it("preserves capitalization of the first word", () => {
        expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
    });

    it("handles mixed delimiters", () => {
        expect(toCamelCase("The_Stealth-Warrior")).toBe("TheStealthWarrior");
    });

    it("returns empty string when given empty string", () => {
        expect(toCamelCase("")).toBe("");
    });

    it("handles single-word strings", () => {
        expect(toCamelCase("Warrior")).toBe("Warrior");
    });
})