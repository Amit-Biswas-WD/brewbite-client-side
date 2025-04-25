import Coffees from "../../components/Coffees/Coffees";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import PriceButton from "../../components/PriceButton/PriceButton";
import RatingButton from "../../components/RatingButton/RatingButton";

const CoffeesDropDown = () => {
  return (
    <div className="bg-[#f5ebe6]">
      <div className="container mx-auto">
        <div className="flex justify-between mt-4 mb-2 stack gap-8">
          <CategoryButton />
          <PriceButton />
          <RatingButton />
          <SearchBar />
        </div>
        <Coffees />
      </div>
    </div>
  );
};

export default CoffeesDropDown;
