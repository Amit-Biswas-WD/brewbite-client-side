import { useState, useEffect } from "react";

const SearchBar = ({ featuredCoffees, setSearchBar }) => {
  const [query, setQuery] = useState("");

  const filteredCoffees = featuredCoffees.filter((coffee) =>
    coffee.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSearchBar(filteredCoffees);
  }, [query, featuredCoffees, setSearchBar]);

  return (
    <div className="flex flex-col items-center px-4 mt-[68px]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search coffee by name..."
        className="w-full max-w-md px-4 py-2 rounded-full bg-[#ddbeab] text-black placeholder-black border border-black focus:outline-none focus:ring-2 shadow-md"
      />

      <ul className="mt-4 w-full max-w-md bg-gray-400 rounded-lg shadow-lg text-left">
        {query && filteredCoffees.length > 0
          ? filteredCoffees.map((coffee, index) => (
              <li
                key={index}
                className="px-4 hidden py-2 border-b border-gray-200 hover:bg-[#ddbeab] hover:text-black transition"
              >
                {coffee.name}
              </li>
            ))
          : query && (
              <li className="px-4 py-2 text-red-500">No results found</li>
            )}
      </ul>
    </div>
  );
};

export default SearchBar;
