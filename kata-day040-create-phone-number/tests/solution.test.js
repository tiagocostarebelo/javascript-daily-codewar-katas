import { createPhoneNumber } from "../src/solution";

describe("phoneNumber", () => {
    it("Should return a string with the numbers in phone number format", () => {
        expect(createPhoneNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe("(000) 000-0000");
    })
})