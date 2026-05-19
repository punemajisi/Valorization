import { MCIGameArtifact } from '@/types';

export const virtualAdlHouseArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'sys23-virtual-adl-house',
    game_name: 'Virtual ADL+ House',
    interaction_modality: ['Touchscreen', 'Other'],
    media_documentation: {
      text_description: '11 tasks in VR environment. Tasks are daily activities like cleaning, cooking, transpotation, finance, telephone using…',
      screenshots: ["/ad-house.png"]
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
    design_paradigm: 'Paradigm II',
    report: {
      rules: 1,
      procedures: 0,
      objectives: 0,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
},
    depth: {
      rules: 1,
      procedures: 0,
      objectives: 0,
      conflict: 0,
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
            "results_summary": "SUS = 4.1/5"
      },
      "player_experience": {
            "instruments": [],
            "results_summary": "Two ad hoc questions = 4.2/5"
      }
}
  },
  cognitive_assessment: {
    assessed_functions: ['Short-term memory', 'Visuospatial abilities', 'Executive functions', 'Attention, concentration, and working memory', 'Language']
  },
  clinical_studies: [
    {
      reference_id: 'Zeng et al., 2018',
      validation_quality: {
        study_type: 'Cross-sectional',
        overall_quality: 'Unrated',
        sample_size: {
          total: 0
        },
        reference_standard: 'Not Mentioned'
      },
      
    }
  ]
};
