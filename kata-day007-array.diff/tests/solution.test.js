import { arrayDiff } from "../src/solution.js";

describe('Array Difference ', () => {
    describe('arrayDiff()', () => {
        it('Should return an array with the values present in array1 that are not in array2', () => {
            expect(arrayDiff([1, 2, 3], [2])).toEqual([1, 3]);
            expect(arrayDiff([], [1, 2, 3])).toEqual([]);
            expect(arrayDiff([1, 2, 3], [])).toEqual([1, 2, 3]);
            expect(arrayDiff([1, 2, "3"], [3])).toEqual([1, 2, "3"]);
            expect(arrayDiff(["Test", "my", "array"], ["My", "Array"])).toEqual(['Test', 'my', 'array']);
        });
    })
})