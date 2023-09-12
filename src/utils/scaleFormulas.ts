export const SCALE_FORMULAS: { [key: string]: number[] } = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  harmonicMinor: [2, 1, 2, 2, 1, 3, 1],
  melodicMinor: [2, 1, 2, 2, 2, 2, 1],
  pentatonicMajor: [2, 2, 3, 2, 3],
  pentatonicMinor: [3, 2, 2, 3, 2],
  bluesMinor: [3, 2, 1, 1, 3, 2],
  bluesMajor: [2, 1, 1, 3, 2, 3],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  locrian: [1, 2, 2, 1, 2, 2, 2],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  wholeTone: [2, 2, 2, 2, 2, 2],
  diminishedWholeHalf: [2, 1, 2, 1, 2, 1, 2, 1],
  diminishedHalfWhole: [1, 2, 1, 2, 1, 2, 1, 2],
  augmented: [3, 1, 3, 1, 3],
  doubleHarmonic: [1, 3, 1, 2, 1, 3, 1],
  hungarianGypsy: [2, 1, 3, 1, 1, 2, 1],
  hungarianMinor: [2, 1, 3, 1, 1, 3, 1],
  neapolitanMinor: [1, 2, 2, 2, 1, 3, 1],
  neapolitanMajor: [1, 2, 2, 2, 2, 2, 1],
  persian: [1, 3, 1, 1, 2, 3, 1],
  romanianMinor: [2, 1, 3, 1, 2, 1, 2],

  // Japanese scales
  hirajoshi: [2, 1, 4, 1, 4], // Associated with Japanese Koto music
  inSen: [1, 4, 2, 3, 2], // Traditional Japanese scale
  iwato: [1, 4, 1, 4, 2], // Pentatonic scale used in Japanese court music
  kumoi: [2, 1, 4, 2, 3], // Another scale from Japanese Koto music

  // Indonesian scales
  slendro: [2, 2, 2, 2, 4], // Pentatonic scale found in Java and Bali
  pelog: [1, 2, 4, 1, 4], // Another scale from the gamelan music of Java and Bali

  // Chinese scales
  chineseMajor: [4, 2, 1, 1, 4], // Traditional Chinese pentatonic scale
  chineseMinor: [3, 2, 3, 2, 2], // Another version of a Chinese pentatonic scale

  // Indian scales (ragas)
  ragaBhairavi: [1, 2, 2, 1, 2, 1, 3], // A morning raga
  ragaKafi: [2, 1, 2, 2, 2, 1, 2], // Evening raga with similarities to the Dorian mode

  // Other
  balinese: [1, 3, 2, 4, 2], // Associated with Balinese gamelan music
};
