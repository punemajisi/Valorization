"use client";

import { useMemo } from "react";
import { MCIGameArtifact } from "@/types";
import { Database, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export function HomeHero({ initialGames }: { initialGames: MCIGameArtifact[] }) {
  // Calculate Global Stats
  const stats = useMemo(() => {
    let totalParticipants = 0;
    let totalStudies = 0;
    const counted = new Set<string>();
    
    initialGames.forEach(game => {
      game.clinical_studies.forEach(study => {
        totalStudies++;
        const sampleTotal = study.validation_quality.sample_size.total;
        if (sampleTotal) totalParticipants += sampleTotal;
      });

      // Count user study participants from evaluations (avoid double counting via reference_id key)
      const ueKey = game.basic_info.id;
      if (!counted.has(ueKey)) {
        counted.add(ueKey);
        // user study participants are not tracked as numbers in our schema, so we only count clinical ones
      }
    });

    return {
      totalGames: initialGames.length,
      totalParticipants,
      totalStudies
    };
  }, [initialGames]);


  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/60 text-blue-700 text-sm font-semibold mb-2 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Gameful MCI Assessment Reference
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          A Comprehensive Guide to <br className="hidden md:block"/> <span className="text-blue-600">Gameful MCI Assessment</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          A comprehensive database for professionals to evaluate gameful cognitive tools. Access in-depth gameful design, clinical validation studies, and evidence-based efficacy reports in one central repository.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link href="/artefacts" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
            Browse Artefacts
          </Link>
          <Link href="/references" className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
            Our Methodology
          </Link>
        </div>
      </div>

      {/* Global Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Database className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Evaluated Artefacts</p>
            <p className="text-4xl font-extrabold text-slate-900">{stats.totalGames}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Participants</p>
            <p className="text-4xl font-extrabold text-slate-900">{stats.totalParticipants.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
            <BookOpen className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Clinical Validation Studies</p>
            <p className="text-4xl font-extrabold text-slate-900">{stats.totalStudies}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
