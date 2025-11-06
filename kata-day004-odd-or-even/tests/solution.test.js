import { oddOrEven } from "../src/solution.js";

describe('Odd or Even check', () => {
    describe('oddOrEven()', () => {
        it('Should return even when the array is empty', () => {
            expect(oddOrEven([])).toBe("even");
        });

        it('Should return odd when the sum of array elements is odd', () => {
            expect(oddOrEven([1])).toBe("odd");
            expect(oddOrEven([1023, 1, 3])).toBe("odd");
        });

        it('Should return even when the sum of array elements is even', () => {
            expect(oddOrEven([0, -1, -5])).toBe("even");
            expect(oddOrEven([0, 1, 5])).toBe("even");
        });
    })
})