import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MessagesTable from "./MessagesTable";

export const metadata = {
  title: "Messages | Admin Dashboard",
  description: "View all contact form submissions.",
};

export default async function AdminMessagesPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching messages:", error);
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold font-serif-display text-neutral-900 tracking-tight">
          All Messages
        </h1>
        <p className="text-neutral-500 mt-2">
          View all your contact form submissions here.
        </p>
      </div>

      <Card className="rounded-xl border-transparent shadow-sm">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
          <CardDescription>A list of all contact messages you've received.</CardDescription>
        </CardHeader>
        <CardContent>
          <MessagesTable messages={messages} />
        </CardContent>
      </Card>
    </div>
  );
}
