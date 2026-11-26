
import { createClient } from "@/utils/supabase/server";

export const instant = false;

export default async function SupabaseTestPage() {
  const supabase = await createClient();

  const { error } = await supabase
    .from("blogs")
    .select("id")
    .limit(1);

  return (
    <main className="min-h-screen bg-[#F4F1E9] p-10 text-[#12352A]">
      <h1 className="text-3xl font-bold">
        Supabase Connection Test
      </h1>

      {error ? (
        <p className="mt-4 text-red-600">
          Supabase error: {error.message}
        </p>
      ) : (
        <p className="mt-4 text-green-700">
          Supabase connected successfully!
        </p>
      )}
    </main>
  );
}

