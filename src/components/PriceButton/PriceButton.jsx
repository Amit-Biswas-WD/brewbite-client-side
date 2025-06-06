import { useState } from "react";

const PriceButton = ({ featuredCoffees, setPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const handleHighPrice = () => {
    const sorted = [...featuredCoffees].sort((a, b) => b.price - a.price);
    setPrice(sorted);
    handleOptionClick();
  };

  const handleLowPrice = () => {
    const sorted = [...featuredCoffees].sort((a, b) => a.price - b.price);
    setPrice(sorted);
    handleOptionClick();
  };

  return (
    <div className="relative inline-block text-left mt-[68px]">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Price
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
            <button
              onClick={handleHighPrice}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              High to Low
            </button>
            <button
              onClick={handleLowPrice}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Low to High
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceButton;
