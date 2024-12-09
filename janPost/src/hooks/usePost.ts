import { useEffect, useState } from "react";
import post_service, { CanceledError, FetchedResponse, PostData } from "../service/post_service";
export interface PostQueryParam{
  status?: string | null;
  saved?: string | null;

}

const usePost = (props?:PostQueryParam) => {
const [data, setData] = useState<PostData[]>();
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

   useEffect(() => {
    setLoading(true);
    const { request, cancel } = post_service.getAll<FetchedResponse>({
      params: { ...props},
    });
    request
      .then((res) => {
        setData(res.data.results);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // return cancel();
  }, [props?.saved,props?.status]);

   return {loading,error,data}
 }
 
 export default usePost
 
























// import useData from "./useData";

// interface User {
//   id: number;
//   first_name: string;
//   last_name: string;
// }

// export interface PostData {
//   id: number;
//   title: string;
//   image: string;
//   excerpt: string;
//   content: string;
//   published_date: Date;
//   status: "draft" | "published";
//   category: "aaa" | "bbbb" | "cccc" | "dddd";
//   author: User;
// }

// export interface PostQuery {
//   status?: string;
//   saved?: boolean;
// }

// const usePost = (query: PostQuery = {}) => {
//   return useData<PostData>(
//     "api/posts/",
//     {
//       params: query, // Pass query parameters directly
//     },
//     [query.status, query.saved] // Use individual fields as dependencies
//   );
// };

// export default usePost;
