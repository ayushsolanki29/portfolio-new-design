import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body = await req.json().catch(() => ({}));
    const path = body.path || "/";
    const eventType = body.event_type || "page_view"; // page_view, engagement, click
    const metadata = body.metadata || {};

    // Insert event silently
    const { error } = await supabase
      .from("analytics_events")
      .insert([{ path, event_type: eventType, metadata }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Tracking Error:", error);
    // Return 200 anyway so we don't block or show errors to the client
    return NextResponse.json({ success: false });
  }
}
