import { sortByLength } from "../src/solution";

describe("sortByLength", () => {
    it("Should return a sorted array with elemments sorted by length", () => {
        expect(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])).toStrictEqual(["Eyes", "Glasses", "Monocles", "Telescopes"])
    })
})