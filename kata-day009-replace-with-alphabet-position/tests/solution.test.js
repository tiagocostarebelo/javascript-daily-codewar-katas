import { alphabetPosition } from "../src/solution.js";

describe('Alphabet Position', () => {
    it('Should replace each letter with its alphabet position', () => {
        expect(alphabetPosition("The sunset sets at twelve o' clock.")).toBe("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    });

    it('Should handle uppercase letters and ignore punctuation', () => {
        expect(alphabetPosition("ABC!")).toBe("1 2 3");
    });

    it('Should return an empty string for inputs with no letters', () => {
        expect(alphabetPosition("123!")).toBe("");
    });
});
