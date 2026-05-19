import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Brain, Activity, Target, ArrowRight } from "lucide-react";
import { MOCK_GAMES } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = MOCK_GAMES.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link href="/">
        <Button variant="ghost" className="mb-6 -ml-4 text-slate-500 hover:text-slate-900">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Button>
      </Link>

      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">{game.title}</h1>
              <Badge variant="outline" className="bg-slate-100">{game.releaseYear}</Badge>
            </div>
            <p className="text-lg text-slate-500">Developed by {game.developer}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {game.types.map(type => (
              <Badge key={type} className="bg-blue-600 hover:bg-blue-700 text-white border-blue-700">{type}</Badge>
            ))}
          </div>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
          {game.description}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3 border-b border-slate-100 mb-4">
              <CardTitle className="flex items-center text-lg">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Clinical Evidence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                {game.evidence.keyFindings}
              </p>
              
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="space-y-1">
                  <div className="text-sm font-medium text-slate-500 flex items-center">
                    Sensitivity
                  </div>
                  <div className="text-2xl font-semibold text-emerald-700">{game.evidence.sensitivity}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-slate-500 flex items-center">
                    Specificity
                  </div>
                  <div className="text-2xl font-semibold text-blue-700">{game.evidence.specificity}%</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-slate-500 flex items-center">
                    Sample Size
                  </div>
                  <div className="text-2xl font-semibold text-slate-900">n = {game.evidence.sampleSize}</div>
                  <div className="text-xs text-slate-500">across {game.evidence.clinicalTrials} trials</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3 border-b border-slate-100 mb-4">
              <CardTitle className="flex items-center text-lg">
                <Activity className="w-5 h-5 mr-2 text-indigo-600" />
                Gameplay Mechanics & Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {game.gameplayMechanics.map((mechanic, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-400 mt-1 shrink-0" />
                    <span className="text-slate-700">{mechanic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-900 text-slate-50 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center text-lg text-white">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                Assessed Domains
              </CardTitle>
              <CardDescription className="text-slate-400">
                Cognitive functions targeted by this solution.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {game.cognitiveDomains.map((domain) => (
                  <div key={domain} className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm font-medium text-slate-200">
                    {domain}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
