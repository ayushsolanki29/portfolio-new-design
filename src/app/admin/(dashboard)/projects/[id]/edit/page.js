import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import EditProjectForm from "@/components/admin/EditProjectForm";

export default async function EditProjectPage({ params }) {
  const { id } = await params;
  
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) {
    redirect("/admin/projects");
  }

  return <EditProjectForm project={project} />;
}
