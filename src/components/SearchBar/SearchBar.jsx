import React, { useState } from "react";

const namesList = [
  "Latte",
  "Espresso",
  "Cappuccino",
  "Macchiato",
  "Mocha",
  "Americano",
  "Flat White",
  "Cold Brew",
  "Nitro Coffee",
  "Affogato",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const filteredNames = namesList.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

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
        {query &&
          (filteredNames.length > 0 ? (
            filteredNames.map((name, index) => (
              <li
                key={index}
                className="px-4 py-2 border-b border-gray-200 hover:bg-[#ddbeab] hover:text-black transition"
              >
                {name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-red-500">No results found</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
