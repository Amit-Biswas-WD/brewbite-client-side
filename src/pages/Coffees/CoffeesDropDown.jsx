import Coffees from "../../components/Coffees/Coffees";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import PriceButton from "../../components/PriceButton/PriceButton";
import RatingButton from "../../components/RatingButton/RatingButton";
import { useEffect, useState } from "react";
import useCoffees from "./../../hooks/useCoffees";
import { useParams } from "react-router-dom";

const CoffeesDropDown = () => {
  const [featuredCoffees] = useCoffees([]);
  const [value, setValue] = useState([]);
  const categories = ["Espresso", "Latte", "Cappuccino", "Mocha", "Cold Brew"];
  const { category } = useParams();

  useEffect(() => {
    if (category && categories.includes(category)) {
      const filtered = featuredCoffees.filter(
        (coffee) => coffee.category === category
      );
      setValue(filtered);
    } else {
      setValue(featuredCoffees);
    }
  }, [featuredCoffees, category]);

  return (
    <div className="bg-[#f5ebe6]">
      <div className="container mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto mt-6 gap-8">
          <CategoryButton
            featuredCoffees={featuredCoffees}
            setCategory={setValue}
            selectedCategory={category}
          />
          <PriceButton featuredCoffees={featuredCoffees} setPrice={setValue} />
          <RatingButton
            featuredCoffees={featuredCoffees}
            setRating={setValue}
          />
          <SearchBar
            featuredCoffees={featuredCoffees}
            setSearchBar={setValue}
          />
        </div>
        <Coffees value={value} />
      </div>
    </div>
  );
};

export default CoffeesDropDown;
