import { getPostsData } from "@/app/lib/post";
import Layout from "@/components/Layout";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>; // paramsの型はPromise<{ id: string }>です
}) {
  const { id } = await params;
  const posts = getPostsData();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <h1>記事が見つかりません</h1>;
  }

  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
    </Layout>
  );
}
