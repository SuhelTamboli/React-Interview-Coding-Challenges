import { use } from "react";
import { parallelRequestPromise } from "../api/parallel-requests";

export default function ParallelRequest() {
  const data = use(parallelRequestPromise);
  console.log(data);
  return (
    <div className="flex flex-col gap-5 items-center p-5">
      <h1 className="font-bold text-lg">Parallel Requests</h1>
    </div>
  );
}
