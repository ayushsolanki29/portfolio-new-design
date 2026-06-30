"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { uploadImage, deleteImage } from "@/utils/cloudinary";
import { revalidatePath } from "next/cache";

export async function createProject(formData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return { success: false, error: "Unauthorized. Please log in." };
    }

    const title = formData.get("title");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const subtitle = formData.get("subtitle");
    const role = formData.get("role");
    const year = formData.get("year");
    const duration = formData.get("duration");
    const builtWithStr = formData.get("built_with");
    const tagsStr = formData.get("tags");
    const accent_color = formData.get("accent_color");
    const live_url = formData.get("live_url");
    const github_url = formData.get("github_url");
    const overview = formData.get("overview");
    const file = formData.get("preview_image");
    const preview_image_url = formData.get("preview_image_url");

    let built_with = [];
    if (builtWithStr) {
      try {
        built_with = JSON.parse(builtWithStr);
      } catch (e) {
        built_with = builtWithStr.split(",").map(item => item.trim()).filter(Boolean);
      }
    }

    const tags = tagsStr
      ? tagsStr.split(",").map(item => item.trim()).filter(Boolean)
      : [];

    let preview_image = preview_image_url || null;
    if (file && file.size > 0) {
      const uploadResult = await uploadImage(file, "portfolio/projects");
      if (!uploadResult.success) {
        return { success: false, error: "Image upload failed: " + uploadResult.error };
      }
      preview_image = uploadResult.url;
    }

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          title,
          slug,
          category,
          subtitle,
          role,
          year,
          duration,
          built_with,
          tags,
          accent_color,
          live_url,
          github_url,
          overview,
          preview_image,
        }
      ])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: "A project with this URL slug already exists." };
      }
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath("/admin/projects");

    return { success: true, data };
  } catch (error) {
    console.error("Create Project Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function deleteProject(id, imageUrl) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: "Unauthorized" };

    // Delete image from Cloudinary if it exists
    if (imageUrl) {
      // Extract public ID from Cloudinary URL
      // Example: https://res.cloudinary.com/.../image/upload/v1234/portfolio/projects/xyz.webp
      const parts = imageUrl.split('/');
      const filename = parts[parts.length - 1];
      const folderPath = parts.slice(parts.indexOf('upload') + 2, -1).join('/');
      const publicId = folderPath ? `${folderPath}/${filename.split('.')[0]}` : filename.split('.')[0];
      
      await deleteImage(publicId);
    }

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) throw error;

    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath("/admin/projects");

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateProject(id, formData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: "Unauthorized" };

    const title = formData.get("title");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const subtitle = formData.get("subtitle");
    const role = formData.get("role");
    const year = formData.get("year");
    const duration = formData.get("duration");
    const builtWithStr = formData.get("built_with");
    const tagsStr = formData.get("tags");
    const accent_color = formData.get("accent_color");
    const live_url = formData.get("live_url");
    const github_url = formData.get("github_url");
    const overview = formData.get("overview");
    const file = formData.get("preview_image");
    const currentImageUrl = formData.get("current_image_url");

    let built_with = [];
    if (builtWithStr) {
      try {
        built_with = JSON.parse(builtWithStr);
      } catch (e) {
        built_with = builtWithStr.split(",").map(item => item.trim()).filter(Boolean);
      }
    }

    const tags = tagsStr
      ? tagsStr.split(",").map(item => item.trim()).filter(Boolean)
      : [];

    let preview_image = currentImageUrl;
    if (file && file.size > 0) {
      const uploadResult = await uploadImage(file, "portfolio/projects");
      if (!uploadResult.success) {
        return { success: false, error: "Image upload failed: " + uploadResult.error };
      }
      preview_image = uploadResult.url;
      
      // Delete old image
      if (currentImageUrl && currentImageUrl !== preview_image) {
        try {
          const parts = currentImageUrl.split('/');
          const filename = parts[parts.length - 1];
          const folderPath = parts.slice(parts.indexOf('upload') + 2, -1).join('/');
          const publicId = folderPath ? `${folderPath}/${filename.split('.')[0]}` : filename.split('.')[0];
          await deleteImage(publicId);
        } catch (e) {
          console.error("Failed to delete old image:", e);
        }
      }
    }

    const { data, error } = await supabase
      .from("projects")
      .update({
        title, slug, category, subtitle, role, year, duration,
        built_with, tags, accent_color, live_url, github_url,
        overview, preview_image,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: "A project with this URL slug already exists." };
      }
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath("/admin/projects");
    revalidatePath(`/work/${slug}`);

    return { success: true, data };
  } catch (error) {
    console.error("Update Project Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function getProjectMetadataOptions() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { categories: [], roles: [], accentColors: [], tags: [] };

    const { data, error } = await supabase
      .from("projects")
      .select("category, role, accent_color, tags");

    if (error) {
      console.error("Error fetching metadata options:", error);
      return { categories: [], roles: [], accentColors: [], tags: [] };
    }

    // Extract unique non-empty values
    const categories = [...new Set(data.map(p => p.category).filter(Boolean))];
    const roles = [...new Set(data.map(p => p.role).filter(Boolean))];
    const accentColors = [...new Set(data.map(p => p.accent_color).filter(Boolean))];
    const tags = [...new Set(data.flatMap(p => p.tags || []).filter(Boolean))];

    return { categories, roles, accentColors, tags };
  } catch (error) {
    console.error("Get Metadata Options Error:", error);
    return { categories: [], roles: [], accentColors: [], tags: [] };
  }
}

export async function getPublicProjects(page = 1, limit = 4) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw error;
    
    return { success: true, projects: data || [] };
  } catch (error) {
    console.error("Error fetching public projects:", error);
    return { success: false, projects: [] };
  }
}
