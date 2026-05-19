import { MCIGameArtifact } from '@/types';

export const immersiveVirtualDailyLivingTestArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'sys22-immersive-virtual-daily-living',
    game_name: 'An immersive virtual daily living test',
    interaction_modality: ['Virtual reality'],
    media_documentation: {
      text_description: 'VR IADL experience: ATM cash withdraw, bus route selection',
      screenshots: ["/virtual-daily-living-1.png", "/virtual-daily-living-2.png"]
    },
    audio_information: {
      has_background_music: false,
      has_audio_feedback: false,
      has_audio_instruction: false
    }
  },
  gameplay_info: {
    genre: 'Simulation Games',
    sub_genre: 'Other Activities of Daily Life'
  },
  formal_game_design: {
    design_paradigm: 'Paradigm III',
    report: {
      rules: 0,
      procedures: 2,
      objectives: 2,
      conflict: 1,
      boundaries: 0,
      resources: 0,
      outcomes: 0
},
    depth: {
      rules: 0,
      procedures: 1,
      objectives: 1,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
}
  },
  user_experience: {
    older_adults_role: 'Not involved',
    evaluations: {}
  },
  cognitive_assessment: {
    assessed_functions: ['Short-term memory', 'Attention, concentration, and working memory', 'Visuospatial abilities', 'Executive functions']
  },
  clinical_studies: [
    {
      reference_id: 'Seo et al., 2018',
      validation_quality: {
        study_type: 'Cross-sectional',
        overall_quality: 'Moderate',
        sample_size: {
          total: 42,
          healthy_controls: 22,
          mci_patients: 20
        },
        reference_standard: 'Not Mentioned'
      },
      diagnostic_performance: {
        game_metrics_used: 'UnKnown',
        sensitivity_percent: 75,
        specificity_percent: 72.7,
      }
    }
  ]
};
