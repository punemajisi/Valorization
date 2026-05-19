import { MCIGameArtifact } from '@/types';

export const virtualSupermarketArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys30-virtual-supermarket", 
    game_name: "Virtual Supermarket Test (VST / VSM)", 
    interaction_modality: [
      "Keyboard/Mouse", // [cite: 66]
      "Touchscreen"     // [cite: 66]
    ],
    media_documentation: {
      text_description: "Provided textual description and screenshots.", // [cite: 66]
      screenshots: ["/vitual-supermarket-1.png", "/vitual-supermarket-2.png"] 
    },
    audio_information: {
      has_background_music: true,    // [cite: 66]
      has_audio_feedback: false,     // [cite: 66]
      has_audio_instruction: false   // [cite: 66]
    }
  },
  
  gameplay_info: {
    genre: "Simulation Games",       // 
    sub_genre: "Shopping"            
  },

  formal_game_design: {
    design_paradigm: "Paradigm III", // 游戏旨在模仿日常超市购物 [cite: 33, 75]
    report: {
      rules: 1,       // [cite: 68]
      procedures: 2,  // [cite: 68]
      objectives: 1,  // [cite: 68]
      conflict: 1,    // [cite: 68]
      boundaries: 1,  // [cite: 68]
      resources: 0,   // [cite: 68]
      outcomes: 1     // [cite: 68]
    },
    depth: {
      rules: 1,       // [cite: 68]
      procedures: 2,  // [cite: 68]
      objectives: 1,  // [cite: 68]
      conflict: 1,    // [cite: 68]
      boundaries: 1,  // [cite: 68]
      resources: 0,   // [cite: 68]
      outcomes: 1     // [cite: 68]
    }
  },

  user_experience: {
    older_adults_role: "Not involved", // [cite: 100]
    evaluations: {}                  // 在所选的 RQ5ver3 中未收录该项目的体验量表数据
  },

  cognitive_assessment: {
    assessed_functions: [
      "Short-term memory",                          // 
      "Visuospatial abilities",                     // 
      "Executive functions",                        // 
      "Attention, concentration, and working memory"// 
    ]
  },

  clinical_studies: [
    {
      reference_id: "Iliadou et al., 2021",
      validation_quality: {
        study_type: "Cross-sectional", // 
        overall_quality: "Moderate",   // [cite: 64]
        sample_size: {
          total: 76,                 
          healthy_controls: 43,        // [cite: 58]
          mci_patients: 33             // [cite: 58]
        },
        reference_standard: "Diagnosis was conferred by a neurologist / neuropsychological test battery" // 
      },
      diagnostic_performance: {
        game_metrics_used: "EEG signal, 3 VST tasks score, game duration" // 
      }
    },
    {
      reference_id: "Boz et al., 2020",
      validation_quality: {
        study_type: "Cross-sectional", // [cite: 34]
        overall_quality: "High",       // [cite: 64]
        sample_size: {
          total: 89,                   // [cite: 34]
          healthy_controls: 52,        // [cite: 34]
          mci_patients: 37             // [cite: 34]
        },
        reference_standard: "Neuropsychological test battery" // [cite: 34]
      },
      diagnostic_performance: {
        game_metrics_used: "Bought Unlisted & Correct Money & Duration", // [cite: 61]
        sensitivity_percent: 79,       // [cite: 61]
        specificity_percent: 86        // [cite: 61]
      }
    },
    {
      reference_id: "Zygouris et al., 2020",
      validation_quality: {
        study_type: "Cross-sectional", // [cite: 34]
        overall_quality: "High",       // [cite: 64]
        sample_size: {
          total: 95,                   // [cite: 34]
          healthy_controls: 48,        // [cite: 34]
          mci_patients: 47             // [cite: 34]
        },
        reference_standard: "Petersen criteria" // [cite: 34]
      },
      diagnostic_performance: {
        game_metrics_used: "All Virtual Supermarket variables", // [cite: 61]
        sensitivity_percent: 76.27,    // [cite: 61]
        specificity_percent: 91.43     // [cite: 61]
      }
    },
    {
      reference_id: "Yan et al., 2021",
      validation_quality: {
        study_type: "Cross-sectional", // [cite: 35]
        overall_quality: "Moderate",   // [cite: 64]
        sample_size: {
          total: 126,                  // [cite: 35]
          healthy_controls: 64,        // [cite: 35]
          mci_patients: 62             // [cite: 35]
        },
        reference_standard: "Petersen criteria" // [cite: 35]
      },
      diagnostic_performance: {
        game_metrics_used: "Score in the Virtual Supermarket Program", // [cite: 61]
        sensitivity_percent: 85.9,     // [cite: 61]
        specificity_percent: 79.0,     // [cite: 61]
        auc: 0.870                     // [cite: 61]
      }
    }
  ]
};