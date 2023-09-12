import { generateScale } from "../generateScale";

describe("generateScale function", () => {
  it("should increment the octave", () => {
    const scale = generateScale("A", 4, "major");
    expect(scale).toEqual(["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5", "A5"]);
  });
});
