import BlogList from "@/components/BlogList";
import { getPostsData } from "./lib/post";
import Layout from "@/components/Layout";

export default function Home() {
  const allPostsData = getPostsData();

  return (
    <Layout home={true}>
      <BlogList posts={allPostsData} />
    </Layout>
  );
}
