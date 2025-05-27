import BlogDetailsCard from "@/components/blog-components/BlogDetailsCard";
import { getSingleBlogData } from "@/services/public";

//generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const { data: blog } = await getSingleBlogData(blogId);
  return {
    title: blog?.title,
    description: blog?.description,
  };
};

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const { data: blog } = await getSingleBlogData(blogId);

  return (
    <div className="min-h-screen container mx-auto py-16 px-4">
      <BlogDetailsCard blog={blog} />
    </div>
  );
}
