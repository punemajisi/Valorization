import { MCIGameArtifact } from '@/types';

export const smartkuberArtifact: MCIGameArtifact = {
    basic_info: {
        id: "sys13-smartkuber",
        game_name: "Smartkuber", // 
        interaction_modality: [
            "Other" // 来源: RQ1ver3.csv -> 编码为 5 (AR by a tablet)，同时使用实体方块完成任务 
        ],
        media_documentation: {
            text_description: "Provided textual description and screenshots.", // 来源: RQ1ver3.csv -> 编码为 1, 2 
            screenshots: ["/smart-cube-1.png", "/smartkuber-2.png"]
        },
        audio_information: {
            has_background_music: false,   // 来源: RQ1ver3.csv -> Audio content 编码全为 0 
            has_audio_feedback: false,     // 
            has_audio_instruction: false   // 
        }
    },

    gameplay_info: {
        genre: "Dedicated Interactive Games", // 来源: Overview.csv 将其归类为 Multisensory game，依赖特定硬件交互 
        sub_genre: "Minigames" // 包含多个小任务的合集 [cite: 75]
    },

    formal_game_design: {
        design_paradigm: "Paradigm II", // 来源: Overview.csv -> 方法论为 "Embed already computerized neuropsychological tests" 
        report: {
            // 来源: RQ2ver3.csv -> Paper 11 奇数列评分 (报告完整度) 
            rules: 1,
            procedures: 2,
            objectives: 2,
            conflict: 1,
            boundaries: 0,
            resources: 2,
            outcomes: 0
        },
        depth: {
            // 来源: RQ2ver3.csv -> Paper 11 偶数列评分 (设计深度) 
            rules: 1,
            procedures: 1,
            objectives: 2,
            conflict: 1,
            boundaries: 0,
            resources: 2,
            outcomes: 0
        }
    },

    user_experience: {
        older_adults_role: "Tester", // 来源: RQ4.csv -> 明确老年人作为 "game testers" 参与 [cite: 100, 101]
        evaluations: {
            player_experience: {
                instruments: ["iGEQ"], // 来源: RQ5ver3.csv -> In-Game Experience Questionnaire [cite: 111]
                results_summary: "2 times In-Game Experience Questionnaire (iGEQ). No number result for iGEQ. Player behaviors: Number of sessions played." // 来源: RQ5ver3.csv [cite: 110, 111]
            }
        }
    },

    cognitive_assessment: {
        assessed_functions: [
            "Short-term memory",                          // 
            "Visuospatial abilities",                     // 
            "Executive functions",                        // 
            "Attention, concentration, and working memory", // 
            "Language",                                   // 
            "Orientation to time and place"               // 来源: Overview.csv 映射到 MoCA 的 "all domains" 
        ]
    },

    clinical_studies: [
        {
            reference_id: "Boletsis et al., 2016", // [cite: 53]
            validation_quality: {
                study_type: "Longitudinal",  // 来源: Overview.csv -> "6 week" 的长期研究 
                overall_quality: "Low",      // 来源: Quality assessment.csv -> System 13 总分仅为 4 分，属于 Low 
                sample_size: {
                    total: 13,                 // 
                    healthy_controls: 13       // 来源: Overview.csv 提到 "All cognitively healthy" 
                },
                reference_standard: "MoCA"   // 
            },
            diagnostic_performance: {
                game_metrics_used: "Scores in each tasks (related to time)" // 
            }
        }
    ]
};