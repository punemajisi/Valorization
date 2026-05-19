import { Game, ChartData } from './types';

export const MOCK_GAMES: Game[] = [
  {
    id: 'game-001',
    title: 'NeuroRacer',
    description: 'A customized video game designed to improve cognitive control abilities in older adults. It requires the player to multitask by driving a car while responding to target signs.',
    developer: 'Gazzaley Lab / Akili Interactive',
    releaseYear: 2013,
    types: ['VR Simulation'],
    cognitiveDomains: ['Attention', 'Executive Function'],
    gameplayMechanics: [
      'Dual-tasking',
      'Adaptive difficulty',
      'Perceptual discrimination'
    ],
    evidence: {
      clinicalTrials: 5,
      sensitivity: 82,
      specificity: 79,
      sampleSize: 340,
      keyFindings: 'Demonstrated significant improvements in working memory and sustained attention in older adults, mitigating age-related cognitive decline.'
    }
  },
  {
    id: 'game-002',
    title: 'Virtual Supermarket',
    description: 'A virtual reality based spatial navigation and memory assessment tool. Users are tasked with finding and remembering items in a simulated 3D grocery store.',
    developer: 'Various Research Groups',
    releaseYear: 2018,
    types: ['VR Simulation', 'Memory Training'],
    cognitiveDomains: ['Memory', 'Visuospatial', 'Executive Function'],
    gameplayMechanics: [
      'Spatial navigation',
      'List learning and recall',
      'Route planning'
    ],
    evidence: {
      clinicalTrials: 8,
      sensitivity: 88,
      specificity: 84,
      sampleSize: 520,
      keyFindings: 'Highly sensitive to early entorhinal cortex changes. Effectively differentiates between healthy aging and early MCI patients.'
    }
  },
  {
    id: 'game-003',
    title: 'CogniFit',
    description: 'A comprehensive battery of gamified cognitive tasks targeting multiple domains. Adapts to user performance to provide targeted training and assessment.',
    developer: 'CogniFit Inc.',
    releaseYear: 2010,
    types: ['Puzzle/Logic', 'Memory Training'],
    cognitiveDomains: ['Memory', 'Processing Speed', 'Attention', 'Visuospatial'],
    gameplayMechanics: [
      'Pattern recognition',
      'Reaction time challenges',
      'Working memory matching'
    ],
    evidence: {
      clinicalTrials: 12,
      sensitivity: 76,
      specificity: 81,
      sampleSize: 1200,
      keyFindings: 'Provides a broad, reliable assessment of general cognitive status, though slightly less specific for precise MCI subtypes compared to targeted tools.'
    }
  },
  {
    id: 'game-004',
    title: 'Smarter Time Exergame',
    description: 'Combines physical exercise with cognitive challenges on a stationary bike to dual-stimulate the brain and body.',
    developer: 'NeuroEx Institute',
    releaseYear: 2021,
    types: ['Exergame'],
    cognitiveDomains: ['Executive Function', 'Processing Speed', 'Attention'],
    gameplayMechanics: [
      'Pedaling synchronization',
      'Stroop-test variations',
      'Continuous performance pacing'
    ],
    evidence: {
      clinicalTrials: 3,
      sensitivity: 85,
      specificity: 80,
      sampleSize: 210,
      keyFindings: 'Synergistic effect of physical and cognitive loading shows high sensitivity for early executive dysfunction.'
    }
  },
  {
    id: 'game-005',
    title: 'Melody Recall',
    description: 'A rhythm and music-based game leveraging auditory memory and motor timing to assess and stimulate neural pathways resilient to early Alzheimer\'s pathology.',
    developer: 'Harmony Health',
    releaseYear: 2022,
    types: ['Rhythm/Music', 'Memory Training'],
    cognitiveDomains: ['Memory', 'Attention'],
    gameplayMechanics: [
      'Rhythmic tapping',
      'Auditory sequence replication',
      'Pitch discrimination'
    ],
    evidence: {
      clinicalTrials: 2,
      sensitivity: 79,
      specificity: 86,
      sampleSize: 150,
      keyFindings: 'Strong specificity utilizing preserved musical memory circuits, providing alternative diagnostic data when visual tests are compromised.'
    }
  }
];

// Helper to get aggregated chart data
export const getDomainDistribution = (): ChartData[] => {
  const counts: Record<string, number> = {};
  MOCK_GAMES.forEach(game => {
    game.cognitiveDomains.forEach(domain => {
      counts[domain] = (counts[domain] || 0) + 1;
    });
  });
  return Object.entries(counts).map(([name, value]) => ({ name, value })).sort((a,b) => b.value - a.value);
};

export const getEfficacyData = () => {
  return MOCK_GAMES.map(game => ({
    name: game.title.split(' ')[0], // Short name for axis
    sensitivity: game.evidence.sensitivity,
    specificity: game.evidence.specificity,
    fullTitle: game.title
  }));
};
