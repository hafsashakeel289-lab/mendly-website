
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteBlog } from "./actions";

export default function DeleteBlogButton({
  blogId,
}: {
  blogId: string;
}) {
  const router = useRouter();
  const [loading, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this blog?"
    );

    if (!confirmed) return;

    setError("");
    setWarning("");

    startTransition(async () => {
      const result = await deleteBlog(blogId);

      if (result.error) {
        setError(result.error);
        return;
      }

      setWarning(result.warning || "");
      router.refresh();
    });
  }

  return (
    <div className="min-w-[100px]">
      <button
        type="button"
        onClick={handleDelete}
        disabled={loading}
        className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Deleting..." : "Delete"}
      </button>

      {error && (
        <p className="mt-2 max-w-40 text-xs text-red-600">
          {error}
        </p>
      )}

      {warning && (
        <p className="mt-2 max-w-40 text-xs text-amber-700">
          {warning}
        </p>
      )}
    </div>
  );
}
