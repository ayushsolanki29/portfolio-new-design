"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getProfile() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: "Unauthorized" };
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profileError) {
      // If profile doesn't exist (e.g. they signed up before trigger), return the user basic info
      return { 
        success: true, 
        profile: { 
          id: user.id, 
          email: user.email, 
          full_name: user.email 
        } 
      };
    }

    // Attach email from auth for display
    return { success: true, profile: { ...profile, email: user.email } };
  } catch (error) {
    console.error("Get Profile Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function updateProfile(formData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: "Unauthorized" };
    }

    const full_name = formData.get("full_name");
    const avatar_url = formData.get("avatar_url");
    const bio = formData.get("bio");

    const { data, error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        full_name,
        avatar_url,
        bio,
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    revalidatePath("/admin/profile");
    revalidatePath("/admin/settings");

    return { success: true, profile: data };
  } catch (error) {
    console.error("Update Profile Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function listAdminUsers() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: "Unauthorized" };
    }

    // Fetch all profiles where role is admin
    const { data: profiles, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("role", "admin");

    if (profileError) {
      return { success: false, error: profileError.message };
    }

    return { success: true, admins: profiles };
  } catch (error) {
    console.error("List Admins Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function updatePassword(formData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return { success: false, error: "Unauthorized" };
    }

    const new_password = formData.get("new_password");
    const confirm_password = formData.get("confirm_password");

    if (new_password !== confirm_password) {
      return { success: false, error: "Passwords do not match." };
    }

    if (new_password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters long." };
    }

    const { error } = await supabase.auth.updateUser({
      password: new_password
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Update Password Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function signOut() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  redirect("/admin/login");
}
