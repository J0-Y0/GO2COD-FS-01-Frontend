import { useEffect, useState } from "react";  
import post_service, { CanceledError, PostData } from "../service/post_service";
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
const usePost = () => {
    return useData<PostData>("posts/")
}
export default usePost