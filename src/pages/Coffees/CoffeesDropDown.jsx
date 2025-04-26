import Coffees from "../../components/Coffees/Coffees";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import PriceButton from "../../components/PriceButton/PriceButton";
import RatingButton from "../../components/RatingButton/RatingButton";
import { useEffect, useState } from "react";
import useCoffees from './../../hooks/useCoffees';

const CoffeesDropDown = () => {
  const [featuredCoffees] = useCoffees([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(featuredCoffees);
  }, [featuredCoffees]);

  return (
    <div className="bg-[#f5ebe6]">
      <div className="container mx-auto">
        <div className="flex justify-between mt-4 mb-2 stack gap-8">
          <CategoryButton featuredCoffees={featuredCoffees} setCategory={setValue} />
          <PriceButton featuredCoffees={featuredCoffees} setPrice={setValue} />
          <RatingButton featuredCoffees={featuredCoffees} setRating={setValue} />
          <SearchBar featuredCoffees={featuredCoffees} setSearchBar={setValue}/>
        </div>
        <Coffees value={value} />
      </div>
    </div>
  );
};

export default CoffeesDropDown;
