import { queueTime } from "../src/solution";

describe("queueTime()", () => {

    it("handles a single till (tills = 1)", () => {
        expect(queueTime([5, 3, 4], 1)).toBe(12);
    });

    it("splits customers between multiple tills", () => {
        expect(queueTime([10, 2, 3, 3], 2)).toBe(10);
    });

    it("returns 0 with no customers", () => {
        expect(queueTime([], 1)).toBe(0);
    });

    it("more tills than customers", () => {
        expect(queueTime([5, 3, 4], 5)).toBe(5);
    });

    it("large first customer does not block others", () => {
        expect(queueTime([100, 1, 1, 1, 1], 2)).toBe(100);
    });

});
