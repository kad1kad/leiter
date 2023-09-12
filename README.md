# Leiter
Leiter is a TypeScript-based library designed to generate musical scales based on a given tonic, octave, and scale type. It simplifies the process of obtaining notes in the correct pitch for various scales, facilitating musical application development.

## Features

- **Generate Scales**: Easily retrieve scales based on the tonic, octave, and desired scale type.
- **TypeScript Support**: Built with TypeScript for type-safety and developer experience.
- **Expandable**: While it starts with common scales, developers can extend and add more scales as needed.

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
## Supported Scales

- Major
- Minor
- More to come 🤩

## Contributing

Feel free to fork the repository, make changes, and submit pull requests. Contributions are welcome!
