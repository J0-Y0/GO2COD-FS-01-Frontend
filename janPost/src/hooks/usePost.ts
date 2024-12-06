import { Save } from "@mui/icons-material";
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
  status: string|null;
  saved: boolean|null;
}
const usePost = (query:PostQuery) => {
  return useData<PostData>("posts/", {
    params: {
      status: query?.status,
      saved:query?.saved
    }
  },
  [JSON.stringify(query)]);

}
export default usePost