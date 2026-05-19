export type CognitiveDomain = 
  | 'Memory'
  | 'Executive Function'
  | 'Attention'
  | 'Visuospatial'
  | 'Language'
  | 'Processing Speed';

export type GameType = 
  | 'Exergame'
  | 'Puzzle/Logic'
  | 'VR Simulation'
  | 'Memory Training'
  | 'Rhythm/Music';

export interface GameEvidence {
  clinicalTrials: number;
  sensitivity: number; // Percentage (e.g. 85 for 85%)
  specificity: number; // Percentage
  sampleSize: number;
  keyFindings: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  developer: string;
  releaseYear: number;
  types: GameType[];
  cognitiveDomains: CognitiveDomain[];
  gameplayMechanics: string[];
  evidence: GameEvidence;
  imageUrl?: string;
}

export interface ChartData {
  name: string;
  value: number;
}
