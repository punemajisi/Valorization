// ==========================================
// 模块 1: 基础信息与多媒体 (Basic Information)
// ==========================================
export interface MediaDocumentation {
  text_description?: string;
  screenshots?: string[];
  video_url?: string;
  playable_demo_url?: string;
}

export interface AudioInformation {
  has_background_music: boolean; 
  has_audio_feedback: boolean;   
  has_audio_instruction: boolean;
}

export interface BasicInfo {
  id: string; // 数据库主键，用于 App 路由（如 "sys30-virtual-supermarket"）
  game_name: string;
  interaction_modality: Array<
    "Keyboard/Mouse" |
    "Touchscreen" |
    "Joysticks" |
    "Virtual reality" |
    "Other"
  >;
  media_documentation: MediaDocumentation;
  audio_information: AudioInformation;
}

// ==========================================
// 模块 2: 游戏玩法与分类 (Gameplay & Genres)
// ==========================================
export interface GameplayInfo {
  genre: 
    | "Casual Games" 
    | "Simulation Games" 
    | "Full-Body Movement Games" 
    | "Dedicated Interactive Games";

  sub_genre?: 
    | "Card Games" 
    | "Digital Versions of Analog Games" 
    | "Commercial Video Games" 
    | "Minigames"
    | "Shopping" 
    | "Wayfinding" 
    | "Other Activities of Daily Life" 
    | (string & {}); // 保留下拉提示，同时允许自由输入
}

// ==========================================
// 模块 3: 正式游戏设计元素 (Formal Game Design)
// ==========================================
export interface GameElementsScores {
  rules?: 0 | 1 | 2;      
  procedures?: 0 | 1 | 2; 
  objectives?: 0 | 1 | 2; 
  conflict?: 0 | 1 | 2;   
  boundaries?: 0 | 1 | 2; 
  resources?: 0 | 1 | 2;  
  outcomes?: 0 | 1 | 2;   
}

export interface FormalGameDesign {
  design_paradigm: "Paradigm I" | "Paradigm II" | "Paradigm III" | "Unspecified" | "Other";
  report: GameElementsScores; // 维度一：报告完整度
  depth: GameElementsScores;  // 维度二：设计深度
}

// ==========================================
// 模块 4: 老年人参与度与用户体验 (User Experience)
// ==========================================
export interface EvaluationDetails {
  instruments?: string[];   
  results_summary?: string; 
}

export interface UserExperience {
  older_adults_role: "Design partner" | "Informant" | "Tester" | "User" | "Not involved";
  evaluations: {
    accessibility?: EvaluationDetails;   
    usability?: EvaluationDetails;       
    user_experience?: EvaluationDetails;
    player_experience?: EvaluationDetails;
  };
}

// ==========================================
// 模块 5: 认知功能评估 (Cognitive Assessment)
// ==========================================
export type MoCADomain = 
  | "Short-term memory" 
  | "Visuospatial abilities" 
  | "Executive functions" 
  | "Attention, concentration, and working memory" 
  | "Language" 
  | "Orientation to time and place"; 

export interface CognitiveAssessment {
  assessed_functions: MoCADomain[]; 
}

// ==========================================
// 模块 6: 临床研究与诊断性能 (Clinical Studies)
// ==========================================
export interface SampleSize {
  total?: number;             
  healthy_controls?: number;  
  mci_patients?: number;      
  ad_patients?: number;       
}

export interface ValidationQuality {
  study_type: "Cross-sectional" | "Longitudinal" | "Intraperson" | (string & {}); 
  overall_quality: "Low" | "Moderate" | "High" | "Unrated"; 
  sample_size: SampleSize;
  reference_standard?: string; 
}

export interface DiagnosticPerformance {
  game_metrics_used?: string; 
  sensitivity_percent?: number; 
  specificity_percent?: number; 
  auc?: number;                 
}

export interface ClinicalStudy {
  reference_id: string; // 论文引用标识
  validation_quality: ValidationQuality;
  diagnostic_performance?: DiagnosticPerformance; 
}


// ==========================================
// 终极组装: 单个游戏条目的主接口 (The Master Interface)
// ==========================================
export interface MCIGameArtifact {
  basic_info: BasicInfo;
  gameplay_info: GameplayInfo;
  formal_game_design: FormalGameDesign;
  user_experience: UserExperience;
  cognitive_assessment: CognitiveAssessment;
  
  // 一个游戏可能包含多篇文献的临床研究结果，因此这里是数组
  clinical_studies: ClinicalStudy[]; 
}
