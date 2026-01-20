import { useEffect } from "react";

export default function CancelRequest() {
  useEffect(() => {
    const controller = new AbortController();

    const getPosts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/posts", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        console.log(data);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted on component unmount");
        } else {
          console.error(err);
        }
      }
    };

    getPosts();

    // ✅ cleanup on unmount
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="p-4">
      <p className="font-bold text-lg text-center">
        Cancel API Request on Component Unmount
      </p>
    </div>
  );
}
