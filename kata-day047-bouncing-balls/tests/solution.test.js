import { bouncingBall } from "../src/solution";

describe("bouncingBall", () => {
    it("Should return the total number of times the ball passes the window height", () => {
        expect(bouncingBall(2.0, 0.5, 1)).toBe(1);
        expect(bouncingBall(3, 0.66, 1.5)).toBe(3);
    });
})