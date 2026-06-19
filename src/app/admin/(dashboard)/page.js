import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, MousePointerClick, Users, Eye } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { getVisitorTraffic } from "@/app/actions/analytics";
import VisitorChart from "@/components/admin/VisitorChart";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const [
    { count: footfallCount }, 
    { count: engagementCount }, 
    { count: clicksCount },
    chartData,
    { data: recentMessages }
  ] = await Promise.all([
    supabase.from("analytics_events").select("*", { count: "exact", head: true }).eq("event_type", "page_view"),
    supabase.from("analytics_events").select("*", { count: "exact", head: true }).eq("event_type", "engagement"),
    supabase.from("analytics_events").select("*", { count: "exact", head: true }).eq("event_type", "click"),
    getVisitorTraffic(),
    supabase.from("messages").select("*").order("created_at", { ascending: false }).limit(5)
  ]);

  const totalFootfall = footfallCount || 0;
  const engagements = engagementCount || 0;
  const clicks = clicksCount || 0;
  
  const engagementRate = totalFootfall > 0 
    ? ((engagements / totalFootfall) * 100).toFixed(1) + "%"
    : "0%";

  const metrics = [
    { title: "Total Footfall", value: totalFootfall.toLocaleString(), change: "Live", icon: Eye },
    { title: "Unique Visitors", value: totalFootfall.toLocaleString(), change: "Live", icon: Users },
    { title: "Engagement Rate", value: engagementRate, change: "Live", icon: Activity },
    { title: "Clicks", value: clicks.toLocaleString(), change: "Live", icon: MousePointerClick },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold font-serif-display text-neutral-900 tracking-tight">
          Welcome back, Ayush
        </h1>
        <p className="text-neutral-500 mt-2">
          Here's what's happening with your portfolio today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="rounded-xl border-transparent shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-neutral-500">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-900">{metric.value}</div>
              <p className={`text-xs font-medium mt-1 ${metric.change.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts / Main Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="rounded-xl border-transparent shadow-sm lg:col-span-2 min-h-[400px]">
          <CardHeader>
            <CardTitle>Visitor Traffic</CardTitle>
            <CardDescription>Views over the last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <VisitorChart data={chartData} />
          </CardContent>
        </Card>

        <Card className="rounded-xl border-transparent shadow-sm min-h-[400px]">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Latest contact form submissions</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {recentMessages && recentMessages.length > 0 ? recentMessages.map((msg, i) => (
              <div key={msg.id || i} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-neutral-500">
                  {msg.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{msg.name}</div>
                  <div className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{msg.message}</div>
                </div>
              </div>
            )) : (
              <div className="text-sm text-neutral-500 p-4">No recent messages.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
