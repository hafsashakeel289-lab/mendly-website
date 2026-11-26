
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();

  const blogId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [status, setStatus] = useState("draft");

  const [image, setImage] = useState<File | null>(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    async function loadBlog() {
      if (!blogId || blogId === "undefined") {
        alert("Invalid blog ID. Please open Edit from the dashboard.");
        router.push("/admin");
        return;
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/admin/login");
        return;
      }

      const { data: admin } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", user.id)
        .maybeSingle();

      if (!admin) {
        router.push("/admin/login");
        return;
      }

      const { data: blog, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", blogId)
        .maybeSingle();

      if (error || !blog) {
        alert(error?.message || "Blog not found.");
        router.push("/admin");
        return;
      }

      setTitle(blog.title || "");
      setDescription(blog.description || "");
      setContent(blog.content || "");
      setCategory(blog.category || "");
      setStatus(blog.status || "draft");
      setCurrentImage(blog.cover_image || "");

      if (blog.published_at) {
        setPublishDate(blog.published_at.split("T")[0]);
      }

      setLoading(false);
    }

    loadBlog();
  }, [blogId, router]);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
    newStatus: string
  ) {
    event.preventDefault();

    if (!blogId || blogId === "undefined") {
      alert("Invalid blog ID.");
      return;
    }

    setSaving(true);

    let imageUrl = currentImage;

    if (image) {
      const fileName = `${Date.now()}-${image.name.replace(/\s+/g, "-")}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, image);

      if (uploadError) {
        alert(uploadError.message);
        setSaving(false);
        return;
      }

      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("blogs")
      .update({
        title,
        description,
        content,
        category,
        cover_image: imageUrl,
        status: newStatus,
        published_at: publishDate
          ? new Date(`${publishDate}T12:00:00`).toISOString()
          : null,
      })
      .eq("id", blogId);

    if (error) {
      alert(error.message);
      setSaving(false);
      return;
    }

    alert("Blog updated successfully!");
    router.push("/admin");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8F6] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/admin"
          className="text-sm font-bold text-[#1F4D3A]"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-[#1F4D3A]">
          Edit Blog
        </h1>

        <p className="mt-2 text-gray-500">
          Update your existing blog post.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block font-semibold">Blog Title *</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Short Description *
            </label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border p-3"
              rows={3}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Full Blog Content *
            </label>
            <textarea
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-xl border p-3"
              rows={10}
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Current Cover Image
            </label>

            {currentImage ? (
              <img
                src={currentImage}
                alt="Current cover"
                className="mb-3 h-48 w-full rounded-xl object-cover"
              />
            ) : (
              <p className="text-sm text-gray-500">
                No cover image uploaded.
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Replace Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Publish Date</label>
            <input
              type="date"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">Current Status</label>
            <p className="rounded-xl border bg-white p-3">{status}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled={saving}
              onClick={(e) =>
                handleSubmit(
                  {
                    preventDefault: () => {},
                  } as React.FormEvent<HTMLFormElement>,
                  "draft"
                )
              }
              className="rounded-full border border-[#1F4D3A] px-6 py-3 font-bold text-[#1F4D3A] disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save as Draft"}
            </button>

            <button
              type="button"
              disabled={saving}
              onClick={(e) =>
                handleSubmit(
                  {
                    preventDefault: () => {},
                  } as React.FormEvent<HTMLFormElement>,
                  "published"
                )
              }
              className="rounded-full bg-[#1F4D3A] px-6 py-3 font-bold text-white disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save & Publish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
