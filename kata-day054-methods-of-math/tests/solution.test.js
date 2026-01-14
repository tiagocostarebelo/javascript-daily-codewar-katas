import { roundIt } from "../src/solution";

describe("roundIt", () => {
    it("Should return an integer but based on the location of the decimal point", () => {
        expect(roundIt(3.45)).toStrictEqual(4);
    })
})