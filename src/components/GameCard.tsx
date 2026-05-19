"use client";

import { useState } from "react";
import { MCIGameArtifact } from "@/types";
import { Brain, Activity } from "lucide-react";
import { GameDetailsModal } from "./GameDetailsModal";

export function GameCard({ game }: { game: MCIGameArtifact }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { basic_info, gameplay_info, cognitive_assessment, clinical_studies } = game;

  // Find the best study (highest AUC) as the representative clinical result
  const bestStudy = clinical_studies?.sort((a, b) =>
    (b.diagnostic_performance?.auc || 0) - (a.diagnostic_performance?.auc || 0)
  )[0];

  const auc = bestStudy?.diagnostic_performance?.auc;
  const sensitivity = bestStudy?.diagnostic_performance?.sensitivity_percent;
  const specificity = bestStudy?.diagnostic_performance?.specificity_percent;

  return (
    <>
    <div 
      onClick={() => setIsExpanded(true)}
      className="bg-white cursor-pointer rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col h-full group"
    >
      {/* Thumbnail */}
      <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 w-full relative overflow-hidden flex items-center justify-center">
        {basic_info.media_documentation?.screenshots?.[0] ? (
          <img
            src={basic_info.media_documentation.screenshots[0]}
            alt={basic_info.game_name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-400 via-transparent to-transparent bg-[length:20px_20px]"></div>
            <div className="text-slate-400/50 font-semibold tracking-widest uppercase text-sm z-10">No Image</div>
          </>
        )}

        <div className="absolute top-3 left-3 flex gap-2 z-20">
          {gameplay_info.sub_genre && (
            <span className="bg-white/90 backdrop-blur text-slate-700 text-xs px-2.5 py-1 rounded border border-slate-100 shadow-sm font-medium">
              {gameplay_info.sub_genre}
            </span>
          )}
          {basic_info.interaction_modality[0] && (
            <span className="bg-slate-900/80 backdrop-blur text-white text-xs px-2.5 py-1 rounded shadow-sm font-medium">
              {basic_info.interaction_modality[0]}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {basic_info.game_name}
        </h3>

        {/* Clinical Highlights Area */}
        {bestStudy && (
          <div className="bg-gradient-to-b from-blue-50/80 to-blue-50/30 rounded-lg p-4 mb-5 border border-blue-100/60 transition-all hover:bg-blue-50">
            <div className="flex items-center gap-1.5 mb-3">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-[13px] font-bold text-blue-900 uppercase tracking-wide">Clinical Evidence</span>
            </div>
            <div className="grid grid-cols-3 gap-2 divide-x divide-blue-200/60">
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 font-medium pb-0.5 uppercase">AUC</span>
                <span className="text-lg font-bold text-slate-800">{auc ? auc.toFixed(2) : "N/A"}</span>
              </div>
              <div className="flex flex-col pl-3">
                <span className="text-[11px] text-slate-500 font-medium pb-0.5 uppercase">Sensitivity</span>
                <span className="text-lg font-bold text-slate-800">{sensitivity ? `${sensitivity}%` : "N/A"}</span>
              </div>
              <div className="flex flex-col pl-3">
                <span className="text-[11px] text-slate-500 font-medium pb-0.5 uppercase">Specificity</span>
                <span className="text-lg font-bold text-slate-800">{specificity ? `${specificity}%` : "N/A"}</span>
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-500 flex items-center justify-between font-medium">
              <span className="bg-blue-100/50 px-2 py-0.5 rounded text-blue-800">{bestStudy.validation_quality.study_type}</span>
              <span>n = {bestStudy.validation_quality.sample_size.total || '?'}</span>
            </div>
          </div>
        )}

        {/* Cognitive Targets */}
        <div className="mt-auto pt-2">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Brain className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cognitive Targets</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cognitive_assessment.assessed_functions.map((func, idx) => (
              <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-700 text-[11px] px-2 py-1 rounded-md font-medium hover:bg-slate-200 transition-colors cursor-default">
                {func}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    {isExpanded && (
      <GameDetailsModal 
        game={game} 
        onClose={() => setIsExpanded(false)} 
      />
    )}
    </>
  );
}
