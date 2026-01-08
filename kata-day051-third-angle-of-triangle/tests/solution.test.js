import { otherAngle } from "../src/solution";

describe("otherAngle", () => {
    it("Should return the third angle of the triangle", () => {
        expect(otherAngle(30, 90)).toBe(60);
        expect(otherAngle(60, 60)).toBe(60);
        expect(otherAngle(45, 45)).toBe(90);
    })
})