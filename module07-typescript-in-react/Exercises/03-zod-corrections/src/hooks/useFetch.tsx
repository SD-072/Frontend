import { useEffect, useState } from 'react';
import z from 'zod';

const useFetch = <T extends z.ZodType>(url: string, schema: T) => {
  const [data, setData] = useState<z.infer<typeof schema>>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw Error('HTTP error!');
        }
        const data = await res.json();
        const { data: dt, error, success } = schema.safeParse(data);
        if (!success) {
          throw new Error(z.prettifyError(error));
        }
        setData(dt);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== 'AbortError') setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url, schema]);

  return { data, error, loading };
};

export default useFetch;
