import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const controller = new AbortController();

  const fetchData = async (newUrl = url) => {
    try {
      setLoading(true);
      setError(false);
      const result = await axios.get(newUrl, { signal: controller.signal });
      if (!result.data) {
        throw new Error("Something went wrong");
      } else {
        setData(result.data);
      }
    } catch (err) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => controller.abort();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
