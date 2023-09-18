import { NOTES } from "../utils/notes";
import { SCALE_FORMULAS } from "../utils/scaleFormulas";
import { ScaleName } from "../utils/types";

type Note = string;

export function generateScale(
  tonic: string,
  octave: number,
  scaleName: ScaleName
): Note[] {
  if (!SCALE_FORMULAS[scaleName]) {
    throw new Error(`Unknown scale: ${scaleName}`);
  }

  const formula = SCALE_FORMULAS[scaleName];
  const startingIndex = NOTES.indexOf(tonic);

  if (startingIndex === -1) {
    throw new Error(`Unknown tonic: ${tonic}`);
  }

  const scale: Note[] = [`${tonic}${octave}`];
  let currentIndex = startingIndex;

  for (const step of formula) {
    currentIndex = (currentIndex + step) % NOTES.length;

    // Check if wrapped around to the beginning of the NOTES array to ensure incremented octave
    if (currentIndex < step) {
      octave++;
    }

    scale.push(`${NOTES[currentIndex]}${octave}`);
  }

  return scale;
}
