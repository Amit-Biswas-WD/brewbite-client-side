import Coffees from "../../components/Coffees/Coffees";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import PriceButton from "../../components/PriceButton/PriceButton";
import RatingButton from "../../components/RatingButton/RatingButton";
import useCategory from "../../hooks/useCategory";
import { useEffect, useState } from "react";

const CoffeesDropDown = () => {
  const [featuredCoffees] = useCategory([]);
  const [price, setPrice] = useState([]);
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setPrice(featuredCoffees)
    setCategory(featuredCoffees)
    setRating(featuredCoffees)
  },[featuredCoffees])

  const handleHighPrice = () => {
    const sorted = [...featuredCoffees].sort(
      (high, low) => low.price - high.price
    );
    setPrice(sorted );
  };
  
  const handleLowPrice = () => {
    const sorted  = [...featuredCoffees].sort(
      (high, low) => high.sorted  - low.sorted 
    );
    setPrice(sorted );
  };

  return (
    <div className="bg-[#f5ebe6]">
      <div className="container mx-auto">
        <div className="flex justify-between mt-4 mb-2 stack gap-8">
          <CategoryButton />
          <PriceButton handleLowPrice={handleLowPrice} handleHighPrice={handleHighPrice} />
          <RatingButton />
          <SearchBar />
        </div>
        <Coffees price={price} />
      </div>
    </div>
  );
};

export default CoffeesDropDown;
