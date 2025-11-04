import { DNAtoRNA } from "../src/solution.js";

describe('DNA to RNA', () => {
    describe('DNAtoRNA', () => {
        it('Should return an empty string when given an empty input', () => {
            expect(DNAtoRNA("")).toBe("");
        });

        it('Should replace all occurrences of "T" with "U"', () => {
            expect(DNAtoRNA("GCAT")).toBe("GCAU");
            expect(DNAtoRNA("GCACGAACG")).toBe("GCACGAACG");
            expect(DNAtoRNA("TTTT")).toBe("UUUU")
        });

        it("returns the same string if no 'T' characters are present", () => {
            expect(DNAtoRNA("GCACGAACG")).toBe("GCACGAACG");
        });

    })
})