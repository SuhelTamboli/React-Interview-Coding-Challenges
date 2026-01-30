import { useMemo, useState } from "react";
import { Button } from "../ui/button";

function slowSum(numbers: number[]) {
  console.log("Calculating...");
  return numbers.reduce((acc, n) => acc + n, 0);
}

export default function UseMemoExample() {
  const [count, setCount] = useState(0);

  // ✅ Recalculates ONLY when `numbers` changes
  const total = useMemo(() => {
    const numbers = [10, 20, 30, 40, 50];

    return slowSum(numbers);
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center font-bold text-lg">
        useMemo Example - to memoize expensive calculation
      </h1>
      <p>
        Button click causes re-render but does NOT re-run slowSum function
        because it is wrapped in useMemo
      </p>
      <p>Total: {total}</p>

      <Button className="cursor-pointer w-24" onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </Button>
    </div>
  );
}
