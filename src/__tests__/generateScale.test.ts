import { generateScale } from "../scales/generateScale";

describe("generateScale function", () => {
  it("should increment the octave", () => {
    const scale = generateScale("A", 4, "major");
    console.log("A4 major scale:", scale)
    expect(scale).toEqual(["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5", "A5"]);
  });

  it("outputs sharp notes correctly using a sharp tonic note", () => {
    const scale = generateScale("F#", 4, "major");
    console.log("F#4 major scale:", scale)
    expect(scale).toEqual(["F#4", "G#4", "A#4", "B4", "C#5", "D#5", "F5", "F#5"]);
  });
});
