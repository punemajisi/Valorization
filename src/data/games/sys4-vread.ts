import { MCIGameArtifact } from '@/types';

export const vreadArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys4-vread",
    game_name: "VREAD: A Virtual Simulation to Investigate Cognitive Function in the Elderly", // [cite: 3]
    interaction_modality: [
      "Keyboard/Mouse" // 来源: RQ1ver3，Interaction modality 编码为 1 [cite: 65, 66]
    ],
    media_documentation: {
      text_description: "Provided textual description and screenshots.", // 来源: RQ1ver3，Artefact descriptions 编码为 1, 2 [cite: 65, 66]
      screenshots: ["/Vread-1.png", "/Vread-2.png"] 
    },
    audio_information: {
      has_background_music: false,   // 来源: RQ1ver3 均未提及音频 [cite: 66]
      has_audio_feedback: false,     // [cite: 66]
      has_audio_instruction: false   // [cite: 66]
    }
  },
  
  gameplay_info: {
    genre: "Simulation Games",       // 来源: Overview，归类为 Simulation game [cite: 4]
    sub_genre: "Wayfinding"          // 来源: Overview，具体为 Simulation game - pathfinding [cite: 4]
  },

  formal_game_design: {
    design_paradigm: "Paradigm III", // 来源: Overview，方法论为 Replicate real-life situations [cite: 4]
    report: {
      // 来源: RQ2ver3，此游戏在正式游戏设计元素的报告度评分全为 0 
      rules: 0,
      procedures: 0,
      objectives: 0,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
    },
    depth: {
      // 来源: RQ2ver3，此游戏在正式游戏设计元素的设计深度评分全为 0 
      rules: 0,
      procedures: 0,
      objectives: 0,
      conflict: 0,
      boundaries: 0,
      resources: 0,
      outcomes: 0
    }
  },

  user_experience: {
    older_adults_role: "Not involved", // 来源: RQ4 明确指出 Not involved [cite: 97]
    evaluations: {}                    // 来源: RQ5ver3 中无该游戏相关的测评数据
  },

  cognitive_assessment: {
    assessed_functions: []             // 来源: Overview 中 Shamsuddin 这篇论文未明确映射 MoCA domain [cite: 4]
  },

  clinical_studies: [
    {
      reference_id: "Shamsuddin et al., 2012", // [cite: 53]
      validation_quality: {
        study_type: "Cross-sectional", // 来源: Overview 记录为 Cross-sectional [cite: 4]
        overall_quality: "Moderate",   // 来源: Quality assessment 得分为 8，属于中等(Medium/Moderate)区间 [cite: 63, 64]
        sample_size: {
          total: 31                    // 来源: Demographics 记录总人数为 31 [cite: 53]
        }
      },
      diagnostic_performance: {
        // 来源: Diagnosis performance 表格 
        game_metrics_used: "Correct path, incorrect path, correct sequences, incorrect sequences, overall score and time", // 
        sensitivity_percent: 75,       // 
        specificity_percent: 96        // 
      }
    }
  ]
};