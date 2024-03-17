import { greeting } from "../src/greeting";

describe("greeting", () => {
  it("should return the greeting message", () => {
    const result = greeting();
    expect(result).toBe("Welcome to Common library !!");
  });
});
