import Coffees from "../../components/Coffees/Coffees";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import PriceButton from "../../components/PriceButton/PriceButton";
import RatingButton from "../../components/RatingButton/RatingButton";
import { useEffect, useState } from "react";
import useCoffees from "./../../hooks/useCoffees";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";

const CoffeesDropDown = () => {
  const [featuredCoffees] = useCoffees([]);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const categories = ["Espresso", "Latte", "Cappuccino", "Mocha", "Cold Brew"];

  useEffect(() => {
    if (featuredCoffees.length === 0) return;

    if (category && categories.includes(category)) {
      const filtered = featuredCoffees.filter(
        (coffee) => coffee.category === category
      );
      setValue(filtered);
    } else {
      setValue(featuredCoffees); // default: all coffee
    }

    setLoading(false); // Loading off after data set
  }, [featuredCoffees, category]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <HashLoader color="#7b4f29" size={80} speedMultiplier={1.5} />
      </div>
    );
  }

  return (
    <div className="bg-[#f5ebe6]">
      <div className="container mx-auto">
        <div className="flex justify-between mt-4 mb-2 stack gap-8">
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
