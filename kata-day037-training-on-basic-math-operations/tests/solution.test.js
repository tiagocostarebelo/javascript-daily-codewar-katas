import { basicOp } from "../src/solution";

describe("basicOp", () => {
    it("should return the result of adding two values", () => {
        expect(basicOp("+", 10, 2)).toStrictEqual(12);
    });
    it("should return the result of subtracting two values", () => {
        expect(basicOp("-", 10, 2)).toStrictEqual(8);
    });
    it("should return the result of multiplying two values", () => {
        expect(basicOp("*", 10, 2)).toStrictEqual(20);
    });
    it("should return the result of dividing two values", () => {
        expect(basicOp("/", 10, 2)).toStrictEqual(5);
    });
    it("should return negative value when subtracting, adding two values", () => {
        expect(basicOp("-", 2, 5)).toStrictEqual(-3);
    });
    it("should return the correct result when working with float values", () => {
        expect(basicOp("*", 12.2, 5.3)).toStrictEqual(64.66)
    })

})