import { useEffect, useRef, useState } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

/**
 * Features
        Debounced API call
        Loading state
        Keyboard navigation (↑ ↓ Enter)
        Click selection
        Close on outside click
 */

export default function SearchAutoComplete() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔹 Debounce search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      fetchResults(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // 🔹 Fetch API
  const fetchResults = async (value: string) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/users/search?q=${value}`);
      const data = await res.json();
      setResults(data.users || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % results.length);
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      selectItem(results[activeIndex]);
    }
  };

  // 🔹 Select item
  const selectItem = (item: User) => {
    setQuery(item.firstName + " " + item.lastName);
    setResults([]);
    setActiveIndex(-1);
  };

  // 🔹 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-80">
      <div className="flex flex-col">
        <h1 className="flex justify-center font-bold text-lg">
          Search AutoComplete
        </h1>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search users..."
          className="w-full border px-3 py-2 rounded"
        />

        {loading && <p className="text-sm mt-1">Loading...</p>}

        {results.length > 0 && (
          <ul className="absolute top-16 w-full bg-white border mt-1 rounded shadow">
            {results.map((item, index) => (
              <li
                key={item.id}
                className={`px-3 py-2 cursor-pointer text-black ${
                  index === activeIndex ? "bg-gray-200" : ""
                }`}
                onMouseDown={() => selectItem(item)}
              >
                {item.firstName + " " + item.lastName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
