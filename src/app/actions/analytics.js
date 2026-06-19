"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getVisitorTraffic() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  // Get date 30 days ago
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const startDateStr = thirtyDaysAgo.toISOString();

  // Fetch only page views from the last 30 days
  const { data, error } = await supabase
    .from("analytics_events")
    .select("created_at")
    .eq("event_type", "page_view")
    .gte("created_at", startDateStr)
    .order("created_at", { ascending: true });

  if (error || !data) {
    console.error("Error fetching traffic:", error);
    return [];
  }

  // Aggregate by day
  const dailyCounts = {};
  
  // Initialize last 30 days with 0 so the chart doesn't have gaps
  for (let i = 0; i <= 30; i++) {
    const d = new Date(thirtyDaysAgo);
    d.setDate(d.getDate() + i);
    const dateKey = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    dailyCounts[dateKey] = 0;
  }

  data.forEach((event) => {
    const dateKey = new Date(event.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });
    if (dailyCounts[dateKey] !== undefined) {
      dailyCounts[dateKey]++;
    }
  });

  // Convert to array for Recharts
  const chartData = Object.keys(dailyCounts).map((date) => ({
    date,
    views: dailyCounts[date]
  }));

  return chartData;
}

export async function getDetailedAnalytics() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const startDateStr = thirtyDaysAgo.toISOString();

  // Fetch page views and clicks
  const { data, error } = await supabase
    .from("analytics_events")
    .select("event_type, path, metadata")
    .gte("created_at", startDateStr);

  if (error || !data) return { topPages: [], topClicks: [] };

  const pageCounts = {};
  const clickCounts = {};

  data.forEach(event => {
    if (event.event_type === "page_view") {
      const p = event.path || "/";
      pageCounts[p] = (pageCounts[p] || 0) + 1;
    } else if (event.event_type === "click" && event.metadata?.url) {
      const u = event.metadata.url;
      clickCounts[u] = (clickCounts[u] || 0) + 1;
    }
  });

  const topPages = Object.entries(pageCounts)
    .map(([path, views]) => ({ path, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const topClicks = Object.entries(clickCounts)
    .map(([url, clicks]) => ({ url, clicks }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 10);

  return { topPages, topClicks };
}
