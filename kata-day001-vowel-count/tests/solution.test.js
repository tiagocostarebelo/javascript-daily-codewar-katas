import { getCount } from "../src/solution.js";

describe('Get Count', () => {
    describe('getCount', () => {
        it('Should return 0 for empty string', () => {
            expect(getCount("")).toBe(0);
        });

        it('Should return 0 for a string with spaces only', () => {
            expect(getCount("    ")).toBe(0);
        });

        it('should return the correct count for lowercase strings', () => {
            expect(getCount("aaeeii")).toBe(6);
        });

        it('Should return the count of the vowels for valid strings', () => {
            expect(getCount("abracadabra")).toBe(5);
            expect(getCount("hello world")).toBe(3);
        });
    })
})