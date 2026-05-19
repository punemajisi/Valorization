import { MCIGameArtifact } from '@/types';

export const kitchenAndCookingArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys8-kitchen-and-cooking",
    game_name: "Kitchen and Cooking",
    interaction_modality: ["Touchscreen"],
    media_documentation: {
      text_description: "Provided textual description. Mentioned playable game or source code but it is inaccessible."
    },
    audio_information: {
      has_background_music: false,
      has_audio_feedback: false,
      has_audio_instruction: false
    }
  },
  gameplay_info: {
    genre: "Simulation Games",
    sub_genre: "Other Activities of Daily Life"
  },
  formal_game_design: {
    design_paradigm: "Paradigm III",
    report: {
      rules: 0, procedures: 2, objectives: 1, conflict: 0, boundaries: 0, resources: 0, outcomes: 0
    },
    depth: {
      rules: 0, procedures: 1, objectives: 1, conflict: 0, boundaries: 0, resources: 0, outcomes: 0
    }
  },
  user_experience: {
    older_adults_role: "User",
    evaluations: {
      user_experience: {
        instruments: ["10cm analogical scale for satisfaction", "PANAS for emotion", "Piper Fatigue Scale"],
        results_summary: "In a four weeks study, questionnaires were collected in first and last week (2 times). All questionnaire results are good, not changed in two tests."
      },
      player_experience: {
        instruments: ["4-item for perceived interst", "24-item for intrinsic and external motivation"],
        results_summary: "All questionnaire results are good, not changed in two tests."
      }
    }
  },
  cognitive_assessment: {
    assessed_functions: ["Executive functions"]
  },
  clinical_studies: [
    {
      reference_id: "Manera et al., 2015",
      validation_quality: {
        study_type: "Longitudinal",
        overall_quality: "Moderate",
        sample_size: {
          total: 21, healthy_controls: 0, mci_patients: 9, ad_patients: 11
        }
      },
      diagnostic_performance: {
        game_metrics_used: "time spent, error"
      }
    }
  ]
};