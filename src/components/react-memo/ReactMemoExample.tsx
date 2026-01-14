import React, { useState } from "react";
import { Button } from "../ui/button";

export default function ReactMemoExample() {
  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold self-center">React.memo Example</p>
      <ParentComponent />
    </div>
  );
}

const ParentComponent = () => {
  console.log("parent rendered");
  const [count, setCount] = useState(0);

  return (
    <div className="self-center flex gap-10 pt-10">
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
      <ChildComponent />
    </div>
  );
};

/*
    child component will not re-render if every time parent component re-render
    because child component is wrapped in React.memo
*/
const ChildComponent = React.memo(() => {
  console.log("child rendered");
  return <div>Child Component</div>;
});
