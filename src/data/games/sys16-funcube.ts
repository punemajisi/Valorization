import { MCIGameArtifact } from '@/types';

export const funCubeArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'sys16-funcube',
    game_name: 'Fun Cube',
    interaction_modality: ['Other'],
    media_documentation: {
      text_description: 'physical hardware gamified the MoCA test'
    },
    audio_information: {
      has_background_music: false,
      has_audio_feedback: true,
      has_audio_instruction: true
    }
  },
  gameplay_info: {
    genre: 'Dedicated Interactive Games',
    sub_genre: 'Digital Versions of Analog Games'
  },
  formal_game_design: {
    design_paradigm: 'Paradigm II',
    report: {
      rules: 2,
      procedures: 2,
      objectives: 1,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
    },
    depth: {
      rules: 1,
      procedures: 1,
      objectives: 1,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
    }
  },
  user_experience: {
    older_adults_role: 'User',
    evaluations: {
      usability: {
        instruments: ['TAM2'],
        results_summary: 'TAM2 model, 13 questions. Result: >5.3/7 for all items.'
      }
    }
  },
  cognitive_assessment: {
    assessed_functions: [
      'Short-term memory',
      'Visuospatial abilities',
      'Executive functions',
      'Attention, concentration, and working memory',
      'Language',
      'Orientation to time and place'
    ]
  },
  clinical_studies: [
    {
      reference_id: 'Zhang et al., 2017',
      validation_quality: {
        study_type: 'Cross-sectional',
        overall_quality: 'High',
        sample_size: {
          total: 107,
          healthy_controls: 42,
          mci_patients: 65
        },
        reference_standard: 'Psychologists check / MoCA'
      },
      diagnostic_performance: {
        game_metrics_used: 'Score for each test',
        sensitivity_percent: 83
      }
    }
  ]
};
