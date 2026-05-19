import { MCIGameArtifact } from '@/types';

export const tetrisFruitNinjaArtifact: MCIGameArtifact = {
  basic_info: {
    id: 'sys39-tetris-fruitninja',
    game_name: 'Tetris, Fruit Ninja and Candy Crush Saga',
    interaction_modality: ['Touchscreen'],
    media_documentation: {
      text_description: 'Three famous commercial games. Tetris, Fruit Ninja and Candy Crush Saga',
      screenshots: ["/tetris-fruitninja-1.png", "/tetris-fruitninja-2.png"]
    },
    audio_information: {
      has_background_music: false,
      has_audio_feedback: false,
      has_audio_instruction: false
    }
  },
  gameplay_info: {
    genre: 'Casual Games',
    sub_genre: 'Commercial Video Games'
  },
  formal_game_design: {
    design_paradigm: 'Paradigm I',
    report: {
      rules: 0,
      procedures: 0,
      objectives: 0,
      conflict: 2,
      boundaries: 1,
      resources: 1,
      outcomes: 0
},
    depth: {
      rules: 1,
      procedures: 1,
      objectives: 0,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 1
}
  },
  user_experience: {
    older_adults_role: 'Not involved',
    evaluations: {}
  },
  cognitive_assessment: {
    assessed_functions: ['Short-term memory', 'Visuospatial abilities', 'Executive functions', 'Attention, concentration, and working memory']
  },
  clinical_studies: [
    {
      reference_id: 'Intarasirisawat et al., 2019',
      validation_quality: {
        study_type: 'Cross-sectional',
        overall_quality: 'Low',
        sample_size: {
          total: 21,
          healthy_controls: 21
        },
        reference_standard: 'TMT-A and TMT-B, Addenbrooke’s Cognitive Examination-III'
      },
      
    }
  ]
};
