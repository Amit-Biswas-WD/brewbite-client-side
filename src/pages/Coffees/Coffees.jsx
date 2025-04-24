import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryButton from "./../../components/CategoryButton/CategoryButton";
import PriceButton from "./../../components/PriceButton/PriceButton";
import RatingButton from "./../../components/RatingButton/RatingButton";

const DropdownButton = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <CategoryButton />
        <PriceButton />
        <RatingButton />
        <SearchBar/>
      </div>
    </div>
  );
};

export default DropdownButton;
