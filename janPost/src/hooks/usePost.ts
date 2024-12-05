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
export interface Params {
  status?: string;
  saved?: boolean;
}
const usePost = (params?:Params) => {
  // return useData<PostData>("posts/", { ...params }, [params,])
    return useData<PostData>("posts/", { params }, [JSON.stringify(params)]);

}
export default usePost