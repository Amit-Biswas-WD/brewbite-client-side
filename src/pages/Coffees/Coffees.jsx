import CategoryDropdownButton from "../../components/CategoryDropdownButton/CategoryDropdownButton";
import PriceDropdownButton from "../../components/PriceDropdownButton/PriceDropdownButton";
import RatingDropdownButton from "../../components/RatingDropdownButton/RatingDropdownButton";


const DropdownButton = () => {
  return (
    <div className="container mx-auto">
      <CategoryDropdownButton/>
      <PriceDropdownButton/>
      <RatingDropdownButton/>
    </div>
  );
};

export default DropdownButton;
