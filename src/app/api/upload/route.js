import { NextResponse } from "next/server";
import { uploadImage } from "@/utils/cloudinary";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Verify user is authenticated to prevent unauthorized uploads
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ success: 0, error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("image"); // Editor.js Image plugin sends the file as "image" by default

    if (!file) {
      return NextResponse.json({ success: 0, error: "No image file provided" }, { status: 400 });
    }

    // Upload to Cloudinary using our helper
    const uploadResult = await uploadImage(file, "portfolio/editor");

    if (!uploadResult.success) {
      return NextResponse.json({ success: 0, error: uploadResult.error }, { status: 500 });
    }

    // Return format exactly as required by Editor.js Image Plugin
    return NextResponse.json({
      success: 1,
      file: {
        url: uploadResult.url,
      }
    });
  } catch (error) {
    console.error("Editor API Upload Error:", error);
    return NextResponse.json({ success: 0, error: error.message }, { status: 500 });
  }
}
