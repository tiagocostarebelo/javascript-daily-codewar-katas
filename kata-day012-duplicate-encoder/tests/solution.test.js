import { duplicateEncode } from "../src/solution";

describe("Duplicate Encoder", () => {
    describe("duplicateEncode()", () => {
        it("Should return an empty string, if the given string is empty", () => {
            expect(duplicateEncode("")).toBe("");
        });
        it("Should return an encoded string", () => {
            expect(duplicateEncode("din")).toBe("(((");
            expect(duplicateEncode("recede")).toBe("()()()");
        });
    });
});