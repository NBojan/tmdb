"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    router.push(`/search?query=${query.toLowerCase().trim()}`);
    setQuery("");
  };

  return (
    <section>
      <div className="container mx-auto">
        <form className="flex py-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search keywords..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none tracking-wide focus:border-b"
          />

          <button
            disabled={!query}
            type="submit"
            id="test"
            className="btn btn-s btn-prim disabled:bg-gray-300 disabled:border-gray-300"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
