import { MCIGameArtifact } from '@/types';

export const vrSpatialNavigationArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'pap22-vr-spatial-navigation',
    game_name: 'VR Spatial Navigation Memory Platform',
    interaction_modality: ['Virtual reality'],
    media_documentation: {
      text_description: 'An Immersive Virtual Reality Platform for Assessing Spatial Navigation Memory in Predementia Screening',
      screenshots: ["/vr-spatial-navigation.png"]
    },
    audio_information: {
      has_background_music: false,
      has_audio_feedback: false,
      has_audio_instruction: true
    }
  },
  gameplay_info: {
    genre: 'Simulation Games',
    sub_genre: 'Wayfinding'
  },
  formal_game_design: {
    design_paradigm: 'Paradigm III',
    report: {
      rules: 1,
      procedures: 1,
      objectives: 1,
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
      "accessibility": {
            "instruments": [],
            "results_summary": "9% participants reported slight motion sickness. Slow joystick reaction was not user-friendly."
      },
      "usability": {
            "instruments": [],
            "results_summary": "Correct landmark recall = 4.55/6; Task duration = 10.45 min; Intuitive control: 4.45"
      },
      "player_experience": {
            "instruments": [
                  "PENS",
                  "IMI"
            ],
            "results_summary": "Perceived presence = 4.59; Stress = 2.73; Competence = 4.27; Enjoyment = 5.64"
      }
}
  },
  cognitive_assessment: {
    assessed_functions: ['Short-term memory', 'Visuospatial abilities']
  },
  clinical_studies: [
    {
      reference_id: 'Ijaz et al., 2019',
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
