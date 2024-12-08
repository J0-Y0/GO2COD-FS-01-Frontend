import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import api_client from "../service/api_client";
import { CanceledError } from "../service/post_service";

interface FetchedResponse<T> {
  count?: number;
  results?: T[];
}

interface UseDataResult<T> {
  data: T | null;
  loading: boolean;
  error:  T| null;
  fetchData: () => void; // For GET requests
  postData: (body: any) => void; // For POST requests
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = []
): UseDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<T | null>(null);

  // Method for GET requests
  const fetchData = () => {
    setLoading(true);
    const controller = new AbortController();

    const config: AxiosRequestConfig = {
      ...requestConfig,
      signal: controller.signal,
    };

    api_client
      .get<FetchedResponse<T>>(endpoint, config)
      .then((res) => {
        setData(res.data.results || []);
        setError(null);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  };

  // Method for POST requests
  const postData = (body: any) => {
    setLoading(true);
    const controller = new AbortController();

    const config: AxiosRequestConfig = {
      ...requestConfig,
      signal: controller.signal,
    
    };

    api_client
      .post<T>(endpoint,body, config)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.response.data);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  };

  // Automatically fetch data on component mount or dependency change
  useEffect(() => {
    fetchData();
  }, deps);

  return { data, loading, error, fetchData, postData };
};

export default useData;
