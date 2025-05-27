import BlogCard from "@/components/blog-components/BlogCard";
import { getBlogsData } from "@/services/public";
import { TBlog } from "@/types/types";

export const metadata = {
  title: "Portfolio | Blogs",
  description: "Explore my blogs",
};

export default async function BlogsPage() {
  const {data:blogs} = await getBlogsData();

  return (
    <div className="min-h-screen container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog:TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
