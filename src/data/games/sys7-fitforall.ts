import { MCIGameArtifact } from '@/types';

export const fitForAllArtifact: MCIGameArtifact = {
    basic_info: {
        id: "sys7-fitforall",
        game_name: "FitForAll (FFA) & HRMG", // 包含了高分辨率监控游戏(HRMG)
        interaction_modality: [
            "Other" // 来源: RQ1ver3.csv -> 编码为 5 (使用 Wii Balance Board controllers 平衡板)
        ],
        media_documentation: {
            text_description: "Provided textual description only.", // 来源: RQ1ver3.csv -> 编码为 1 (仅文字说明)
        },
        audio_information: {
            has_background_music: false,   // 来源: RQ1ver3.csv -> Audio content 编码全为 0
            has_audio_feedback: false,     //
            has_audio_instruction: false   //
        }
    },

    gameplay_info: {
        genre: "Full-Body Movement Games", // 来源: Overview.csv 标记为 Multisensory game 且通过体感(Wii平衡板)游玩
        sub_genre: "Minigames"             // 包含了滑雪、高尔夫等多个运动小游戏
    },

    formal_game_design: {
        design_paradigm: "Other",        // 来源: Overview.csv 中设计方法论为 "Other" / 最初为身体锻炼设计，后跨界用于认知评估
        report: {
            // 来源: RQ2ver3.csv -> Paper 27 奇数列评分
            rules: 0,
            procedures: 1,
            objectives: 1,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        },
        depth: {
            // 来源: RQ2ver3.csv -> Paper 27 偶数列评分
            rules: 0,
            procedures: 1,
            objectives: 1,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        }
    },

    user_experience: {
        older_adults_role: "Not involved", // 来源: RQ4.csv -> 明确标记为 Not involved
        evaluations: {}                  // 来源: RQ5ver3.csv 中无该游戏的反馈量表数据
    },

    cognitive_assessment: {
        assessed_functions: [
            "Short-term memory",                          // 
            "Visuospatial abilities",                     // 
            "Executive functions",                        // 
            "Attention, concentration, and working memory"// 来源: Overview.csv -> 映射到 MoCA 为 "all domains except language and orientation to time"
        ]
    },

    clinical_studies: [
        {
            reference_id: "Konstantinidis et al., 2021",
            validation_quality: {
                study_type: "Unspecified",   // 来源: Overview.csv 中无评估设计记录
                overall_quality: "High",     // 来源: Quality assessment.csv -> System 7 获得满分 12 分，质量极高 (High)
                sample_size: {
                    total: 102,                // 来源: Demographics.csv 
                    healthy_controls: 38,      // 来源: n=38 (其中30名为女性)
                    mci_patients: 64           // 来源: n=64 (其中54名为女性)
                },
                reference_standard: "Unspecified"
            },
            diagnostic_performance: {
                game_metrics_used: "Evaluator ranked Age, HRMG MeanTotal, HRMG InterceptTotal, HRMG MeanLevel1, HRMG MeanLevel3, HRMG MeanLevel4, and HeartRateSlopelevel3", // 来源: Diagnosis performance.csv
                auc: 0.774                     // 来源: Diagnosis performance.csv -> 提供了一个 0.774 的 AUC 曲线下面积
            }
        }
    ]
};