import { persistence } from "../src/solution";

describe("persistence()", () => {
    it("returns the number of times the given input digits must be multiplied until reaching single digits", () => {
        expect(persistence(39)).toBe(3);
    });
});
