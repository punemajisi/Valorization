import { MCIGameArtifact } from '@/types';

export const warCatArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'sys26-warcat',
    game_name: 'WarCAT',
    interaction_modality: ['Other'],
    media_documentation: {
      text_description: 'Card game. Higher value of the card show in the round win the score',
      screenshots: ["/warcat.png"]
    },
    audio_information: {
      has_background_music: false,
      has_audio_feedback: false,
      has_audio_instruction: false
    }
  },
  gameplay_info: {
    genre: 'Casual Games',
    sub_genre: 'Card Games'
  },
  formal_game_design: {
    design_paradigm: 'Paradigm I',
    report: {
      rules: 2,
      procedures: 2,
      objectives: 2,
      conflict: 2,
      boundaries: 1,
      resources: 1,
      outcomes: 1
},
    depth: {
      rules: 1,
      procedures: 1,
      objectives: 2,
      conflict: 1,
      boundaries: 0,
      resources: 1,
      outcomes: 1
}
  },
  user_experience: {
    older_adults_role: 'Not involved',
    evaluations: {}
  },
  cognitive_assessment: {
    assessed_functions: []
  },
  clinical_studies: [
    {
      reference_id: 'Aljumaili et al., 2019',
      validation_quality: {
        study_type: 'Cross-sectional',
        overall_quality: 'Unrated',
        sample_size: {
          total: 16,
          healthy_controls: 8,
          mci_patients: 3,
          ad_patients: 5
        },
        reference_standard: 'Not Mentioned'
      },
      
    }
  ]
};
