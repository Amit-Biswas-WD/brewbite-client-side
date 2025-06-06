import { useState, useEffect } from "react";

const CategoryButton = ({ featuredCoffees, setCategory, selectedCategory }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const handleCategoryFilter = (category) => {
    const filteredCoffees = featuredCoffees.filter(
      (coffee) => coffee.category === category
    );
    setCategory(filteredCoffees);
    closeDropdown();
  };

  useEffect(() => {
    if (selectedCategory) {
      handleCategoryFilter(selectedCategory);
    }
  }, [selectedCategory]); 

  return (
    <div className="relative inline-block text-left mt-[68px]">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Category
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute -right-16 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {["Espresso", "Latte", "Cappuccino", "Mocha", "Cold Brew"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryFilter(cat)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryButton;
