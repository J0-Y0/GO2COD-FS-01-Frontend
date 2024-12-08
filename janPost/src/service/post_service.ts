import { AxiosRequestConfig } from "axios";
import api_client,{CanceledError} from "./api_client";
import create from "./http_service";
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

    export default create("api/posts/");