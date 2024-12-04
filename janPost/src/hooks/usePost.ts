import { useEffect, useState } from "react";
import post_service, { CanceledError, PostData } from "../service/post_service";

const usePost = () => {
    const [posts, setPosts] = useState<PostData[] | null>(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
    setLoading(true)
    const { request, cancel } = post_service.getAllPosts();
    request
        .then((res) => {
                  setLoading(false)

        console.log("res.data");
        setPosts(res.data);

      })
        .catch((err) => {
                setLoading(false)

        if (err instanceof CanceledError) {
          return;
        }
        setError(err);
      });

    return () => cancel();
  }, []);
  return {posts,loading}
}
export default usePost