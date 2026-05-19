import { MCIGameArtifact } from '@/types';

export const kinectMmseArtifact: MCIGameArtifact = {
    basic_info: {
        id: "sys18-kinect-mmse",
        game_name: "Game-based Cognitive Measures System (A Kinect-based game)",
        interaction_modality: [
            "Other" // 来源: RQ1ver3.csv -> 编码为 5 (Kinect 体感交互)
        ],
        media_documentation: {
            text_description: "Provided textual description and screenshots.", // 来源: RQ1ver3.csv -> 编码为 1, 2
            screenshots: ["/kinect-mmse-1.png", "/kinect-mmse-2.png", "/kinect-mmse-3.png", "/kinect-mmse-4.png", "/kinect-mmse-5.png", "/kinect-mmse-6.png"]
        },
        audio_information: {
            has_background_music: false,   // 来源: RQ1ver3.csv -> Audio content
            has_audio_feedback: false,     //
            has_audio_instruction: true    // 来源: RQ1ver3.csv -> 编码为 3 (Audio instructions during the gameplay)
        }
    },

    gameplay_info: {
        genre: "Full-Body Movement Games", // 来源: Overview.csv 标记为 Multisensory game 且使用 Kinect 身体移动控制
        sub_genre: "Digital Versions of Analog Games" // 核心是将纸笔测试 (MMSE) 数字化
    },

    formal_game_design: {
        design_paradigm: "Paradigm II",  // 来源: Overview.csv -> 方法论为 Mimic the testing mechanics of a paper-based test (MMSE)
        report: {
            // 来源: RQ2ver3.csv -> Paper 14 奇数列评分 (报告完整度)
            rules: 1,
            procedures: 1,
            objectives: 1,
            conflict: 0,
            boundaries: 0,
            resources: 0,
            outcomes: 0
        },
        depth: {
            // 来源: RQ2ver3.csv -> Paper 14 偶数列评分 (设计深度)
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
        older_adults_role: "User", // 来源: RQ4.csv -> 明确老年人参与了可用性测试 (Users)
        evaluations: {
            usability: {
                instruments: ["SUS", "Observation record table"], // 来源: RQ4.csv 和 RQ5ver3.csv
                results_summary: "10 Participants involved. Two felt physical uncomfortable during the experiment and quitted. Two felt uncomfortable after finishing the experiment and quitted. 6 participants reported SUS = 51.3." // 来源: RQ5ver3.csv，反馈了显著的身体不适问题
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
            reference_id: "Unknown (System 18)",
            validation_quality: {
                study_type: "Unspecified",   // 来源: Overview.csv 中 Evaluation study design 为 No
                overall_quality: "Unrated",  // 来源: Quality assessment.csv 中缺失该系统的评分
                sample_size: {
                    total: 10                  // 来源: 结合 RQ5ver3.csv 中的实验记录 (10 Participants involved)
                }
            },
            diagnostic_performance: {
                // 无临床区分度、敏感度或特异度数据
            }
        }
    ]
};
