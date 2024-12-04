import { useEffect, useState } from "react";
import { CanceledError } from "../service/post_service";
import api_client from "../service/api_client";
interface FetchedResponse<T>{
  count: number;
  results: T[];
}
const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    api_client.get<FetchedResponse<T>>(endpoint,{
                    signal: controller.signal,
    }).then((res) =>
    {setData(res.data.results )

      setLoading(false)}

      )
    .catch(err => {
      if (err instanceof CanceledError) return;
      setError(err.message)
            setLoading(false)

    })
    return () => controller.abort();
  }, []);
  return { data, loading ,error};
};
export default useData;
