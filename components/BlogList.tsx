import Image from "next/image";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import styles from "./blogList.module.css";
import type { BlogListProps } from "@/types/post";

export default function BlogList({ posts }: BlogListProps) {
  return (
    <section
      className={`${utilStyle.headingMd} ${utilStyle.paddingSm}`}
      aria-label={`${posts.length}件の記事`}
    >
      <h2 className={`${utilStyle.headingLg} ${utilStyle.paddingSm}`}>
        📝エンジニアのブログ
      </h2>
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.title}>
            <Image
              src={post.thumbnail}
              alt={post.thumbnail}
              width={150}
              height={200}
              className={styles.thumbnailImage}
            />
            <Link className={utilStyle.boldText} href="/">
              {post.title}
            </Link>
            <br />
            <small className={utilStyle.lightText}>{post.date}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
