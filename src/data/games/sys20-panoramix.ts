import { MCIGameArtifact } from '@/types';

export const panoramixArtifact: MCIGameArtifact = {
    basic_info: {
        id: "sys20-panoramix",
        game_name: "Panoramix (including Episodix)",
        interaction_modality: [
            "Touchscreen" // 来源: RQ1ver3.csv -> 编码为 2 (基于平板/触控屏)
        ],
        media_documentation: {
            text_description: "Provided screenshots.", // 来源: RQ1ver3.csv -> 编码为 2
            screenshots: ["/panoramix.png"]
        },
        audio_information: {
            has_background_music: false,   // 来源: RQ1ver3.csv -> Paper 25 Audio content 全为 0
            has_audio_feedback: false,     //
            has_audio_instruction: false   // 注: 尽管其前身 Episodix 包含语音，但在 Paper 25 关于 Panoramix 的表格中未记录
        }
    },

    gameplay_info: {
        genre: "Simulation Games",       // 来源: Overview.csv -> 归类为 Simulation game
        sub_genre: "Other Activities of Daily Life" // 该 Battery 融合了多项日常任务模拟 (如购物记忆等)
    },

    formal_game_design: {
        design_paradigm: "Paradigm III", // 来源: Overview.csv -> "Replicate real-life situations"
        report: {
            // 来源: RQ2ver3.csv -> Paper 25 (由于更偏向测试工具集，游戏设计元素评分全为0)
            rules: 0,
            procedures: 0,
            objectives: 0,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        },
        depth: {
            // 来源: RQ2ver3.csv -> Paper 25
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
        older_adults_role: "Tester",     // 来源: RQ4.csv -> 明确提到采用参与式设计 (Participatory Design)，结合了老年人、神经学专家等
        evaluations: {
            usability: {
                instruments: ["TAM model (6 items)"], // 来源: RQ5ver3.csv
                results_summary: "64 participants. TAM model asked before and after experiencing the artefact. Result: Perceived usefulness = 3.2(0.7), perceived ease of use = 3.4(0.3), attitude towards use = 3.6(0.5)." // 来源: RQ5ver3.csv
            }
        }
    },

    cognitive_assessment: {
        assessed_functions: [
            "Short-term memory",                          // 来源: Overview -> memory
            "Visuospatial abilities",                     // 来源: Overview -> visuospatial abilities
            "Executive functions",                        // 来源: Overview -> executive function
            "Attention, concentration, and working memory"// 来源: Overview -> attention
        ]
    },

    clinical_studies: [
        {
            reference_id: "Valladares-Rodriguez et al., 2019",
            validation_quality: {
                study_type: "Cross-sectional",
                overall_quality: "High",       // 来源: Quality assessment.csv -> 总分高达 11 分
                sample_size: {
                    total: 64,                   // 来源: Demographics.csv 备注及 Overview -> 28 HC, 16 MCI, and 20 AD
                    healthy_controls: 28,
                    mci_patients: 16,
                    ad_patients: 20
                },
                reference_standard: "Not Mentioned" // Overview 中未明确给出金标准量表名称
            },
            diagnostic_performance: {
                game_metrics_used: "Random forest using Panoramix battery", // 来源: Diagnosis performance.csv
                sensitivity_percent: 100,      // 夸张的分类精度
                specificity_percent: 100,      //
                auc: 0.98                      // 
            }
        },
        {
            reference_id: "Valladares-Rodriguez et al., 2022",
            validation_quality: {
                study_type: "Cross-sectional",
                overall_quality: "High",       // 来源: Quality assessment.csv -> 同样获得 11 分
                sample_size: {
                    total: 32,                   // 来源: Demographics.csv -> 推算自 10 HC + 14 MCI + 8 AD
                    healthy_controls: 10,
                    mci_patients: 14,
                    ad_patients: 8
                },
                reference_standard: "Not Mentioned"
            },
            diagnostic_performance: {
                game_metrics_used: "Support Vector Machine using Panoramix 2.0 battery", // 升级版采用 SVM
                sensitivity_percent: 100,
                specificity_percent: 100
            }
        }
    ]
};