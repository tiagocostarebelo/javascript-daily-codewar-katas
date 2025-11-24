import { nbYear } from "../src/solution";

describe("nbYear()", () => {
    it("returns the total count of years that'll take to reach the goal given in parameter p", () => {
        expect(nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10);
    });

    it("returns 0 if the initial population already meets or exceeds p", () => {
        expect(nbYear(5000, 3, 50, 4000)).toEqual(0);
    });

    it("handles zero percent growth where only aug increases population", () => {
        expect(nbYear(1000, 0, 50, 1200)).toEqual(4);
    });
});
