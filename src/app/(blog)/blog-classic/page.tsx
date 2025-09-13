import BlogClassicMain from "@/pages/blog/blog-classic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liko - Blog Classic page",
};

const BlogClassicPage = () => {
  return (
    <BlogClassicMain/>
  );
};

export default BlogClassicPage;
