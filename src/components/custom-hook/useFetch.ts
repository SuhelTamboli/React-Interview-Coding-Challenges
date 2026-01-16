import { useEffect, useState } from "react";

export default function useFetch({ url }: { url: string }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      //printing time to check api response time
      console.time("testingApi");
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        //printing time to check api response time
        console.timeEnd("testingApi");
        setData(data.products);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        //simulate timeout of 2 sec for data fetching
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
}
