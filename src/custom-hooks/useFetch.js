import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      setLoading(true);
      setData(null);
      setError(false);
      const result = await fetch(url, { signal }).then((res) => res.json());
      if (!result.ok) {
        throw new Error("Something went wrong");
      } else {
        setData(res.data);
      }
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => controller.abort();
  }, []);

  return { data, loading, error };
}
