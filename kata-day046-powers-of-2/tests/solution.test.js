import { powersOfTwo } from "../src/solution";

describe("powersOfTwo", () => {
    it("Should return an array listing the numbers that can be powers of 2 with the exponent n", () => {
        expect(powersOfTwo(4)).toStrictEqual([1, 2, 4, 8, 16])
    })
})