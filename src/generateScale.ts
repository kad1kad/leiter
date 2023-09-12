type Note = string;

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const SCALE_FORMULAS: { [key: string]: number[] } = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
};

export function generateScale(
  tonic: string,
  octave: number,
  mode: string
): Note[] {
  if (!SCALE_FORMULAS[mode]) {
    throw new Error(`Unknown mode: ${mode}`);
  }

  const formula = SCALE_FORMULAS[mode];
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

generateScale("A", 4, "major");
