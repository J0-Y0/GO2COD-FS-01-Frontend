import { AxiosRequestConfig } from "axios";
import api_client,{CanceledError} from "./api_client";
import create from "./http_service";
import { User } from "./auth_service";
export {CanceledError}


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
export interface FetchedResponse {
  count?: number;
  results?: PostData[];
}



export default create("api/posts/");