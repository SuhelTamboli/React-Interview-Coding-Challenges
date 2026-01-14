import { useRef, useState } from "react";

const THROTTLE_DELAY = 2000;

export default function ThrottleRepeatedClick() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submitThrottleRef = useRef<boolean>(false);

  const handleSubmit = async () => {
    //if request is already submitted then return
    if (submitThrottleRef.current) return;
    submitThrottleRef.current = true;
    console.log("form submitted");

    try {
      //fulfill request in 1000 ms
      await new Promise<string>((resolve) =>
        setTimeout(() => {
          resolve("login success !!!");
          console.log("login success");
        }, 2000)
      );
    } finally {
      //make it false when request Delay is completed
      //user can only send another request after THROTTLE_DELAY=2000 ms
      setTimeout(() => {
        submitThrottleRef.current = false;
      }, THROTTLE_DELAY);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="self-center text-lg font-bold">Throttle Repeated Clicks</p>
      <form
        className="flex flex-col gap-2 w-lg items-center border-2 p-5"
        action={handleSubmit}
      >
        <input
          placeholder="type email"
          className="border rounded w-1/2"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="type password"
          className="border rounded w-1/2"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer border rounded p-2 w-30 bg-black text-white font-bold"
        >
          {"Login"}
        </button>
      </form>
    </div>
  );
}
