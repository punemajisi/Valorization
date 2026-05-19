import { MCIGameArtifact } from '@/types';

export const rehabCityArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys47-rehabcity", 
    game_name: "RehabCity", 
    interaction_modality: [
      "Joysticks",   
      "Other"        // 来源: RQ1ver3.csv -> 编码为 3 (Joysticks), 并备注了 "colored buttons (arcade controller)"
    ],
    media_documentation: {
      text_description: "Provided textual description and screenshots.", // 来源: RQ1ver3.csv -> 编码为 1, 2
      screenshots: ["/rehabcity.png", "/rehabcity-2.png"] 
    },
    audio_information: {
      has_background_music: false,   
      has_audio_feedback: true,      // 来源: RQ1ver3.csv -> Audio content 编码为 2 (Audio feedback or other sound effects)
      has_audio_instruction: false   
    }
  },
  
  gameplay_info: {
    genre: "Simulation Games",       // 来源: Overview.csv -> Game type 归类为 Simulation game
    sub_genre: "Shopping"            // 来源: Overview.csv -> 包含 supermarket 和 pathfinding, 属于 ADL 模拟
  },

  formal_game_design: {
    design_paradigm: "Paradigm III", // 来源: Overview.csv -> 方法论为 "Replicate real-life situations"
    report: {
      // 来源: RQ2ver3.csv -> Paper 6 奇数列评分 (报告完整度)
      rules: 1,       
      procedures: 1,  
      objectives: 2,  
      conflict: 1,    
      boundaries: 2,  
      resources: 1,   
      outcomes: 1     
    },
    depth: {
      // 来源: RQ2ver3.csv -> Paper 6 偶数列评分 (设计深度)
      rules: 1,       
      procedures: 1,  
      objectives: 2,  
      conflict: 1,    
      boundaries: 2,  
      resources: 1,   
      outcomes: 0     
    }
  },

  user_experience: {
    older_adults_role: "Tester",     // 来源: RQ4.csv -> 明确标记为 Testers，参与了参与式设计(participatory approach)
    evaluations: {
      usability: {
        instruments: ["SUS"],        // 来源: Overview.csv 和 RQ5ver3.csv 均提到了 SUS
        results_summary: "SUS = 77(14.1). Player behaviors: 4-quadrant Gaze heat map: Objective list attracted more attention. Navigation mini map is less used. Both of them are not correlated to performance." // 来源: RQ5ver3.csv
      }
    }
  },

  cognitive_assessment: {
    assessed_functions: [
      "Visuospatial abilities",                      // 来源: Overview.csv -> Matched MoCA domains
      "Executive functions",                         // 来源: Overview.csv -> Matched MoCA domains
      "Attention, concentration, and working memory" // 来源: Overview.csv -> Matched MoCA domains
    ]
  },

  clinical_studies: [
    {
      reference_id: "Vourvopoulos et al., 2014", 
      validation_quality: {
        study_type: "Cross-sectional", // 来源: Overview.csv
        overall_quality: "Low",        // 来源: Quality assessment.csv -> System 47 总分为 6 分，属于 Low 梯队
        sample_size: {
          total: 10                    // 来源: Demographics.csv -> n=10, 全部患有 cognitive defictis
        }
      },
      diagnostic_performance: {
        game_metrics_used: "score, distance, time" // 来源: Overview.csv -> Game data used for evaluation
        // 无明确的 Sensitivity, Specificity, AUC 数据，但报告了与 MMSE 的高相关性 (r = 0.81)
      }
    }
  ]
};