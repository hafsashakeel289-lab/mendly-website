
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        setError(loginError.message);
        return;
      }

      const { data: admin, error: adminError } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", data.user.id)
        .maybeSingle();

      if (adminError || !admin) {
        await supabase.auth.signOut();
        setError("You are not authorized to access the admin panel.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4F1E9] px-5 py-12 text-[#12352A]">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 block text-center text-4xl font-bold">
          mendly<span className="text-[#F2B84B]">.</span>
        </Link>

        <div className="rounded-3xl border border-[#DCE8E3] bg-white p-8 shadow-xl sm:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#52675B]">
              Admin Portal
            </p>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="mt-3 text-sm text-[#52675B]">
              Sign in to manage your Mendly blog.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin email"
                className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 outline-none focus:border-[#1F4D3A]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full rounded-xl border border-[#DCE8E3] bg-[#FAF7F0] px-4 py-3 pr-20 outline-none focus:border-[#1F4D3A]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#F2B84B] px-6 py-4 font-bold text-[#12352A] transition hover:bg-[#E5AA3D] disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in to Admin"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[#52675B]">
            <Link href="/" className="font-semibold hover:underline">
              ← Back to website
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-[#52675B]">
          Mendly Admin Portal
        </p>
      </div>
    </main>
  );
}
