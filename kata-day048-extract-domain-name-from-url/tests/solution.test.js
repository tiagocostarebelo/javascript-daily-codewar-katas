import { domainName } from "../src/solution";

describe("domainName", () => {
    it("Should return the domain name of the url provided", () => {
        expect(domainName("https://google.com")).toBe("google");
    })
})