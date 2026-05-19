"use client";

import { useMemo, useState } from "react";
import { MCIGameArtifact } from "@/types";
import { GameCard } from "./GameCard";
import { Filter, Search } from "lucide-react";

export function ArtefactsBrowser({ initialGames }: { initialGames: MCIGameArtifact[] }) {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [selectedModalities, setSelectedModalities] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedSubGenres, setSelectedSubGenres] = useState<string[]>([]);
  const [selectedQualities, setSelectedQualities] = useState<string[]>([]);

  // Extract unique filter options
  const filterOptions = useMemo(() => {
    const domains = new Set<string>();
    const modalities = new Set<string>();
    const genres = new Set<string>();
    const subGenres = new Set<string>();
    const qualities = new Set<string>();
    
    initialGames.forEach(g => {
      g.cognitive_assessment.assessed_functions.forEach(d => domains.add(d));
      g.basic_info.interaction_modality.forEach(m => modalities.add(m));
      if (g.gameplay_info.genre) genres.add(g.gameplay_info.genre);
      if (g.gameplay_info.sub_genre) subGenres.add(g.gameplay_info.sub_genre);
      g.clinical_studies.forEach(study => {
        if (study.validation_quality.overall_quality) {
          qualities.add(study.validation_quality.overall_quality);
        }
      });
    });

    return {
      domains: Array.from(domains).sort(),
      modalities: Array.from(modalities).sort(),
      genres: Array.from(genres).sort(),
      subGenres: Array.from(subGenres).sort(),
      qualities: Array.from(qualities).sort()
    };
  }, [initialGames]);

  // Apply filters
  const filteredGames = useMemo(() => {
    return initialGames.filter(game => {
      const matchDomain = selectedDomains.length === 0 || 
        game.cognitive_assessment.assessed_functions.some(d => selectedDomains.includes(d));
      
      const matchModality = selectedModalities.length === 0 || 
        game.basic_info.interaction_modality.some(m => selectedModalities.includes(m));

      const matchGenre = selectedGenres.length === 0 ||
        selectedGenres.includes(game.gameplay_info.genre);
      
      const matchSubGenre = selectedSubGenres.length === 0 ||
        (game.gameplay_info.sub_genre && selectedSubGenres.includes(game.gameplay_info.sub_genre));

      const matchQuality = selectedQualities.length === 0 ||
        game.clinical_studies.some(study => selectedQualities.includes(study.validation_quality.overall_quality));

      return matchDomain && matchModality && matchGenre && matchSubGenre && matchQuality;
    });
  }, [initialGames, selectedDomains, selectedModalities, selectedGenres, selectedSubGenres, selectedQualities]);

  const toggleFilter = (list: string[], setList: (v: string[]) => void, value: string) => {
    if (list.includes(value)) setList(list.filter(item => item !== value));
    else setList([...list, value]);
  };

  const hasAnyFilter = selectedDomains.length > 0 || selectedModalities.length > 0 || 
                       selectedGenres.length > 0 || selectedSubGenres.length > 0 || 
                       selectedQualities.length > 0;

  const clearAllFilters = () => {
    setSelectedDomains([]);
    setSelectedModalities([]);
    setSelectedGenres([]);
    setSelectedSubGenres([]);
    setSelectedQualities([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left Sidebar - Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24 shadow-sm max-h-[85vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
              </div>
              {hasAnyFilter && (
                <button 
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="space-y-8">
              {/* Domain Filter */}
              <div>
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4">Cognitive Domains</h3>
                <div className="space-y-3">
                  {filterOptions.domains.map(domain => (
                    <label key={domain} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input 
                          type="checkbox" 
                          checked={selectedDomains.includes(domain)}
                          onChange={() => toggleFilter(selectedDomains, setSelectedDomains, domain)}
                          className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">{domain}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Modality Filter */}
              <div>
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4">Interaction Modality</h3>
                <div className="space-y-3">
                  {filterOptions.modalities.map(modality => (
                    <label key={modality} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input 
                          type="checkbox" 
                          checked={selectedModalities.includes(modality)}
                          onChange={() => toggleFilter(selectedModalities, setSelectedModalities, modality)}
                          className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">{modality}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Genre Filter */}
              <div>
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4">Game Genre</h3>
                <div className="space-y-3">
                  {filterOptions.genres.map(genre => (
                    <label key={genre} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input 
                          type="checkbox" 
                          checked={selectedGenres.includes(genre)}
                          onChange={() => toggleFilter(selectedGenres, setSelectedGenres, genre)}
                          className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sub Genre Filter */}
              <div>
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4">Game Sub-Genre</h3>
                <div className="space-y-3">
                  {filterOptions.subGenres.map(sub => (
                    <label key={sub} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input 
                          type="checkbox" 
                          checked={selectedSubGenres.includes(sub)}
                          onChange={() => toggleFilter(selectedSubGenres, setSelectedSubGenres, sub)}
                          className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">{sub}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clinical Study Quality Filter */}
              <div>
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4">Clinical Study Quality</h3>
                <div className="space-y-3">
                  {filterOptions.qualities.map(quality => (
                    <label key={quality} className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input 
                          type="checkbox" 
                          checked={selectedQualities.includes(quality)}
                          onChange={() => toggleFilter(selectedQualities, setSelectedQualities, quality)}
                          className="peer appearance-none w-4 h-4 border-2 border-slate-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                        />
                        <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">{quality}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
            
          </div>
        </aside>

        {/* Right Content - Grid */}
        <main className="flex-1">
          <div className="mb-6 flex justify-between items-end border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Database Index</h2>
            <p className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded ml-1">{filteredGames.length}</span> systems
            </p>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
              {filteredGames.map(game => (
                <GameCard key={game.basic_info.id} game={game} />
              ))}
            </div>
          ) : (
             <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center shadow-sm">
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-5 border border-slate-100">
                 <Search className="w-10 h-10 text-slate-300" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">No matching systems found</h3>
               <p className="text-slate-500 text-sm max-w-sm mx-auto">
                 Try removing some filters to see more clinical evidence results from the database.
               </p>
               <button 
                 onClick={() => { setSelectedDomains([]); setSelectedModalities([]); }}
                 className="mt-6 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold rounded-lg transition-colors text-sm"
               >
                 Clear all filters
               </button>
             </div>
          )}
        </main>
      </div>
    </div>
  );
}
