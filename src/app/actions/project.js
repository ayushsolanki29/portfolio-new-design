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
    const overview = formData.get("overview");
    const file = formData.get("preview_image");

    const built_with = builtWithStr 
      ? builtWithStr.split(",").map(item => item.trim()).filter(Boolean) 
      : [];

    let preview_image = null;
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
