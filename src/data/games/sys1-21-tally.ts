import { MCIGameArtifact } from '@/types';

export const twentyOneTallyArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys1-21-tally",
    game_name: "21 Tally (Two dimensions blackJack)",
    interaction_modality: [
      "Keyboard/Mouse" 
    ],
    media_documentation: {
      text_description: "Based on existing game, provided textual description and screenshots.", 
      screenshots: ["/21Tally.png"] 
    },
    audio_information: {
      has_background_music: false,   
      has_audio_feedback: false,     
      has_audio_instruction: false   
    }
  },
  
  gameplay_info: {
    genre: "Casual Games",           
    sub_genre: "Card Games"          
  },

  formal_game_design: {
    design_paradigm: "Paradigm I",   
    report: {
      rules: 2,       
      procedures: 1,  
      objectives: 1,  
      conflict: 1,    
      boundaries: 0,  
      resources: 1,   
      outcomes: 0     
    },
    depth: {
      rules: 2,       
      procedures: 1,  
      objectives: 1,  
      conflict: 1,    
      boundaries: 1,  
      resources: 1,   
      outcomes: 1     
    }
  },

  user_experience: {
    older_adults_role: "Not involved", 
    evaluations: {}                  
  },

  cognitive_assessment: {
    assessed_functions: [
      "Attention, concentration, and working memory" 
    ]
  },

  clinical_studies: [
    {
      reference_id: "McKanna et al., 2009", 
      validation_quality: {
        study_type: "Unspecified",   
        overall_quality: "Low",      
        sample_size: {
          total: 30                  
        }
      },
      diagnostic_performance: {
        game_metrics_used: "Cards placement", 
      }
    }
  ]
};