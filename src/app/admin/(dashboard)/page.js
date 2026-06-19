import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, MousePointerClick, Users, Eye } from "lucide-react";

export default function AdminDashboardPage() {
  const metrics = [
    { title: "Total Views", value: "24,593", change: "+12.5%", icon: Eye },
    { title: "Unique Visitors", value: "8,204", change: "+5.2%", icon: Users },
    { title: "Engagement Rate", value: "64.8%", change: "+1.1%", icon: Activity },
    { title: "Clicks", value: "1,249", change: "-2.4%", icon: MousePointerClick },
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
          <CardContent className="flex items-center justify-center h-[300px] text-neutral-400 border-2 border-dashed border-neutral-100 rounded-2xl m-6 mt-0 bg-neutral-50/50">
            Chart Placeholder
          </CardContent>
        </Card>

        <Card className="rounded-xl border-transparent shadow-sm min-h-[400px]">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Latest contact form submissions</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="w-8 h-8 rounded-full bg-neutral-200 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-neutral-900">User {i}</div>
                  <div className="text-xs text-neutral-500 line-clamp-1 mt-0.5">Hey Ayush, love the new design...</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
