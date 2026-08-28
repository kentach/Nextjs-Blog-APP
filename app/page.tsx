import Header from "@/components/Header";
import BlogList from "@/components/BlogList";
import { getPostsData } from "./lib/post";


export default function Home() {
  const allPostsData = getPostsData();

  return (
    <div>
      <Header />
      <BlogList posts={allPostsData} />
    </div>
  );
}
