import { squareDigits } from "../src/solution";

describe('Square each digit', () => {
    describe('squareDigits()', () => {
        it('Should return the exponential and concatenated number', () => {
            expect(squareDigits(3212)).toEqual(9414);
            expect(squareDigits(2112)).toEqual(4114);
        });

        it('Should handle single-digit numbers', () => {
            expect(squareDigits(7)).toBe(49);
        });

        it('Should handle 0 correctly', () => {
            expect(squareDigits(0)).toBe(0);
        });

        it('Should handle large numbers', () => {
            expect(squareDigits(9876)).toBe(81644936);
        });

        it('Should handle repeated digits', () => {
            expect(squareDigits(9999)).toBe(81818181);
        });
    })
})