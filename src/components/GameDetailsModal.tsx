import { MCIGameArtifact } from "@/types";
import { X, Brain, Activity, Info, Users, BookOpen, Gamepad2, FileText } from "lucide-react";

interface GameDetailsModalProps {
  game: MCIGameArtifact;
  onClose: () => void;
}

export function GameDetailsModal({ game, onClose }: GameDetailsModalProps) {
  const {
    basic_info,
    gameplay_info,
    formal_game_design,
    user_experience,
    cognitive_assessment,
    clinical_studies,
  } = game;

  const formalElements = [
    { key: "rules", label: "Rules" },
    { key: "procedures", label: "Procedures" },
    { key: "objectives", label: "Objectives" },
    { key: "conflict", label: "Conflict" },
    { key: "boundaries", label: "Boundaries" },
    { key: "resources", label: "Resources" },
    { key: "outcomes", label: "Outcomes" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {gameplay_info.sub_genre && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded">
                  {gameplay_info.sub_genre}
                </span>
              )}
              {basic_info.interaction_modality[0] && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                  {basic_info.interaction_modality[0]}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">{basic_info.game_name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10">
          
          {/* Description & Media */}
          <section>
            <div className="flex items-center gap-2 mb-3 text-slate-800">
              <Info className="w-5 h-5" />
              <h3 className="text-lg font-bold">Game Description</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {/* Text Description */}
              <div>
                {basic_info.media_documentation?.text_description ? (
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {basic_info.media_documentation.text_description}
                  </p>
                ) : (
                  <p className="text-slate-400 italic bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center">
                    No detailed description available.
                  </p>
                )}
              </div>

              {/* Screenshots Gallery */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Screenshots</h4>
                {basic_info.media_documentation?.screenshots && basic_info.media_documentation.screenshots.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {basic_info.media_documentation.screenshots.map((src, idx) => (
                      <div key={idx} className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-200 group cursor-pointer shadow-sm hover:shadow-md transition-all">
                        <img
                          src={`/mci-games${src}`}
                          alt={`Screenshot ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        {/* Fallback shown behind image if it fails */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 -z-0">
                          <svg className="w-10 h-10 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs font-semibold uppercase tracking-wider">{src.split('/').pop()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-slate-50 border border-slate-200 border-dashed rounded-xl py-8 flex flex-col items-center justify-center text-slate-400">
                    <svg className="w-10 h-10 mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">No screenshots provided</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Second Row: Targets & User Experience side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Cognitive Targets */}
            <section>
              <div className="flex items-center gap-2 mb-4 text-slate-800">
                <Brain className="w-5 h-5 text-indigo-500" />
                <h3 className="text-lg font-bold">Cognitive Targets</h3>
              </div>
              {cognitive_assessment?.assessed_functions?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {cognitive_assessment.assessed_functions.map((func, i) => (
                    <span key={i} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 font-medium rounded-lg text-sm border border-indigo-100/50">
                      {func}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 italic bg-slate-50 p-4 rounded-xl border border-slate-100">No specific cognitive targets documented.</p>
              )}
            </section>

            {/* User Experience */}
            <section>
              <div className="flex items-center gap-2 mb-4 text-slate-800">
                <Users className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold">User Experience & Involvement</h3>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col gap-3 h-full justify-center">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                  <span className="text-xs font-bold text-slate-500 uppercase">Older Adults Role</span>
                  <span className="font-semibold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">{user_experience.older_adults_role}</span>
                </div>
                
                <div>
                  <span className="block text-xs font-bold text-slate-500 uppercase mb-2">Evaluations Conducted</span>
                  {Object.keys(user_experience.evaluations || {}).length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(user_experience.evaluations).map(([key, val]) => (
                         val && <span key={key} className="text-xs bg-white border border-slate-200 px-2.5 py-1 rounded shadow-sm text-slate-700 capitalize font-medium">
                           {key.replace('_', ' ')}
                         </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-slate-400 italic">None reported</span>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Formal Game Elements (Full Width) */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-800">
              <Gamepad2 className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold">Formal Game Design</h3>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 md:p-6">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-200">
                <span className="text-sm font-semibold text-slate-500 uppercase">Design Paradigm</span>
                <span className="font-bold text-slate-900 bg-white px-3 py-1 rounded-md shadow-sm border border-slate-200">
                  {formal_game_design.design_paradigm}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {formalElements.map((el) => {
                  const rScore = formal_game_design.report?.[el.key as keyof typeof formal_game_design.report] ?? 0;
                  const dScore = formal_game_design.depth?.[el.key as keyof typeof formal_game_design.depth] ?? 0;
                  
                  return (
                    <div key={el.key} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                      <span className="block font-bold text-slate-800 mb-3">{el.label}</span>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 uppercase">Report</span>
                          <div className="flex gap-1.5">
                            {[1,2].map(i => (
                              <div key={i} className={`w-3 h-3 rounded-full ${i <= rScore ? 'bg-emerald-500' : 'bg-slate-100 border border-slate-200'}`} />
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-500 uppercase">Depth</span>
                          <div className="flex gap-1.5">
                            {[1,2].map(i => (
                              <div key={i} className={`w-3 h-3 rounded-full ${i <= dScore ? 'bg-blue-500' : 'bg-slate-100 border border-slate-200'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>



          {/* Clinical Evidence */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-slate-800">
              <Activity className="w-5 h-5 text-rose-500" />
              <h3 className="text-lg font-bold">Clinical Evidence</h3>
            </div>
            
            {clinical_studies?.length > 0 ? (
              <div className="space-y-4">
                {clinical_studies.map((study, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        <span className="font-bold text-slate-900">{study.reference_id}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                          {study.validation_quality.study_type}
                        </span>
                        <span className="px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-100 text-xs font-semibold rounded-md">
                          {study.validation_quality.overall_quality} Quality
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-4 rounded-lg border border-slate-100">
                      <div>
                        <span className="block text-xs font-bold text-slate-500 uppercase mb-2">Sample Size</span>
                        <div className="flex gap-4 text-sm">
                          <div className="flex flex-col"><span className="text-lg font-bold text-slate-900">{study.validation_quality.sample_size.total || '-'}</span><span className="text-slate-500">Total</span></div>
                          <div className="flex flex-col"><span className="text-lg font-bold text-slate-900">{study.validation_quality.sample_size.mci_patients || '-'}</span><span className="text-slate-500">MCI</span></div>
                          <div className="flex flex-col"><span className="text-lg font-bold text-slate-900">{study.validation_quality.sample_size.healthy_controls || '-'}</span><span className="text-slate-500">HC</span></div>
                        </div>
                      </div>

                      {study.diagnostic_performance ? (
                        <div>
                          <span className="block text-xs font-bold text-slate-500 uppercase mb-2">Diagnostic Performance</span>
                          <div className="flex gap-4 text-sm">
                            <div className="flex flex-col"><span className="text-lg font-bold text-rose-600">{study.diagnostic_performance.auc ? study.diagnostic_performance.auc.toFixed(2) : '-'}</span><span className="text-slate-500">AUC</span></div>
                            <div className="flex flex-col"><span className="text-lg font-bold text-slate-900">{study.diagnostic_performance.sensitivity_percent ? `${study.diagnostic_performance.sensitivity_percent}%` : '-'}</span><span className="text-slate-500">Sens.</span></div>
                            <div className="flex flex-col"><span className="text-lg font-bold text-slate-900">{study.diagnostic_performance.specificity_percent ? `${study.diagnostic_performance.specificity_percent}%` : '-'}</span><span className="text-slate-500">Spec.</span></div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span className="text-sm text-slate-400 italic">No diagnostic performance metrics reported.</span>
                        </div>
                      )}
                    </div>
                    
                    {study.diagnostic_performance?.game_metrics_used && (
                      <div className="mt-4 text-sm text-slate-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                        <span className="font-semibold text-slate-900">Metrics Used: </span>
                        {study.diagnostic_performance.game_metrics_used}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                 <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                 <p className="text-slate-500 italic">No formal clinical evidence is currently available for this system.</p>
              </div>
            )}
          </section>

        </div>
      </div>
    </div>
  );
}
