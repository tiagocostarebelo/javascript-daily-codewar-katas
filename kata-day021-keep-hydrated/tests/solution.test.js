import { litres } from "../src/solution";

describe("litres()", () => {
    it("returns the total litres drank for whole hours", () => {
        expect(litres(3)).toBe(1);
        expect(litres(6)).toBe(3);
    });

    it("returns rounded down fractional hours", () => {
        expect(litres(1.4)).toBe(0);
        expect(litres(2.7)).toBe(1);
    });

    it("returns 0 if time given is 0", () => {
        expect(litres(0)).toBe(0);
    });
});
