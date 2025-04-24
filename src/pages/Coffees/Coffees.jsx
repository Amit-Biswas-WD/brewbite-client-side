import CategoryDropdownButton from "../../components/CategoryDropdownButton/CategoryDropdownButton";
import PriceDropdownButton from "../../components/PriceDropdownButton/PriceDropdownButton";


const DropdownButton = () => {
  return (
    <div className="container mx-auto">
      <CategoryDropdownButton/>
      <PriceDropdownButton/>
    </div>
  );
};

export default DropdownButton;
