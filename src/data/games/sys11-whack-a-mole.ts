import { MCIGameArtifact } from '@/types';

export const whackAMoleArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys11-whack-a-mole", // 使用系统编号以保持与临床数据的一致性
    game_name: "whack-a-mole", // 基于经典嘉年华游戏的打地鼠 [cite: 71]
    interaction_modality: [
      "Touchscreen" // 来源: RQ1ver3.csv -> Interaction modality 编码为 2 
    ],
    media_documentation: {
      text_description: "Based on existing game, provided textual description and screenshots.", // 来源: RQ1ver3.csv -> 编码为 A, 1, 2 
      screenshots: ["/whack-a-mole-1.png", "/whack-a-mole-2.png"] // 包含截图 (对应编码 2) 
    },
    audio_information: {
      has_background_music: false,   // 来源: RQ1ver3.csv -> Audio content 编码为 0 
      has_audio_feedback: false,     // 
      has_audio_instruction: false   // 
    }
  },
  
  gameplay_info: {
    genre: "Casual Games",           // 来源: Overview.csv -> Game type 归类为 Casual game 
    sub_genre: "Digital Versions of Analog Games" // 来源: RQ3ver2.csv -> 改编自经典的线下嘉年华游戏 [cite: 71]
  },

  formal_game_design: {
    design_paradigm: "Paradigm I",   // 来源: RQ3ver2.csv -> Game Origin = 1 (Take an existing game) [cite: 71]
    report: {
      // 来源: RQ2ver3.csv -> Paper 5 奇数列评分 (报告完整度) [cite: 68]
      rules: 1,       // [cite: 68]
      procedures: 0,  // [cite: 68]
      objectives: 1,  // [cite: 68]
      conflict: 1,    // [cite: 68]
      boundaries: 0,  // [cite: 68]
      resources: 1,   // [cite: 68]
      outcomes: 0     // [cite: 68]
    },
    depth: {
      // 来源: RQ2ver3.csv -> Paper 5 偶数列评分 (设计深度) [cite: 68]
      rules: 1,       // [cite: 68]
      procedures: 1,  // [cite: 68]
      objectives: 1,  // [cite: 68]
      conflict: 1,    // [cite: 68]
      boundaries: 1,  // [cite: 68]
      resources: 1,   // [cite: 68]
      outcomes: 1     // [cite: 68]
    }
  },

  user_experience: {
    older_adults_role: "User",       // 来源: RQ4.csv -> 明确标记为 Users，并在实验室进行了可用性测试 [cite: 98]
    evaluations: {}                  // 来源: RQ4.csv 备注指出该可用性研究不侧重于用户体验量表，RQ5ver3.csv 中也无该游戏数据 [cite: 100, 108]
  },

  cognitive_assessment: {
    assessed_functions: [
      "Executive functions"          // 来源: Overview.csv -> Matched MoCA domains: executive function ( inhibitory executive function) 
    ]
  },

  clinical_studies: [
    {
      reference_id: "Tong et al., 2014/2016", 
      validation_quality: {
        study_type: "Cross-sectional", // 来源: Overview.csv -> 记录为 twice, compared performance 
        overall_quality: "Moderate",   // 来源: Quality assessment.csv -> System 11 总分为 7 分，属于中等(Medium/Moderate) [cite: 63, 64]
        sample_size: {
          total: 146                   // 来源: Demographics.csv -> System 11 的受试者总数为 146 [cite: 53]
        }
      },
      diagnostic_performance: {
        game_metrics_used: "reaction time, accuracy" // 来源: Overview.csv -> Game data used for evaluation 
        // 无 Sensitivity, Specificity, AUC 数据 [cite: 60]
      }
    }
  ]
};