import { validatePIN } from "../src/solution";

describe("validatePin", () => {
    it("should return false if pin length is different than 4 or 6", () => {
        expect(validatePIN("12")).toBe(false);
    })
    it("should return false if pin contains characters other than digits", () => {
        expect(validatePIN("a234")).toBe(false);
    });
    it("should return true for valid 4 or 6 digit only pins", () => {
        expect(validatePIN("1234")).toBe(true);
        expect(validatePIN("123456")).toBe(true);
    })
})