import { twoSort } from "../src/solution.js";

describe('Sort and Star ', () => {
    describe('twoSort()', () => {
        it('should return the first sorted word of the array with "***" between each letter except the last', () => {
            expect(twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])).toBe('b***i***t***c***o***i***n');
        });
    })
})