import { saleHotdogs } from "../src/solution";

describe("saleHotdogs", () => {
    it("Should return the total value to pay according to the number of hotdogs", () => {
        expect(saleHotdogs(5)).toBe(475);
        expect(saleHotdogs(4)).toBe(400);
        expect(saleHotdogs(9)).toBe(855);
        expect(saleHotdogs(10)).toBe(900);
    })
})