
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function NewBlogPage() {
  const router = useRouter();

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [image, setImage] = useState<File | null>(null);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const supabase = createClient();

      // Check logged-in admin
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        throw new Error("Please login as admin first.");
      }

      const { data: admin } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", user.id)
        .maybeSingle();

      if (!admin) {
        throw new Error("You are not authorized to create blogs.");
      }

      // Create unique slug
      const slug =
        title
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") +
        "-" +
        Date.now();

      // Upload cover image
      let imageUrl: string | null = null;

      if (image) {
        const safeName = image.name.replace(
          /[^a-zA-Z0-9.-]/g,
          "-"
        );

        const filePath = `${crypto.randomUUID()}-${safeName}`;

        const { error: uploadError } = await supabase.storage
          .from("blog-images")
          .upload(filePath, image);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { data } = supabase.storage
          .from("blog-images")
          .getPublicUrl(filePath);

        imageUrl = data.publicUrl;
      }

      // Decide blog status
      const submitter = (
        e.nativeEvent as SubmitEvent
      ).submitter as HTMLButtonElement | null;

      const newStatus =
        submitter?.value === "published"
          ? "published"
          : "draft";

      // Insert new blog
      const { error: insertError } = await supabase
        .from("blogs")
        .insert({
          title,
          slug,
          description,
          content,
          category: category || null,
          cover_image: imageUrl,
          status: newStatus,
          published_at:
            newStatus === "published"
              ? publishDate
                ? new Date(
                    `${publishDate}T12:00:00`
                  ).toISOString()
                : new Date().toISOString()
              : null,
        });

      if (insertError) {
        throw new Error(insertError.message);
      }

      alert("Blog created successfully!");
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F1E9] px-5 py-12 text-[#12352A] sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin"
          className="text-sm font-semibold text-[#52675B] hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <div className="mb-8 mt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#52675B]">
            Mendly Admin Portal
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Create New Blog
          </h1>

          <p className="mt-3 text-[#52675B]">
            Add a new blog post to your website.
          </p>
        </div>

        {error && (
          <p className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-[#DCE8E3] bg-white p-6 shadow-sm sm:p-9"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold">
              Blog Title *
            </label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Short Description *
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Full Blog Content *
            </label>
            <textarea
              required
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. AI, Automation, Business"
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Publish Date
            </label>
            <input
              type="date"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-3 border-t border-[#DCE8E3] pt-6">
            <button
              type="submit"
              value="draft"
              disabled={saving}
              className="rounded-full border border-[#1F4D3A] px-6 py-3 font-semibold text-[#1F4D3A] disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save as Draft"}
            </button>

            <button
              type="submit"
              value="published"
              disabled={saving}
              className="rounded-full bg-[#F2B84B] px-6 py-3 font-bold text-[#12352A] disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save & Publish"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
