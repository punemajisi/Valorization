import Link from "next/link";
import { Game } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Activity, Brain, Users } from "lucide-react";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all hover:shadow-md hover:border-blue-200">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl text-slate-900">{game.title}</CardTitle>
          <Badge variant="outline" className="text-xs bg-slate-50">
            {game.releaseYear}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 text-slate-600">
          {game.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex items-center text-xs font-medium text-slate-500 mb-1">
            <Brain className="w-3.5 h-3.5 mr-1" /> Cognitive Domains
          </div>
          <div className="flex flex-wrap gap-1.5">
            {game.cognitiveDomains.map((domain) => (
              <Badge key={domain} variant="secondary" className="font-normal">
                {domain}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center text-xs font-medium text-slate-500 mb-1">
            <Activity className="w-3.5 h-3.5 mr-1" /> Efficacy
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-700">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Sensitivity</span>
              <span className="font-medium text-emerald-700">{game.evidence.sensitivity}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500">Specificity</span>
              <span className="font-medium text-blue-700">{game.evidence.specificity}%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 flex items-center"><Users className="w-3 h-3 mr-0.5 inline" /> Trials</span>
              <span className="font-medium text-slate-700">{game.evidence.clinicalTrials}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-slate-100">
        <Link href={`/games/${game.id}`} className="w-full">
          <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
            View Clinical Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
