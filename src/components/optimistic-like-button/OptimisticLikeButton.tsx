import { useOptimistic, useState } from "react";
import { Button } from "../ui/button";

export default function OptimisticLikeButton() {
  const [likes, setLikes] = useState(10); // ✅ committed state
  const [optimisticLikes, updateLikes] = useOptimistic(
    likes, //server state or initial state
    (state, next: number) => state + next, //reducer function
  );

  async function likeAction() {
    updateLikes(1); // this will update ui instantly

    //trigger api call to add likes to DB
    try {
      //!SUCCESS SCENARIO
      // simulate API success
        await new Promise((resolve) => setTimeout(resolve, 1000));

      //! FAILURE SCENARIO
      // simulate API failure
    //   await new Promise((_, reject) =>
    //     setTimeout(() => reject("API failed"), 1000),
    //   );

      // only runs on success
      // ✅ update committed state after success
      setLikes((prev) => prev + 1);
    } catch (error) {
      console.error("Like failed:", error);
      // ❌ DO NOTHING → React auto-rolls back
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center font-bold text-lg">
        Optimistic UI Update
      </h1>
      <p>
        Optimistic UI update is a UX pattern where the UI updates immediately
        assuming a server request will succeed — instead of waiting for the API
        response.
      </p>
      <form action={likeAction}>
        <Button type="submit">Like: {optimisticLikes}</Button>
      </form>
    </div>
  );
}
