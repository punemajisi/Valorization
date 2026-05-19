import { MCIGameArtifact } from '@/types';

export const smartAgeingArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys6-smartageing", 
    game_name: "SmartAgeing: a 3D serious game for early detection of mild cognitive impairments", // 
    interaction_modality: [
      "Keyboard/Mouse", // 
      "Touchscreen"     // 
    ],
    media_documentation: {
      text_description: "Provided textual description and screenshots.", // 
      screenshots: ["/smart-aging-1.png", "/smart-aging-2.png", "/smart-aging-3.png"] 
    },
    audio_information: {
      has_background_music: false,   // 
      has_audio_feedback: true,      // 
      has_audio_instruction: true    // 
    }
  },
  
  gameplay_info: {
    genre: "Simulation Games",       // 
    sub_genre: "Other Activities of Daily Life" // 
  },

  formal_game_design: {
    design_paradigm: "Paradigm II",  // 
    report: {
      rules: 1,       // [cite: 68]
      procedures: 2,  // [cite: 68]
      objectives: 1,  // [cite: 68]
      conflict: 0,    // [cite: 68]
      boundaries: 0,  // [cite: 68]
      resources: 0,   // [cite: 68]
      outcomes: 0     // [cite: 68]
    },
    depth: {
      rules: 1,       // [cite: 68]
      procedures: 2,  // [cite: 68]
      objectives: 1,  // [cite: 68]
      conflict: 0,    // [cite: 68]
      boundaries: 0,  // [cite: 68]
      resources: 0,   // [cite: 68]
      outcomes: 0     // [cite: 68]
    }
  },

  user_experience: {
    older_adults_role: "User",       // [cite: 101]
    evaluations: {
      usability: {
        instruments: ["SUS", "SUS extended"], // [cite: 109]
        results_summary: "SUS = 90(3.5). SUS + 4 extra questions = 87.33(14.14). Participants felt more comfortable with the touch screen. Navigating issues and unexpected greater complexity were reported." // [cite: 7, 109, 110]
      }
    }
  },

  cognitive_assessment: {
    assessed_functions: [
      "Short-term memory",                          // 
      "Visuospatial abilities",                     // 
      "Executive functions",                        // 
      "Attention, concentration, and working memory", // 
      "Language",                                   // 
      "Orientation to time and place"               // 
    ]
  },

  clinical_studies: [
    {
      reference_id: "Bottiroli et al., 2021", // [cite: 53]
      validation_quality: {
        study_type: "Cross-sectional", // [cite: 8]
        overall_quality: "High",       // 
        sample_size: {
          total: 91,                   // [cite: 8]
          healthy_controls: 23,        // [cite: 8]
          mci_patients: 43,            // [cite: 8]
          ad_patients: 25              // [cite: 8]
        }
      },
      diagnostic_performance: {
        game_metrics_used: "Smart Aging Total Score", // 
        auc: 0.986                     // 
      }
    },
    {
      reference_id: "Cabinio et al., 2020", // [cite: 53]
      validation_quality: {
        study_type: "Cross-sectional", // [cite: 8]
        overall_quality: "High",       // 
        sample_size: {
          total: 139,                  // [cite: 8]
          healthy_controls: 107,       // [cite: 8]
          mci_patients: 32             // [cite: 8]
        }
      },
      diagnostic_performance: {
        game_metrics_used: "Smart Aging Serious Game (SAGA) Total Score", // 
        sensitivity_percent: 84.4,     // 
        specificity_percent: 75.5,     // 
        auc: 0.88                      // 
      }
    }
  ]
};