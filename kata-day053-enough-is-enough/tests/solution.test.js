import { deleteNth } from "../src/solution";

describe("deleteNth", () => {
    it("Should return a new array with the repeated numbers as many times as n", () => {
        expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21]);
    })
})