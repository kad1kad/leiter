# Leiter
Leiter is a TypeScript-based library designed to generate musical scales based on a given tonic, octave, and scale type. It simplifies the process of obtaining notes in the correct pitch for various scales, facilitating musical application development.

## Features

- **Generate Scales**: Easily retrieve scales based on the tonic, octave, and desired scale type.
- **TypeScript Support**: Built with TypeScript for type-safety and developer experience.
- **Expandable**: Developers can extend and add more scales as needed.

## Installation

Using npm:
```bash
npm install leiter
````

## Usage

Here's a simple example:

```typescript
import { generateScale } from 'leiter';

const scale = generateScale('A', 4, 'major');
console.log(scale);  // ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5', 'A5']
````

## API
`generateScale(tonic: string, octave: number, scaleName: ScaleName): string[]`

### Parameters:
- `tonic (string)`: The root or starting note of the scale. It should be one of the standard note names (e.g., "C", "D#", "Fb").
- `octave (number)`: The octave in which the scale is to be generated. Typically represented as numbers like 3, 4, 5, etc., where "C4" is the Middle C.
- `scaleName (ScaleName)`: The name of the scale pattern you want to generate. The library supports a vast array of scales, from standard major and minor scales to unique scales from diverse global traditions.

### Returns:
An array of `string` values, each representing a note with it's pitch in the generated scale.

### ScaleName Type
```typescript
type ScaleName = "major" | "minor" | "harmonicMinor" | "melodicMinor" | "pentatonicMajor" | "pentatonicMinor" | "bluesMinor" | "bluesMajor" | "phrygian" | "locrian" | "dorian" | "mixolydian" | "lydian" | "wholeTone" | "diminishedWholeHalf" | "diminishedHalfWhole" | "augmented" | "doubleHarmonic" | "hungarianGypsy" | "hungarianMinor" | "neapolitanMinor" | "neapolitanMajor" | "persian" | "romanianMinor" | "hirajoshi" | "inSen" | "iwato" | "kumoi" | "slendro" | "pelog" | "chineseMajor" | "chineseMinor" | "ragaBhairavi" | "ragaKafi" | "balinese";
```

## Supported Scales

| Scale Name           | Formula                                     | Description                            |
|----------------------|---------------------------------------------|----------------------------------|
| Major                | 2, 2, 1, 2, 2, 2, 1                         |                                  |
| Minor                | 2, 1, 2, 2, 1, 2, 2                         |                                  |
| Harmonic Minor       | 2, 1, 2, 2, 1, 3, 1                         |                                  |
| Melodic Minor        | 2, 1, 2, 2, 2, 2, 1                         |                                  |
| Pentatonic Major     | 2, 2, 3, 2, 3                               |                                  |
| Pentatonic Minor     | 3, 2, 2, 3, 2                               |                                  |
| Blues Minor          | 3, 2, 1, 1, 3, 2                            |                                  |
| Blues Major          | 2, 1, 1, 3, 2, 3                            |                                  |
| Phrygian             | 1, 2, 2, 2, 1, 2, 2                         |                                  |
| Locrian              | 1, 2, 2, 1, 2, 2, 2                         |                                  |
| Dorian               | 2, 1, 2, 2, 2, 1, 2                         |                                  |
| Mixolydian           | 2, 2, 1, 2, 2, 1, 2                         |                                  |
| Lydian               | 2, 2, 2, 1, 2, 2, 1                         |                                  |
| Whole Tone           | 2, 2, 2, 2, 2, 2                            |                                  |
| Diminished Whole Half| 2, 1, 2, 1, 2, 1, 2, 1                      |                                  |
| Diminished Half Whole| 1, 2, 1, 2, 1, 2, 1, 2                      |                                  |
| Augmented            | 3, 1, 3, 1, 3                               |                                  |
| Double Harmonic      | 1, 3, 1, 2, 1, 3, 1                         |                                  |
| Hungarian Gypsy      | 2, 1, 3, 1, 1, 2, 1                         |                                  |
| Hungarian Minor      | 2, 1, 3, 1, 1, 3, 1                         |                                  |
| Neapolitan Minor     | 1, 2, 2, 2, 1, 3, 1                         |                                  |
| Neapolitan Major     | 1, 2, 2, 2, 2, 2, 1                         |                                  |
| Persian              | 1, 3, 1, 1, 2, 3, 1                         |                                  |
| Romanian Minor       | 2, 1, 3, 1, 2, 1, 2                         |                                  |
| Hirajoshi            | 2, 1, 4, 1, 4                               | Associated with Japanese Koto music |
| In Sen               | 1, 4, 2, 3, 2                               | Traditional Japanese scale      |
| Iwato                | 1, 4, 1, 4, 2                               | Pentatonic scale used in Japanese court music |
| Kumoi                | 2, 1, 4, 2, 3                               | Another scale from Japanese Koto music |
| Slendro              | 2, 2, 2, 2, 4                               | Pentatonic scale found in Java and Bali |
| Pelog                | 1, 2, 4, 1, 4                               | Another scale from the gamelan music of Java and Bali |
| Chinese Major        | 4, 2, 1, 1, 4                               | Traditional Chinese pentatonic scale |
| Chinese Minor        | 3, 2, 3, 2, 2                               | Another version of a Chinese pentatonic scale |
| Raga Bhairavi        | 1, 2, 2, 1, 2, 1, 3                         | A morning raga                   |
| Raga Kafi            | 2, 1, 2, 2, 2, 1, 2                         | Evening raga with similarities to the Dorian mode |
| Balinese             | 1, 3, 2, 4, 2                               | Associated with Balinese gamelan music |


## Contributing

Feel free to fork the repository, make changes, and submit pull requests. Contributions are welcome!
