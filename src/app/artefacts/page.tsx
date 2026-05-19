import { ArtefactsBrowser } from "@/components/ArtefactsBrowser";
import { allGames } from "@/data/games";

export default function ArtefactsPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <ArtefactsBrowser initialGames={allGames} />
    </main>
  );
}

