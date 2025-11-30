import { greet } from "../src/solution";

describe("greet()", () => {
    it("Returns a string with the correct welcome according to the language provided", () => {
        expect(greet('english')).toBe('Welcome');
    });

});
