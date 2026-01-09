import { howManydays } from "../src/solution";

describe("howManyDays", () => {
    it("Should return the total number of days the given month has", () => {
        expect(howManydays(9)).toBe(30);
        expect(howManydays(2)).toBe(28);
    })
})