

export default function ReferencesPage() {
  const references = [
    {
      id: "majiDeepLearning2025",
      authors: "Maji, P.K., Acharya, S., Paul, P., Chakraborty, S., & Basu, S.",
      year: 2025,
      title: "Deep Learning Inspired Game-Based Cognitive Assessment for Early Dementia Detection.",
      journal: "Engineering Applications of Artificial Intelligence",
      volume: "142",
      issue: "",
      pages: "109901",
      doi: "10.1016/j.engappai.2024.109901"
    },
    {
      id: "wangEnsembleLearning2024",
      authors: "Wang, Y., Yang, P., Yu, J., Zhang, S., Gong, L., Liu, C., Zhou, W., & Peng, B.",
      year: 2024,
      title: "An Ensemble Learning Algorithm for Cognitive Evaluation by an Immersive Virtual Reality Supermarket.",
      journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
      volume: "32",
      issue: "",
      pages: "3761–3772",
      doi: "10.1109/TNSRE.2024.3470802"
    },
    {
      id: "bhargavaValidation2024",
      authors: "Bhargava, Y., Kottapalli, A., & Baths, V.",
      year: 2024,
      title: "Validation and Comparison of Virtual Reality and 3D Mobile Games for Cognitive Assessment against ACE-III in 82 Young Participants.",
      journal: "Scientific Reports",
      volume: "14",
      issue: "1",
      pages: "23918",
      doi: "10.1038/s41598-024-75065-1"
    },
    {
      id: "colomboDetecting2024",
      authors: "Colombo, G., Minta, K., Grübel, J., Tai, W.L.E., Hölscher, C., & Schinazi, V.R.",
      year: 2024,
      title: "Detecting Cognitive Impairment through an Age-Friendly Serious Game: The Development and Usability of the Spatial Performance Assessment for Cognitive Evaluation (SPACE).",
      journal: "Computers in Human Behavior",
      volume: "160",
      issue: "",
      pages: "108349",
      doi: "10.1016/j.chb.2024.108349"
    },
    {
      id: "danousisEnhancing2024",
      authors: "Danousis, M., & Goumopoulos, C.",
      year: 2024,
      title: "Enhancing Elderly Exergaming with AI Components for Assessing Cognitive Status.",
      journal: "2024 IEEE 8th Forum on Research and Technologies for Society and Industry Innovation (RTSI)",
      volume: "",
      issue: "",
      pages: "184–189",
      doi: "10.1109/RTSI61910.2024.10761475"
    },
    {
      id: "taghaviAugmentedReality2024",
      authors: "Taghavi, M.F., Ghorbani, F., & Delrobaei, M.",
      year: 2024,
      title: "Development of an Augmented-Reality-Based Serious Game: A Cognitive Assessment Study.",
      journal: "IEEE Transactions on Cognitive and Developmental Systems",
      volume: "16",
      issue: "3",
      pages: "1087–1094",
      doi: "10.1109/TCDS.2023.3329807"
    },
    {
      id: "yangMahjongBrain2023",
      authors: "Yang, J., Jiang, R., Ding, H., Au, R., Chen, J., Li, C., & An, N.",
      year: 2023,
      title: "Designing and Evaluating MahjongBrain: A Digital Cognitive Assessment Tool Through Gamification.",
      journal: "Lecture Notes in Computer Science",
      volume: "14055",
      issue: "",
      pages: "264–278",
      doi: "10.1007/978-3-031-48041-6_19"
    },
    {
      id: "lee2023VR",
      authors: "Lee, B., & Lee, T.-H.",
      year: 2023,
      title: "VR and EEG Combined Self-monitoring Platform of Cognitive Care.",
      journal: "Springer Proceedings in Business and Economics",
      volume: "",
      issue: "",
      pages: "253–262",
      doi: "10.1007/978-3-031-25390-4_22"
    },
    {
      id: "itoMinecraft2022",
      authors: "Ito, S., Wira, M., & Thawonmas, R.",
      year: 2022,
      title: "User Friendly Minecraft Mod for Early Detection of Alzheimer's Disease in Young Adults.",
      journal: "2022 IEEE Games, Entertainment, Media Conference (GEM)",
      volume: "",
      issue: "",
      pages: "1–4",
      doi: "10.1109/GEM56474.2022.10017770"
    },
    {
      id: "baharCaregiver2022",
      authors: "Bahar, R., Taki, R., & Yalcın, S.",
      year: 2022,
      title: "Caregiver: An Application for The First Step in Alzheimer's Disease Early Diagnosis.",
      journal: "27th International Conference on Intelligent User Interfaces (IUI '22 Companion)",
      volume: "",
      issue: "",
      pages: "34–37",
      doi: "10.1145/3490100.3516468"
    },
    {
      id: "goumopoulos2021COGNIPLAT",
      authors: "Goumopoulos, C., Skikos, G., Karapapas, C., Frounta, M., & Koumanakos, G.",
      year: 2021,
      title: "Applying Serious Games and Machine Learning for Cognitive Training and Screening: The COGNIPLAT Approach.",
      journal: "25th Pan-Hellenic Conference on Informatics (PCI '21)",
      volume: "",
      issue: "",
      pages: "63–68",
      doi: "10.1145/3503823.3503835"
    },
    {
      id: "mezrarMachineLearning2022",
      authors: "Mezrar, S., & Bendella, F.",
      year: 2022,
      title: "Machine Learning and Serious Game for the Early Diagnosis of Alzheimer's Disease.",
      journal: "Simulation & Gaming",
      volume: "53",
      issue: "4",
      pages: "369–387",
      doi: "10.1177/10468781221106850"
    },
    {
      id: "oliveira2022CogWorldTravel",
      authors: "Oliveira, F.T., Tong, B.W., Garcia, J.A., & Gay, V.C.",
      year: 2022,
      title: "CogWorldTravel: Design of a Game-Based Cognitive Screening Instrument.",
      journal: "Lecture Notes in Computer Science",
      volume: "13476",
      issue: "",
      pages: "125–139",
      doi: "10.1007/978-3-031-15325-9_10"
    },
    {
      id: "gielisDigitalCard2021",
      authors: "Gielis, K., Vanden Abeele, M.-E., De Croon, R., Dierick, P., Ferreira-Brito, F., Van Assche, L., Verbert, K., Tournoy, J., & Vanden Abeele, V.",
      year: 2021,
      title: "Dissecting Digital Card Games to Yield Digital Biomarkers for the Assessment of Mild Cognitive Impairment: Methodological Approach and Exploratory Study.",
      journal: "JMIR Serious Games",
      volume: "9",
      issue: "4",
      pages: "e18359",
      doi: "10.2196/18359"
    },
    {
      id: "konstantinidisExergaming2021",
      authors: "Konstantinidis, E.I., Bamidis, P.D., Billis, A., Kartsidis, P., Petsani, D., & Papageorgiou, S.G.",
      year: 2021,
      title: "Physical Training In-Game Metrics for Cognitive Assessment: Evidence from Extended Trials with the Fitforall Exergaming Platform.",
      journal: "Sensors",
      volume: "21",
      issue: "17",
      pages: "5756",
      doi: "10.3390/s21175756"
    },
    {
      id: "zhang2021SeriousMobile",
      authors: "Zhang, H., Xu, Y., Lin, J., Li, W., & Shen, Z.",
      year: 2021,
      title: "A Serious Mobile Game for Neurodegenerative Diseases Rehabilitation and Risk Estimation.",
      journal: "5th International Conference on Crowd Science and Engineering (ICCSE)",
      volume: "",
      issue: "",
      pages: "103–107",
      doi: "10.1145/3503181.3503198"
    },
    {
      id: "tsaiVirtualSupermarket2021",
      authors: "Tsai, C.-F., Chen, C.-C., Wu, E.H.-K., Chung, C.-R., Huang, C.-Y., Tsai, P.-Y., & Yeh, S.-C.",
      year: 2021,
      title: "A Machine-Learning-Based Assessment Method for Early-Stage Neurocognitive Impairment by an Immersive Virtual Supermarket.",
      journal: "IEEE Transactions on Neural Systems and Rehabilitation Engineering",
      volume: "29",
      issue: "",
      pages: "2124–2132",
      doi: "10.1109/TNSRE.2021.3118918"
    },
    {
      id: "aljumailiWarCAT2019",
      authors: "Aljumaili, M., McLeod, R., & Friesen, M.",
      year: 2019,
      title: "Serious Games and ML for Detecting MCI.",
      journal: "2019 IEEE Global Conference on Signal and Information Processing (GlobalSIP)",
      volume: "",
      issue: "",
      pages: "1–5",
      doi: "10.1109/GlobalSIP45357.2019.8969123"
    },
    {
      id: "chuaVirtualReality2019",
      authors: "Chua, S.I.L., Tan, N.C., Wong, W.T., Allen Jr, J.C., Quah, J.H.M., Malhotra, R., & Østbye, T.",
      year: 2019,
      title: "Virtual Reality for Screening of Cognitive Function in Older Persons: Comparative Study.",
      journal: "Journal of Medical Internet Research",
      volume: "21",
      issue: "8",
      pages: "e14821",
      doi: "10.2196/14821"
    },
    {
      id: "gielisAgeGame2019",
      authors: "Gielis, K., Verbert, K., Tournoy, J., & Vanden Abeele, V.",
      year: 2019,
      title: "Age? It's in the Game: An Exploratory Study on Detection of Cognitive Aging through Card Games.",
      journal: "Proceedings of the Annual Symposium on Computer-Human Interaction in Play (CHI Play '19)",
      volume: "",
      issue: "",
      pages: "651–664",
      doi: "10.1145/3311350.3347193"
    },
    {
      id: "intarasirisawatTouchMotion2019",
      authors: "Intarasirisawat, J., Ang, C.S., Efstratiou, C., Dickens, L.W.F., & Page, R.",
      year: 2019,
      title: "Exploring the Touch and Motion Features in Game-Based Cognitive Assessments.",
      journal: "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
      volume: "3",
      issue: "3",
      pages: "1–25",
      doi: "10.1145/3351245"
    },
    {
      id: "ijazVRSpatial2019",
      authors: "Ijaz, K., Ahmadpour, N., Naismith, S.L., & Calvo, R.A.",
      year: 2019,
      title: "An Immersive Virtual Reality Platform for Assessing Spatial Navigation Memory in Predementia Screening: Feasibility and Usability Study.",
      journal: "JMIR Mental Health",
      volume: "6",
      issue: "9",
      pages: "e13887",
      doi: "10.2196/13887"
    },
    {
      id: "jungRemoteAssessment2019",
      authors: "Jung, H.-T., Daneault, J.-F., Lee, H., Kim, K., Kim, B., Park, S., Ryu, T., Kim, Y., & Lee, S.I.",
      year: 2019,
      title: "Remote Assessment of Cognitive Impairment Level Based on Serious Mobile Game Performance: An Initial Proof of Concept.",
      journal: "IEEE Journal of Biomedical and Health Informatics",
      volume: "23",
      issue: "3",
      pages: "1269–1277",
      doi: "10.1109/JBHI.2019.2893897"
    },
    {
      id: "valladaresTouchscreen2019",
      authors: "Valladares-Rodriguez, S., Fernández-Iglesias, M.J., Anido-Rifón, L., Facal, D., Rivas-Costa, C., & Pérez-Rodríguez, R.",
      year: 2019,
      title: "Touchscreen Games to Detect Cognitive Impairment in Senior Adults: A User-Interaction Pilot Study.",
      journal: "International Journal of Medical Informatics",
      volume: "127",
      issue: "",
      pages: "52–62",
      doi: "10.1016/j.ijmedinf.2019.04.012"
    },
    {
      id: "boletsisSmartkuber2016",
      authors: "Boletsis, C., & McCallum, S.",
      year: 2016,
      title: "Smartkuber: A Serious Game for Cognitive Health Screening of Elderly Players.",
      journal: "Games for Health Journal",
      volume: "5",
      issue: "4",
      pages: "241–251",
      doi: "10.1089/g4h.2015.0107"
    },
    {
      id: "zygourisVirtualSupermarket2015",
      authors: "Zygouris, S., Giakoumis, D., Votis, K., Doumpoulakis, S., Ntovas, K., Segkouli, S., Karagiannidis, C., Tzovaras, D., & Tsolaki, M.",
      year: 2015,
      title: "Can a Virtual Reality Cognitive Training Application Fulfill a Dual Role? Using the Virtual Supermarket as a Screening Tool for Mild Cognitive Impairment.",
      journal: "Journal of Alzheimer's Disease",
      volume: "44",
      issue: "4",
      pages: "1333–1347",
      doi: "10.3233/JAD-141260"
    },
    {
      id: "tostSmartAgeing2015",
      authors: "Tost, D., Von Barnekow, A., Felix, E., Pazzi, S., Puricelli, S., & Bottiroli, S.",
      year: 2015,
      title: "Early Detection of Cognitive Impairments with the Smart Ageing Serious Game.",
      journal: "Communications in Computer and Information Science",
      volume: "515",
      issue: "",
      pages: "183–195",
      doi: "10.1007/978-3-662-48645-0_16"
    },
    {
      id: "maneraKitchenCooking2015",
      authors: "Manera, V., Petit, P.-D., Derreumaux, A., Orvieto, I., Romagnoli, M., Lyttle, G., David, R., & Robert, P.H.",
      year: 2015,
      title: "'Kitchen and Cooking,' a Serious Game for Mild Cognitive Impairment and Alzheimer's Disease: A Pilot Study.",
      journal: "Frontiers in Aging Neuroscience",
      volume: "7",
      issue: "FEB",
      pages: "",
      doi: "10.3389/fnagi.2015.00024"
    },
    {
      id: "vourvopoulos2014RehabCity",
      authors: "Vourvopoulos, A., Faria, A.L., Ponnam, K., & Bermudez I Badia, S.",
      year: 2014,
      title: "RehabCity: Design and Validation of a Cognitive Assessment and Rehabilitation Tool through Gamified Simulations of Activities of Daily Living.",
      journal: "Proceedings of the 11th Conference on Advances in Computer Entertainment Technology (ACE '14)",
      volume: "",
      issue: "",
      pages: "1–8",
      doi: "10.1145/2663806.2663852"
    },
    {
      id: "tongDevelopingSerious2014",
      authors: "Tong, T., & Chignell, M.",
      year: 2014,
      title: "Developing a Serious Game for Cognitive Assessment: Choosing Settings and Measuring Performance.",
      journal: "Proceedings of the Second International Symposium of Chinese CHI",
      volume: "",
      issue: "",
      pages: "70–79",
      doi: "10.1145/2592235.2592246"
    },
    {
      id: "wallaceDesign2014",
      authors: "Wallace, B., Goubran, R., Knoefel, F., Petriu, M., & McAvoy, A.",
      year: 2014,
      title: "Design of Games for Measurement of Cognitive Impairment.",
      journal: "IEEE-EMBS International Conference on Biomedical and Health Informatics (BHI)",
      volume: "",
      issue: "",
      pages: "117–120",
      doi: "10.1109/BHI.2014.6864318"
    },
    {
      id: "shamsuddinVREAD2012",
      authors: "Shamsuddin, S.N.W., Ugail, H., Lesk, V., & Walters, E.",
      year: 2012,
      title: "VREAD: A Virtual Simulation to Investigate Cognitive Function in the Elderly.",
      journal: "2012 International Conference on Cyberworlds",
      volume: "",
      issue: "",
      pages: "215–220",
      doi: "10.1109/CW.2012.37"
    },
    {
      id: "mckannaDividedAttention2009",
      authors: "McKanna, J.A., Jimison, H., & Pavel, M.",
      year: 2009,
      title: "Divided Attention in Computer Game Play: Analysis Utilizing Unobtrusive Health Monitoring.",
      journal: "2009 Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
      volume: "",
      issue: "",
      pages: "6247–6250",
      doi: "10.1109/IEMBS.2009.5334662"
    },
    {
      id: "jimisonHomebasedMonitoring2008",
      authors: "Jimison, H., Pavel, M., & Le, T.",
      year: 2008,
      title: "Home-Based Cognitive Monitoring Using Embedded Measures of Verbal Fluency in a Computer Word Game.",
      journal: "2008 30th Annual International Conference of the IEEE Engineering in Medicine and Biology Society",
      volume: "",
      issue: "",
      pages: "3312–3315",
      doi: "10.1109/IEMBS.2008.4649913"
    },
    {
      id: "jimisonUnobtrusive2004",
      authors: "Jimison, H., Pavel, M., McKanna, J., & Pavel, J.",
      year: 2004,
      title: "Unobtrusive Monitoring of Computer Interactions to Detect Cognitive Status in Elders.",
      journal: "IEEE Transactions on Information Technology in Biomedicine",
      volume: "8",
      issue: "3",
      pages: "248–252",
      doi: "10.1109/TITB.2004.835539"
    },
  ];


  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Scientific References</h1>
        <p className="text-lg text-slate-500">
          Our methodology and the clinical evidence presented in this platform are grounded in rigorous peer-reviewed research. Below is a selection of foundational papers that support the efficacy of gameful systems for MCI assessment.
        </p>
      </div>

      <div className="space-y-6">
        {references.map((ref) => (
          <div key={ref.id} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex gap-4 lg:gap-6">
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-slate-400 w-16 text-right pt-1">{ref.year}</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {ref.title}
                </h3>
                <p className="text-slate-600 mb-2">
                  <span className="font-medium text-slate-800">{ref.authors}</span>
                </p>
                <p className="text-sm text-slate-500 italic mb-4">
                  {ref.journal}. {ref.volume}{ref.issue && `(${ref.issue})`}{ref.pages && `, ${ref.pages}`}.
                </p>
                {ref.doi && (
                  <a 
                    href={`https://doi.org/${ref.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    DOI: {ref.doi}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-50/50 rounded-2xl p-8 border border-blue-100 text-center">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Submit a Reference</h3>
        <p className="text-slate-600 mb-5">
          Are you the author of a study on gameful MCI assessment that has been peer-reviewed? Let us know.
        </p>
        <a 
          href="/contact" 
          className="inline-block px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-sm border border-slate-200"
        >
          Contact our team
        </a>
      </div>
    </div>
  );
}
