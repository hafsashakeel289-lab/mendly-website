
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { connection } from "next/server";
import DeleteBlogButton from "./blogs/DeleteBlogButton";
export const instant = false;

export default async function AdminDashboard() {
    await connection();

    const supabase = await createClient();

    // Check login
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/admin/login");
    }

    // Check admin permission
    const { data: admin } = await supabase
        .from("admin_users")
        .select("id")
        .eq("id", user.id)
        .maybeSingle();

    if (!admin) {
        await supabase.auth.signOut();
        redirect("/admin/login");
    }

    // Fetch all blog posts
    const { data: blogs, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

    const posts = blogs || [];
    console.log("BLOG POSTS:", JSON.stringify(posts, null, 2));
    const published = posts.filter((post) => post.status === "published");
    const drafts = posts.filter((post) => post.status === "draft");

    return (
        <main className="min-h-screen bg-[#F4F1E9] px-5 py-12 text-[#12352A] sm:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#52675B]">
                            Mendly Admin Portal
                        </p>
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                        <p className="mt-2 text-[#52675B]">
                            Welcome! Manage your blog content here.
                        </p>
                    </div>

                    <Link
                        href="/admin/blogs/new"
                        className="rounded-full bg-[#F2B84B] px-6 py-3.5 font-bold text-[#12352A] transition hover:bg-[#E5AA3D]"
                    >
                        + Create New Blog
                    </Link>
                </div>

                {/* Statistics */}
                <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-3xl border border-[#DCE8E3] bg-white p-7">
                        <p className="text-sm font-medium text-[#52675B]">
                            Total Blog Posts
                        </p>
                        <h2 className="mt-3 text-4xl font-bold">{posts.length}</h2>
                    </div>

                    <div className="rounded-3xl border border-[#DCE8E3] bg-white p-7">
                        <p className="text-sm font-medium text-[#52675B]">
                            Published Blogs
                        </p>
                        <h2 className="mt-3 text-4xl font-bold text-[#1F4D3A]">
                            {published.length}
                        </h2>
                    </div>

                    <div className="rounded-3xl border border-[#DCE8E3] bg-white p-7">
                        <p className="text-sm font-medium text-[#52675B]">
                            Draft Blogs
                        </p>
                        <h2 className="mt-3 text-4xl font-bold text-[#B78324]">
                            {drafts.length}
                        </h2>
                    </div>
                </div>

                {/* Blog Table */}
                <section className="overflow-hidden rounded-3xl border border-[#DCE8E3] bg-white">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DCE8E3] p-6">
                        <div>
                            <h2 className="text-xl font-bold">All Blog Posts</h2>
                            <p className="mt-1 text-sm text-[#52675B]">
                                Manage your published blogs and drafts.
                            </p>
                        </div>
                        <span className="rounded-full bg-[#E8D5A9] px-4 py-2 text-sm font-semibold">
                            {posts.length} Posts
                        </span>
                    </div>

                    {error ? (
                        <p className="p-8 text-red-600">
                            Could not load blogs: {error.message}
                        </p>
                    ) : posts.length === 0 ? (
                        <div className="px-6 py-16 text-center">
                            <h3 className="text-xl font-bold">No blogs yet</h3>
                            <p className="mt-2 text-sm text-[#52675B]">
                                Create your first blog post to get started.
                            </p>
                            <Link
                                href="/admin/blogs/new"
                                className="mt-6 inline-block rounded-full bg-[#F2B84B] px-6 py-3 font-bold hover:bg-[#E5AA3D]"
                            >
                                Create Your First Blog
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#FAF7F0] text-[#52675B]">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Blog Title</th>
                                        <th className="px-6 py-4 font-semibold">Category</th>
                                        <th className="px-6 py-4 font-semibold">Status</th>
                                        <th className="px-6 py-4 font-semibold">Date</th>
                                        <th className="px-6 py-4 font-semibold">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {posts.map((post) => (
                                        <tr key={post.id} className="border-t border-[#E8E8E2]">
                                            <td className="px-6 py-5 font-semibold">
                                                {post.title}
                                            </td>
                                            <td className="px-6 py-5 text-[#52675B]">
                                                {post.category || "Uncategorized"}
                                            </td>
                                            <td className="px-6 py-5">
                                                <span
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${post.status === "published"
                                                        ? "bg-[#DCE8E3] text-[#1F4D3A]"
                                                        : "bg-[#F8E9C8] text-[#8A641D]"
                                                        }`}
                                                >
                                                    {post.status}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-5 text-[#52675B]">
                                                {new Date(post.created_at).toLocaleDateString("en-GB")}
                                            </td>

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <Link
                                                        href={`/admin/blogs/${post.id}/edit`}
                                                        className="rounded-full border border-[#1F4D3A] px-4 py-2 text-xs font-bold text-[#1F4D3A] transition hover:bg-[#DCE8E3]"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <DeleteBlogButton blogId={post.id} />
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

                <p className="mt-8 text-center text-sm text-[#52675B]">
                    Mendly Admin Portal · Content Management
                </p>
            </div>
        </main>
    );
}
