import { MCIGameArtifact } from '@/types';

export const reachArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'sys25-reach',
    game_name: 'RE@CH',
    interaction_modality: ['Other'],
    media_documentation: {
      text_description: 'VR gamified test: open a door, phone call, identifying people, ad, and digital span. Sorting objects, pick outfit, withdraw cash.',
      screenshots: ["/reach.png"]
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
      rules: 1,
      procedures: 1,
      objectives: 2,
      conflict: 1,
      boundaries: 1,
      resources: 0,
      outcomes: 0
},
    depth: {
      rules: 1,
      procedures: 1,
      objectives: 1,
      conflict: 1,
      boundaries: 0,
      resources: 0,
      outcomes: 0
}
  },
  user_experience: {
    older_adults_role: 'User',
    evaluations: {
      "usability": {
            "instruments": [],
            "results_summary": "successful rate = 100%, time to complete=19.6(3.6) mins; Ad hoc questionnaire = 24.8/30 (3.7)"
      }
}
  },
  cognitive_assessment: {
    assessed_functions: ['Short-term memory', 'Executive functions']
  },
  clinical_studies: [
    {
      reference_id: 'Chua et al., 2019',
      validation_quality: {
        study_type: 'Cross-sectional',
        overall_quality: 'Moderate',
        sample_size: {
          total: 60,
          healthy_controls: 37,
          mci_patients: 23
        },
        reference_standard: 'MoCA'
      },
      diagnostic_performance: {
        game_metrics_used: 'Total performance score of RE@CH',
        sensitivity_percent: 78.2,
        specificity_percent: 75.7,
        auc: 0.821
      }
    }
  ]
};
