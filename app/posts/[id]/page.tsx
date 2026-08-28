import { getPostsData, getPostData } from "@/app/lib/post";
import Layout from "@/components/Layout";
import styles from "./post.module.css";
import utilStyles from "@/styles/utils.module.css";

// ① どのIDのページを作るか
export async function generateStaticParams() {
  const posts = getPostsData();

  return posts.map((post) => ({
    id: post.id,
  }));
}

// ② 実際にページを表示する
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostData(id);
  const postInfo = getPostsData().find((post) => post.id === id);

  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={utilStyles.headingX1}>{postInfo?.title}</h1>
        <div className={utilStyles.lightText}>{postInfo?.date}</div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: post.blogContentHTML,
          }}
        />
      </article>
    </Layout>
  );
}
