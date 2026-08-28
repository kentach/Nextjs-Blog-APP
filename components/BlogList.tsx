import Image from "next/image";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import styles from "./blogList.module.css";
import type { BlogListProps } from "@/types/post";

export default function BlogList({ posts }: BlogListProps) {
  return (
    <>
      <h2 className={`${utilStyle.headingLg} ${utilStyle.paddingSm}`}>
        📝エンジニアのブログ
      </h2>
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.title}>
            <Link href={`/posts/${post.id}`}>
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={150}
                height={200}
                className={styles.thumbnailImage}
              />

              <h3 className={utilStyle.boldText}>{post.title}</h3>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{post.date}</small>
          </article>
        ))}
      </div>
    </>
  );
}
