import { MCIGameArtifact } from '@/types';

export const nostalgicGameArtifact: MCIGameArtifact = {
    basic_info: {
        id: "sys16-nostalgic-game",
        game_name: "Individual Virtual Nostalgic Game",
        interaction_modality: [
            "Touchscreen", // 来源: Overview.csv 中描述为 "Mobile tablet game"
            "Other"        // 来源: RQ1ver3.csv -> 编码为 5 (Kinect)
        ],
        media_documentation: {
            text_description: "Provided textual description and screenshots.", // 来源: RQ1ver3.csv -> 编码为 1, 2
            screenshots: ["/nostalgic-game-1.png"]
        },
        audio_information: {
            has_background_music: false,   // 来源: RQ1ver3.csv -> Audio content 编码全为 0
            has_audio_feedback: false,     //
            has_audio_instruction: false   //
        }
    },

    gameplay_info: {
        genre: "Casual Games",           // 来源: Overview.csv -> Game type: Casual game
        sub_genre: "Nostalgic Quiz Game" // 来源: 基于 Overview 的游戏描述 "gamify on quiz of certain scene subjects are familiar with" 自定义
    },

    formal_game_design: {
        design_paradigm: "Paradigm II",  // 来源: Overview.csv -> 方法论为 Mimic the testing mechanics of a paper-based test
        report: {
            // 来源: RQ2ver3.csv -> Paper 13 奇数列评分 (报告完整度)
            rules: 1,
            procedures: 1,
            objectives: 1,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        },
        depth: {
            // 来源: RQ2ver3.csv -> Paper 13 偶数列评分 (设计深度)
            rules: 1,
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
        evaluations: {}                  // 来源: RQ5ver3.csv 中无此论文的反馈数据
    },

    cognitive_assessment: {
        assessed_functions: []           // 来源: Overview.csv -> Matched MoCA domains 标记为 "/"
    },

    clinical_studies: [
        {
            reference_id: "Hou et al., 2017",
            validation_quality: {
                study_type: "Cross-sectional", // 来源: Overview.csv
                overall_quality: "Moderate",   // 来源: Quality assessment.csv -> System 16 总分为 9 分，属于中等(Medium)梯队
                sample_size: {
                    total: 59,                 // 来源: Demographics.csv 和 Overview.csv
                    healthy_controls: 27,      // 来源: Overview.csv -> "27 normal"
                    mci_patients: 17,          // 来源: Overview.csv -> "17 MCI"
                    ad_patients: 15            // 来源: Overview.csv -> "15 moderate to severe cognitive dysfunction"
                },
                reference_standard: "MMSE, MoCA" // 来源: Overview.csv
            },
            diagnostic_performance: {
                game_metrics_used: "Score",    // 来源: Overview.csv -> Game data used for evaluation
                sensitivity_percent: 88.0,     // 来源: Diagnosis performance.csv -> 基于 MoCA cutoff (15.5分) 的敏感度
                specificity_percent: 77.8      // 来源: Diagnosis performance.csv -> 基于 MoCA cutoff 的特异度
                // Overview.csv 中还报告了 Accuracy 为 0.627(MMSE) / 0.846(MoCA)
            }
        }
    ]
};