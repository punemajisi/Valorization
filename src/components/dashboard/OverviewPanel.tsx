import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { EfficacyChart } from "./EfficacyChart";
import { DomainChart } from "./DomainChart";

export function OverviewPanel() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Clinical Efficacy Overview</CardTitle>
          <CardDescription>Sensitivity and specificity across evaluated games</CardDescription>
        </CardHeader>
        <CardContent>
          <EfficacyChart />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Cognitive Domain Distribution</CardTitle>
          <CardDescription>Frequency of domains tested by listed games</CardDescription>
        </CardHeader>
        <CardContent>
          <DomainChart />
        </CardContent>
      </Card>
    </div>
  );
}
