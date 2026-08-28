export interface PostDataProps {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
}

export interface BlogListProps {
  posts: PostDataProps[];
}
