import { Game } from "@/lib/types";
import { GameCard } from "./GameCard";

interface GameListProps {
  games: Game[];
}

export function GameList({ games }: GameListProps) {
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border rounded-xl bg-slate-50 border-dashed border-slate-300">
        <h3 className="text-lg font-medium text-slate-900 mb-1">No games found</h3>
        <p className="text-sm text-slate-500">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
