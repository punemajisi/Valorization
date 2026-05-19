"use client";

import { CognitiveDomain, GameType } from "@/lib/types";

interface FilterSidebarProps {
  selectedDomains: CognitiveDomain[];
  setSelectedDomains: (domains: CognitiveDomain[]) => void;
  selectedTypes: GameType[];
  setSelectedTypes: (types: GameType[]) => void;
}

const ALL_DOMAINS: CognitiveDomain[] = [
  'Memory', 'Executive Function', 'Attention', 'Visuospatial', 'Language', 'Processing Speed'
];

const ALL_TYPES: GameType[] = [
  'Exergame', 'Puzzle/Logic', 'VR Simulation', 'Memory Training', 'Rhythm/Music'
];

export function FilterSidebar({
  selectedDomains,
  setSelectedDomains,
  selectedTypes,
  setSelectedTypes
}: FilterSidebarProps) {
  
  const toggleDomain = (domain: CognitiveDomain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter(d => d !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  const toggleType = (type: GameType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className="w-full md:w-64 flex-shrink-0 space-y-6">
      <div>
        <h3 className="font-semibold text-sm text-slate-900 mb-3 border-b pb-2">Cognitive Domains</h3>
        <div className="space-y-2">
          {ALL_DOMAINS.map(domain => (
            <label key={domain} className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedDomains.includes(domain)}
                onChange={() => toggleDomain(domain)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{domain}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-sm text-slate-900 mb-3 border-b pb-2">Game Types</h3>
        <div className="space-y-2">
          {ALL_TYPES.map(type => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
