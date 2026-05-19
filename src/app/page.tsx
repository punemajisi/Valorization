import { HomeHero } from "@/components/HomeHero";
import { allGames } from "@/data/games";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero initialGames={allGames} />
    </main>
  );
}
