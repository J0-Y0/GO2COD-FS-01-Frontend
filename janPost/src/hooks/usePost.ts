import useData from "./useData";

interface User {
  id: number;
  first_name: string;
  last_name: string;
}

export interface PostData {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  published_date: Date;
  status: "draft" | "published";
  category: "aaa" | "bbbb" | "cccc" | "dddd";
  author: User;
}

export interface PostQuery {
  status?: string;
  saved?: boolean;
}

const usePost = (query: PostQuery = {}) => {
  return useData<PostData>(
    "api/posts/",
    {
      params: query, // Pass query parameters directly
    },
    [query.status, query.saved] // Use individual fields as dependencies
  );
};

export default usePost;
