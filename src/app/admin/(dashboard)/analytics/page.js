import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getVisitorTraffic, getDetailedAnalytics } from "@/app/actions/analytics";
import VisitorChart from "@/components/admin/VisitorChart";
import { ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AnalyticsDetailedPage() {
  const [chartData, { topPages, topClicks }] = await Promise.all([
    getVisitorTraffic(),
    getDetailedAnalytics()
  ]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold font-serif-display text-neutral-900 tracking-tight">
          Detailed Analytics
        </h1>
        <p className="text-neutral-500 mt-2">
          A deeper dive into your portfolio's performance over the last 30 days.
        </p>
      </div>

      <Card className="rounded-xl border-transparent shadow-sm">
        <CardHeader>
          <CardTitle>Visitor Traffic (30 Days)</CardTitle>
          <CardDescription>Daily page views across your entire portfolio</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <VisitorChart data={chartData} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card className="rounded-xl border-transparent shadow-sm">
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your site</CardDescription>
          </CardHeader>
          <CardContent>
            {topPages && topPages.length > 0 ? (
              <div className="space-y-4">
                {topPages.map((page, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 border border-neutral-100/60">
                    <div className="flex items-center gap-3">
                      <div className="w-6 text-center text-xs font-semibold text-neutral-400">{i + 1}</div>
                      <div className="text-sm font-medium text-neutral-800">{page.path}</div>
                    </div>
                    <div className="text-sm font-semibold text-neutral-900">{page.views.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-neutral-500 text-center py-8">No page data yet.</div>
            )}
          </CardContent>
        </Card>

        {/* Top Clicks */}
        <Card className="rounded-xl border-transparent shadow-sm">
          <CardHeader>
            <CardTitle>Top External Clicks</CardTitle>
            <CardDescription>Which links your visitors click most</CardDescription>
          </CardHeader>
          <CardContent>
            {topClicks && topClicks.length > 0 ? (
              <div className="space-y-4">
                {topClicks.map((click, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 border border-neutral-100/60">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-6 text-center text-xs font-semibold text-neutral-400 shrink-0">{i + 1}</div>
                      <a 
                        href={click.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 hover:underline truncate inline-flex items-center gap-1.5"
                      >
                        {click.url}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 shrink-0">{click.clicks.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-neutral-500 text-center py-8">No click data yet.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
