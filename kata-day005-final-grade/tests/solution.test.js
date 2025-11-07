import { finalGrade } from "../src/solution.js";

describe('Final Grade Calculation', () => {
    describe('finalGrade()', () => {
        it('Should return 100 if grade for the exam is more than 90 or if a number of completed projects more than 10', () => {
            expect(finalGrade(91, 12)).toBe(100);
            expect(finalGrade(95, 0)).toBe(100);
            expect(finalGrade(0, 15)).toBe(100);
        });
        it('Should return 90 if a grade for the exam is more than 75 and if a number of completed projects is minimum 5', () => {
            expect(finalGrade(80, 7)).toBe(90);
            expect(finalGrade(76, 5)).toBe(90);
        });
        it('Should return 75 if a grade for the exam is more than 50 and if a number of completed projects is minimum 2', () => {
            expect(finalGrade(67, 4)).toBe(75);
            expect(finalGrade(51, 2)).toBe(75);
        });
        it('Should return 0 in any other case', () => {
            expect(finalGrade(48, 1)).toBe(0);
            expect(finalGrade(90, 0)).toBe(0);
            expect(finalGrade(50, 1)).toBe(0);
        });
    })
})