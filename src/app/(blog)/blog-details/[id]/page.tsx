import { blog_data } from "@/data/blog-data";
import BlogDetailsMain from "@/pages/blog/blog-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - Blog Details page",
};

// Generate static params for static export
export async function generateStaticParams() {
  return blog_data.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default function BlogDetailsPage({params}:{params:{id:string}}) {
  const blog = [...blog_data].find((blog) => blog.id === Number(params.id));
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
