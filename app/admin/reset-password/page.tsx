
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess("Password updated successfully! Redirecting to login...");

      setTimeout(async () => {
        await supabase.auth.signOut();
        router.replace("/admin/login");
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4F1E9] px-5 py-12 text-[#12352A]">
      <div className="w-full max-w-md rounded-3xl border border-[#DCE8E3] bg-white p-8 shadow-xl sm:p-10">
        <h1 className="text-center text-3xl font-bold">Create New Password</h1>
        <p className="mb-8 mt-3 text-center text-sm text-[#52675B]">
          Enter your new admin password below.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold">
              New Password
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none focus:border-[#1F4D3A]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none focus:border-[#1F4D3A]"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {success && (
            <p className="rounded-xl bg-green-50 p-3 text-sm text-green-700">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#F2B84B] px-6 py-4 font-bold text-[#12352A] hover:bg-[#E5AA3D] disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </main>
  );
}
