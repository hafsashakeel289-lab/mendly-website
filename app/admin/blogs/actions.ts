
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteBlog(blogId: string) {
  const supabase = await createClient();

  // Verify logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Please login first." };
  }

  // Verify admin permission
  const { data: admin } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (!admin) {
    return { error: "Unauthorized access." };
  }

  // Get blog and cover image
  const { data: blog, error: fetchError } = await supabase
    .from("blogs")
    .select("id, cover_image")
    .eq("id", blogId)
    .maybeSingle();

  if (fetchError || !blog) {
    return { error: "Blog not found." };
  }

  // Delete blog from database
  const { data: deleted, error: deleteError } = await supabase
    .from("blogs")
    .delete()
    .eq("id", blogId)
    .select("id")
    .maybeSingle();

  if (deleteError || !deleted) {
    return {
      error: deleteError?.message || "Could not delete blog. Check database permissions.",
    };
  }

  // Remove cover image from Supabase Storage
  let warning = "";

  if (blog.cover_image) {
    try {
      const marker = "/storage/v1/object/public/blog-images/";
      const imageUrl = new URL(blog.cover_image);
      const markerIndex = imageUrl.pathname.indexOf(marker);

      if (markerIndex !== -1) {
        const filePath = decodeURIComponent(
          imageUrl.pathname.slice(markerIndex + marker.length)
        );

        const { error: storageError } = await supabase.storage
          .from("blog-images")
          .remove([filePath]);

        if (storageError) {
          warning = "Blog deleted, but its cover image could not be removed.";
        }
      }
    } catch {
      warning = "Blog deleted, but its cover image cleanup failed.";
    }
  }

  revalidatePath("/admin");
  revalidatePath("/blog");

  return { success: true, warning };
}
