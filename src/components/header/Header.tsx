import { Link } from "react-router";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="relative flex items-center p-2 bg-emerald-500">
      {/* Left button */}
      <Button>
        <Link to="/">Home</Link>
      </Button>

      {/* Center heading */}
      <h1 className="absolute left-1/2 -translate-x-1/2 text-lg">
        React Coding Scenarios - Using Latest React-19 Features
      </h1>
    </div>
  );
}
