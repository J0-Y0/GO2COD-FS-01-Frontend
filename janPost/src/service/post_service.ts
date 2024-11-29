import api_client,{CanceledError} from "./api_client";
export {CanceledError}
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
class PostService{
    getAllPosts() {
        const controller = new AbortController();
        const request =   api_client
            .get<PostData[]>("posts/", {
            signal: controller.signal,
            })
        return {request,cancel:()=>controller.abort()}
    }
}
export default new PostService()