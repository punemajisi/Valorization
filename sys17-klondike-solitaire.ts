export const sys17klondike = {
  "basic_info": {
    "id": "sys17-klondike-solitaire",
    "game_name": "Klondike Solitaire",
    "interaction_modality": [
      "Touchscreen"
    ],
    "media_documentation": {
      "text_description": "Textual description available in paper",
      "screenshots": [
        "Screenshots available in paper"
      ]
    },
    "audio_information": {
      "has_background_music": false,
      "has_audio_feedback": false,
      "has_audio_instruction": false
    }
  },
  "gameplay_info": {
    "genre": "Casual Games",
    "sub_genre": "Card Games"
  },
  "formal_game_design": {
    "design_paradigm": "Paradigm I",
    "report": {
      "rules": 1,
      "procedures": 0,
      "objectives": 2,
      "conflict": 0,
      "boundaries": 0,
      "resources": 0,
      "outcomes": 0
    },
    "depth": {
      "rules": 2,
      "procedures": 1,
      "objectives": 2,
      "conflict": 2,
      "boundaries": 1,
      "resources": 0,
      "outcomes": 1
    }
  },
  "user_experience": {
    "older_adults_role": "Not involved",
    "evaluations": {}
  },
  "cognitive_assessment": {
    "assessed_functions": [
      "Executive functions",
      "Short-term memory"
    ]
  },
  "clinical_studies": [
    {
      "reference_id": "Gielis et al., 2021",
      "validation_quality": {
        "study_type": "Cross-sectional",
        "overall_quality": "High",
        "sample_size": {
          "total": 46,
          "healthy_controls": 23,
          "mci_patients": 23
        },
        "reference_standard": "Comprehensive diagnosis"
      },
      "diagnostic_performance": {
        "game_metrics_used": "Nu-Support Vector classifier using digital biomarkers of cognitive performance in Klondike Solitaire",
        "sensitivity_percent": 77.8,
        "specificity_percent": 88.9,
        "auc": 0.90
      }
    }
  ]
}