import path from "path";
import fs from "fs";
import matter from "gray-matter";
import type { PostDataProps } from "@/types/post";

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
