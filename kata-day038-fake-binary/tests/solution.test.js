import { fakeBin } from "../src/solution";

describe("fakebin", () => {
    it("Should return a new string with the converted numbers into fake binary", () => {
        expect(fakeBin('45385593107843568')).toStrictEqual('01011110001100111');
        expect(fakeBin('0')).toBe('0');
        expect(fakeBin('9')).toBe('1');
        expect(fakeBin('12345')).toBe('00001');
        expect(fakeBin('56789')).toBe('11111');
    });
})