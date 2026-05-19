import { MCIGameArtifact } from '@/types';

export const episodixArtifact: MCIGameArtifact = {
    basic_info: {
        id: "sys20-episodix",
        game_name: "Episodix",
        interaction_modality: [
            "Keyboard/Mouse", // 来源: RQ1ver3.csv -> 编码 1
            "Touchscreen",    // 来源: RQ1ver3.csv -> 编码 2
            "Joysticks"       // 来源: RQ1ver3.csv -> 编码 3
        ],
        media_documentation: {
            text_description: "Provided textual description only.", // 来源: RQ1ver3.csv -> 编码为 1 (无截图)
            screenshots: ["/episodix.png"]
        },
        audio_information: {
            has_background_music: false,
            has_audio_feedback: false,
            has_audio_instruction: true    // 来源: RQ1ver3.csv -> Audio content 编码为 3 (Audio instructions during the gameplay)
        }
    },

    gameplay_info: {
        genre: "Casual Games",
        sub_genre: "Minigames"
    },

    formal_game_design: {
        design_paradigm: "Paradigm II",  // 旨在将传统认知测试数字化/游戏化
        report: {
            // 来源: RQ2ver3.csv -> Paper 15 奇数列评分
            rules: 1,
            procedures: 0,
            objectives: 1,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        },
        depth: {
            // 来源: RQ2ver3.csv -> Paper 15 偶数列评分
            rules: 1,
            procedures: 0,
            objectives: 1,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        }
    },

    user_experience: {
        older_adults_role: "Not involved", // 早期原型阶段通常缺乏系统性的老年人 UX 报告
        evaluations: {}
    },

    cognitive_assessment: {
        assessed_functions: [
            "Short-term memory"            // Episodix 的核心目标是评估情景记忆 (Episodic memory)
        ]
    },

    clinical_studies: [
        {
            reference_id: "Valladares-Rodriguez et al., 2018", // 仅提取 2018 年关于 Episodix 的早期文献
            validation_quality: {
                study_type: "Cross-sectional",
                overall_quality: "Moderate",   // 来源: Quality assessment.csv -> 2018年这篇得分为 10 分
                sample_size: {
                    // 早期文献的样本量较小或在 Demographics 中未详细列出 2018 年的独立对照数据
                },
                reference_standard: "Comprehensive clinical diagnosis"
            },
            diagnostic_performance: {
                // 在 Diagnosis performance 表中，仅记录了后续 Panoramix (2019, 2022) 的数据，未记录 2018 年 Episodix 的敏感度/特异度
            }
        }
    ]
};