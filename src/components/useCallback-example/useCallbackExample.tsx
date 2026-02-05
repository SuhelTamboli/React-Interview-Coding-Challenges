import { useCallback, useState, memo } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface SearchButtonProps {
  onSearch: () => void;
}

// memo prevents unnecessary re-renders
const SearchButton = memo(({ onSearch }: SearchButtonProps) => {
  console.log("SearchButton re-rendered");
  return (
    <Button className="cursor-pointer w-24" onClick={onSearch}>
      Search
    </Button>
  );
});

export default function UseCallbackSearchExample() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  // ✅ Function is recreated ONLY when `query` changes
  const handleSearch = useCallback(() => {
    console.log("Searching for:", query);
    // fetch(`/api/search?q=${query}`)
  }, [query]); // 👈 important dependency

  return (
    <div className="flex flex-col gap-1.5">
      <h1 className="flex justify-center font-bold text-lg">
        useCallback Example - to memoize function to be passed to child
        component
      </h1>
      <p>
        SerachButton re-renders ONLY when handleSearch changes : Function is
        recreated ONLY when `query` changes because it is added in dependency
        array
      </p>
      <Input
        className="flex self-center m-2 w-100"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* SerachButton re-renders ONLY when handleSearch changes */}
      <SearchButton onSearch={handleSearch} />
      <p>
        Button click causes re-render but does NOT recreate handleSearch
        function because it is wrapped in useCallback hence does not re-render
        SearchButton child component
      </p>
      <Button
        className="cursor-pointer w-24"
        onClick={() => setCount(count + 1)}
      >
        Re-render ({count})
      </Button>
    </div>
  );
}
