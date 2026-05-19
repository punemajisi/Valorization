import { MCIGameArtifact } from '@/types';

export const freecellArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys1-freecell",
    game_name: "Freecell (Variation of Free Cell)",
    interaction_modality: [
      "Keyboard/Mouse" // 来源: RQ1 中 Interaction modality = 1 [cite: 65, 66]
    ],
    media_documentation: {
      text_description: "Based on existing game, provided textual description only.", // 来源: RQ1 中 Artefact descriptions = A,1 [cite: 65, 66]
    },
    audio_information: {
      has_background_music: false,   // 来源: RQ1 中均未提及 (=0) [cite: 65, 66]
      has_audio_feedback: false,
      has_audio_instruction: false
    }
  },
  
  gameplay_info: {
    genre: "Casual Games",           // 来源: Overview - Game type 
    sub_genre: "Commercial Video Games" // 推断: 属于 Take an existing game 
  },

  formal_game_design: {
    design_paradigm: "Paradigm I",   // 推断: 基于现有商业游戏改造 (Take an existing game) 
    report: {
      // 来源: RQ2 中前一个维度的评分全为 0 [cite: 68]
      rules: 0,
      procedures: 0,
      objectives: 0,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
    },
    depth: {
      // 来源: RQ2 中后一个维度的评分 [cite: 68]
      rules: 2,
      procedures: 2,
      objectives: 2,
      conflict: 2,
      boundaries: 1,
      resources: 1,
      outcomes: 1
    }
  },

  user_experience: {
    older_adults_role: "Informant",  // 来源: RQ4 - "we conducted focus groups with older computer users to provide us with necessary background..." [cite: 96]
    evaluations: {}                  // 来源: RQ5 中没有该系统的定量/定性反馈数据 [cite: 108]
  },

  cognitive_assessment: {
    assessed_functions: []           // 来源: Overview 中未提及具体映射的 MoCA 领域 
  },

  clinical_studies: [
    {
      reference_id: "Jimison et al., 2004", // [cite: 53]
      validation_quality: {
        study_type: "Unspecified",   // Overview 中没有明确 Evaluation study design 
        overall_quality: "Low",      // 来源: Quality assessment 中评分为 6，属于 12 low 梯队 [cite: 63, 64]
        sample_size: {
          total: 9,                  // 来源: Demographics - Control n=9 
          healthy_controls: 9        // 
        }
      },
      diagnostic_performance: {
        game_metrics_used: "Average user efficiency, outcome, time to completion of session", // 来源: Overview 
        // 注：未提供敏感度 (Sensitivity)、特异度 (Specificity) 和 AUC 数据 
      }
    }
  ]
};