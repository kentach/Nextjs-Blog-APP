import path from "path";
import fs from "fs";
import matter from "gray-matter";
import type { PostDataProps } from "@/types/post";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "app/postData");

export function getPostsData(): PostDataProps[] {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, "");
    const fullPath = path.join(postDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      thumbnail: matterResult.data.thumbnail,
      date: matterResult.data.date,
    };
  });

  return allPostsData;
}

export async function getPostData(id: string) {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContent);

  const blogContent = await remark().use(html).process(matterResult.content);
  const blogContentHTML = blogContent.toString();

  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}
