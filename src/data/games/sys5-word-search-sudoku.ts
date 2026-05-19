import { MCIGameArtifact } from '@/types';

export const wordSearchSudokuArtifact: MCIGameArtifact = {
  basic_info: {
    id: "sys5-word-search-sudoku", // 对应临床数据表中的 System 5
    game_name: "Word Search and Sudoku (CWG & CSG)", 
    interaction_modality: [
      "Keyboard/Mouse" // 来源: RQ1ver3.csv -> Interaction modality 编码为 1
    ],
    media_documentation: {
      text_description: "Based on existing game, provided textual description and screenshots.", // 来源: RQ1ver3.csv -> 编码为 A, 1, 2
      screenshots: [] // 包含截图 (对应编码 2)
    },
    audio_information: {
      has_background_music: false,   // 来源: RQ1ver3.csv -> Audio content 编码全为 0
      has_audio_feedback: false,     //
      has_audio_instruction: false   //
    }
  },
  
  gameplay_info: {
    genre: "Casual Games",           // 来源: Overview.csv -> Game type 归类为 Casual game
    sub_genre: "Digital Versions of Analog Games" // 来源: RQ3ver2.csv -> 改编自经典的填字游戏和数独
  },

  formal_game_design: {
    design_paradigm: "Paradigm I",   // 来源: RQ3ver2.csv -> Game Origin = 1 (Take an existing game)
    report: {
      // 来源: RQ2ver3.csv -> Paper 7 奇数列评分 (报告完整度)
      rules: 0,       
      procedures: 0,  
      objectives: 0,  
      conflict: 0,    
      boundaries: 0,  
      resources: 0,   
      outcomes: 0     
    },
    depth: {
      // 来源: RQ2ver3.csv -> Paper 7 偶数列评分 (设计深度)
      rules: 1,       
      procedures: 2,  // 流程设计较为复杂(Complex)，达到 2 分
      objectives: 1,  
      conflict: 2,    // 冲突设计较为复杂(Complex)，达到 2 分
      boundaries: 1,  
      resources: 1,   
      outcomes: 1     
    }
  },

  user_experience: {
    older_adults_role: "User",       // 来源: RQ4.csv -> 老年人角色标记为 Users (Usability by data collected)
    evaluations: {}                  // 来源: RQ5ver3.csv 中无该游戏的定性或定量反馈数据
  },

  cognitive_assessment: {
    assessed_functions: []           // 来源: Overview.csv -> Matched MoCA domains 标记为 "/" (未明确映射)
  },

  clinical_studies: [
    {
      reference_id: "Wallace et al., 2014", 
      validation_quality: {
        study_type: "Unspecified",   // 来源: Overview.csv -> Evaluation study design 为空/No
        overall_quality: "Unrated",  // 来源: Quality assessment.csv 中无 System 5 的评分记录
        sample_size: {}              // 来源: Demographics.csv 中无 System 5 的受试者记录
      },
      diagnostic_performance: {
        game_metrics_used: "Play Time per game in minutes, Number of words found per game, Number of Words found per minute (Word Rate), CSG - Game completion time in minutes, Number of Errors per minute" // 来源: Overview.csv
      }
    }
  ]
};