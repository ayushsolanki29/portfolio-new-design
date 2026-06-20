import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditThoughtForm from "@/components/admin/EditThoughtForm";

export default async function EditThoughtPage({ params }) {
  const { id } = await params;
  
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  const { data: thought, error } = await supabase
    .from("thoughts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !thought) {
    redirect("/admin/thoughts");
  }

  return <EditThoughtForm thought={thought} />;
}
