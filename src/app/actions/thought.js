"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

function calculateReadingTime(contentObj) {
  if (!contentObj || !contentObj.blocks) return "1 min read";
  let text = "";
  contentObj.blocks.forEach(block => {
    if (block.type === 'paragraph' || block.type === 'header' || block.type === 'quote') {
       text += " " + (block.data?.text || "");
    }
    if (block.type === 'list') {
       block.data?.items?.forEach(item => text += " " + item);
    }
  });
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const time = Math.max(1, Math.ceil(wordCount / 200));
  return `${time} min read`;
}

export async function createThought(formData) {
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
    const excerpt = formData.get("excerpt");
    const accent_color = formData.get("accent_color");
    const contentStr = formData.get("content");
    const contentObj = contentStr ? JSON.parse(contentStr) : null;
    const reading_time = calculateReadingTime(contentObj);

    const { data, error } = await supabase
      .from("thoughts")
      .insert([
        {
          title,
          slug,
          category,
          excerpt,
          accent_color,
          reading_time,
          content: contentObj,
        }
      ])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: "A thought with this URL slug already exists." };
      }
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/thoughts");
    revalidatePath("/admin/thoughts");

    return { success: true, data };
  } catch (error) {
    console.error("Create Thought Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function updateThought(id, formData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: "Unauthorized" };

    const title = formData.get("title");
    const slug = formData.get("slug");
    const category = formData.get("category");
    const excerpt = formData.get("excerpt");
    const accent_color = formData.get("accent_color");
    const contentStr = formData.get("content");
    const contentObj = contentStr ? JSON.parse(contentStr) : null;
    const reading_time = calculateReadingTime(contentObj);

    const { data, error } = await supabase
      .from("thoughts")
      .update({
        title,
        slug,
        category,
        excerpt,
        accent_color,
        reading_time,
        content: contentObj,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: "A thought with this URL slug already exists." };
      }
      return { success: false, error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/thoughts");
    revalidatePath("/admin/thoughts");
    revalidatePath(`/thoughts/${slug}`);

    return { success: true, data };
  } catch (error) {
    console.error("Update Thought Action Error:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function deleteThought(id) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: "Unauthorized" };

    const { error } = await supabase
      .from("thoughts")
      .delete()
      .eq("id", id);

    if (error) throw error;

    revalidatePath("/");
    revalidatePath("/thoughts");
    revalidatePath("/admin/thoughts");

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getPublicThoughts(page = 1, limit = 20) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
      .from("thoughts")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw error;
    
    return { success: true, thoughts: data || [] };
  } catch (error) {
    console.error("Error fetching public thoughts:", error);
    return { success: false, thoughts: [] };
  }
}

export async function getThoughtCategories() {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from("thoughts")
      .select("category");

    if (error) return [];

    return [...new Set(data.map(t => t.category).filter(Boolean))];
  } catch (error) {
    return [];
  }
}

// --- Engagement Actions ---

export async function incrementThoughtView(slug) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    // Call RPC function to safely increment, or fallback to simple select/update
    // Note: A true atomic increment requires a Postgres function, but for this portfolio we can just do a simple read/write or call an RPC if one exists.
    // Assuming simple read/write for now:
    const { data: thought } = await supabase.from("thoughts").select("id, view_count").eq("slug", slug).single();
    if (thought) {
      await supabase.from("thoughts").update({ view_count: (thought.view_count || 0) + 1 }).eq("id", thought.id);
    }
  } catch (error) {
    console.error("Increment view error:", error);
  }
}

export async function likeThought(slug) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const { data: thought } = await supabase.from("thoughts").select("id, like_count").eq("slug", slug).single();
    if (!thought) return { success: false };
    
    const newCount = (thought.like_count || 0) + 1;
    await supabase.from("thoughts").update({ like_count: newCount }).eq("id", thought.id);
    
    revalidatePath(`/thoughts/${slug}`);
    return { success: true, like_count: newCount };
  } catch (error) {
    console.error("Like error:", error);
    return { success: false };
  }
}

export async function getComments(thoughtId) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const { data, error } = await supabase
      .from("thought_comments")
      .select("*")
      .eq("thought_id", thoughtId)
      .eq("is_approved", true)
      .order("created_at", { ascending: true });
      
    if (error) throw error;
    return { success: true, comments: data || [] };
  } catch (error) {
    console.error("Get comments error:", error);
    return { success: false, comments: [] };
  }
}

export async function addComment(thoughtId, formData) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const name = formData.get("name");
    const content = formData.get("content");
    const slug = formData.get("slug"); // Passed in to revalidate the correct page
    
    if (!name || !content || !thoughtId) {
      return { success: false, error: "Missing required fields" };
    }
    
    const { data, error } = await supabase
      .from("thought_comments")
      .insert([
        { thought_id: thoughtId, name, content }
      ])
      .select()
      .single();
      
    if (error) throw error;
    
    
    if (slug) {
      revalidatePath(`/thoughts/${slug}`);
    }
    
    return { success: true, comment: data };
  } catch (error) {
    console.error("Add comment error:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteComment(id) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: "Unauthorized" };
    
    const { error } = await supabase
      .from("thought_comments")
      .delete()
      .eq("id", id);
      
    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error("Delete comment error:", error);
    return { success: false, error: error.message };
  }
}
